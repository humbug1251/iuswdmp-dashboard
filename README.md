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

> Latest WPR period on the dashboard: **21–27 Nov 2026** (figures updated to 26/27 Nov 2026).

| City | WPR | GIS layers | Overall progress | Notes |
|---|---|---|---|---|
| Firozabad | 21–27 Nov 2026 | Yes | 84.3% | Real boundary, buffer, ward and control-point KMLs; real primary/secondary/tertiary drain shapefiles with tertiary up to 12 Nov; real drone flight-block KML |
| Shahjahanpur | 21–27 Nov 2026 | Yes | 86.7% | Real outer boundary, 60 wards, classified drain KML, ortho overlay, 77 GCPs, 5 static points, 70 TBM points and 27 drone blocks; no buffer; primary drain marked 100% complete |
| Saharanpur | 21–27 Nov 2026 | Yes | 78.3% | Real outer boundary, 70 wards, AOI buffer, 26 Nov conduits, GCP, TBM and drone blocks; ortho and DSM included |
| Moradabad | 21–27 Nov 2026 | Yes | 78.8% | Real outer/ward boundaries, AOI buffer, 13 Nov primary/secondary/tertiary drains, GCP, TBM and 14 drone blocks; no ortho |
| Meerut | 21–27 Nov 2026 | Yes | 50.5% | Real outer/ward boundaries, buffer, 5 Nov primary/secondary drains, TBM and static points from `TBM.kmz`; no GCP, drone blocks or ortho |
| Ghaziabad | 21–27 Nov 2026 | Yes | 44.9% | Real outer boundary, 100 wards, 12 Nov drains, 22 TBM points and six static points; no buffer, drone-block or ortho layers |

> The official spelling **Shahjahanpur** is used (the source folder is also `Shahjahanpur`).

### What is real vs illustrative

| Layer | Firozabad status |
|---|---|
| Outer boundary | Real — from `Firozabad Nagar Nigam Boundary _Final.kml` |
| Buffer boundary | Real — from `FIROZABAD BUFFER_AREA (42.6 Sq.kms).kml` |
| Catchment boundary | Real — `Subcatchment_OuterBoundary.shp`, 109.33 sq km watershed area |
| Subcatchments | Real — **1,040 WDT subcatchment polygons** (109.31 sq km, clipped to the catchment boundary); geometry simplified for display |
| GCP points | Real - 85 unique identifiable point geometries from `GCP_Firozabad(86_Points).kml` (WPR reports 86 completed) |
| TBM points | Real - 41 benchmarks from `TBM_27Nov.kml` (50 rows; 7 far outside Firozabad and 2 duplicate readings removed); 31 carry RL values |
| Drains surveyed | Real - 23 Nov PST SHPs; 7,892 mapped segments, 549.0 km |
| Ward boundary | Real - 70 ward polygons from `Firozabad_70Wardwise_Map.kml` |
| Drone survey blocks | Real - 10 drone flight blocks from `Drone_Flight_Blocks_Firozabad.kml` |
| Survey photos | Real - 1,497 compressed photos: 1,079 from `Firozabad_Survey_Photos.kmz` (25 Sep–05 Oct 2026) + 418 from `Photos_Firozabad_photos.kmz` (15–30 Oct 2026) |
| Ortho image | Real - downscaled orthomosaic mask overlaid on the city boundary |
| DSM | Real - 15.6 GB DSM reprojected to north-up WGS84 at 2.67 m/px, shaded-relief WebP, nodata transparent; elevation stretch 151–175 m (full range 128.5–216.1 m) |
| Survey points | Real - **127,791 DGPS observations** from `Firozabad_Processed_Survey_upto_10_11_2026.csv` plus 220 points from `2026-10-14 Primary dran_csv_10.csv`; 17,660 carry elevations (148.6–179.3 m), UTM 44N converted to WGS84 |
| DSM surface | Real - 2.67 m hillshade overlay, masked to the city boundary |

All Firozabad layers now come from the supplied survey data.

WPR figures (to 26 Nov 2026): primary 65.415 km, secondary + tertiary 486.685 km (total 552.1 km), road 388.715 / 758 km, GCP 86 / 86, static 5 / 5 and LiDAR 35.5 sq km.

