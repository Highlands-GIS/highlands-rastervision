import os
from dotenv import dotenv_values
from pathlib import Path
import boto3
import logging
import tqdm
from botocore.exceptions import ClientError
from botocore import UNSIGNED, client

session = boto3.Session(region_name='us-west-2', )
s3 = session.resource('s3', config=client.Config(signature_version=UNSIGNED))

configs = [dotenv_values("envs/2020.env"), dotenv_values("envs/2015.env"), dotenv_values("envs/2012.env"),
           dotenv_values("envs/2007.env"), dotenv_values("envs/2002.env")]

local_path = 'cog'

logging.basicConfig(filename='sync_local_cogs.log',
                    format='%(message)s',
                    datefmt='%H:%M:%S',
                    filemode='w',
                    level=logging.INFO)

def make_dl_dir(year):
    Path(f"{local_path}/{year}").mkdir(parents=True, exist_ok=True)


def sync_cogs(config):
    """
    Downloads imagery to local directory from NJGIN s3 bucket
    """
    year = config['YEAR']
    make_dl_dir(year)
    imgs = list(set(config['TRAIN_IDS'].split(",") + config['VAL_IDS'].split(",")))
    prefix = f'{year}/cog'
    bucket_name = 'njogis-imagery'

    for grid_id in tqdm.tqdm(imgs, total=len(imgs), desc=f"Syncing {prefix}"):
        file_name = f"{grid_id}.tif"
        file_path = os.path.join(local_path, year, file_name)
        s3_key = f'{prefix}/{file_name}'
        if os.path.exists(file_path):
            try:
                response = s3.meta.client.head_object(Bucket=bucket_name, Key=s3_key)
                s3_size = response['ContentLength']
                local_size = os.path.getsize(file_path)
                if int(s3_size) != int(local_size):
                    logging.info(f"{prefix}/{file_name} - Partially downloaded, fixing local file.")
                    with open(file_path, 'wb') as f:
                        s3.meta.client.download_fileobj(Fileobj=f, Bucket=bucket_name, Key=s3_key)
                else:
                    logging.info(f"{prefix}/{file_name} - Exists")
            except ClientError:
                logging.info(f"{prefix}/{file_name} - Does not Exist, downloading")
                with open(file_path, 'wb') as f:
                    s3.meta.client.download_fileobj(Fileobj=f, Bucket=bucket_name, Key=s3_key)
                pass
        else:
            logging.info(f"{prefix}/{file_name} - Does not Exist, downloading")
            with open(file_path, 'wb') as f:
                s3.meta.client.download_fileobj(Fileobj=f, Bucket=bucket_name, Key=s3_key)


if __name__ == "__main__":
    for c in configs:
        sync_cogs(c)
