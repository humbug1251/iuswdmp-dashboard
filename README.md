# IUSWDMP Progress Dashboard

A static, two-level dashboard for the **Survey, Collection of Data, Preparation of Integrated Urban Storm Water Drainage Master Plan (IUSWDMP)** programme in Uttar Pradesh.

- **Landing page** — six horizontal city cards and a coverage map showing all six cities. The latest WPR period sits in the top bar.
- **City dashboard** - opens with only the outer boundary visible. Survey, ward and buffer layers are switched on from the left panel; the right panel holds the progress reading from the latest weekly progress report.

The app is plain HTML, CSS and JavaScript. There is no build step and no server requirement: open `index.html` directly, or serve the folder with any static file server.

---

## 1. Quick start

### Option A — double-click

Open `index.html` in a modern browser (Chrome, Edge, Firefox). Everything in the interface is local; basemap tiles require an internet connection.

### Option B — local server

```powershell
cd "C:\Users\swaga\OneDrive - CWD\UP Stormwater\Dashboard-UP"
python -m http.server 8000
```

Then open <http://127.0.0.1:8000/>.

The basemap will not load without an internet connection, but the layer controls, progress panel, data files and all dashboard styling remain usable.

---

## 2. Current data status

| City | WPR | GIS layers | Overall progress | Notes |
|---|---|---|---|---|
| Firozabad | 30 Oct–5 Nov 2026 | Yes | 83.0% | Real boundary, buffer, ward and control-point KMLs; real primary/secondary/tertiary drain shapefiles; real drone flight-block KML |
| Shahjahanpur | 30 Oct–5 Nov 2026 | Yes | 85.9% | Real outer boundary, 60 wards, classified drain KML, ortho overlay, 77 GCPs, 5 static points, 4 TBM points and 27 drone blocks; no buffer; primary drain marked 100% complete |
| Saharanpur | 30 Oct–5 Nov 2026 | Yes | 78.1% | Real outer boundary, 70 wards, AOI buffer, 6 Nov conduits, GCP, TBM and drone blocks; no ortho supplied |
| Moradabad | 30 Oct–6 Nov 2026 | Yes | 77.7% | Real outer/ward boundaries, AOI buffer, 5 Nov primary/secondary/tertiary drains, GCP, TBM and 14 drone blocks; no ortho |
| Meerut | 30 Oct–5 Nov 2026 | Yes | 50.0% | Real outer/ward boundaries, buffer, 5 Nov primary/secondary drains, TBM and static points from `TBM.kmz`; no GCP, drone blocks or ortho |
| Ghaziabad | 30 Oct–5 Nov 2026 | Yes | 44.5% | Real outer boundary, 100 wards, 5 Nov drains, 22 TBM points and six static points; no buffer, drone-block or ortho layers |

> The official spelling **Shahjahanpur** is used (the source folder is also `Shahjahanpur`).

### What is real vs illustrative

| Layer | Firozabad status |
|---|---|
| Outer boundary | Real — from `Firozabad Nagar Nigam Boundary _Final.kml` |
| Buffer boundary | Real — from `FIROZABAD BUFFER_AREA (42.6 Sq.kms).kml` |
| GCP points | Real - 85 unique identifiable point geometries from `GCP_Firozabad(86_Points).kml` (WPR reports 86 completed) |
| TBM points | Real - 2 benchmark points from the same KML |
| Drains surveyed | Real — 5 Nov primary/secondary/tertiary SHPs; 5,428 mapped segments, 350.0 km |
| Ward boundary | Real - 70 ward polygons from `Firozabad_70Wardwise_Map.kml` |
| Drone survey blocks | Real - 10 drone flight blocks from `Drone_Flight_Blocks_Firozabad.kml` |
| Survey photos | Real - 1,079 compressed photos from `Firozabad_Survey_Photos.kmz`; 111 photos were unrecoverable because the source KMZ is truncated |
| Ortho image | Real - downscaled orthomosaic mask overlaid on the city boundary |

All Firozabad layers now come from the supplied survey data.

