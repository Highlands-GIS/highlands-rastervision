export const style = {
  "version": 8,
  "name": "Dark Matter",
  "metadata": {},
  "sources": {
    "carto": {
      "type": "vector",
      "url": "https://tiles.basemaps.cartocdn.com/vector/carto.streets/v1/tiles.json"
    }
  },
  "sprite": "https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/sprite",
  "glyphs": "https://tiles.basemaps.cartocdn.com/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "background-color": "#0e0e0e",
        "background-opacity": 1
      }
    },
    {
      "id": "landcover",
      "type": "fill",
      "source": "carto",
      "source-layer": "landcover",
      "filter": [
        "any",
        [
          "==",
          "class",
          "wood"
        ],
        [
          "==",
          "class",
          "grass"
        ],
        [
          "==",
          "subclass",
          "recreation_ground"
        ]
      ],
      "paint": {
        "fill-color": {
          "stops": [
            [
              8,
              "#0e0e0e"
            ],
            [
              9,
              "#0e0e0e"
            ],
            [
              11,
              "#0e0e0e"
            ],
            [
              13,
              "#0e0e0e"
            ],
            [
              15,
              "#0e0e0e"
            ]
          ]
        },
        "fill-opacity": 1
      }
    },
    {
      "id": "park_national_park",
      "type": "fill",
      "source": "carto",
      "source-layer": "park",
      "minzoom": 9,
      "filter": [
        "all",
        [
          "==",
          "class",
          "national_park"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": {
          "stops": [
            [
              8,
              "#0e0e0e"
            ],
            [
              9,
              "#0e0e0e"
            ],
            [
              11,
              "#0e0e0e"
            ],
            [
              13,
              "#0e0e0e"
            ],
            [
              15,
              "#0e0e0e"
            ]
          ]
        },
        "fill-opacity": 1,
        "fill-translate-anchor": "map"
      }
    },
    {
      "id": "park_nature_reserve",
      "type": "fill",
      "source": "carto",
      "source-layer": "park",
      "minzoom": 0,
      "filter": [
        "all",
        [
          "==",
          "class",
          "nature_reserve"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": {
          "stops": [
            [
              8,
              "#0e0e0e"
            ],
            [
              9,
              "#0e0e0e"
            ],
            [
              11,
              "#0e0e0e"
            ],
            [
              13,
              "#0e0e0e"
            ],
            [
              15,
              "#0e0e0e"
            ]
          ]
        },
        "fill-antialias": true,
        "fill-opacity": {
          "stops": [
            [
              6,
              0.7
            ],
            [
              9,
              0.9
            ]
          ]
        }
      }
    },
    {
      "id": "landuse_residential",
      "type": "fill",
      "source": "carto",
      "source-layer": "landuse",
      "minzoom": 6,
      "filter": [
        "any",
        [
          "==",
          "class",
          "residential"
        ]
      ],
      "paint": {
        "fill-color": {
          "stops": [
            [
              5,
              "rgba(0, 0, 0, 0.5)"
            ],
            [
              8,
              "rgba(0, 0, 0, 0.45)"
            ],
            [
              9,
              "rgba(0, 0, 0, 0.4)"
            ],
            [
              11,
              "rgba(0, 0, 0, 0.35)"
            ],
            [
              13,
              "rgba(0, 0, 0, 0.3)"
            ],
            [
              15,
              "rgba(0, 0, 0, 0.25)"
            ],
            [
              16,
              "rgba(0, 0, 0, 0.15)"
            ]
          ]
        },
        "fill-opacity": {
          "stops": [
            [
              6,
              0.6
            ],
            [
              9,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "landuse",
      "type": "fill",
      "source": "carto",
      "source-layer": "landuse",
      "filter": [
        "any",
        [
          "==",
          "class",
          "cemetery"
        ],
        [
          "==",
          "class",
          "stadium"
        ]
      ],
      "paint": {
        "fill-color": {
          "stops": [
            [
              8,
              "#0e0e0e"
            ],
            [
              9,
              "#0e0e0e"
            ],
            [
              11,
              "#0e0e0e"
            ],
            [
              13,
              "#0e0e0e"
            ],
            [
              15,
              "#0e0e0e"
            ]
          ]
        }
      }
    },
    {
      "id": "waterway",
      "type": "line",
      "source": "carto",
      "source-layer": "waterway",
      "paint": {
        "line-color": "#151515",
        "line-width": {
          "stops": [
            [
              8,
              0.5
            ],
            [
              9,
              1
            ],
            [
              15,
              2
            ],
            [
              16,
              3
            ]
          ]
        }
      }
    },
    {
      "id": "boundary_county",
      "type": "line",
      "source": "carto",
      "source-layer": "boundary",
      "minzoom": 9,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          6
        ],
        [
          "==",
          "maritime",
          0
        ]
      ],
      "paint": {
        "line-color": {
          "stops": [
            [
              4,
              "#222"
            ],
            [
              5,
              "#222"
            ],
            [
              6,
              "#292929"
            ]
          ]
        },
        "line-width": {
          "stops": [
            [
              4,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-dasharray": {
          "stops": [
            [
              6,
              [
                1
              ]
            ],
            [
              7,
              [
                2,
                2
              ]
            ]
          ]
        }
      }
    },
    {
      "id": "boundary_state",
      "type": "line",
      "source": "carto",
      "source-layer": "boundary",
      "minzoom": 4,
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          4
        ],
        [
          "==",
          "maritime",
          0
        ]
      ],
      "paint": {
        "line-color": {
          "stops": [
            [
              4,
              "#222"
            ],
            [
              5,
              "#222"
            ],
            [
              6,
              "#292929"
            ]
          ]
        },
        "line-width": {
          "stops": [
            [
              4,
              0.5
            ],
            [
              7,
              1
            ],
            [
              8,
              1
            ],
            [
              9,
              1.2
            ]
          ]
        },
        "line-dasharray": {
          "stops": [
            [
              6,
              [
                1
              ]
            ],
            [
              7,
              [
                2,
                2
              ]
            ]
          ]
        }
      }
    },
    {
      "id": "water",
      "type": "fill",
      "source": "carto",
      "source-layer": "water",
      "minzoom": 0,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#212121",
        "fill-antialias": true,
        "fill-translate-anchor": "map",
        "fill-opacity": 1
      }
    },
    {
      "id": "water_shadow",
      "type": "fill",
      "source": "carto",
      "source-layer": "water",
      "minzoom": 0,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "transparent",
        "fill-antialias": true,
        "fill-translate-anchor": "map",
        "fill-opacity": 1,
        "fill-translate": {
          "stops": [
            [
              0,
              [
                0,
                2
              ]
            ],
            [
              6,
              [
                0,
                1
              ]
            ],
            [
              14,
              [
                0,
                1
              ]
            ],
            [
              17,
              [
                0,
                2
              ]
            ]
          ]
        }
      }
    },
    {
      "id": "aeroway-runway",
      "type": "line",
      "source": "carto",
      "source-layer": "aeroway",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "==",
          "class",
          "runway"
        ]
      ],
      "layout": {
        "line-cap": "square"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              11,
              1
            ],
            [
              13,
              4
            ],
            [
              14,
              6
            ],
            [
              15,
              8
            ],
            [
              16,
              10
            ]
          ]
        },
        "line-color": "#111"
      }
    },
    {
      "id": "aeroway-taxiway",
      "type": "line",
      "source": "carto",
      "source-layer": "aeroway",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "class",
          "taxiway"
        ]
      ],
      "paint": {
        "line-color": "#111",
        "line-width": {
          "stops": [
            [
              13,
              0.5
            ],
            [
              14,
              1
            ],
            [
              15,
              2
            ],
            [
              16,
              4
            ]
          ]
        }
      }
    },
    {
      "id": "waterway_label",
      "type": "symbol",
      "source": "carto",
      "source-layer": "waterway",
      "filter": [
        "all",
        [
          "has",
          "name"
        ],
        [
          "==",
          "class",
          "river"
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Regular Italic",
          "Open Sans Italic",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "symbol-avoid-edges": false,
        "text-size": {
          "stops": [
            [
              9,
              8
            ],
            [
              10,
              9
            ]
          ]
        },
        "text-padding": 2,
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-offset": {
          "stops": [
            [
              6,
              [
                0,
                -0.2
              ]
            ],
            [
              11,
              [
                0,
                -0.4
              ]
            ],
            [
              12,
              [
                0,
                -0.6
              ]
            ]
          ]
        },
        "text-letter-spacing": 0,
        "text-keep-upright": true
      },
      "paint": {
        "text-color": "#444",
        "text-halo-color": "#181818",
        "text-halo-width": 1
      }
    },
    {
      "id": "tunnel_service_case",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "service"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              15,
              1
            ],
            [
              16,
              3
            ],
            [
              17,
              6
            ],
            [
              18,
              8
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#1a1a1a"
      }
    },
    {
      "id": "tunnel_minor_case",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "minor"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              11,
              0.5
            ],
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              15,
              4
            ],
            [
              16,
              6
            ],
            [
              17,
              10
            ],
            [
              18,
              14
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#1a1a1a"
      }
    },
    {
      "id": "tunnel_sec_case",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              11,
              0.5
            ],
            [
              12,
              1
            ],
            [
              13,
              2
            ],
            [
              14,
              5
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#1a1a1a"
      }
    },
    {
      "id": "tunnel_pri_case",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 8,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.8
            ],
            [
              8,
              1
            ],
            [
              11,
              3
            ],
            [
              13,
              4
            ],
            [
              14,
              6
            ],
            [
              15,
              8
            ],
            [
              16,
              10
            ],
            [
              17,
              14
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              5,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-color": "#1a1a1a"
      }
    },
    {
      "id": "tunnel_trunk_case",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 5,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.8
            ],
            [
              8,
              1
            ],
            [
              11,
              3
            ],
            [
              13,
              4
            ],
            [
              14,
              6
            ],
            [
              15,
              8
            ],
            [
              16,
              10
            ],
            [
              17,
              14
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              5,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-color": "#232323"
      }
    },
    {
      "id": "tunnel_mot_case",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 5,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.8
            ],
            [
              8,
              1
            ],
            [
              11,
              3
            ],
            [
              12,
              4
            ],
            [
              13,
              5
            ],
            [
              14,
              7
            ],
            [
              15,
              9
            ],
            [
              16,
              11
            ],
            [
              17,
              13
            ],
            [
              18,
              22
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-color": "#232323"
      }
    },
    {
      "id": "tunnel_path",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "path"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              15,
              0.5
            ],
            [
              16,
              1
            ],
            [
              18,
              3
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#262626",
        "line-dasharray": {
          "stops": [
            [
              15,
              [
                2,
                2
              ]
            ],
            [
              18,
              [
                3,
                3
              ]
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_service_fill",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "service"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              15,
              2
            ],
            [
              16,
              2
            ],
            [
              17,
              4
            ],
            [
              18,
              6
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#161616"
      }
    },
    {
      "id": "tunnel_minor_fill",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "minor"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              15,
              3
            ],
            [
              16,
              4
            ],
            [
              17,
              8
            ],
            [
              18,
              12
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "rgba(238, 238, 238, 1)"
      }
    },
    {
      "id": "tunnel_sec_fill",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              11,
              2
            ],
            [
              13,
              2
            ],
            [
              14,
              3
            ],
            [
              15,
              4
            ],
            [
              16,
              6
            ],
            [
              17,
              10
            ],
            [
              18,
              14
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#161616"
      }
    },
    {
      "id": "tunnel_pri_fill",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              11,
              1
            ],
            [
              13,
              2
            ],
            [
              14,
              4
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#161616"
      }
    },
    {
      "id": "tunnel_trunk_fill",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              11,
              1
            ],
            [
              13,
              2
            ],
            [
              14,
              4
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#161616"
      }
    },
    {
      "id": "tunnel_mot_fill",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 10,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              10,
              1
            ],
            [
              12,
              2
            ],
            [
              13,
              3
            ],
            [
              14,
              5
            ],
            [
              15,
              7
            ],
            [
              16,
              9
            ],
            [
              17,
              11
            ],
            [
              18,
              20
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#161616"
      }
    },
    {
      "id": "tunnel_rail",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "class",
          "rail"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#1a1a1a",
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              13,
              0.5
            ],
            [
              14,
              1
            ],
            [
              15,
              1
            ],
            [
              16,
              3
            ],
            [
              21,
              7
            ]
          ]
        },
        "line-opacity": 0.5
      }
    },
    {
      "id": "tunnel_rail_dash",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "class",
          "rail"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111",
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              15,
              0.5
            ],
            [
              16,
              1
            ],
            [
              20,
              5
            ]
          ]
        },
        "line-dasharray": {
          "stops": [
            [
              15,
              [
                5,
                5
              ]
            ],
            [
              16,
              [
                6,
                6
              ]
            ]
          ]
        },
        "line-opacity": 0.5
      }
    },
    {
      "id": "road_service_case",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "service"
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              15,
              1
            ],
            [
              16,
              3
            ],
            [
              17,
              6
            ],
            [
              18,
              8
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#1c1c1c"
      }
    },
    {
      "id": "road_minor_case",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "minor"
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              11,
              0.5
            ],
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              15,
              3
            ],
            [
              16,
              4.3
            ],
            [
              17,
              10
            ],
            [
              18,
              14
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": {
          "stops": [
            [
              13,
              "#161616"
            ],
            [
              15.7,
              "#161616"
            ],
            [
              16,
              "#1c1c1c"
            ]
          ]
        }
      }
    },
    {
      "id": "road_pri_case_ramp",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 12,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "==",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              12,
              2
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              15,
              5
            ],
            [
              16,
              8
            ],
            [
              17,
              10
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              5,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-color": "#232323"
      }
    },
    {
      "id": "road_trunk_case_ramp",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 12,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "==",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              12,
              2
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              15,
              5
            ],
            [
              16,
              8
            ],
            [
              17,
              10
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": {
          "stops": [
            [
              12,
              "#1a1a1a"
            ],
            [
              14,
              "#232323"
            ]
          ]
        }
      }
    },
    {
      "id": "road_mot_case_ramp",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 12,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "==",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              12,
              2
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              15,
              5
            ],
            [
              16,
              8
            ],
            [
              17,
              10
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": {
          "stops": [
            [
              12,
              "#1a1a1a"
            ],
            [
              14,
              "#232323"
            ]
          ]
        }
      }
    },
    {
      "id": "road_sec_case_noramp",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              11,
              0.5
            ],
            [
              12,
              1.5
            ],
            [
              13,
              3
            ],
            [
              14,
              5
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": {
          "stops": [
            [
              11,
              "#1a1a1a"
            ],
            [
              12.99,
              "#1a1a1a"
            ],
            [
              13,
              "#232323"
            ]
          ]
        }
      }
    },
    {
      "id": "road_pri_case_noramp",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 7,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.8
            ],
            [
              8,
              1
            ],
            [
              11,
              3
            ],
            [
              13,
              4
            ],
            [
              14,
              6
            ],
            [
              15,
              8
            ],
            [
              16,
              10
            ],
            [
              17,
              14
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              5,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-color": {
          "stops": [
            [
              7,
              "#1a1a1a"
            ],
            [
              12,
              "#232323"
            ]
          ]
        }
      }
    },
    {
      "id": "road_trunk_case_noramp",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 5,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.8
            ],
            [
              8,
              1
            ],
            [
              11,
              3
            ],
            [
              13,
              4
            ],
            [
              14,
              6
            ],
            [
              15,
              8
            ],
            [
              16,
              10
            ],
            [
              17,
              14
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              5,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-color": {
          "stops": [
            [
              5,
              "#1a1a1a"
            ],
            [
              12,
              "#232323"
            ]
          ]
        }
      }
    },
    {
      "id": "road_mot_case_noramp",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 5,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.7
            ],
            [
              8,
              0.8
            ],
            [
              11,
              3
            ],
            [
              12,
              4
            ],
            [
              13,
              5
            ],
            [
              14,
              7
            ],
            [
              15,
              9
            ],
            [
              16,
              11
            ],
            [
              17,
              13
            ],
            [
              18,
              22
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-color": {
          "stops": [
            [
              5,
              "#1a1a1a"
            ],
            [
              12,
              "#232323"
            ]
          ]
        }
      }
    },
    {
      "id": "road_path",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "class",
          "path",
          "track"
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              15,
              0.5
            ],
            [
              16,
              1
            ],
            [
              18,
              3
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#262626",
        "line-dasharray": {
          "stops": [
            [
              15,
              [
                2,
                2
              ]
            ],
            [
              18,
              [
                3,
                3
              ]
            ]
          ]
        }
      }
    },
    {
      "id": "road_service_fill",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "service"
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              15,
              2
            ],
            [
              16,
              2
            ],
            [
              17,
              4
            ],
            [
              18,
              6
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#0b0b0b"
      }
    },
    {
      "id": "road_minor_fill",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "minor"
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              15,
              3
            ],
            [
              16,
              4
            ],
            [
              17,
              8
            ],
            [
              18,
              12
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#0b0b0b"
      }
    },
    {
      "id": "road_pri_fill_ramp",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 12,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "==",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2
            ],
            [
              15,
              3
            ],
            [
              16,
              6
            ],
            [
              17,
              8
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#0b0b0b"
      }
    },
    {
      "id": "road_trunk_fill_ramp",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 12,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "==",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "square",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2
            ],
            [
              15,
              3
            ],
            [
              16,
              6
            ],
            [
              17,
              8
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#0b0b0b"
      }
    },
    {
      "id": "road_mot_fill_ramp",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 12,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "==",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2
            ],
            [
              15,
              3
            ],
            [
              16,
              6
            ],
            [
              17,
              8
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#0b0b0b"
      }
    },
    {
      "id": "road_sec_fill_noramp",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              11,
              2
            ],
            [
              13,
              2
            ],
            [
              14,
              3
            ],
            [
              15,
              4
            ],
            [
              16,
              6
            ],
            [
              17,
              10
            ],
            [
              18,
              14
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#0b0b0b"
      }
    },
    {
      "id": "road_pri_fill_noramp",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 10,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              10,
              0.3
            ],
            [
              13,
              2
            ],
            [
              14,
              4
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#0b0b0b"
      }
    },
    {
      "id": "road_trunk_fill_noramp",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 10,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              11,
              1
            ],
            [
              13,
              2
            ],
            [
              14,
              4
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#0b0b0b"
      }
    },
    {
      "id": "road_mot_fill_noramp",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 10,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              10,
              1
            ],
            [
              12,
              2
            ],
            [
              13,
              3
            ],
            [
              14,
              5
            ],
            [
              15,
              7
            ],
            [
              16,
              9
            ],
            [
              17,
              11
            ],
            [
              18,
              20
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#0b0b0b"
      }
    },
    {
      "id": "rail",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "class",
          "rail"
        ],
        [
          "!=",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#1a1a1a",
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              13,
              0.5
            ],
            [
              14,
              1
            ],
            [
              15,
              1
            ],
            [
              16,
              3
            ],
            [
              21,
              7
            ]
          ]
        }
      }
    },
    {
      "id": "rail_dash",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "class",
          "rail"
        ],
        [
          "!=",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111",
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              15,
              0.5
            ],
            [
              16,
              1
            ],
            [
              20,
              5
            ]
          ]
        },
        "line-dasharray": {
          "stops": [
            [
              15,
              [
                5,
                5
              ]
            ],
            [
              16,
              [
                6,
                6
              ]
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_service_case",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "service"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              15,
              1
            ],
            [
              16,
              3
            ],
            [
              17,
              6
            ],
            [
              18,
              8
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#1c1c1c"
      }
    },
    {
      "id": "bridge_minor_case",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "minor"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              11,
              0.5
            ],
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              15,
              3
            ],
            [
              16,
              4.3
            ],
            [
              17,
              10
            ],
            [
              18,
              14
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": {
          "stops": [
            [
              13,
              "#161616"
            ],
            [
              15.7,
              "#161616"
            ],
            [
              16,
              "#1c1c1c"
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_sec_case",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              11,
              0.5
            ],
            [
              12,
              1.5
            ],
            [
              13,
              3
            ],
            [
              14,
              5
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": {
          "stops": [
            [
              11,
              "#1a1a1a"
            ],
            [
              12.99,
              "#1a1a1a"
            ],
            [
              13,
              "#232323"
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_pri_case",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 8,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.8
            ],
            [
              8,
              1
            ],
            [
              11,
              3
            ],
            [
              13,
              4
            ],
            [
              14,
              6
            ],
            [
              15,
              8
            ],
            [
              16,
              10
            ],
            [
              17,
              14
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              5,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-color": {
          "stops": [
            [
              8,
              "#1a1a1a"
            ],
            [
              12,
              "#232323"
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_trunk_case",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 5,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.8
            ],
            [
              8,
              1
            ],
            [
              11,
              3
            ],
            [
              13,
              4
            ],
            [
              14,
              6
            ],
            [
              15,
              8
            ],
            [
              16,
              10
            ],
            [
              17,
              14
            ],
            [
              18,
              18
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              5,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-color": {
          "stops": [
            [
              5,
              "#1a1a1a"
            ],
            [
              12,
              "#232323"
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_mot_case",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 5,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.8
            ],
            [
              8,
              1
            ],
            [
              11,
              3
            ],
            [
              12,
              4
            ],
            [
              13,
              5
            ],
            [
              14,
              7
            ],
            [
              15,
              9
            ],
            [
              16,
              11
            ],
            [
              17,
              13
            ],
            [
              18,
              22
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-color": {
          "stops": [
            [
              5,
              "#1a1a1a"
            ],
            [
              10,
              "#232323"
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_path",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "path"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              15,
              0.5
            ],
            [
              16,
              1
            ],
            [
              18,
              3
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#262626",
        "line-dasharray": {
          "stops": [
            [
              15,
              [
                2,
                2
              ]
            ],
            [
              18,
              [
                3,
                3
              ]
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_service_fill",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "service"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              15,
              2
            ],
            [
              16,
              2
            ],
            [
              17,
              4
            ],
            [
              18,
              6
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#0b0b0b"
      }
    },
    {
      "id": "bridge_minor_fill",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "minor"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              15,
              3
            ],
            [
              16,
              4
            ],
            [
              17,
              8
            ],
            [
              18,
              12
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#0b0b0b"
      }
    },
    {
      "id": "bridge_sec_fill",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              11,
              2
            ],
            [
              13,
              2
            ],
            [
              14,
              3
            ],
            [
              15,
              4
            ],
            [
              16,
              6
            ],
            [
              17,
              10
            ],
            [
              18,
              14
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#0b0b0b"
      }
    },
    {
      "id": "bridge_pri_fill",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              11,
              1
            ],
            [
              13,
              2
            ],
            [
              14,
              4
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#0b0b0b"
      }
    },
    {
      "id": "bridge_trunk_fill",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              11,
              1
            ],
            [
              13,
              2
            ],
            [
              14,
              4
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#0b0b0b"
      }
    },
    {
      "id": "bridge_mot_fill",
      "type": "line",
      "source": "carto",
      "source-layer": "transportation",
      "minzoom": 10,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              10,
              1
            ],
            [
              12,
              2
            ],
            [
              13,
              3
            ],
            [
              14,
              5
            ],
            [
              15,
              7
            ],
            [
              16,
              9
            ],
            [
              17,
              11
            ],
            [
              18,
              20
            ]
          ]
        },
        "line-opacity": 1,
        "line-color": "#0b0b0b"
      }
    },
    {
      "id": "building",
      "type": "fill",
      "source": "carto",
      "source-layer": "building",
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": {
          "base": 1,
          "stops": [
            [
              15.5,
              "transparent"
            ],
            [
              16,
              "transparent"
            ]
          ]
        },
        "fill-antialias": true
      }
    },
    {
      "id": "building-top",
      "type": "fill",
      "source": "carto",
      "source-layer": "building",
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-translate": {
          "base": 1,
          "stops": [
            [
              14,
              [
                0,
                0
              ]
            ],
            [
              16,
              [
                -2,
                -2
              ]
            ]
          ]
        },
        "fill-outline-color": "#0e0e0e",
        "fill-color": "#000",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              13,
              0
            ],
            [
              16,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "boundary_country_outline",
      "type": "line",
      "source": "carto",
      "source-layer": "boundary",
      "minzoom": 6,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          2
        ],
        [
          "==",
          "maritime",
          0
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#0e0e0e",
        "line-opacity": 0.5,
        "line-width": 8,
        "line-offset": 0
      }
    },
    {
      "id": "boundary_country_inner",
      "type": "line",
      "source": "carto",
      "source-layer": "boundary",
      "minzoom": 0,
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          2
        ],
        [
          "==",
          "maritime",
          0
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              4,
              "#222"
            ],
            [
              5,
              "#292929"
            ],
            [
              6,
              "#292929"
            ]
          ]
        },
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              3,
              1
            ],
            [
              6,
              1.5
            ]
          ]
        },
        "line-offset": 0
      }
    },
    {
      "id": "watername_ocean",
      "type": "symbol",
      "source": "carto",
      "source-layer": "water_name",
      "minzoom": 0,
      "maxzoom": 5,
      "filter": [
        "all",
        [
          "has",
          "name"
        ],
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "ocean"
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "symbol-placement": "point",
        "text-size": {
          "stops": [
            [
              0,
              13
            ],
            [
              2,
              14
            ],
            [
              4,
              18
            ]
          ]
        },
        "text-font": [
          "Montserrat Medium Italic",
          "Open Sans Italic",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-line-height": 1.2,
        "text-padding": 2,
        "text-allow-overlap": false,
        "text-ignore-placement": false,
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-max-width": 6,
        "text-letter-spacing": 0.1
      },
      "paint": {
        "text-color": "#3c3c3c",
        "text-halo-color": "rgba(0,0,0,0.7)",
        "text-halo-width": 1,
        "text-halo-blur": 0
      }
    },
    {
      "id": "watername_sea",
      "type": "symbol",
      "source": "carto",
      "source-layer": "water_name",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "has",
          "name"
        ],
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "sea"
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "symbol-placement": "point",
        "text-size": 12,
        "text-font": [
          "Montserrat Medium Italic",
          "Open Sans Italic",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-line-height": 1.2,
        "text-padding": 2,
        "text-allow-overlap": false,
        "text-ignore-placement": false,
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-max-width": 6,
        "text-letter-spacing": 0.1
      },
      "paint": {
        "text-color": "#3c3c3c",
        "text-halo-color": "rgba(0,0,0,0.7)",
        "text-halo-width": 1,
        "text-halo-blur": 0
      }
    },
    {
      "id": "watername_lake",
      "type": "symbol",
      "source": "carto",
      "source-layer": "water_name",
      "minzoom": 4,
      "filter": [
        "all",
        [
          "has",
          "name"
        ],
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "lake"
        ]
      ],
      "layout": {
        "text-field": {
          "stops": [
            [
              8,
              "{name_en}"
            ],
            [
              13,
              "{name}"
            ]
          ]
        },
        "symbol-placement": "point",
        "text-size": {
          "stops": [
            [
              13,
              9
            ],
            [
              14,
              10
            ],
            [
              15,
              11
            ],
            [
              16,
              12
            ],
            [
              17,
              13
            ]
          ]
        },
        "text-font": [
          "Montserrat Regular Italic",
          "Open Sans Italic",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-line-height": 1.2,
        "text-padding": 2,
        "text-allow-overlap": false,
        "text-ignore-placement": false,
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto"
      },
      "paint": {
        "text-color": "#444",
        "text-halo-color": "#181818",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "watername_lake_line",
      "type": "symbol",
      "source": "carto",
      "source-layer": "water_name",
      "filter": [
        "all",
        [
          "has",
          "name"
        ],
        [
          "==",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "text-field": {
          "stops": [
            [
              8,
              "{name_en}"
            ],
            [
              13,
              "{name}"
            ]
          ]
        },
        "symbol-placement": "line",
        "text-size": {
          "stops": [
            [
              13,
              9
            ],
            [
              14,
              10
            ],
            [
              15,
              11
            ],
            [
              16,
              12
            ],
            [
              17,
              13
            ]
          ]
        },
        "text-font": [
          "Montserrat Regular Italic",
          "Open Sans Italic",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "symbol-spacing": 350,
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-line-height": 1.2
      },
      "paint": {
        "text-color": "#444",
        "text-halo-color": "#181818",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "place_hamlet",
      "type": "symbol",
      "source": "carto",
      "source-layer": "place",
      "minzoom": 12,
      "maxzoom": 16,
      "filter": [
        "any",
        [
          "==",
          "class",
          "neighbourhood"
        ],
        [
          "==",
          "class",
          "hamlet"
        ]
      ],
      "layout": {
        "text-field": {
          "stops": [
            [
              8,
              "{name_en}"
            ],
            [
              14,
              "{name}"
            ]
          ]
        },
        "text-font": [
          "Montserrat Regular",
          "Open Sans Regular",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              13,
              8
            ],
            [
              14,
              10
            ],
            [
              16,
              11
            ]
          ]
        },
        "icon-image": "",
        "icon-offset": [
          16,
          0
        ],
        "text-anchor": "center",
        "icon-size": 1,
        "text-max-width": 10,
        "text-keep-upright": true,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-transform": {
          "stops": [
            [
              12,
              "none"
            ],
            [
              14,
              "uppercase"
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#666",
        "icon-color": "#666",
        "icon-translate-anchor": "map",
        "text-halo-color": "#222",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_suburbs",
      "type": "symbol",
      "source": "carto",
      "source-layer": "place",
      "minzoom": 12,
      "maxzoom": 16,
      "filter": [
        "all",
        [
          "==",
          "class",
          "suburb"
        ]
      ],
      "layout": {
        "text-field": {
          "stops": [
            [
              8,
              "{name_en}"
            ],
            [
              13,
              "{name}"
            ]
          ]
        },
        "text-font": [
          "Montserrat Regular",
          "Open Sans Regular",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              12,
              9
            ],
            [
              13,
              10
            ],
            [
              14,
              11
            ],
            [
              15,
              12
            ],
            [
              16,
              13
            ]
          ]
        },
        "icon-image": "",
        "icon-offset": [
          16,
          0
        ],
        "text-anchor": "center",
        "icon-size": 1,
        "text-max-width": 10,
        "text-keep-upright": true,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-transform": {
          "stops": [
            [
              8,
              "none"
            ],
            [
              12,
              "uppercase"
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#666",
        "icon-color": "#666",
        "icon-translate-anchor": "map",
        "text-halo-color": "#222",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_villages",
      "type": "symbol",
      "source": "carto",
      "source-layer": "place",
      "minzoom": 10,
      "maxzoom": 16,
      "filter": [
        "all",
        [
          "==",
          "class",
          "village"
        ]
      ],
      "layout": {
        "text-field": {
          "stops": [
            [
              8,
              "{name_en}"
            ],
            [
              13,
              "{name}"
            ]
          ]
        },
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              10,
              9
            ],
            [
              12,
              10
            ],
            [
              13,
              11
            ],
            [
              14,
              12
            ],
            [
              16,
              13
            ]
          ]
        },
        "icon-image": "",
        "icon-offset": [
          16,
          0
        ],
        "text-anchor": "center",
        "icon-size": 1,
        "text-max-width": 10,
        "text-keep-upright": true,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-transform": "none"
      },
      "paint": {
        "text-color": "#666",
        "icon-color": "#666",
        "icon-translate-anchor": "map",
        "text-halo-color": "#222",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_town",
      "type": "symbol",
      "source": "carto",
      "source-layer": "place",
      "minzoom": 8,
      "maxzoom": 14,
      "filter": [
        "all",
        [
          "==",
          "class",
          "town"
        ]
      ],
      "layout": {
        "text-field": {
          "stops": [
            [
              8,
              "{name_en}"
            ],
            [
              13,
              "{name}"
            ]
          ]
        },
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              8,
              10
            ],
            [
              9,
              10
            ],
            [
              10,
              11
            ],
            [
              13,
              14
            ],
            [
              14,
              15
            ]
          ]
        },
        "icon-image": "",
        "icon-offset": [
          16,
          0
        ],
        "text-anchor": "center",
        "icon-size": 1,
        "text-max-width": 10,
        "text-keep-upright": true,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-transform": "none"
      },
      "paint": {
        "text-color": "#666",
        "icon-color": "#666",
        "icon-translate-anchor": "map",
        "text-halo-color": "#222",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_country_2",
      "type": "symbol",
      "source": "carto",
      "source-layer": "place",
      "minzoom": 3,
      "maxzoom": 10,
      "filter": [
        "all",
        [
          "==",
          "class",
          "country"
        ],
        [
          ">=",
          "rank",
          3
        ],
        [
          "has",
          "iso_a2"
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              3,
              10
            ],
            [
              5,
              11
            ],
            [
              6,
              12
            ],
            [
              7,
              13
            ],
            [
              8,
              14
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              3,
              "#555"
            ],
            [
              5,
              "#444"
            ],
            [
              6,
              "#3a3a3a"
            ]
          ]
        },
        "text-halo-color": "#111",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_country_1",
      "type": "symbol",
      "source": "carto",
      "source-layer": "place",
      "minzoom": 2,
      "maxzoom": 7,
      "filter": [
        "all",
        [
          "==",
          "class",
          "country"
        ],
        [
          "<=",
          "rank",
          2
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              3,
              11
            ],
            [
              4,
              12
            ],
            [
              5,
              13
            ],
            [
              6,
              14
            ]
          ]
        },
        "text-transform": "uppercase",
        "text-max-width": {
          "stops": [
            [
              2,
              6
            ],
            [
              3,
              6
            ],
            [
              4,
              9
            ],
            [
              5,
              12
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              3,
              "#555"
            ],
            [
              5,
              "#444"
            ],
            [
              6,
              "#3a3a3a"
            ]
          ]
        },
        "text-halo-color": "#111",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_state",
      "type": "symbol",
      "source": "carto",
      "source-layer": "place",
      "minzoom": 5,
      "maxzoom": 10,
      "filter": [
        "all",
        [
          "==",
          "class",
          "state"
        ],
        [
          "<=",
          "rank",
          4
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              5,
              12
            ],
            [
              7,
              14
            ]
          ]
        },
        "text-transform": "uppercase",
        "text-max-width": 9
      },
      "paint": {
        "text-color": "#444",
        "text-halo-color": "#111",
        "text-halo-width": 0
      }
    },
    {
      "id": "place_continent",
      "type": "symbol",
      "source": "carto",
      "source-layer": "place",
      "minzoom": 0,
      "maxzoom": 2,
      "filter": [
        "all",
        [
          "==",
          "class",
          "continent"
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-transform": "uppercase",
        "text-size": 14,
        "text-letter-spacing": 0.1,
        "text-max-width": 9,
        "text-justify": "center",
        "text-keep-upright": false
      },
      "paint": {
        "text-color": "#555",
        "text-halo-color": "#111",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_city_r6",
      "type": "symbol",
      "source": "carto",
      "source-layer": "place",
      "minzoom": 8,
      "maxzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "class",
          "city"
        ],
        [
          ">=",
          "rank",
          6
        ]
      ],
      "layout": {
        "text-field": {
          "stops": [
            [
              8,
              "{name_en}"
            ],
            [
              13,
              "{name}"
            ]
          ]
        },
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              8,
              12
            ],
            [
              9,
              13
            ],
            [
              10,
              14
            ],
            [
              13,
              17
            ],
            [
              14,
              20
            ]
          ]
        },
        "icon-image": "",
        "icon-offset": [
          16,
          0
        ],
        "text-anchor": "center",
        "icon-size": 1,
        "text-max-width": 10,
        "text-keep-upright": true,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#666",
        "icon-color": "#666",
        "icon-translate-anchor": "map",
        "text-halo-color": "#222",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_city_r5",
      "type": "symbol",
      "source": "carto",
      "source-layer": "place",
      "minzoom": 8,
      "maxzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "class",
          "city"
        ],
        [
          ">=",
          "rank",
          0
        ],
        [
          "<=",
          "rank",
          5
        ]
      ],
      "layout": {
        "text-field": {
          "stops": [
            [
              8,
              "{name_en}"
            ],
            [
              13,
              "{name}"
            ]
          ]
        },
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              8,
              14
            ],
            [
              10,
              16
            ],
            [
              13,
              19
            ],
            [
              14,
              22
            ]
          ]
        },
        "icon-image": "",
        "icon-offset": [
          16,
          0
        ],
        "text-anchor": "center",
        "icon-size": 1,
        "text-max-width": 10,
        "text-keep-upright": true,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#666",
        "icon-color": "#666",
        "icon-translate-anchor": "map",
        "text-halo-color": "#222",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_city_dot_r7",
      "type": "symbol",
      "source": "carto",
      "source-layer": "place",
      "minzoom": 6,
      "maxzoom": 7,
      "filter": [
        "all",
        [
          "==",
          "class",
          "city"
        ],
        [
          "<=",
          "rank",
          7
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": 12,
        "icon-image": "circle-11",
        "icon-offset": [
          16,
          5
        ],
        "text-anchor": "right",
        "icon-size": 0.4,
        "text-max-width": 8,
        "text-keep-upright": true,
        "text-offset": [
          0.2,
          0.2
        ]
      },
      "paint": {
        "text-color": "#666",
        "icon-color": "#666",
        "icon-translate-anchor": "map",
        "text-halo-color": "#222",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_city_dot_r4",
      "type": "symbol",
      "source": "carto",
      "source-layer": "place",
      "minzoom": 5,
      "maxzoom": 7,
      "filter": [
        "all",
        [
          "==",
          "class",
          "city"
        ],
        [
          "<=",
          "rank",
          4
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": 12,
        "icon-image": "circle-11",
        "icon-offset": [
          16,
          5
        ],
        "text-anchor": "right",
        "icon-size": 0.4,
        "text-max-width": 8,
        "text-keep-upright": true,
        "text-offset": [
          0.2,
          0.2
        ]
      },
      "paint": {
        "text-color": "#666",
        "icon-color": "#666",
        "icon-translate-anchor": "map",
        "text-halo-color": "#222",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_city_dot_r2",
      "type": "symbol",
      "source": "carto",
      "source-layer": "place",
      "minzoom": 4,
      "maxzoom": 7,
      "filter": [
        "all",
        [
          "==",
          "class",
          "city"
        ],
        [
          "<=",
          "rank",
          2
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": 12,
        "icon-image": "circle-11",
        "icon-offset": [
          16,
          5
        ],
        "text-anchor": "right",
        "icon-size": 0.4,
        "text-max-width": 8,
        "text-keep-upright": true,
        "text-offset": [
          0.2,
          0.2
        ]
      },
      "paint": {
        "text-color": "#666",
        "icon-color": "#666",
        "icon-translate-anchor": "map",
        "text-halo-color": "#222",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_city_dot_z7",
      "type": "symbol",
      "source": "carto",
      "source-layer": "place",
      "minzoom": 7,
      "maxzoom": 8,
      "filter": [
        "all",
        [
          "!has",
          "capital"
        ],
        [
          "!in",
          "class",
          "country",
          "state"
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": 12,
        "icon-image": "circle-11",
        "icon-offset": [
          16,
          5
        ],
        "text-anchor": "right",
        "icon-size": 0.4,
        "text-max-width": 8,
        "text-keep-upright": true,
        "text-offset": [
          0.2,
          0.2
        ]
      },
      "paint": {
        "text-color": "#666",
        "icon-color": "#666",
        "icon-translate-anchor": "map",
        "text-halo-color": "#222",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_capital_dot_z7",
      "type": "symbol",
      "source": "carto",
      "source-layer": "place",
      "minzoom": 7,
      "maxzoom": 8,
      "filter": [
        "all",
        [
          ">",
          "capital",
          0
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": 12,
        "icon-image": "circle-11",
        "icon-offset": [
          16,
          5
        ],
        "text-anchor": "right",
        "icon-size": 0.4,
        "text-max-width": 8,
        "text-keep-upright": true,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#666",
        "icon-color": "#666",
        "icon-translate-anchor": "map",
        "text-halo-color": "#222",
        "text-halo-width": 1
      }
    },
    {
      "id": "poi_stadium",
      "type": "symbol",
      "source": "carto",
      "source-layer": "poi",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "in",
          "class",
          "stadium",
          "cemetery",
          "attraction"
        ],
        [
          "<=",
          "rank",
          3
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              15,
              8
            ],
            [
              17,
              9
            ],
            [
              18,
              10
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#515151",
        "text-halo-color": "#151515",
        "text-halo-width": 1
      }
    },
    {
      "id": "poi_park",
      "type": "symbol",
      "source": "carto",
      "source-layer": "poi",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "class",
          "park"
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              15,
              8
            ],
            [
              17,
              9
            ],
            [
              18,
              10
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#515151",
        "text-halo-color": "#151515",
        "text-halo-width": 1
      }
    },
    {
      "id": "roadname_minor",
      "type": "symbol",
      "source": "carto",
      "source-layer": "transportation_name",
      "minzoom": 16,
      "filter": [
        "all",
        [
          "in",
          "class",
          "minor",
          "service"
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "text-font": [
          "Montserrat Regular",
          "Open Sans Regular",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": 9,
        "text-field": "{name}",
        "symbol-avoid-edges": false,
        "symbol-spacing": 200,
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-justify": "center"
      },
      "paint": {
        "text-color": "#383838",
        "text-halo-color": "#111",
        "text-halo-width": 1
      }
    },
    {
      "id": "roadname_sec",
      "type": "symbol",
      "source": "carto",
      "source-layer": "transportation_name",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "text-font": [
          "Montserrat Regular",
          "Open Sans Regular",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              15,
              9
            ],
            [
              16,
              11
            ],
            [
              18,
              12
            ]
          ]
        },
        "text-field": "{name}",
        "symbol-avoid-edges": false,
        "symbol-spacing": 200,
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-justify": "center"
      },
      "paint": {
        "text-color": "#383838",
        "text-halo-color": "#111",
        "text-halo-width": 1
      }
    },
    {
      "id": "roadname_pri",
      "type": "symbol",
      "source": "carto",
      "source-layer": "transportation_name",
      "minzoom": 14,
      "filter": [
        "all",
        [
          "in",
          "class",
          "primary"
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "text-font": [
          "Montserrat Regular",
          "Open Sans Regular",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              14,
              10
            ],
            [
              15,
              10
            ],
            [
              16,
              11
            ],
            [
              18,
              12
            ]
          ]
        },
        "text-field": "{name}",
        "symbol-avoid-edges": false,
        "symbol-spacing": {
          "stops": [
            [
              6,
              200
            ],
            [
              16,
              250
            ]
          ]
        },
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-justify": "center",
        "text-letter-spacing": {
          "stops": [
            [
              14,
              0
            ],
            [
              16,
              0.2
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#383838",
        "text-halo-color": "#111",
        "text-halo-width": 1
      }
    },
    {
      "id": "roadname_major",
      "type": "symbol",
      "source": "carto",
      "source-layer": "transportation_name",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "in",
          "class",
          "trunk",
          "motorway"
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "text-font": [
          "Montserrat Regular",
          "Open Sans Regular",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              14,
              10
            ],
            [
              15,
              10
            ],
            [
              16,
              11
            ],
            [
              18,
              12
            ]
          ]
        },
        "text-field": "{name}",
        "symbol-avoid-edges": false,
        "symbol-spacing": {
          "stops": [
            [
              6,
              200
            ],
            [
              16,
              250
            ]
          ]
        },
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-justify": "center",
        "text-letter-spacing": {
          "stops": [
            [
              13,
              0
            ],
            [
              16,
              0.2
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#383838",
        "text-halo-color": "#111",
        "text-halo-width": 1
      }
    },
    {
      "id": "housenumber",
      "type": "symbol",
      "source": "carto",
      "source-layer": "housenumber",
      "minzoom": 17,
      "maxzoom": 24,
      "layout": {
        "text-field": "{housenumber}",
        "text-size": {
          "stops": [
            [
              17,
              9
            ],
            [
              18,
              11
            ]
          ]
        },
        "text-font": [
          "Montserrat Regular",
          "Open Sans Regular",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ]
      },
      "paint": {
        "text-halo-color": "transparent",
        "text-color": "transparent",
        "text-halo-width": 0.75
      }
    }
  ],
  "id": "voyager",
  "owner": "Carto"
}