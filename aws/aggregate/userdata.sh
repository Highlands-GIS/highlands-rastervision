#!/bin/bash
set -e

# install docker deps
sudo yum update -y
sudo yum install -y docker
sudo systemctl start docker

cd /home/ec2-user || exit
sudo mkdir "data"

ROOT_PATH=s3://njhighlands/geobia/impervious/2020
PG_USER='postgres'
PG_PASS='password'

sudo docker run --name postgis -d -p 5432:5432 -e POSTGRES_USER=$PG_USER -e POSTGRES_PASSWORD=$PG_PASS postgis/postgis:15-3.3
sleep 5

PG_CONTAINER_IP=$(sudo docker inspect --format '{{ .NetworkSettings.IPAddress }}' postgis)

aws s3 ls "${ROOT_PATH}/predicted/" | while read file; do
  items=($file)
  target=${items[1]}
  echo $target
  aws s3 cp "${ROOT_PATH}/predicted/${target}0-polygons.json" ./data/polygons.geojson
  sudo docker run -v "$(pwd)/data:/data" --name gdal --rm osgeo/gdal:alpine-small-latest ogr2ogr -progress -f "PostgreSQL" PG:"host=${PG_CONTAINER_IP} dbname=postgres user=$PG_USER password=$PG_PASS" "/data/polygons.geojson" -nln predicted -append
done

sudo docker run -v "$(pwd)/data:/data" --name gdal --rm osgeo/gdal:alpine-small-latest ogr2ogr -progress -f "GPKG" /data/predicted.gpkg PG:"host=${PG_CONTAINER_IP} dbname=postgres user=$PG_USER password=$PG_PASS" -nln predicted -sql "SELECT * FROM predicted"

aws s3 cp "$(pwd)/data/predicted.gpkg" "${ROOT_PATH}/predicted.gpkg"

# shutdown the ec2 on completion
sudo shutdown now
