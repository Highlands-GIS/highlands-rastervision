#!/bin/bash

# install docker deps
sudo yum update -y
sudo yum install -y docker
sudo systemctl start docker

cd /home/ec2-user || exit

aws s3 cp s3://njhighlands/geobia/impervious/src ./src --recursive
aws s3 cp s3://njhighlands/geobia/impervious/envs ./envs --recursive

#  use the --runtime=nvidia flag for p-series (GPU enabled) ec2 instance
docker run \
    --ipc=host \
    -e NUM_CORES=8 \
    --env-file "${PWD}/envs/2015.env" \
    -v "${PWD}/src:/opt/src/rastervision_plugin" \
    quay.io/azavea/raster-vision:pytorch-0.20 rastervision run local /opt/src/rastervision_plugin/impervious.py --splits 8

# shutdown the ec2 on completion
sudo shutdown now