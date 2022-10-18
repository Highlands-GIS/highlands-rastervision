
# Highlands Rastervision
4 band semantic segmentation using [RasterVision](https://rastervision.io/) 

## Getiing started
### Prepare data
Download the sample images to run training and predictions against
```shell
sh download_images.sh   
```

### Create the Model
Start a docker cotnainer with the below volumes mapped
```sh
docker run --shm-size 8G --rm -it \
     -v ${PWD}/code:/opt/src/code  \
     -v ${PWD}/output:/opt/data/output \
     -v ${PWD}/input:/opt/data/input \
     -v ${PWD}/processed:/opt/data/processed \
     quay.io/azavea/raster-vision:pytorch-0.13 /bin/bash
```

Then run
```shell
rastervision run local code/highlands_4band.py
```

### Run prediction
Once the model is created, it can predict other images
```shell
rastervision predict /opt/data/output/bundle/model-bundle.zip /opt/data/input/G6A15.tif /opt/data/output/predict/G6A15.tif
```