The map now uses the 23 Nov PST SHPs: **7,892 mapped segments / 549.0 km**, with primary 73.7 km, secondary 31.3 km and tertiary 444.1 km. These map totals are higher than the WPR component totals because the SHPs include all digitized and outfall-extension geometry.

The photo layer contains **1,497 geotagged photos** from two sources: 1,079 from `Firozabad_Survey_Photos.kmz` (25 Sep–05 Oct 2026) and 418 from `Photos_Firozabad_photos.kmz` (15–30 Oct 2026). Date ranges do not overlap and no duplicate images were detected.

### Shahjahanpur layers

| Layer | Status |
|---|---|
| Outer boundary | Real — KML, 56.46 sq km |
| Ward boundary | Real — 60 wards from `60_Wards_New_Ward_Boundary.kml` |
| Buffer boundary | Not supplied |
| Drains surveyed | Real - `SURVEY CLASSIFICATION 27.11.26.shp`, 5,385 mapped segments, 474.4 km |
| Primary drains & outfalls | Real — `Primary drains (lined vs unlined) & outfall.kmz`: 597 segments (97 Lined RCC, 259 Lined Brick, 239 Unlined) + 31 outfalls + 31 drain points; drain names in hover/click popups |
| GCP marked | Real — 77 KML points |
| TBM | Real - 70 benchmarks from `SHAHJANPUR MERGED TBM EXCEL.xlsx` (71 rows; one 4 cm duplicate at TBM6 removed); UTM 44N converted to WGS84, elevations included |
| Survey points | Real - **211,844 DGPS observations** from `SHAHJAHANPUR_ALL_POINTS_MERGED_Till 10th Nov.csv`; all carry elevations (141.67–166.59 m), 411 attribute labels, UTM 44N converted to WGS84 |
| Static points | Real — 5 points from `SP+TBM Locations.kml` |
| Drone survey blocks | Real — 27 survey blocks; the Jail polygon is excluded |
| Survey photos | Real - 5,370 compressed photos from `Shahjahanpur_Photos_Combined_640px.kmz` (18 Sep–16 Nov 2026, 43 dates; no duplicates) |
| Ortho image | Real - `ORI.tif`, 1.9 m resolution, north-up WGS84 overlay in `Shahjahanpur_Ortho_Overlay.webp` (source no-data gaps transparent) |
| DSM | Real - 10 GB DSM reprojected to north-up WGS84 at 3.44 m/px, shaded-relief WebP, nodata gaps transparent; elevation stretch 146–164 m (full range 76.8–194.5 m) |

The classified drain SHP uses `P`, `S` and `T` type codes. Mapped totals are **34.65 km primary**, **57.18 km secondary**, **380.72 km tertiary** and **1.8 km unclassified**. Primary drain progress is **100% complete** (34.6 / 31.4 km; 45 outfalls identified). The WPR (13–19 Nov) reports 34.6 km primary, 515.1 km secondary/tertiary, 367 / 740 km roads, 77 GCPs, 5 static points, 54.825 sq km LiDAR acquisition (DTM processing in progress), 45 outfalls and a 56.24 sq km RFP area (40.1 sq km ward KML). The supplied drain SHP is a partial network, so its 437.9 km secondary/tertiary total is below the WPR 515.1 km figure.

The ortho overlay is generated from `ORI.tif` (5,089 × 5,942 px, 1.9 m, EPSG:32644), reprojected to north-up EPSG:4326 (5,143 × 5,988 px), with the source white no-data gaps made transparent and the outer boundary mask applied; saved as `assets/ortho/Shahjahanpur_Ortho_Overlay.webp`.

### Saharanpur layers

