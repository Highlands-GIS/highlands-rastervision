#!/bin/bash

# install docker deps
sudo yum update -y
sudo yum install -y docker
sudo systemctl start docker

cd /home/ec2-user || exit

aws s3 cp s3://njhighlands/geobia/impervious/2020/src ./src --recursive

sudo docker run \
  --ipc=host \
  -e S3BUCKET='njhighlands' \
  -e IMAGE_URI='s3://njogis-imagery/2020/cog' \
  -e PREDICT_URI='s3://njhighlands/geobia/impervious/2020/predicted' \
  -e MODEL_URI='s3://njhighlands/geobia/impervious/2020/train/bundle/model-bundle.zip' \
  -e MANIFEST='manifest_1200.csv' \
  -v "${PWD}/src:/opt/src/rastervision_plugin" \
  quay.io/azavea/raster-vision:pytorch-0.13 python /opt/src/rastervision_plugin/bulk_predict.py

# shutdown the ec2 on completion
sudo shutdown now