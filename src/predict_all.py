import os
import csv
import tempfile
import boto3

import rastervision.pipeline  # unused but need for bug in RV
from rastervision.core.predictor import Predictor

s3_client = boto3.client('s3')

image_dir = os.getenv('IMAGE_URI')
predict_dir = os.getenv('PREDICT_URI')
bundle_dir = os.getenv('MODEL_URI')
s3_bucket = os.getenv('S3BUCKET')
manifest = os.getenv('MANIFEST')

print('image_dir', image_dir)
print('predict_dir', predict_dir)
print('bundle_dir', bundle_dir)
print('s3_bucket', s3_bucket)
print('manifest', manifest)

with tempfile.TemporaryDirectory() as tmp_dir:
    predictor = Predictor(bundle_dir, tmp_dir)
    with open(f'/opt/src/rastervision_plugin/{manifest}') as file:
        reader = csv.reader(file, delimiter=",")
        for row in reader:
            try:
                file_name = f"{row[0]}.tif"
                test_img_path = os.path.join(image_dir, file_name)
                predict_img_path = os.path.join(predict_dir, row[0])
                s3_key = predict_img_path.split(s3_bucket + "/")[1]
                s3_response = s3_client.list_objects_v2(Bucket=s3_bucket, Prefix=f"{s3_key}/0-polygons.json")
                if s3_response['KeyCount'] != 1:
                    # https://docs.rastervision.io/en/0.20/api_reference/_generated/rastervision.core.predictor.Predictor.html#rastervision.core.predictor.Predictor.predict
                    predictor.predict([test_img_path], predict_img_path, vector_label_uri=predict_img_path)
                else:
                    print(f'skipping {s3_key}, already exists')
            except Exception as e:
                print('Error', e)