| Layer | Status |
|---|---|
| Outer boundary | Real — SHP, 80.58 sq km |
| Ward boundary | Real — 70 wards from `Saharanpur_Wards.kml` |
| Buffer boundary | Real — `AOI.kml`, 100.2 sq km |
| Catchment boundary | Real — `Catchment_Boundary_Updated.shp`, 218.52 sq km watershed area |
| Drains surveyed | Real - `Conduits_till_Survey_26_Nov.shp`, 8,602 mapped segments, 278.5 km |
| Subcatchments | Real — **480 WDT subcatchment polygons** (218.53 sq km, clipped to the catchment boundary); geometry simplified for display |
| WDT channels | Real — **639 channel lines** (638.83 km, clipped to the catchment boundary); geometry simplified for display |
| GCP marked | Real — 181 mapped points from 182 KML placemarks (WPR reports 182 completed) |
| TBM | `SAHARANPUR_TBM.csv` — **42 points** (40 unique labels; TBM1 and TBM3 repeat); elevations from `TBM_KML.kml` where matched |
| Static points | Real — **5 points** from `SAHARANPUR STATIC POINTS 1.csv` (UTM 43N converted to WGS84); elevations from Ortho H |
| Survey points | Real — **107,533 DGPS observations** from `Saharanpur_DGPS.kmz`, 18 Sep–07 Nov 2026; drawn as a canvas point cloud, click a point for team, date and elevation |
| Survey photos | Real - 2,107 compressed photos from `Saharanpur_Combined_photos.kmz` |
| Drone survey blocks | Real — 14 merged flight-plan polygons |
| Ortho image | Real — `SAHARANPUR_ORTHO.ecw` (9 GB) converted to a 2.09 m/px WebP overlay, reprojected to north-up WGS84 (EPSG:4326) and masked to the boundary |

The WPR reports 14.6 km primary drains, 17.8 km secondary, 221.03 km tertiary (238.83 km combined), 173.119 / 1,298.41 km roads, 182 GCPs, 5 static points, 22.38 km river survey and 90 sq km LiDAR coverage.

The 26 Nov drain SHP (`Digitalised_SHP/26th_Nov/Conduits_till_Survey_26_Nov.shp`) contains **8,671 source segments / 280.22 km**. After removing duplicate and zero-length geometry, **8,602 segments / 278.5 km** are mapped: primary 13.6 km, secondary 18.9 km, tertiary 219.4 km, natural streams 22.7 km and unclassified/canal 4.0 km. Classification comes from the SHP's `DRAIN_CLAS` field; one segment with no class is mapped as Unclassified. Natural streams are shown in green and unclassified segments in grey. The map primary geometry (13.57 km) is close to the WPR's 14.6 km; the WPR's secondary 17.8 km and tertiary 221.03 km are reported separately from this till-26-Nov geometry.

### Moradabad layers

| Layer | Status |
|---|---|
| Outer boundary | Real — KML, 64.43 sq km |
| Ward boundary | Real — 70 labelled ward polygons from the administrative KML |
| Buffer boundary | Real - AOI KML, 100.39 sq km |
| Catchment boundary | Real - `Moradabad_Model_Domain.shp`, 183.9 sq km model domain |
| Drains surveyed | Real — 19 Nov primary/secondary/tertiary SHPs; 2,099 mapped segments, 340.9 km |
| GCP marked | Real — 202 unique KML points (WPR reports 206) |
| TBM | 102 points from `TBM.kml`; all carry elevations from the KML (190.51–209.96 m); 3 repeat readings share one benchmark |
| Static points | Real - 10 points from `Static_Points.csv` (MRD-ST-01 to MRD-ST-10); coordinates from the description field, elevations 192.26–203.71 m |
| Survey points | Real - **62,538 DGPS observations** from `Compile_Survey_data_till_17-11-26_CSV(in).csv`; 62,526 carry usable elevations (135.99–209.98 m), UTM 44N converted to WGS84 |
| Survey photos | Real — 943 compressed photos: 533 from `Survey_Moradabad_photos.kmz` + 410 from `ALL_IMAGES_photos.kmz` (20 Sep–12 Nov 2026) |
| Drone survey blocks | Real — 14 block KMLs |
| Ortho image | Not supplied for Moradabad |

WPR figures (13-20 Nov 2026): primary 148 / 140 km, secondary 82.085 km, tertiary 168.855 km (combined 250.94 km; total 398.94 km), road 232.54 / 1,155 km, GCP 206 / 206, static 10 / 10, LiDAR 100 sq km (processing 75%), outfalls 15.

