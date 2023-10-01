#!/bin/bash

IMG_YEAR=2002
MANIFEST='manifest-diff.csv'
BUCKET='njhighlands'
RV_VERSION='pytorch-0.20'

# install docker deps
sudo yum update -y
sudo yum install -y docker
sudo systemctl start docker

cd /mnt || exit

aws s3 cp s3://${BUCKET}/geobia/impervious/src ./src --recursive

sudo docker run \
  --ipc=host \
  -e S3BUCKET=${BUCKET} \
  -e IMAGE_URI="s3://njhighlands/imagery/${IMG_YEAR}/cog" \
  -e PREDICT_URI="s3://${BUCKET}/geobia/impervious/${IMG_YEAR}/predicted" \
  -e MODEL_URI="s3://${BUCKET}/geobia/impervious/${IMG_YEAR}/train/bundle/model-bundle.zip" \
  -e MANIFEST=${MANIFEST} \
  -v "${PWD}/src:/opt/src/rastervision_plugin" \
  -v "${PWD}/tmp:/opt/data/tmp" \
  quay.io/azavea/raster-vision:${RV_VERSION} rastervision run local /opt/src/rastervision_plugin/predict_impervious.py

# shutdown the ec2 on completion
sudo shutdown now
