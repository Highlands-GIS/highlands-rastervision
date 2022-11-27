#!/bin/bash

aws s3 sync ./src s3://njhighlands/geobia/impervious/2020/src --exclude '*.pyc'