WPR figures (30 Oct–5 Nov 2026): primary 58.5 km, secondary 7.624 km, tertiary 164.661 km, road 241.015 / 758 km, GCP 86 / 86, static 5 / 5 and LiDAR 35.5 sq km.

The map now uses the 5 Nov primary, secondary and tertiary SHPs: **5,428 mapped segments / 350.0 km**, with primary 109.2 km, secondary 8.4 km and tertiary 232.3 km. These map totals are higher than the WPR component totals because the SHPs include all digitized and outfall-extension geometry.

The photo layer contains **1,079 recovered geotagged survey photos**. The supplied KMZ is missing its ZIP central directory and the final 111 images, so those 111 photos could not be extracted; re-exporting a complete KMZ would allow the layer to be completed.

### Shahjahanpur layers

| Layer | Status |
|---|---|
| Outer boundary | Real — KML, 56.46 sq km |
| Ward boundary | Real — 60 wards from `60_Wards_New_Ward_Boundary.kml` |
| Buffer boundary | Not supplied |
| Drains surveyed | Real — `Surveyed Drain classification (30.10.26).kml`, 3,761 source features / 3,856 mapped line segments, 325.1 km |
| GCP marked | Real — 77 KML points |
| TBM | Real — 4 points from `SP+TBM Locations.kml` |
| Static points | Real — 5 points from `SP+TBM Locations.kml` |
| Drone survey blocks | Real — 27 survey blocks; the Jail polygon is excluded |
| Survey photos | Real — 1,394 combined photos from 28 unique site KMZ files; 65 duplicate images removed |
| Ortho image | Real — `ORI.tif`, 1.9 m resolution, masked overlay in `Shahjahanpur_Ortho_Overlay.webp` |

The classified drain KML uses `P`, `S` and `T` type codes. Mapped totals are **26.2 km primary**, **35.8 km secondary** and **263.1 km tertiary**. Primary drain progress is **100% complete** (29.1 / 29.1 km). The WPR reports 29.1 km primary, 341.5 km secondary/tertiary, 322 / 740 km roads, 77 GCPs, 5 static points, 54.825 sq km LiDAR acquisition (processing in progress), 31 outfalls and a 56.24 sq km RFP area (40.1 sq km ward KML). The supplied drain KML is a partial network, so its 325.1 km total is below the WPR secondary/tertiary figure.

The ortho overlay is generated from `ORI.tif` (5,089 × 5,942 px, 1.9 m, EPSG:32644), masked to the outer boundary and saved as `assets/ortho/Shahjahanpur_Ortho_Overlay.webp`.

### Saharanpur layers

| Layer | Status |
|---|---|
| Outer boundary | Real — SHP, 80.58 sq km |
| Ward boundary | Real — 70 wards from `Saharanpur_Wards.kml` |
| Buffer boundary | Real — `AOI.kml`, 100.2 sq km |
| Drains surveyed | Real — `Conduits_till_06_Nov.shp`, 5,922 mapped segments, 197.0 km |
| GCP marked | Real — 181 mapped points from 182 KML placemarks (WPR reports 182 completed) |
| TBM | `SAHARANPUR_TBM.csv` — **42 points** (40 unique labels; TBM1 and TBM3 repeat); elevations from `TBM_KML.kml` where matched |
| Drone survey blocks | Real — 14 merged flight-plan polygons |
| Ortho image | Not supplied for Saharanpur |

The WPR reports 14.58 km primary drains, 159.91 km secondary + tertiary, 159.91 / 1,298.41 km roads, 182 GCPs, 5 static points, 22.38 km river survey and 90 sq km LiDAR coverage.

The 6 Nov drain SHP contains **498 primary**, **5,228 secondary**, **280 natural-stream** and **10 unclassified** source segments. After cleaning, **5,922 segments / 197.0 km** are mapped: primary 14.6 km, secondary 159.4 km, natural streams 22.7 km and unclassified 0.2 km. Natural streams are shown in green and blanks in grey; only actual tertiary drains would use pink, and this SHP has none. The map primary geometry now matches the WPR’s 14.58 km.

