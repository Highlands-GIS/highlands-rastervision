# Highlands Rastervision
4 band semantic segmentation using [RasterVision](https://rastervision.io/) ([pdf](https://buildmedia.readthedocs.org/media/pdf/raster-vision/latest/raster-vision.pdf)). 

The below processes are deployed to AWS EC2 Spot Instances and data written to an S3 bucket. The [EC2 Spot Instance Advisor](https://aws.amazon.com/ec2/spot/instance-advisor/) should be used to verify selected instance has a low Frequency of Interruption.

## Getting Started
### 0. Label the Images
1. Create labels and validation scenes from target sets of imagery. For each image, the label file must match the name of the grid id. 
2. You can optionally identify an Area of Interest for each image with the naming convention <grid_id>_aoi.geojson. 
3. Once labels have been created for the image, save to the ./labels/<year> directory with the following naming convention: *<GRID-ID>_labels.geojson*. 
4. The grid id should then be added into the associated env file's `TRAIN_IDS` or `VAL_IDS` sections. 

### 1. Train the Model
Once the labels have been created, train the model using the following command(s) for running in AWS:
```shell
# edit the shell script if desired in aws/train/<year>/userdata.sh, then encode the script as base64:
openssl base64 -A -in ./aws/train/2020/userdata.sh -out ./aws/train/2020/userdata.txt
openssl base64 -A -in ./aws/train/2015/userdata.sh -out ./aws/train/2015/userdata.txt
openssl base64 -A -in ./aws/train/2012/userdata.sh -out ./aws/train/2012/userdata.txt
openssl base64 -A -in ./aws/train/2007/userdata.sh -out ./aws/train/2007/userdata.txt
openssl base64 -A -in ./aws/train/2002/userdata.sh -out ./aws/train/2002/userdata.txt

# copy the contents of the output text file to the associated spec.json file's "userdata" property, then launch an EC2 instance to do the training
aws ec2 request-spot-instances --spot-price "0.8" --instance-count 1 --type "one-time" --launch-specification file://aws/train/2020/spec.json
aws ec2 request-spot-instances --spot-price "0.8" --instance-count 10 --type "one-time" --launch-specification file://aws/train/2015/spec.json
aws ec2 request-spot-instances --spot-price "0.8" --instance-count 1 --type "one-time" --launch-specification file://aws/train/2012/spec.json
aws ec2 request-spot-instances --spot-price "0.8" --instance-count 1 --type "one-time" --launch-specification file://aws/train/2007/spec.json
aws ec2 request-spot-instances --spot-price "0.8" --instance-count 1 --type "one-time" --launch-specification file://aws/train/2002/spec.json

# connect to the EC2 and monitor the process with 
sudo tail -f /var/log/cloud-init-output.log
```
You can continue to train a model for additional `epochs` by increasing this value in the **src/impervious.py* file if desired.
To retrain from scratch, delete the contents of the **train** directory and re-run the above command. 

### 2. Run Predictions

Predictions are run in AWS on EC2 Spot instances with the output vectorized results written to a s3 bucket. 
```shell
# edit the shell script if desired in aws/predict/<year>/userdata.sh, then encode the script as base64:
openssl base64 -A -in ./aws/predict/2020/userdata.sh -out ./aws/predict/2020/userdata.txt
openssl base64 -A -in ./aws/predict/2015/userdata.sh -out ./aws/predict/2015/userdata.txt
openssl base64 -A -in ./aws/predict/2012/userdata.sh -out ./aws/predict/2012/userdata.txt
openssl base64 -A -in ./aws/predict/2007/userdata.sh -out ./aws/predict/2007/userdata.txt
openssl base64 -A -in ./aws/predict/2002/userdata.sh -out ./aws/predict/2002/userdata.txt

# copy the contents of the output text file to the associated spec.json file's "userdata" property, then launch an EC2 instance(s) to do the prediction 
# notice this instance count is set higher, this can be scaled to whatever number is desirable for quick processing. 
aws ec2 request-spot-instances --spot-price "0.8" --instance-count 10 --type "one-time" --launch-specification file://aws/predict/2020/spec.json
aws ec2 request-spot-instances --spot-price "0.8" --instance-count 10 --type "one-time" --launch-specification file://aws/predict/2015/spec.json
aws ec2 request-spot-instances --spot-price "0.8" --instance-count 10 --type "one-time" --launch-specification file://aws/predict/2012/spec.json
aws ec2 request-spot-instances --spot-price "0.8" --instance-count 10 --type "one-time" --launch-specification file://aws/predict/2007/spec.json
aws ec2 request-spot-instances --spot-price "0.8" --instance-count 20 --type "one-time" --launch-specification file://aws/predict/2002/spec.json

# connect to the EC2 and monitor the process with 
sudo tail -f /var/log/cloud-init-output.log
```

Check prediction progress by monitoring the object count in the target s3 path. There should be **1651** objects for each year when completed. 
```shell
aws s3 ls s3://njhighlands/geobia/impervious/2020/predicted/ | wc -l 
aws s3 ls s3://njhighlands/geobia/impervious/2015/predicted/ | wc -l 
aws s3 ls s3://njhighlands/geobia/impervious/2012/predicted/ | wc -l 
aws s3 ls s3://njhighlands/geobia/impervious/2007/predicted/ | wc -l 
aws s3 ls s3://njhighlands/geobia/impervious/2002/predicted/ | wc -l 
```

### 3. Aggregate Predictions into a Single Geopackage
This process should take roughly 30-60 minutes.
   ```shell
# encode the userdata scripts
openssl base64 -A -in ./aws/aggregate/2020/userdata.sh -out ./aws/aggregate/2020/userdata.txt
openssl base64 -A -in ./aws/aggregate/2015/userdata.sh -out ./aws/aggregate/2015/userdata.txt
openssl base64 -A -in ./aws/aggregate/2012/userdata.sh -out ./aws/aggregate/2012/userdata.txt
openssl base64 -A -in ./aws/aggregate/2007/userdata.sh -out ./aws/aggregate/2007/userdata.txt
openssl base64 -A -in ./aws/aggregate/2002/userdata.sh -out ./aws/aggregate/2002/userdata.txt

# copy the contents of the output text file to the associated spec.json file's "userdata" property, then launch an EC2 instance(s) to do the aggregation 
aws ec2 request-spot-instances --spot-price "0.8" --instance-count 1 --type "one-time" --launch-specification file://aws/aggregate/2020/spec.json
aws ec2 request-spot-instances --spot-price "0.8" --instance-count 1 --type "one-time" --launch-specification file://aws/aggregate/2015/spec.json
aws ec2 request-spot-instances --spot-price "0.8" --instance-count 1 --type "one-time" --launch-specification file://aws/aggregate/2012/spec.json
aws ec2 request-spot-instances --spot-price "0.8" --instance-count 1 --type "one-time" --launch-specification file://aws/aggregate/2007/spec.json
aws ec2 request-spot-instances --spot-price "0.8" --instance-count 1 --type "one-time" --launch-specification file://aws/aggregate/2002/spec.json
```

After the above process is finished, you can copy the final compiled output (gzipped) to your local directory
   ```shell
   aws s3 cp s3://njhighlands/geobia/impervious/2020/predicted.gpkg.gz predicted-2020.gpkg.gz
   aws s3 cp s3://njhighlands/geobia/impervious/2015/predicted.gpkg.gz predicted-2015.gpkg.gz
   aws s3 cp s3://njhighlands/geobia/impervious/2012/predicted.gpkg.gz predicted-2012.gpkg.gz
   aws s3 cp s3://njhighlands/geobia/impervious/2007/predicted.gpkg.gz predicted-2007.gpkg.gz
   aws s3 cp s3://njhighlands/geobia/impervious/2002/predicted.gpkg.gz predicted-2002.gpkg.gz
   ```
   
### 4. Create Vector Tiles (Optional)
```shell
# encode the userdata scripts
openssl base64 -A -in ./aws/mvt/2020/userdata.sh -out ./aws/mvt/2020/userdata.txt
openssl base64 -A -in ./aws/mvt/2015/userdata.sh -out ./aws/mvt/2015/userdata.txt
openssl base64 -A -in ./aws/mvt/2012/userdata.sh -out ./aws/mvt/2012/userdata.txt
openssl base64 -A -in ./aws/mvt/2007/userdata.sh -out ./aws/mvt/2007/userdata.txt
openssl base64 -A -in ./aws/mvt/2002/userdata.sh -out ./aws/mvt/2002/userdata.txt

# copy the contents of the output text file to the associated spec.json file's "userdata" property, then launch an EC2 instance(s) to do the aggregation 
aws ec2 request-spot-instances --spot-price "0.4" --instance-count 1 --type "one-time" --launch-specification file://aws/mvt/2020/spec.json
aws ec2 request-spot-instances --spot-price "0.4" --instance-count 1 --type "one-time" --launch-specification file://aws/mvt/2015/spec.json
aws ec2 request-spot-instances --spot-price "0.4" --instance-count 1 --type "one-time" --launch-specification file://aws/mvt/2012/spec.json
aws ec2 request-spot-instances --spot-price "0.4" --instance-count 1 --type "one-time" --launch-specification file://aws/mvt/2007/spec.json
aws ec2 request-spot-instances --spot-price "0.4" --instance-count 1 --type "one-time" --launch-specification file://aws/mvt/2002/spec.json
```

## Special Cases 
### 2002 imagery
The 2002 imagery is missing a spatial reference. This pre-processing step assigns the projection before running the training and prediction steps. 
```shell
# encode the userdata scripts
openssl base64 -A -in ./aws/project/2002/userdata.sh -out ./aws/project/2002/userdata.txt

# copy the contents of the output text file to the associated spec.json file's "userdata" property, then launch an EC2 instance(s) to do the projection assignment
aws ec2 request-spot-instances --spot-price "0.8" --instance-count 1 --type "one-time" --launch-specification file://aws/project/2002/spec.json

# confirm 1651 images are present 
aws s3 ls s3://njhighlands/imagery/2002/cog/ | wc -l 
```