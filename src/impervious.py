# flake8: noqa
from os.path import join, basename
from os import getenv

from rastervision.pipeline.file_system.file_system import NotReadableError
from rastervision_pipeline.rastervision.pipeline.file_system.utils import file_to_str

from rastervision.core.data.vector_source import (GeoJSONVectorSourceConfig)

from rastervision.core.data.vector_transformer import ClassInferenceTransformerConfig

from rastervision.pytorch_backend.examples.utils import (save_image_crop)

from rastervision.core.rv_pipeline import (
    SceneConfig, DatasetConfig, SemanticSegmentationChipOptions,
    SemanticSegmentationWindowMethod, SemanticSegmentationConfig)

from rastervision.core.data import (
    ClassConfig, RasterioSourceConfig,
    SemanticSegmentationLabelSourceConfig,
    SemanticSegmentationLabelStoreConfig, PolygonVectorOutputConfig,
    RGBClassTransformerConfig, RasterizedSourceConfig, RasterizerConfig)

from rastervision.pytorch_backend import (PyTorchSemanticSegmentationConfig,
                                          SemanticSegmentationModelConfig)

from rastervision.pytorch_learner import (
    Backbone, SolverConfig, SemanticSegmentationImageDataConfig,
    SemanticSegmentationGeoDataConfig, GeoDataWindowConfig,
    GeoDataWindowMethod, PlotOptions)

IMG_YEAR = getenv('YEAR')
TRAIN_IDS = getenv('TRAIN_IDS').split(',')
VAL_IDS = getenv('VAL_IDS').split(',')

NUM_WORKERS = 8

NUM_EPOCHS = 15

CHIP_SIZE = 250

CLASS_NAMES = [
    'impervious', 'background'
]

CLASS_COLORS = [
    'orange', 'black'
]


if not IMG_YEAR:
    raise Exception('No image year provided.')
print('IMG_YEAR', IMG_YEAR)
print('TRAIN_IDS', TRAIN_IDS)
print('VAL_IDS', VAL_IDS)

def get_config(runner,
               raw_uri: str = f's3://njogis-imagery/{IMG_YEAR}/cog',
               raw_label_uri: str = f's3://njhighlands/geobia/impervious/{IMG_YEAR}/labels',
               processed_uri: str = f's3://njhighlands/geobia/impervious/{IMG_YEAR}/processed',
               root_uri: str = f's3://njhighlands/geobia/impervious/{IMG_YEAR}/train',
               test: bool = False):