### Moradabad layers

| Layer | Status |
|---|---|
| Outer boundary | Real — KML, 64.43 sq km |
| Ward boundary | Real — 70 labelled ward polygons from the administrative KML |
| Buffer boundary | Real — AOI KML, 100.39 sq km |
| Drains surveyed | Real — 5 Nov primary/secondary/tertiary SHPs; 1,100 mapped segments, 247.9 km |
| GCP marked | Real — 202 unique KML points (WPR reports 206) |
| TBM | 40 geotagged locations from `TBM_photos.kml`; 3 carry elevations from the 27 Oct survey CSV (TBM1 209.96 m, TBM2 209.97 m, MRDST1 194.73 m) |
| Survey photos | Real — 533 compressed photos from `Survey_Moradabad_photos.kmz` |
| Drone survey blocks | Real — 14 block KMLs |
| Ortho image | Not supplied for Moradabad |

WPR figures: primary 135.18 / 140 km, secondary 67.27 km, tertiary 51.90 km, road 165.66 / 1,155 km, GCP 206 / 206, static 10 / 10, LiDAR 100 sq km.

The TBM layer uses the 40 geotagged photo locations in `TBM_photos.kml`. Only three points have elevations, matched from the 27 Oct survey CSV; the remaining 37 are location-only.

The mapped drain lengths are **129.9 km primary**, **71.3 km secondary** and **46.6 km tertiary**. The 1,112 source segments become 1,100 mapped segments after dropping sub-2 m geometry. Primary and tertiary mapped lengths differ from the WPR totals because the 5 Nov hierarchy layers are a separate compilation.

### Meerut layers

| Layer | Status |
|---|---|
| Outer boundary | Real — SHP, 143.84 sq km |
| Ward boundary | Real — 90 wards from `MEERUT_WARD _BOUNDARY_new.shp` |
| Buffer boundary | Real — `Meerut_Survey Boundary.shp`, 188.82 sq km |
| Drains surveyed | Real — 5 Nov primary and secondary SHPs; 1,001 mapped segments, 298.3 km |
| TBM | 23 points parsed from `TBM.kmz` |
| Static points | 10 points parsed from `TBM.kmz` |
| Survey photos | Real — 630 compressed photos from `Meerut_SWmaps_combined 1 (2).kmz` |
| GCP marked | Not reported for Meerut |
| Drone survey blocks | Not required for Meerut |
| Ortho image | Not supplied for Meerut |

WPR figures: primary 74.66 / 80 km (93.3%; the mapped alignment total is 85.59 km), secondary + tertiary 228.72 km, road 162.6 / 2,458 km, static 10 / 10, LiDAR not started, outfalls 4. No GCP points or drone blocks are reported for Meerut; LiDAR is planned with a helicopter-mounted system. The primary layer contains 20 alignments and 74.7 km; the 5 Nov secondary/tertiary SHP has 189 secondary, 64 tertiary and 728 mapped unclassified segments (177.5 km).

### Ghaziabad layers

| Layer | Status |
|---|---|
| Outer boundary | Real — SHP, 170.97 sq km |
| Ward boundary | Real — 100 wards from `GZD_Wards_100.shp` |
| Buffer boundary | Not supplied |
| Drains surveyed | Real — 29 Oct KMZ plus 30 Oct–5 Nov SHP; 3,218 mapped segments, 204.6 km |
| TBM | Real — 22 points from `Ghaziabad_Most_22_TBMs.csv`; TBM 6 is a CAD/grid point, the rest are RTK fixes |
| Static points | Real — six points from `Static Points_GZB.shp`, elevations from `GAZIABAD Main Control Points.csv`; `Static Point 8.kmz` contains ST08 |
| GCP marked | Not reported for Ghaziabad |
| Drone survey blocks | Not required for Ghaziabad |
| Ortho image | Not supplied for Ghaziabad |

