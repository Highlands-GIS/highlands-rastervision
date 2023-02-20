aws s3 sync ./src s3://njhighlands/geobia/impervious/src --exclude '*.pyc' --exclude '*.qmd'
aws s3 sync ./envs s3://njhighlands/geobia/impervious/envs
aws s3 sync ./labels/2020 s3://njhighlands/geobia/impervious/2020/labels
aws s3 sync ./labels/2015 s3://njhighlands/geobia/impervious/2015/labels
aws s3 sync ./labels/2012 s3://njhighlands/geobia/impervious/2012/labels
aws s3 sync ./labels/2007 s3://njhighlands/geobia/impervious/2007/labels
aws s3 sync ./labels/2002 s3://njhighlands/geobia/impervious/2002/labels