#!/bin/bash

IMG_YEAR=2007

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

ROOT_PATH=s3://njhighlands/geobia/impervious/${IMG_YEAR}

cd /home/ec2-user || exit

sudo mkdir "data"

sudo chown ec2-user:ec2-user "$(pwd)/data"

aws s3 cp "${ROOT_PATH}/predicted.gpkg.gz" "$(pwd)/data/predicted.gpkg.gz"

sudo zcat "$(pwd)/data/predicted.gpkg.gz" > "$(pwd)/data/predicted.gpkg"

sudo docker run -v "$(pwd)/data:/data" --name gdal --rm osgeo/gdal:alpine-small-latest ogr2ogr -progress -f "GeoJSONSeq" /data/predicted.geojson /data/predicted.gpkg -skipfailures

tippecanoe -o "$(pwd)/data/predicted.mbtiles" --force -zg --drop-densest-as-needed --extend-zooms-if-still-dropping --read-parallel -l impervious "$(pwd)/data/predicted.geojson"

aws s3 cp "$(pwd)/data/predicted.mbtiles" "${ROOT_PATH}/predicted.mbtiles"

# expand to tile directory
tile-join --force -pk -n impervious -e "$(pwd)/data/tiles"  "$(pwd)/data/predicted.mbtiles"

# copy result to s3
aws s3 sync "$(pwd)/data/tiles" "${ROOT_PATH}/tiles" --no-progress --only-show-errors --content-encoding gzip

# shutdown the ec2 on completion
sudo shutdown now
