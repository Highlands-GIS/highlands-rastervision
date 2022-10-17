FROM quay.io/azavea/raster-vision:pytorch-0.13

# Uncomment if you add any non-RV requirements.
# COPY ./rastervision_highlands-rastervision/requirements.txt /opt/src/requirements.txt
# RUN pip install $(grep -ivE "rastervision_*" requirements.txt)

COPY ./rastervision_highlands-rastervision/ /opt/src/rastervision_highlands-rastervision/

ENV PYTHONPATH=/opt/src/rastervision_highlands-rastervision/:$PYTHONPATH

CMD ["bash"]
