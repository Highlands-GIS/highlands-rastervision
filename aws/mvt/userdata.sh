#!/bin/bash
#set -e

# install docker deps
sudo yum update -y
sudo yum install -y docker
sudo yum install -y git gcc sqlite-devel.x86_64
sudo yum groupinstall -y "Development Tools"
sudo systemctl start docker

# Install tippecanoe
cd /tmp || exit
git clone https://github.com/mapbox/tippecanoe.git
cd tippecanoe || exit
make -j
sudo make install

ROOT_PATH=s3://njhighlands/geobia/impervious/2020

cd /home/ec2-user || exit

sudo mkdir "data"

sudo chown ec2-user:ec2-user "$(pwd)/data"

aws s3 cp "${ROOT_PATH}/predicted.gpkg.gz" "$(pwd)/data/predicted.gpkg.gz"

sudo zcat "$(pwd)/data/predicted.gpkg.gz" > "$(pwd)/data/predicted.gpkg"

sudo docker run -v "$(pwd)/data:/data" --name gdal --rm osgeo/gdal:alpine-small-latest ogr2ogr -progress -f "GeoJSONSeq" /data/predicted.geojson /data/predicted.gpkg -skipfailures

tippecanoe -o "$(pwd)/data/predicted.mbtiles" --force -zg --drop-densest-as-needed --extend-zooms-if-still-dropping --read-parallel -l impervious "$(pwd)/data/predicted.geojson"

# expand to tile directory
tile-join --force -pk -pC -n impervious -e "$(pwd)/data/tiles"  "$(pwd)/data/predicted.mbtiles"
tile-join --force -pk -pC -n NAD -e ./tiles tiles.mbtiles
# copy result to s3
aws s3 sync "$(pwd)/data/tiles" "${ROOT_PATH}/tiles" --no-progress --only-show-errors

# shutdown the ec2 on completion
sudo shutdown now