The 29 Oct KMZ contains **3,121 source features / 102.6 km**; hierarchy was matched from the 24 Oct SHP by drain name: **1,245 primary**, **903 tertiary** and **947 unclassified** mapped segments. The 30 Oct–5 Nov SHP adds **123 segments / 102.2 km**, all shown as unclassified, for a mapped total of **3,218 segments / 204.6 km**. WPR figures: primary 160.5 / 223 km, secondary + tertiary 72.52 km, road 206.4 / 3,450 km, static 6 / 6, LiDAR not started, outfalls 4. The WPR road row shows 104.3 km as the previous-week length, apparently copied from the primary row; the reported cumulative is 206.4 km. The WPR secondary/tertiary page reports 72.52 km, while a later table says 75.52 km; 26.62 + 45.9 = 72.52 km. The mapped total remains below the WPR surveyed total because the network compilation is partial.

The static-point CSV also contains an older ST3 record; the six-point SHP and the WPR set use **ST01, ST02, ST05, ST06, ST07 and ST08**.

---

## 3. Project structure

```
Dashboard-UP/
├─ index.html                  # landing page + city dashboard shell
├─ assets/
│  ├─ css/app.css              # all styles, responsive layout
│  ├─ js/app.js                # routing, rendering, Leaflet maps
│  ├─ fonts/                   # local Manrope + IBM Plex Mono
│  └─ vendor/leaflet/          # local Leaflet 1.9.4
├─ data/
│  ├─ cities.js                # generated city metadata and progress figures
│  └─ layers/
│     ├─ firozabad.js          # generated GeoJSON layers for the map
│     ├─ saharanpur.js         # generated GeoJSON layers for the map
│     ├─ moradabad.js          # generated GeoJSON layers for the map
│     ├─ meerut.js             # generated GeoJSON layers for the map
│     ├─ ghaziabad.js          # generated GeoJSON layers for the map
│     ├─ shahjahanpur.js       # generated GeoJSON layers for the map
│     └─ _template.js          # copy-paste template for a new city
├─ tools/
│  ├─ build_data.py            # builds the two data files
│  └─ requirements.txt         # Python dependencies for the build script
├─ Incoming Data/              # source KMLs, WPRs and reports (untouched)
└─ README.md
```

The dashboard never reads from `Incoming Data` at runtime. The build script converts the relevant KMLs and progress numbers into the two local JS data files.

---

## 4. Updating the dashboard

### 4.1 Update progress figures

Progress figures live in `tools/build_data.py` in the per-city definitions (`FIROZABAD`, `SHAHJAHANPUR`, `SAHARANPUR`, `MORADABAD`, `MEERUT`, `GHAZIABAD`). Each city has:

```python
"components": {
    "primary":  {"done": 58.5, "planned": 40.7, "pct": 100.0, "unit": "km"},
    "secondary": {"done": 6.635, "planned": None, "pct": None, "unit": "km"},
    "tertiary":  {"done": 122.15, "planned": None, "pct": None, "unit": "km"},
    "road":      {"done": 197.515, "planned": 758, "pct": 26.1, "unit": "km"},
    "gcp":       {"done": 86, "planned": 86, "pct": 100.0, "unit": "nos"},
    "static":    {"done": 5, "planned": 5, "pct": 100.0, "unit": "nos"},
    "lidar":     {"done": 35.5, "planned": 35.5, "pct": 100.0, "unit": "sq km"}
},
```

Then rebuild:

```powershell
pip install -r tools/requirements.txt
python tools/build_data.py
```

The script rewrites `data/cities.js` and the Firozabad, Saharanpur, Meerut, Ghaziabad and Shahjahanpur layer files. You can also edit `data/cities.js` directly for a quick one-off number change, but the next build will overwrite it. The Moradabad layer file is generated from its own builder and kept as-is because its TBM source CSV is no longer present.

The build script uses `geopandas`, `shapely` and `pyproj`. It reads the ward KML and the primary, secondary and tertiary drain shapefiles directly from `Incoming Data`; no network access is required.

### 4.2 Replace or add GIS layers

