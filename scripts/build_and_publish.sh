#!/bin/bash

# builds the docker image and pushes to the ECR repo.

set -e

AWS_REGION="us-east-1"
IMAGE_NAME="highlands_rv_2020_ir"
ACCOUNT_ID=$(aws sts get-caller-identity --output text --query 'Account')

docker build -t ${IMAGE_NAME} -f Dockerfile .

aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin "${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"

docker tag ${IMAGE_NAME} \
  ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/$IMAGE_NAME
docker push \
  ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/$IMAGE_NAME
