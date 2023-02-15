#!/bin/bash

# install docker deps
sudo yum update -y
sudo yum install -y docker
sudo systemctl start docker

cd /mnt || exit

aws s3 cp s3://njhighlands/geobia/impervious/src ./src --recursive

sudo docker run \
  --runtime=nvidia \
  --ipc=host \
  -e IMAGE_URI='s3://njogis-imagery/2015/cog' \
  -e S3BUCKET='njhighlands' \
  -e IMAGE_URI='s3://njogis-imagery/2015/cog' \
  -e PREDICT_URI='s3://njhighlands/geobia/impervious/2015/predicted' \
  -e MODEL_URI='s3://njhighlands/geobia/impervious/2015/train/bundle/model-bundle.zip' \
  -e MANIFEST='manifest.csv' \
  -v "${PWD}/src:/opt/src/rastervision_plugin" \
  quay.io/azavea/raster-vision:pytorch-0.20 rastervision run local /opt/src/rastervision_plugin/predict_impervious.py

# shutdown the ec2 on completion
sudo shutdown now