1. Put the new boundary / ward / drain / GCP / TBM / static-point files in a city folder under `Incoming Data`.
2. Update the file paths near the top of `tools/build_data.py` (`OUTER_KML`, `BUFFER_KML`, `GCP_KML`, `WARD_KML`, `DRAIN_SHP`).
3. Re-run `python tools/build_data.py`.

The Firozabad builder currently generates:

- `outer`, `buffer` — from KML polygons
- `gcp`, `tbm` - from the control-point KML
- `drains` - classified KML up to 29 Oct 2026
- `wards` - real ward polygons from `Firozabad_70Wardwise_Map.kml`
- `blocks` - real drone flight blocks from `Drone_Flight_Blocks_Firozabad.kml`

### 4.3 Add a new city with GIS data

Use `data/layers/_template.js` as the starting point.

1. Add a `data/layers/<city>.js` file with:

```js
window.CITY_LAYERS = window.CITY_LAYERS || {};
window.CITY_LAYERS["<city>"] = {
  center: [lat, lng],
  bounds: [[south, west], [north, east]],
  stats: { areaSqKm: 0, drainsKm: 0, gcp: 0, tbm: 0, static: 0, blocks: 0, wards: 0 },
  gcpAvailable: true,
  blocksAvailable: true,
  layers: {
    outer:  { type: "FeatureCollection", features: [] },
    buffer: { type: "FeatureCollection", features: [] },
    wards:  { type: "FeatureCollection", features: [] },
    blocks: { type: "FeatureCollection", features: [] },
    drains: { type: "FeatureCollection", features: [] },
    gcp:    { type: "FeatureCollection", features: [] },
    tbm:    { type: "FeatureCollection", features: [] },
    static: { type: "FeatureCollection", features: [] }
  },
  sources: ["Source file names"]
};
```

2. Add a `<script>` tag for the file in `index.html` after `data/layers/firozabad.js`.
3. Add the city to the `CITIES` list in `tools/build_data.py` with `"layerKey": "<city>"` and `"layersAvailable": true` (or duplicate the generated structure directly in `data/cities.js`).

The map expects the same GeoJSON properties used by the Firozabad layers. See `build_data.py` for the exact property names.

---

## 5. Data model and calculations

### Overall progress

```
overall = mean(available component %)
```

The components are primary drain, road survey, GCP marking where reported (otherwise static points), and LiDAR. Cities that do not report GCP points or drone blocks, such as Meerut and Ghaziabad, omit those components entirely.

- Each component is `min(100, completed / planned × 100)`.
- Components with no notified target are excluded from the mean and shown as completed length only.
- The mean is an unweighted average, not a schedule or earned-value measure. The city progress panel labels the overall figure as a simple mean of the available components.

### Component targets

- The primary-drain target is tentative and based on OSM.
- Firozabad's primary survey (58.5 km) exceeds the 40.7 km OSM target because the survey was extended to outfalls. It is shown as 100% with a note.
- Secondary/tertiary targets have not been notified, so those components are not assigned a percentage.
- Firozabad's road target is shown as **758 km** (latest detail table); the summary table in the same WPR states 740 km.

### Layer counts

- GCP: 85 unique identifiable point geometries in the KML; the WPR reports 86 GCPs completed.
- TBM: 2 benchmark points.
- Drains: 5,428 mapped segments from the 5 Nov SHPs, 350.0 km total.
- Wards: 70 ward polygons from `Firozabad_70Wardwise_Map.kml`. The source labels two polygons as Ward 43 and omits Ward 42; the larger 0.889 sq km polygon was relabelled Ward 42 Ram Nagar, matching the WPR, to complete the 1–70 sequence.
- LiDAR blocks: 10 drone flight blocks from the supplied KML.

---

## 6. Basemaps and attribution

The city map offers:

| Basemap | Tiles |
|---|---|
| Streets | OpenStreetMap |
| Satellite | Esri World Imagery + Esri reference labels |

