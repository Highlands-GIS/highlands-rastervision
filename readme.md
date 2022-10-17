
```sh
docker run --shm-size 8G --rm -it \
     -v ${PWD}/code:/opt/src/code  \
     -v ${PWD}/output:/opt/data/output \
     -v ${PWD}/input:/opt/data/input \
     -v ${PWD}/processed:/opt/data/processed \
     quay.io/azavea/raster-vision:pytorch-0.13 /bin/bash
```

```shell
rastervision run local code/highlands_4band.py
```