The TBM layer now uses 102 points from `TBM.kml`, replacing the earlier photo-derived 70-point set. Every point carries its KML elevation (190.51–209.96 m); three readings at 28.829232 N / 78.724132 E are repeats of one benchmark.

The mapped drain lengths are **141.7 km primary**, **71.3 km secondary** and **47.2 km tertiary**. The 1,153 source segments become 1,141 mapped segments after dropping sub-2 m geometry. Primary and tertiary mapped lengths differ from the WPR totals because the 13 Nov hierarchy layers are a separate compilation.

### Meerut layers

| Layer | Status |
|---|---|
| Outer boundary | Real — SHP, 143.84 sq km |
| Ward boundary | Real — 90 wards from `MEERUT_WARD _BOUNDARY_new.shp` |
| Buffer boundary | Real - `Meerut_Survey Boundary.shp`, 188.82 sq km |
| Catchment boundary | Real - `Catchment Boundary_50Ha.kml`, 295.99 sq km watershed area |
| Drains surveyed | Real - `COMPLETE DRAINS TILL NOV 21.shp`; 2,567 mapped segments, 497.9 km |
| TBM | 23 points parsed from `TBM.kmz` |
| Static points | 10 points parsed from `TBM.kmz` |
| Survey photos | Real - 887 compressed photos: 630 from `Meerut_SWmaps_combined 1 (2).kmz` + 257 from `ALL_IMAGES_photos.kmz` (20-25 Nov 2026; 18 duplicate copies removed; 8 flagged CHECK) |
| Survey points | Real - **58,268 DGPS observations** from `DGPS_clean.csv`; elevations 189.99–258.99 m (13 blank), 1,168 attribute labels, dates 04 Nov–20 Nov 2026 where recorded |
| GCP marked | Not reported for Meerut |
| Drone survey blocks | Not required for Meerut |
| Ortho image | Not supplied for Meerut |

WPR figures: primary 80.71 / 80 km (100%; the mapped alignment total is 85.59 km), secondary + tertiary 476.32 km, road 213.15 / 2,458 km, static 10 / 10, LiDAR not started, outfalls 5. No GCP points or drone blocks are reported for Meerut; LiDAR is planned with a helicopter-mounted system. The primary layer contains 20 alignments and 74.7 km; the 5 Nov secondary/tertiary SHP has 189 secondary, 64 tertiary and 728 mapped unclassified segments (177.5 km). The 12 Nov survey-progress KML adds 261 new unclassified segments / 38.4 km, and the complete 21 Nov SHP brings the map to 2,567 segments / 497.9 km (primary 111.3 km, secondary 41.7 km, tertiary 11.9 km, unclassified 333.0 km).

### Ghaziabad layers

| Layer | Status |
|---|---|
| Outer boundary | Real — SHP, 170.97 sq km |
| Ward boundary | Real - 100 wards from `GZD_Wards_100.shp` |
| Buffer boundary | Not supplied |
| Catchment boundary | Real - `GZB_Subcatchment_Boundary_1.shp`, 780.98 sq km watershed area |
| Subcatchments | Real — **1,515 WDT subcatchment polygons** (780.97 sq km, clipped to the catchment boundary); geometry simplified for display |
| WDT channels | Real — **2,410 channel lines** (2,317.19 km, clipped to the catchment boundary); geometry simplified for display |
| Drains surveyed | Real — 29 Oct KMZ plus 30 Oct–5 Nov, 6–12 Nov, 13–19 Nov, 20–23 Nov and 24 Nov SHPs; 4,403 mapped segments, 451.5 km |
| TBM | Real — 22 points from `Ghaziabad_Most_22_TBMs.csv`; TBM 6 is a CAD/grid point, the rest are RTK fixes |
| Static points | Real - six points from `Static Points_GZB.shp`, elevations from `GAZIABAD Main Control Points.csv`; `Static Point 8.kmz` contains ST08 |
| Survey photos | Real - 1,329 compressed photos: 298 from `Survey_Photos_photos.kmz` + 84 from `Photos_photos.kmz` + 600 from `Ghaziabad_Photos_WithCoordinates.kmz` + 347 from `20-22_photos.kmz` (23 Sep–22 Nov 2026) |
| Survey points | Real - **54,992 DGPS observations** from `GHAIZABAD_MERGED.csv`; all carry elevations (174.39–257.31 m), 57 survey dates, UTM 43N converted to WGS84 |
| GCP marked | Not reported for Ghaziabad |
| Drone survey blocks | Not required for Ghaziabad |
| Ortho image | Not supplied for Ghaziabad |

