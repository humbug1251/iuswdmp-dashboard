/*
 * Layer template for a new city.
 *
 * 1. Copy this file to data/layers/<city-id>.js and replace the placeholder
 *    FeatureCollections with real GeoJSON.
 * 2. Add a <script> tag for it in index.html after data/layers/firozabad.js.
 * 3. In data/cities.js, set:
 *      "layerKey": "<city-id>",
 *      "layersAvailable": true
 * 4. Keep the property names used below; the map popups read them.
 *
 * Every layer is optional. An empty FeatureCollection simply disables that
 * layer toggle for the city.
 */
window.CITY_LAYERS = window.CITY_LAYERS || {};
window.CITY_LAYERS['new-city'] = {
  center: [27.0, 78.0],
  bounds: [[26.9, 77.9], [27.1, 78.1]],
  stats: {
    areaSqKm: 0,
    drainsKm: 0,
    gcp: 0,
    tbm: 0,
    static: 0,
    blocks: 0,
    wards: 0
  },
  gcpAvailable: true,
  blocksAvailable: true,
  layers: {
    // Polygon — properties: area_sqkm, source
    outer: { type: 'FeatureCollection', features: [] },

    // Polygon — properties: area_sqkm, source
    buffer: { type: 'FeatureCollection', features: [] },

    // Polygon — properties: name, label, area_sqkm, sample, source
    wards: { type: 'FeatureCollection', features: [] },

    // Polygon — properties: name, label, area_sqkm, status, sample, source
    blocks: { type: 'FeatureCollection', features: [] },

    // LineString — properties: name, hierarchy ("Primary" | "Secondary" | "Tertiary"),
    // length_km, status, source
    drains: { type: 'FeatureCollection', features: [] },

    // Point — properties: name, elevation_m, kind ("GCP"), source
    gcp: { type: 'FeatureCollection', features: [] },

    // Point — properties: name, elevation_m, kind ("TBM"), source
    tbm: { type: 'FeatureCollection', features: [] },

    // Point — properties: name, elevation_m, kind ("Static"), source
    static: { type: 'FeatureCollection', features: [] }
  },
  sources: [
    'Boundary KML / GeoJSON source',
    'Control-point KML / GeoJSON source',
    'Drain survey source'
  ]
};
