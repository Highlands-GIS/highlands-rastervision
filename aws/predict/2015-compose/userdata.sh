#!/bin/bash

# install docker deps
sudo yum update -y
sudo yum install -y docker
sudo systemctl start docker

# docker-compose
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s | tr '[:upper:]' '[:lower:]')-$(uname -m) -o /usr/bin/docker-compose && sudo chmod 755 /usr/bin/docker-compose && docker-compose --version

cd /mnt || exit

aws s3 cp s3://njhighlands/geobia/impervious/src/docker-compose-1.yml .
aws s3 cp s3://njhighlands/geobia/impervious/src ./src --recursive
aws s3 cp s3://njhighlands/geobia/impervious/envs ./envs --recursive

sudo /usr/bin/docker-compose -f docker-compose-1.yml --compatibility up

# shutdown the ec2 on completion
sudo shutdown now