The 29 Oct KMZ contains **3,121 source features / 102.6 km**; hierarchy was matched from the 24 Oct SHP by drain name: **1,245 primary**, **903 tertiary** and **947 unclassified** mapped segments. The 30 Oct–5 Nov SHP adds **123 segments / 102.2 km**, the 6–12 Nov SHP adds **186 segments / 59.8 km**, the 13–19 Nov SHP adds **485 segments / 96.0 km**, the 20–23 Nov SHP adds **405 segments / 71.1 km**, and the 24 Nov SHP adds **109 segments / 20.0 km**, all shown as unclassified, for a mapped total of **4,403 segments / 451.5 km**. WPR figures (21–27 Nov 2026): primary 160.5 / 223 km, secondary + tertiary 369.55 km, road 327.88 / 3,450 km, static 6 / 6, LiDAR not started, outfalls 4. The mapped total remains below the WPR surveyed total because the network compilation is partial.

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
├─ Digitization Tool/          # portable daily digitization tool (Moradabad)
│  ├─ Digitize Survey.bat      # Windows drag-and-drop launcher
│  ├─ ML Draft.bat             # experimental model-based draft
│  ├─ bootstrap.ps1            # installs Python / packages automatically
│  ├─ digitize_survey.py       # builds a daily survey + drain/road package
│  ├─ ml_engine.py             # ML inference helpers
│  ├─ ml_model.pkl             # trained ML model
│  ├─ ML_REPORT.md             # model training / accuracy report
│  ├─ requirements.txt         # tool Python dependencies
│  └─ README.md                # tool usage notes
├─ Ghaziabad Digitization Tool/ # Ghaziabad November package builder
│  ├─ Digitize Ghaziabad.bat   # Windows launcher
│  ├─ bootstrap.ps1            # installs Python / packages automatically
│  ├─ digitize_gzb.py          # raw CSV → survey + manual Drain package
│  ├─ requirements.txt
│  └─ README.md
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

### 4.2 Build a daily digitization package

The portable `Digitization Tool` folder takes a day folder of CSV/KML point files and writes the combined survey plus Primary/Secondary/Tertiary/Drain/Roads shapefiles.

Drag the day folder onto `Digitization Tool\Digitize Survey.bat`, or run:

```powershell
python "Digitization Tool\digitize_survey.py" "Incoming Data\Moradabad\Digitization\22"
```

On a new PC the launcher installs Python if needed, creates a local `.venv`, and installs/updates the required packages automatically. It automatically uses a same-date manual folder when one exists and falls back to a point-based draft otherwise. An experimental `--ml` mode is also included; see `Digitization Tool\README.md` and `Digitization Tool\ML_REPORT.md` for accuracy and limitations.

### 4.3 Build Ghaziabad daily packages

The `Ghaziabad Digitization Tool` folder reads the raw November CSVs and the manually digitized linework, then writes standardized EPSG:32643 packages to `November\Processed\<YYYYMMDD>`:

```powershell
python "Ghaziabad Digitization Tool\digitize_gzb.py" "...\Ghaziabad\DIgitization\November"
```

It uses `Manually\<DDMMYYYY>` when available and creates a review draft only for days without manual linework. A basemap check (`--basemap esri`) scores each line against imagery and writes `BMScore`, `Review`, a CSV and a preview image. See `Ghaziabad Digitization Tool\README.md`.

### 4.4 Replace or add GIS layers

1. Put the new boundary / ward / drain / GCP / TBM / static-point files in a city folder under `Incoming Data`.
2. Update the file paths near the top of `tools/build_data.py` (`OUTER_KML`, `BUFFER_KML`, `GCP_KML`, `WARD_KML`, `DRAIN_SHP`).
3. Re-run `python tools/build_data.py`.

The Firozabad builder currently generates:

