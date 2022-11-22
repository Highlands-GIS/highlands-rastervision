
# Highlands Rastervision
4 band semantic segmentation using [RasterVision](https://rastervision.io/) ([pdf](https://buildmedia.readthedocs.org/media/pdf/raster-vision/latest/raster-vision.pdf)). 

## Getting Started
### Prepare data
1. Create labels and validation scenes from target sets of imagery. To obtain a new image for digitizing labels, see the `scripts/download_sample_images.sh` script. 

2. Once labels have been created for the image, save to the ./labels directory with the following naming convention: *<GRID-ID>_labels.geojson*. 

3. The grid id should then be added into the `TRAIN_IDS` or `VAL_IDS` list in **impervious_2020.py**.

### Train the Model
Once the labels have been created, train the model using the following docker command:
```shell
docker run -t -i --rm \
    -v ${PWD}/output:/opt/data/output \
    -v ${PWD}/input:/opt/data/input \
    -v "${PWD}/src:/opt/src/rastervision_plugin" \
    quay.io/azavea/raster-vision:pytorch-0.13 rastervision run local /opt/src/rastervision_plugin/impervious_2020.py
```
to retrain from scratch, delete the contents of the /output directory and re-run the above command. 

### Run prediction (local)

```shell
# singleton
docker run -t -i --rm \
    -v ${PWD}/output:/opt/data/output \
    -v ${PWD}/input:/opt/data/input \
    -v "${PWD}/src:/opt/src/rastervision_plugin" \
    quay.io/azavea/raster-vision:pytorch-0.13 \
    rastervision predict /opt/data/output/bundle/model-bundle.zip /opt/data/input/G6A15.tif /opt/data/output/predict/G6A15
```

```shell
# bulk prediction based off the `manifest.csv` 
docker run -t -i --rm \
  --env-file .env \
  -e IMAGE_URI='s3://njogis-imagery/2020/cog' \
  -e S3BUCKET='njhighlands' \
  -e IMAGE_URI='s3://njogis-imagery/2020/cog' \
  -e PREDICT_URI='s3://njhighlands/geobia/impervious/2020/predicted' \
  -e MODEL_URI='s3://njhighlands/geobia/impervious/2020/bundle/model-bundle.zip' \
  -v "${PWD}/src:/opt/src/rastervision_plugin" \
  quay.io/azavea/raster-vision:pytorch-0.13 python /opt/src/rastervision_plugin/bulk_predict.py
```


### Run prediction (AWS)
The AWS prediction is run on EC2 Spot instances and output prediction are written to an s3 bucket. 
Once all grids have been processed, a seperate process is ran to aggregate all grids into a single geopackage. 
See the /aws directory for how this is setup.  

1. copy the required files to aws
    ```shell
    sh scripts/sync_src_to_s3.sh
    sh scripts/sync_model_to_s3.sh
    ```
2. Encode the userdata scripts (one time only, then again on any changes)
    ```shell
    openssl base64 -A -in ./aws/predict/userdata.sh -out ./aws/predict/userdata.txt
    ```
3. Request the EC2 spot
    ```shell
    aws ec2 request-spot-instances --spot-price "0.8" --instance-count 1 --type "one-time" --launch-specification file://aws/predict/spec.json
    ```
4. You can then SSH into the ec2 and verify the process is running correctly with the below command. 
    ```shell
    sudo tail -f /var/log/cloud-init-output.log
    ```
   If the process fails, the EC2 instance will automatically terminate. 

5. Check prediction progress by monitoring the object count in the target s3 path. There should be about **1900** objects when completed. 
    ```shell
    aws s3 ls s3://njhighlands/geobia/impervious/2020/predicted/ | wc -l 
    ```