# def get_config(runner,
#                raw_uri: str = f'/opt/data/cog/{IMG_YEAR}',
#                raw_label_uri: str = f'/opt/data/labels/{IMG_YEAR}',
#                processed_uri: str = f'/opt/data/processed/{IMG_YEAR}',
#                root_uri: str = f'/opt/data/train/{IMG_YEAR}',
#                test: bool = False):
    """Generate the pipeline config for this task. This function will be called
    by RV, with arguments from the command line, when this example is run.

    Args:
        runner (Runner): Runner for the pipeline. Will be provided by RV.
        raw_uri (str): Directory where the raw data resides
        processed_uri (str): Directory for storing processed data.
                             E.g. crops for testing.
        raw_label_uri (str): directory where the lables are.
        root_uri (str): Directory where all the output will be written.
        test (bool, optional): If True, does the following simplifications:
            (1) Uses only the first 2 scenes
            (2) Uses only a 600x600 crop of the scenes
            (3) Enables test mode in the learner, which makes it use the
                test_batch_sz and test_num_epochs, among other things.
            Defaults to False.

    Returns:
        SemanticSegmentationConfig: A pipeline config.
    """

    train_ids = TRAIN_IDS
    val_ids = VAL_IDS

    if test:
        train_ids = train_ids[:2]
        val_ids = val_ids[:2]

    # 2002 is not 4 band IR imagery, only use the 3 bands in this case.
    if str(IMG_YEAR) == '2002':
        print('bypassing IR channel')
        channel_order = [0, 1, 2]
        channel_display_groups = None
    else:
        # use all 4 channels
        channel_order = [0, 1, 2, 3]
        channel_display_groups = {'RGB': (0, 1, 2), 'IR': (3,)}

    class_config = ClassConfig(names=CLASS_NAMES, colors=CLASS_COLORS)

    def make_scene(id) -> SceneConfig:

        raster_uri = f'{raw_uri}/{id}.tif'
        label_uri = f'{raw_label_uri}/{id}_labels.geojson'
        aoi_uri =  [f'{raw_label_uri}/{id}_aoi.geojson']

        try:
            file_to_str(aoi_uri[0])
            print(f'Using AOI {aoi_uri[0]}')
        except NotReadableError as e:
            aoi_uri = []
            pass

        if test:
            crop_uri = join(processed_uri, 'crops', basename(raster_uri))
            label_crop_uri = join(processed_uri, 'crops', basename(label_uri))
            save_image_crop(
                raster_uri,
                crop_uri,
                label_uri=label_uri,
                label_crop_uri=label_crop_uri,
                size=500,
                vector_labels=True)
            raster_uri = crop_uri
            label_uri = label_crop_uri

        raster_source = RasterioSourceConfig(
            uris=[raster_uri], channel_order=channel_order)
        vector_source = GeoJSONVectorSourceConfig(
            transformers=[ClassInferenceTransformerConfig(default_class_id=0)],
            uri=label_uri, ignore_crs_field=True)

        # Using with_rgb_class_map because label TIFFs have classes encoded as
        # RGB colors.
        label_source = SemanticSegmentationLabelSourceConfig(
            raster_source=RasterizedSourceConfig(
                vector_source=vector_source,
                rasterizer_config=RasterizerConfig(background_class_id=1)))

        # URI will be injected by scene config.
        # Using rgb=True because we want prediction TIFFs to be in
        # RGB format.
        label_store = SemanticSegmentationLabelStoreConfig(
            rgb=True, vector_output=[PolygonVectorOutputConfig(class_id=0, denoise=3)])

        return SceneConfig(
            id=id,
            raster_source=raster_source,
            label_source=label_source,
            label_store=label_store,
            aoi_uris=aoi_uri
        )


    scene_dataset = DatasetConfig(
        class_config=class_config,
        train_scenes=[make_scene(id) for id in train_ids],
        validation_scenes=[make_scene(id) for id in val_ids])

    chip_sz = CHIP_SIZE
    img_sz = chip_sz

    chip_options = SemanticSegmentationChipOptions(
        window_method=SemanticSegmentationWindowMethod.sliding, stride=chip_sz)

    window_opts = {}
    # set window configs for training scenes
    for s in scene_dataset.train_scenes:
        window_opts[s.id] = GeoDataWindowConfig(
            method=GeoDataWindowMethod.sliding,
            size=chip_sz,
            stride=chip_options.stride)

    # set window configs for validation scenes
    for s in scene_dataset.validation_scenes:
        window_opts[s.id] = GeoDataWindowConfig(
            method=GeoDataWindowMethod.sliding,
            size=chip_sz,
            stride=chip_options.stride)

    data = SemanticSegmentationGeoDataConfig(
        scene_dataset=scene_dataset,
        window_opts=window_opts,
        img_sz=img_sz,
        img_channels=len(channel_order),
        num_workers=NUM_WORKERS,
        plot_options=PlotOptions(channel_display_groups=channel_display_groups))

    model = SemanticSegmentationModelConfig(backbone=Backbone.resnet50)

    backend = PyTorchSemanticSegmentationConfig(
        data=data,
        model=model,
        solver=SolverConfig(lr=1e-4, num_epochs=NUM_EPOCHS, batch_sz=8, one_cycle=True),
        log_tensorboard=True,
        run_tensorboard=False,
        test_mode=test)

    pipeline = SemanticSegmentationConfig(
        root_uri=root_uri,
        dataset=scene_dataset,
        backend=backend,
        train_chip_sz=chip_sz,
        predict_chip_sz=chip_sz,
        chip_options=chip_options)

    return pipeline