- `outer`, `buffer` — from KML polygons
- `gcp`, `tbm` - from the control-point KML
- `drains` - classified KML up to 29 Oct 2026
- `wards` - real ward polygons from `Firozabad_70Wardwise_Map.kml`
- `blocks` - real drone flight blocks from `Drone_Flight_Blocks_Firozabad.kml`

### 4.5 Add a new city with GIS data

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
- Firozabad WPR: `Incoming Data/WPR _7to13/Firozbad_WPR_6Nov_to_12Nov.docx`
- Firozabad TBM points: `Incoming Data/Firozabad/TBM/TBM_27Nov.kml`
- Firozabad photos: `Incoming Data/Firozabad/Photos KML/FIROZABAD SITE IMAGES/Photos Firozabad/Photos_Firozabad_photos.kmz`
- Firozabad DSM: `Incoming Data/Firozabad/DSM/Firozabad-44 N_DSM.tif`
- Firozabad catchment boundary: `Incoming Data/Firozabad/Subcatchment_Outer Boundary_for_WatershedArea/Subcatchment_OuterBoundary.shp`
- Firozabad subcatchments: `Incoming Data/Firozabad/Firozabad_Sub_Catchments/Firozabad_Sub_Catchments.shp`
- Firozabad DGPS survey points: `Incoming Data/Firozabad/DGPS/Firozabad_Processed_Survey_upto_10_11_2026.csv`
- Saharanpur WPR: `Incoming Data/WPR _7to13/SRE_WPR_Submission_06_Nov_to_12_Nov_2026 1.docx`
- Saharanpur layers: `Incoming Data/Saharanpur/`
- Saharanpur TBM points: `Incoming Data/Saharanpur/TBM_SHP_KML/SAHARANPUR_TBM.csv`; elevations from `TBM_KML.kml`
- Saharanpur photos: `Incoming Data/Saharanpur/Photos KML/Saharanpur_Combined_photos.kmz`
- Saharanpur survey points: `Incoming Data/Saharanpur/Survey Points/Saharanpur_DGPS.kmz`
- Saharanpur static points: `Incoming Data/Saharanpur/Static Points/SAHARANPUR STATIC POINTS 1.csv`
- Saharanpur drains: `Incoming Data/Saharanpur/Digitalised_SHP/26th_Nov/Conduits_till_Survey_26_Nov.shp`
- Saharanpur subcatchments and WDT channels: `Incoming Data/Saharanpur/Subcatchments/Subcatchments.shp`, `Incoming Data/Saharanpur/Subcatchments/WDT Channels.shp`
- Saharanpur catchment boundary: `Incoming Data/Saharanpur/Catchment_Boundary_Updated/Catchment_Boundary_Updated.shp`
- Saharanpur ortho: `Incoming Data/Saharanpur/ORI/SAHARANPUR_ORTHO.ecw`
- Moradabad WPR: `Incoming Data/WPR _7to13/Moradabad_WPR_7_11_2026to13_11_2026.docx`
- Moradabad layers: `Incoming Data/Moradabad/`
- Moradabad static points: `Incoming Data/Moradabad/Static Points Moradabad/Static_Points.csv`
- Moradabad catchment boundary: `Incoming Data/Moradabad/Moradabad_Model_Domain/Moradabad_Model_Domain.shp`
- Moradabad TBM: `Incoming Data/Moradabad/TBM Points/TBM.kml`
- Moradabad DGPS survey points: `Incoming Data/Moradabad/DGPS/Compile_Survey_data_till_17-11-26_CSV(in).csv`
- Moradabad photos: `Incoming Data/Moradabad/Photos_26 Update/2) SITE IMAGES/ALL IMAGES/ALL_IMAGES_photos.kmz`
- Meerut WPR: `Incoming Data/WPR _7to13/Meerut_Weekly_Progress_Report_06Nov12Nov.docx`
- Meerut layers and TBM/static points: `Incoming Data/Meerut/`, `Incoming Data/Meerut/Drain_Data_Digitised/Meerut Survey Progress_Til 12th Nov.kml`, `Incoming Data/Meerut/TBM_KML/TBM.kmz`
- Meerut catchment boundary: `Incoming Data/Meerut/Catchment Boundary/Catchment Boundary_50Ha.kml`
- Meerut DGPS survey points: `Incoming Data/Meerut/DGPS Points/DGPS_clean.csv`
- Meerut photos: `Incoming Data/Meerut/Photos/ALL IMAGES/ALL_IMAGES_photos.kmz`
- Ghaziabad WPR: `Incoming Data/WPR _7to13/Ghaziabad_WPR_20261113.docx`
- Ghaziabad layers: `Incoming Data/Ghaziabad/Boundary Shapefiles/`, `Incoming Data/Ghaziabad/Digitized Drains/`
- Ghaziabad catchment boundary: `Incoming Data/Ghaziabad/Subcatchment_Boundary/GZB_Subcatchment_Boundary_1.shp`
- Ghaziabad subcatchments and WDT channels: `Incoming Data/Ghaziabad/Subcatchments_GZB/Subcatchments.shp`, `Incoming Data/Ghaziabad/WDT Channels (GZB)/WDT Channels.shp`
- Ghaziabad photos: `Incoming Data/Ghaziabad/Photos/Photos_photos.kmz`, `Incoming Data/Ghaziabad/KMZ_Photos/KMZ_Photos/Ghaziabad_Photos_WithCoordinates.kmz`, `Incoming Data/Ghaziabad/Photos/20-22/20-22_photos.kmz`
- Ghaziabad DGPS survey points: `Incoming Data/Ghaziabad/DGPS/GHAIZABAD_MERGED.csv`
- Ghaziabad static points: `Incoming Data/Ghaziabad/Static Points/`
- Ghaziabad TBM points: `Incoming Data/Ghaziabad/TBM/Ghaziabad_Most_22_TBMs.csv`
- Shahjahanpur WPR: `Incoming Data/WPR _7to13/Weekly Report_ UP_Shahajanpur_ 6th Nov to 12th Nov.docx`
- Shahjahanpur layers: `Incoming Data/Shahjahanpur/`
- Shahjahanpur ortho: `Incoming Data/Shahjahanpur/Ortho/ORI.tif`
- Shahjahanpur photos: `Incoming Data/Shahjahanpur/Photos/Photos KML/Shahjahanpur_Photos_Combined_640px.kmz`
- Shahjahanpur TBM: `Incoming Data/Shahjahanpur/SHAHJANPUR MERGED TBM EXCEL.xlsx`
- Shahjahanpur named primary drains: `Incoming Data/Shahjahanpur/Names Drains/Primary drains (lined vs unlined) & outfall.kmz`
- Shahjahanpur DGPS survey points: `Incoming Data/Shahjahanpur/DGPS/SHAHJAHANPUR_ALL_POINTS_MERGED_Till 10th Nov.csv`
- Shahjahanpur DSM: `C:\Users\swaga\Downloads\SAHJANPUR 44N_DSM.tif`
- Basemap imagery: Google, Esri and its data providers; OSM © OpenStreetMap contributors

A downscaled copy of the Firozabad orthomosaic is available at `assets/ortho/Firozabad_Ortho_Downscaled.tif` — 14.4 MB, 6,116 × 5,987 px, about 1.33 m resolution, EPSG:32644, JPEG-compressed GeoTIFF. The map layer uses `assets/ortho/Firozabad_Ortho_Overlay.webp` (4.96 MB), masked to the city boundary. The 195 MB source file under `Incoming Data` is left unchanged.

The Firozabad DSM layer is generated from `Firozabad-44 N_DSM.tif` (75,691 × 74,096 px, 0.108 m, float32, EPSG:32644), reprojected to north-up EPSG:4326 at 2.67 m/px (3,090 × 3,052 px), masked to the Nagar Nigam outer boundary with nodata transparent and saved as `assets/dsm/Firozabad_DSM_Overlay.webp` (1.1 MB, hypsometric tint plus hillshade). A neutral grayscale variant is at `assets/dsm/Firozabad_DSM_Greyscale.webp`; layer metadata is in `assets/dsm/Firozabad_DSM_Overlay.json`.

No source files under `Incoming Data` are modified by the dashboard.
