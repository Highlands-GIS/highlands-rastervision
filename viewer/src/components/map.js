import React, { useRef, useEffect, useState, useContext } from 'react';

import maplibregl from 'maplibre-gl';
import "maplibre-gl/dist/maplibre-gl.css";

import { MapLibreContext } from '../context/MapLibreContext';

import './map.css';

const LABEL_IMAGES = ['G6A14', 'E7D1', 'F6B8', 'E6B11', 'I3D16', 'J3A9', 'H7B5', 'I6A6'].sort()

// https://www.danieltrone.com/post/aws-vector-tiles-cloudfront/
const mapStyle = {
    'version': 8,
    "sprite": "https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/sprite",
    "glyphs": "https://tiles.basemaps.cartocdn.com/fonts/{fontstack}/{range}.pbf",
    'sources': {
        'imagery-2020-ir': {
            'type': 'raster',
            'tiles': [
                'https://img.nj.gov/imagerywms/Infrared2020?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Infrared2020',
            ],
            'tileSize': 256
        }
    },
    'layers': [
        {
            'id': 'imagery-2020-ir',
            'type': 'raster',
            'source': 'imagery-2020-ir',
            'minzoom': 0,
            'maxzoom': 22,
            layout: {
                visibility: 'visible',
            },

        }
    ]
}


const impervious2020Layers = [
    {
        id: 'impervious-fill',
        desc: 'Impervious 2020',
        type: 'fill',
        minzoom: 0,
        maxzoom: 20,
        source: {
            tiles: [
                'https://njhighlands.s3.amazonaws.com/geobia/impervious/2020/tiles/{z}/{x}/{y}.pbf'
            ],
            type: 'vector',
            minzoom: 0,
            maxzoom: 20
        },
        'source-layer': 'impervious',
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-opacity': 0.25,
            'fill-color': 'rgb(255,242,0)',
        }
    },
    {
        id: 'impervious-line',
        desc: 'Impervious 2020',
        type: 'line',
        minzoom: 15,
        maxzoom: 20,
        source: {
            tiles: [
                'https://njhighlands.s3.amazonaws.com/geobia/impervious/2020/tiles/{z}/{x}/{y}.pbf'
            ],
            type: 'vector',
            minzoom: 15,
            maxzoom: 20
        },
        'source-layer': 'impervious',
        layout: {
            visibility: 'visible',
        },
        paint: {
            // 'fill-opacity': 0.25,
            'line-color': 'rgb(255,242,0)',
        }
    }
]


const gridLayer = "https://njhighlands.s3.amazonaws.com/geobia/impervious/2020/src/grid.geojson"

export default function Map() {
    const mapContainer = useRef(null);
    const { map, setMap } = useContext(MapLibreContext);
    const [lng] = useState(-74.6344);
    const [lat] = useState(40.8473);
    const [zoom] = useState(8.88);


    useEffect(() => {
        const initializeMap = ({ setMap, mapContainer }) => {
            const newMap = new maplibregl.Map({
                container: mapContainer.current,
                style: mapStyle,
                center: [lng, lat],
                zoom: zoom,
                hash: true,
            });
            newMap.addControl(new maplibregl.NavigationControl(), 'top-right');

            newMap.on("load", () => {

                newMap.addSource('grid', {
                    type: 'geojson',
                    data: gridLayer
                });

                newMap.addLayer({
                    id: 'grid-line',
                    type: 'line',
                    source: 'grid',
                    paint: {
                        'line-color': '#fff',
                    },
                    layout: {
                        visibility: 'visible',
                    }
                });

                newMap.addLayer({
                    "id": "grid-text",
                    "type": "symbol",
                    "source": "grid",
                    "minzoom": 12,
                    "maxzoom": 20,
                    "layout": {
                        // "symbol-placement": "line",
                        "text-font": ["Open Sans Regular"],
                        "text-field": '{NAME}',
                        "text-size": 24,
                        visibility: 'visible',
                    },
                    "paint": {
                        "text-color": "#FFF",
                        "text-halo-color": "#000",
                        "text-halo-width": 2
                    }
                });

                impervious2020Layers.forEach(layer => {
                    newMap.addLayer(layer)
                })

                LABEL_IMAGES.forEach((label => {
                    const labelId = `${label}_labels`
                    newMap.addSource(labelId, {
                        type: 'geojson',
                        data: `https://njhighlands.s3.amazonaws.com/geobia/impervious/2020/labels/${labelId}.geojson`
                    });

                    newMap.addLayer({
                        id: labelId,
                        type: 'fill',
                        source: labelId,
                        paint: {
                            'fill-color': '#00e9ff',
                        },
                        layout: {
                            visibility: 'visible',
                        }
                    });
                }))
                newMap.resize();
                setMap(newMap);
            });

        };
        if (!map) initializeMap({ setMap, mapContainer });
        else {
            // Clean up on unmount
            return () => map.remove();
        }
    });

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}