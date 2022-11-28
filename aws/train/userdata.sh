#!/bin/bash

# install docker deps
sudo yum update -y
sudo yum install -y docker
sudo systemctl start docker

cd /home/ec2-user || exit

aws s3 cp s3://njhighlands/geobia/impervious/2020/src ./src --recursive

#  use the --runtime=nvidia flag for p-series (GPU enabled) ec2 instance
sudo docker run \
    --ipc=host \
    -e NUM_CORES=8 \
    -v "${PWD}/src:/opt/src/rastervision_plugin" \
    quay.io/azavea/raster-vision:pytorch-0.13 python -m rastervision.pipeline.cli run inprocess /opt/src/rastervision_plugin/impervious_2020.py

## shutdown the ec2 on completion
#sudo shutdown now