The landing-page coverage map uses Google satellite tiles with the six red city markers and labels overlaid. Attribution is displayed by Leaflet in the bottom-right corner. If Google tiles are unavailable, the map falls back to OpenStreetMap automatically. For a production deployment, move the landing map to the official Google Maps JavaScript API with an API key (or use the OSM fallback as the primary basemap). The public OSM tile service is fine for demos and light internal use; for high-traffic use, use a licensed tile provider and confirm the imagery terms with Google/Esri.

The city map uses Leaflet with OSM/Esri. The landing coverage map uses Google satellite tiles without a key for this demo; if that is a production requirement, add a Google Maps JavaScript API key and either use the Google Maps JS API directly or a Leaflet Google-mutant plugin. The overlay layers can be reused.

---

## 7. Browser support

Tested with current Chrome and Edge. The layout uses CSS Grid, `backdrop-filter` and SVG. Older browsers may degrade gracefully (no blurred panels), but the data and controls remain usable.

For best results, use a desktop viewport of 1280 px or wider. Below 1200 px the layer and progress panels become bottom sheets opened by the **Layers** and **Progress** buttons.

---

## 8. Sources

- Firozabad boundary, buffer and ward KMLs: `Incoming Data/Firozabad/Ward_Boundary,Outer_Boundary_BufferMap/`
- Firozabad control points: `Incoming Data/Firozabad/GCP's and Static Points/GCP_Firozabad(86_Points).kml`
- Firozabad drone flight blocks: `Incoming Data/Firozabad/Drone_Survey_Flight_Blocks/Drone_Flight_Blocks_Firozabad.kml`
- Firozabad drain shapefiles: `Incoming Data/Firozabad/Survey_Data_Digitized_Till_now/`
- Firozabad WPR: `Incoming Data/Firozabad/WPR/Firozbad_WPR_30Oct_5Nov.docx`
- Saharanpur WPR: `Incoming Data/Saharanpur/WPR/SRE_WPR_Submission_30_Oct_to_05_Nov_2026.docx`
- Saharanpur layers: `Incoming Data/Saharanpur/`
- Saharanpur TBM points: `Incoming Data/Saharanpur/TBM_SHP_KML/SAHARANPUR_TBM.csv`; elevations from `TBM_KML.kml`
- Moradabad WPR: `Incoming Data/Moradabad/WPRs/Moradabad_WPR_30_10_2026to6_11_2026.pdf`
- Moradabad layers: `Incoming Data/Moradabad/`
- Meerut WPR: `Incoming Data/Meerut/WPRs/Meerut_WPR_30 Oct to 05 Nov_06112026.pdf`
- Meerut layers and TBM/static points: `Incoming Data/Meerut/`, `Incoming Data/Meerut/TBM_KML/TBM.kmz`
- Ghaziabad WPR: `Incoming Data/Ghaziabad/WPR/Ghaziabad_WPR_20261106 2.pdf`
- Ghaziabad layers: `Incoming Data/Ghaziabad/Boundary Shapefiles/`, `Incoming Data/Ghaziabad/Digitized Drains/`
- Ghaziabad static points: `Incoming Data/Ghaziabad/Static Points/`
- Ghaziabad TBM points: `Incoming Data/Ghaziabad/TBM/Ghaziabad_Most_22_TBMs.csv`
- Shahjahanpur WPR: `Incoming Data/Shahjahanpur/WPR/Weekly Report_ UP_Shahajanpur_30 Oct to 5th Nov.docx`
- Shahjahanpur layers: `Incoming Data/Shahjahanpur/`
- Shahjahanpur ortho: `Incoming Data/Shahjahanpur/Ortho/ORI.tif`
- Basemap imagery: Google, Esri and its data providers; OSM © OpenStreetMap contributors

A downscaled copy of the Firozabad orthomosaic is available at `assets/ortho/Firozabad_Ortho_Downscaled.tif` — 14.4 MB, 6,116 × 5,987 px, about 1.33 m resolution, EPSG:32644, JPEG-compressed GeoTIFF. The map layer uses `assets/ortho/Firozabad_Ortho_Overlay.webp` (4.96 MB), masked to the city boundary. The 195 MB source file under `Incoming Data` is left unchanged.

No source files under `Incoming Data` are modified by the dashboard.
