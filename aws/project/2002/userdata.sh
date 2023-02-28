#!/bin/bash
set -e

BASE_URL=s3://njogis-imagery/2002/cog
TARGET_URL=s3://njhighlands/imagery/2002/cog

sudo yum update -y
sudo yum install -y docker
sudo systemctl start docker

cd /mnt || exit

aws s3 cp s3://njhighlands/geobia/impervious/src ./src --recursive

while IFS="" read -r filename || [ -n "$filename" ]
do
  echo "${filename}"
  aws s3 cp "${BASE_URL}/${filename}.tif" "${filename}.tif"
  sudo docker run -v "$(pwd)":/data --name GDAL --rm osgeo/gdal:alpine-small-latest gdal_translate -a_srs EPSG:6527 "/data/${filename}.tif" "/data/${filename}_updated.tif"
  aws s3 cp "${filename}_updated.tif" "${TARGET_URL}/${filename}.tif"
  sudo rm "${filename}_updated.tif"
  sudo rm "${filename}.tif"
done < src/manifest.csv

# shutdown the ec2 on completion
sudo shutdown now
