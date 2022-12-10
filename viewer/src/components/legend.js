import React, { useContext, useEffect, useState } from 'react';
import { MapLibreContext } from '../context/MapLibreContext';
import LinearProgress from '@mui/material/LinearProgress';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import IconButton from '@mui/material/IconButton';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import SatelliteIcon from '@mui/icons-material/Satellite';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';

import bbox from "@turf/bbox";


import './legend.css';

export default function Legend() {
  const { map } = useContext(MapLibreContext);
  const [layers, setLayers] = useState([])
  const [checked, setChecked] = useState({})
  const [legendOpen, setLegendOpen] = React.useState(true);

  useEffect(() => {
    if (map && layers.length === 0 && Object.keys(checked).length === 0) {
      // initial load only
      const layers = map.getStyle().layers
      const newChecked = {}
      layers.forEach(element => {
        newChecked[element.id] = true
      });
      setLayers(layers)
      setChecked(newChecked)
    }

  }, [map, layers, checked])


  function toggleLayerVisibility(layer) {
    const { id } = layer
    let newChecked = { ...checked }
    newChecked[id] = !checked.id
    setChecked({ ...checked, [id]: !checked[id] })
    const mapLayer = map.getLayer(id)

    map.setLayoutProperty(id, 'visibility', mapLayer.visibility === 'visible' ? "none" : 'visible');
  }

  const handleLegendVisibility = () => {
    setLegendOpen(!legendOpen);
  };

  function zoomToLayer(layer) {
    const layerSource = map.getSource(layer.source)
    if (layerSource.type === 'geojson') {
      fetch(layerSource._data)
        .then((response) => response.json())
        .then((data) => {
          if (data.features) {
            map.fitBounds(bbox(data), { padding: 50 });
          }
        });
    }
  }


  function getLegendSymbol(l) {
    const { paint } = l
    let style = {}
    let iconSymbol = null
    if (paint) {
      if (paint["fill-color"]) {
        style.background = paint["fill-color"]
        style.border = `1px solid ${paint["fill-color"]}`
      }
      if (paint["line-color"]) {
        style.border = `1px solid ${paint["line-color"]}`
      }
      if (paint["text-color"]) {
        style.color = paint["text-color"]
        style.padding = "0px"
        style.margin = "5px"
        style.verticalAlign = 'middle'
        iconSymbol = <TextFormatIcon fontSize="small" />
      }
    }
    else if (l.type === "raster") {
      style.padding = "0px"
      style.margin = "5px"
      style.verticalAlign = 'middle'
      iconSymbol = <SatelliteIcon fontSize="small" />
    }
    return <span className="legend-symbol" style={style}>{iconSymbol}</span>
  }

  function getZoomIcon(l) {
    if (l.id.toLowerCase().includes('labels')) {
      return <Tooltip title="zoom to layer" placement="right"><IconButton onClick={() => zoomToLayer(l)} style={{ padding: 0 }}><ZoomInIcon style={{ color: 'white' }} /></IconButton></Tooltip>
    }
    return null
  }

  return (
    <div className="legend">
      <div className="legend-header" onClick={handleLegendVisibility}>{legendOpen ? <ExpandLess /> : <ExpandMore />}<Typography variant="h6" gutterBottom={0}>Legend</Typography> </div>
      <Collapse in={legendOpen} timeout="auto" unmountOnExit>
        {layers.length && Object.keys(checked).length ? layers.map((l, idx) =>
          <div className='legend-row'><div className="legend-item" key={idx} onClick={() => toggleLayerVisibility(l)}>
            <span className="legend-label">
              <Checkbox checked={checked[l.id]} readOnly type="checkbox" />
              {getLegendSymbol(l)}{l.id}</span></div> <div className="zoom-in-layer-control">{getZoomIcon(l)}</div></div>
        ) : <LinearProgress />}
      </Collapse>
    </div>
  );
}