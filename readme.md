
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
    --env-file .env \
    -v ${PWD}/train:/opt/data/train \
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
This is a convenient way to run the prediction process since all targeted imagery is stored in an S3 bucket, eliminating the need to copy it locally. 
Once all grids have been processed, a separate process is ran to aggregate all grids into a single geopackage. 
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
   If the process fails, the EC2 instance will automatically terminate without incurring additional cost

5. Check prediction progress by monitoring the object count in the target s3 path. There should be **1651** objects when completed. 
    ```shell
    aws s3 ls s3://njhighlands/geobia/impervious/2020/predicted/ | wc -l 
    ```

6. Aggregate all results to a single geopackage
   ```shell
    aws ec2 request-spot-instances --spot-price "0.8" --instance-count 1 --type "one-time" --launch-specification file://aws/aggregate/spec.json
   ```
   This process should take roughly 20-30 minutes.

7. After the above process is finished, you can copy the final compiled output (gzipped) to your local directory
   ```shell
   aws s3 cp s3://njhighlands/geobia/impervious/2020/predicted.gpkg.gz predicted.gpkg.gz
   ```
   

labels:
G4D7
E6B11 -----x
I3D16 -----x
D7B4
G3C3
E7A5
E7A2
D7B12
G2B12
J3A8
J3A9 -----X

validation:
H7B5 -----X
I6A6 -----X

problems:
K4A1
K4A5
