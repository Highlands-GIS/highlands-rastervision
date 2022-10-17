
# Highlands Rastervision
4 band semantic segmentation using [RasterVision](https://rastervision.io/) 

## To Create the Model
Start a docker cotnainer with the below volumes mapped
```sh
docker run --shm-size 8G --rm -it \
     -v ${PWD}/code:/opt/src/code  \
     -v ${PWD}/output:/opt/data/output \
     -v ${PWD}/input:/opt/data/input \
     -v ${PWD}/processed:/opt/data/processed \
     quay.io/azavea/raster-vision:pytorch-0.13 /bin/bash
```

Create the model
```shell
rastervision run local code/highlands_4band.py
```

Once the model is created, it can be ran against other images to predict. 