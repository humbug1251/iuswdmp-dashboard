window.DASHBOARD = {
  "meta": {
    "project": "Survey, Collection of Data, Preparation of Integrated Urban Storm Water Drainage Master Plan (IUSWDMP)",
    "shortProject": "IUSWDMP Progress",
    "state": "Uttar Pradesh",
    "generated": "2026-11-16",
    "latestReport": "13-20 Nov 2026",
    "latestReportDate": "2026-11-20",
    "overallMethod": "Simple average of the available component percentages: primary drain, road survey, GCP or static points where reported, and LiDAR. Secondary/tertiary components are excluded where a target has not been notified.",
    "basemaps": "OSM Streets and Esri World Imagery",
    "dataNotes": [
      "Firozabad GIS layers are derived from the supplied boundary, buffer, ward and GCP KML files.",
      "Firozabad drains are the primary, secondary and tertiary survey shapefiles up to 22 Oct 2026.",
      "Firozabad ward boundaries, drains and drone flight blocks are real survey layers.",
      "Saharanpur GIS layers are derived from the supplied outer boundary, ward KML, AOI, drone blocks, conduits, GCP and TBM files.",
      "Moradabad GIS layers are derived from the supplied outer boundary, ward label KML, AOI, drains, GCP, TBM and drone block files.",
      "Meerut GIS layers are derived from the supplied boundaries, wards, drains and TBM.kmz; no GCP points or drone blocks are reported.",
      "Ghaziabad GIS layers are derived from the supplied outer boundary, 100-ward SHP, 29 Oct drain KMZ with the 5 Nov weekly SHP, six-point static SHP and 22-point TBM CSV; no buffer or drone-block layers were supplied.",
      "Shahjahanpur GIS layers are derived from the supplied boundary, 60-ward KML, drain KML, GCP KML, SP+TBM KML and drone-block KML.",
      "Progress numbers are taken from the latest available weekly progress reports: Firozabad, Shahjahanpur, Saharanpur and Ghaziabad 6-12 Nov 2026, Moradabad 7-13 Nov 2026, and Meerut 30 Oct-5 Nov 2026."
    ]
  },
  "cities": [
    {
      "id": "firozabad",
      "name": "Firozabad",
      "shortName": "Firozabad",
      "state": "Uttar Pradesh",
      "coords": [
        27.157,
        78.405
      ],
      "status": "reporting",
      "statusLabel": "Reporting",
      "reportPeriod": "13–19 Nov 2026",
      "reportIssued": "2026-11-20",
      "reportDate": "2026-11-20",
      "area": {
        "rfp": 35.49,
        "kml": 35.08,
        "unit": "sq km"
      },
      "outfalls": 3,
      "surveyTeam": {
        "base": 2,
        "rovers": 7,
        "members": 10
      },
      "components": {
        "primary": {
          "done": 65.414,
          "planned": 40.7,
          "pct": 100.0,
          "unit": "km",
          "note": "65.414 km surveyed; target 40.7 km (extended to outfalls)"
        },
        "secondary": {
          "done": null,
          "planned": null,
          "pct": null,
          "unit": "km"
        },
        "tertiary": {
          "done": null,
          "planned": null,
          "pct": null,
          "unit": "km"
        },
        "road": {
          "done": 388.715,
          "planned": 758,
          "pct": 51.3,
          "unit": "km",
          "note": "Target 758 km per detail table; summary states 740 km"
        },
        "gcp": {
          "done": 86,
          "planned": 86,
          "pct": 100.0,
          "unit": "nos"
        },
        "static": {
          "done": 5,
          "planned": 5,
          "pct": 100.0,
          "unit": "nos"
        },
        "lidar": {
          "done": 35.5,
          "planned": 35.5,
          "pct": 100.0,
          "unit": "sq km",
          "note": "Acquisition complete; processing in progress (ORI received 17 Oct)"
        },
        "secondaryTertiary": {
          "done": 413.49,
          "planned": null,
          "pct": null,
          "unit": "km",
          "decimals": 2,
          "note": "Combined secondary and tertiary drains; target not notified"
        }
      },
      "milestones": [
        {
          "date": "28 Aug 2026",
          "label": "DGPS survey commenced",
          "status": "done"
        },
        {
          "date": "16 Sep 2026",
          "label": "Inception report submitted",
          "status": "done"
        },
        {
          "date": "19 Sep 2026",
          "label": "Drone permission received",
          "status": "done"
        },
        {
          "date": "24 Sep 2026",
          "label": "LiDAR acquisition started",
          "status": "done"
        },
        {
          "date": "28 Sep 2026",
          "label": "LiDAR acquisition completed",
          "status": "done"
        },
        {
          "date": "10 Oct 2026",
          "label": "Ward boundary KMZ submitted for verification",
          "status": "done"
        },
        {
          "date": "17 Oct 2026",
          "label": "Orthophoto (ORI) received",
          "status": "done"
        },
        {
          "date": "12 Nov 2026",
          "label": "Latest reporting period closed",
          "status": "done"
        },
        {
          "date": "Pending",
          "label": "Nagar Nigam ward-boundary verification",
          "status": "pending"
        },
        {
          "date": "In progress",
          "label": "LiDAR data processing",
          "status": "active"
        }
      ],
      "notes": [
        "Source WPR: figures to 23 Nov 2026 (primary 65.414 km, secondary + tertiary 413.49 km, road 388.715 km).",
        "Overall progress is the simple average of primary drains, road survey, GCP marking and LiDAR acquisition percentages.",
        "The primary-drain target (40.7 km) is tentative and based on OSM; the surveyed length includes extensions to outfalls.",
        "Secondary and tertiary drain targets have not been notified, so only completed lengths are shown. The latest cumulative length is 413.49 km combined.",
        "Map drains use the 23 Nov PST SHPs: 7,892 mapped segments and 549.0 km (primary 73.7 km, secondary 31.3 km, tertiary 444.1 km).",
        "The road target is 758 km in the latest detail table; the summary table states 740 km.",
        "Ward-boundary verification by Nagar Nigam is pending.",
        "The supplied 70-ward KML labels two polygons as Ward 43 and omits Ward 42; the larger 0.889 sq km polygon was relabelled Ward 42 Ram Nagar, matching the WPR, to complete the 1–70 sequence.",
        "The GCP KML contains 85 unique identifiable point geometries; the WPR reports 86 GCPs completed.",
        "The TBM layer uses TBM_KML (1).kml: 18 benchmarks, 8 with RL values; the remaining 10 points have no RL in the supplied KML.",
        "Ward boundaries, drains and drone flight blocks are real survey layers."
      ],
      "overall": 84.3,
      "layersAvailable": true,
      "layerKey": "firozabad"
    },
    {
      "id": "shahjahanpur",
      "name": "Shahjahanpur",
      "shortName": "Shahjahanpur",
      "state": "Uttar Pradesh",
      "coords": [
        27.8815,
        79.9107
      ],
      "status": "reporting",
      "statusLabel": "Reporting",
      "reportPeriod": "13–19 Nov 2026",
      "reportIssued": "2026-11-20",
      "reportDate": "2026-11-20",
      "area": {
        "rfp": 56.24,
        "kml": 56.46,
        "unit": "sq km"
      },
      "outfalls": 45,
      "surveyTeam": {
        "base": 2,
        "rovers": 4,
        "members": 6
      },
      "components": {
        "primary": {
          "done": 34.636,
          "planned": 31.4,
          "pct": 100.0,
          "unit": "km",
          "note": "45 primary drains identified and completed; 34.6 km cumulative"
        },
        "secondaryTertiary": {
          "done": 466.4,
          "planned": null,
          "pct": null,
          "unit": "km",
          "note": "Combined secondary and tertiary drains; target not notified"
        },
        "road": {
          "done": 367,
          "planned": 740,
          "pct": 49.6,
          "unit": "km"
        },
        "gcp": {
          "done": 77,
          "planned": 77,
          "pct": 100.0,
          "unit": "nos"
        },
        "static": {
          "done": 5,
          "planned": 5,
          "pct": 100.0,
          "unit": "nos"
        },
        "lidar": {
          "done": 54.825,
          "planned": 54.825,
          "pct": 100.0,
          "unit": "sq km",
          "note": "Ortho received 2 Nov, DSM 6 Nov; DTM processing expected 3rd week of Nov; 1.63 sq km restricted area excluded"
        }
      },
      "milestones": [
        {
          "date": "02 Sep 2026",
          "label": "DGPS survey commenced",
          "status": "done"
        },
        {
          "date": "16 Sep 2026",
          "label": "Inception report submitted",
          "status": "done"
        },
        {
          "date": "22 Sep 2026",
          "label": "DGPS calibration report submitted",
          "status": "done"
        },
        {
          "date": "28 Sep 2026",
          "label": "LiDAR drone acquisition started",
          "status": "done"
        },
        {
          "date": "12 Oct 2026",
          "label": "LiDAR drone acquisition completed",
          "status": "done"
        },
        {
          "date": "12 Nov 2026",
          "label": "Latest reporting period closed",
          "status": "done"
        },
        {
          "date": "Nov 2026",
          "label": "LiDAR DTM processing expected",
          "status": "pending"
        }
      ],
      "notes": [
        "Source WPR: Weekly Report_ UP_Shahajanpur_ 13th Nov to 19th Nov.docx (reporting period 13–19 Nov 2026).",
        "City area is 56.24 sq km as per the RFP and 40.1 sq km as per the ward KML; the supplied outer boundary measures 56.46 sq km.",
        "WPR cumulative survey: primary 34.636 km, secondary/tertiary 466.4 km, road 367 km, GCP 77 / 77, static 5 / 5.",
        "The classified drain SHP (SURVEY CLASSIFICATION 20.11.26) contains 4,846 mapped segments and 408.4 km: primary 34.6 km, secondary 54.6 km, tertiary 319.1 km.",
        "The WPR reports 466.4 km of secondary/tertiary drains; the supplied SHP is a partial classified network of 373.7 km (secondary + tertiary).",
        "LiDAR acquisition covered 54.825 sq km; 1.63 sq km is excluded as Army/Jail restricted area. Ortho and DSM are received; DTM processing is expected in the 1st week of December.",
        "Static points come from SP+TBM Locations.kml; the TBM layer is built from SHAHJANPUR MERGED TBM EXCEL.xlsx (71 rows, one duplicate at TBM6 removed, 70 benchmarks with elevations).",
        "The drone-block KML contains 28 polygons including a Jail area; the Jail polygon is excluded, leaving 27 survey blocks.",
        "The ortho overlay is generated from ORI.tif at 1.9 m resolution and masked to the outer boundary."
      ],
      "gcpAvailable": true,
      "blocksAvailable": true,
      "layersAvailable": true,
      "layerKey": "shahjahanpur",
      "overall": 86.7
    },
    {
      "id": "saharanpur",
      "name": "Saharanpur",
      "shortName": "Saharanpur",
      "state": "Uttar Pradesh",
      "coords": [
        29.964,
        77.546
      ],
      "status": "reporting",
      "statusLabel": "Reporting",
      "reportPeriod": "13–19 Nov 2026",
      "reportIssued": "2026-11-20",
      "reportDate": "2026-11-20",
      "area": {
        "rfp": 73.7,
        "kml": 80.544,
        "unit": "sq km"
      },
      "outfalls": 6,
      "surveyTeam": {
        "base": 3,
        "rovers": 4,
        "members": 7
      },
      "components": {
        "primary": {
          "done": 14.58,
          "planned": 14.58,
          "pct": 100.0,
          "unit": "km",
          "note": "Primary drains completed as per the WPR"
        },
        "secondaryTertiary": {
          "done": 237.019,
          "planned": null,
          "pct": null,
          "unit": "km",
          "decimals": 3,
          "note": "Combined secondary and tertiary drains; target not notified"
        },
        "road": {
          "done": 173.119,
          "planned": 1298.41,
          "pct": 13.3,
          "unit": "km"
        },
        "gcp": {
          "done": 182,
          "planned": 182,
          "pct": 100.0,
          "unit": "nos"
        },
        "static": {
          "done": 5,
          "planned": 5,
          "pct": 100.0,
          "unit": "nos"
        },
        "lidar": {
          "done": 90,
          "planned": 90,
          "pct": 100.0,
          "unit": "sq km",
          "note": "LiDAR acquisition complete; point-cloud processing in progress; 10 sq km jail area excluded"
        }
      },
      "milestones": [],
      "notes": [
        "Source WPR: SRE_WPR_Submission_13_Nov_to_19_Nov_2026.docx (reporting period 13–19 Nov 2026).",
        "City area is 73.7 sq km as per the RFP and 80.544 sq km as per the WPR KML.",
        "WPR cumulative survey: primary 14.58 km, secondary/tertiary 237.019 km, road 173.119 km, GCP 182 / 182, static 5 / 5, river 22.38 km.",
        "LiDAR acquisition covered 90 sq km; a 10 sq km jail area is excluded as a restricted area.",
        "The map drains layer is the 23 Nov conduit SHP (Conduits_till_Survey_23_Nov.shp); primary geometry is 14.19 km, matching the WPR's 14.58 km completed.",
        "The 23 Nov SHP contains 8,519 source segments and 274.66 km. After removing zero-length and duplicate geometry, 8,450 segments / 273.0 km are mapped: primary 14.2 km, secondary 191.6 km, tertiary 25.9 km, natural streams 22.7 km and unclassified 18.6 km. Classification was carried over from the 19 Nov SHP by geometry matching; 633 new segments remain unclassified.",
        "The GCP KML contains 182 placemarks; 181 unique name-and-location points are mapped, matching the WPR total of 182 completed GCPs within one point.",
        "The TBM CSV contains 42 rows and 40 unique labels (TBM1 and TBM3 repeat). All 42 CSV points are mapped; matching elevations come from TBM_KML.kml.",
        "The WPR reports a combined secondary and tertiary length of 237.019 km; no separate target was notified.",
        "The AOI KML is used as the buffer boundary."
      ],
      "layersAvailable": true,
      "layerKey": "saharanpur",
      "overall": 78.3
    },
    {
      "id": "moradabad",
      "name": "Moradabad",
      "shortName": "Moradabad",
      "state": "Uttar Pradesh",
      "coords": [
        28.8386,
        78.7733
      ],
      "status": "reporting",
      "statusLabel": "Reporting",
      "reportPeriod": "13–20 Nov 2026",
      "reportIssued": "2026-11-20",
      "reportDate": "2026-11-20",
      "area": {
        "rfp": 85.2,
        "kml": 64.52,
        "unit": "sq km"
      },
      "outfalls": 15,
      "surveyTeam": {
        "base": 1,
        "rovers": 4,
        "members": 8,
        "teams": 4
      },
      "components": {
        "primary": {
          "done": 148,
          "planned": 140,
          "pct": 100.0,
          "unit": "km",
          "note": "148 km cumulative alignment; 140 km target exceeded"
        },
        "secondary": {
          "done": 232.8,
          "planned": null,
          "pct": null,
          "unit": "km"
        },
        "tertiary": {
          "done": null,
          "planned": null,
          "pct": null,
          "unit": "km"
        },
        "road": {
          "done": 232.54,
          "planned": 1155,
          "pct": 20.1,
          "unit": "km"
        },
        "gcp": {
          "done": 206,
          "planned": 206,
          "pct": 100.0,
          "unit": "nos"
        },
        "static": {
          "done": 10,
          "planned": 10,
          "pct": 100.0,
          "unit": "nos"
        },
        "lidar": {
          "done": 100,
          "planned": 100,
          "pct": 100.0,
          "unit": "sq km",
          "note": "LiDAR acquisition complete (100 sq km); data processing 75% completed"
        }
      },
      "milestones": [],
      "notes": [
        "Source WPR: Moradabad_WPR_13_11_2026to20_11_2026.docx (reporting period 13–20 Nov 2026).",
        "City area is 85.2 sq km as per the RFP and 64.52 sq km as per the Nagar Nigam KML.",
        "WPR cumulative survey: primary 148 km, secondary/tertiary 232.8 km (total 380.79 km), road 232.54 km, GCP 206 / 206, static 10 / 10.",
        "Drains are the 19 Nov primary, secondary and tertiary SHPs: 2,099 mapped segments (240 primary, 358 secondary, 1,501 tertiary), 340.9 km.",
        "The WPR reports 69.123 km of actual invert/desilting on primary drains.",
        "The GCP KML contains 202 unique points; the WPR reports 206 GCPs completed.",
        "The TBM layer uses 102 points from TBM.kml, replacing the photo-derived set; all points carry KML elevations (190.51–209.96 m) and three readings repeat one benchmark.",
        "The AOI KML is used as the buffer boundary.",
        "LiDAR area is 100 sq km, 14 blocks; data processing is 75% completed.",
        "Outfalls identified: 15 (subject to change)."
      ],
      "layersAvailable": true,
      "layerKey": "moradabad",
      "overall": 78.8
    },
    {
      "id": "meerut",
      "name": "Meerut",
      "shortName": "Meerut",
      "state": "Uttar Pradesh",
      "coords": [
        28.9845,
        77.7064
      ],
      "status": "reporting",
      "statusLabel": "Reporting",
      "reportPeriod": "6–12 Nov 2026",
      "reportIssued": "2026-11-13",
      "reportDate": "2026-11-12",
      "area": {
        "rfp": 141.94,
        "kml": 143.83,
        "unit": "sq km"
      },
      "outfalls": 5,
      "surveyTeam": {
        "base": 2,
        "rovers": 7,
        "members": null
      },
      "aerialSurvey": {
        "status": "Completed"
      },
      "components": {
        "primary": {
          "done": 80.71,
          "planned": 80,
          "pct": 100.0,
          "unit": "km",
          "note": "80.71 km cumulative alignment; 80 km target exceeded",
          "decimals": 2
        },
        "secondaryTertiary": {
          "done": 440.37,
          "planned": null,
          "pct": null,
          "unit": "km",
          "note": "Combined secondary and tertiary drains; target not notified",
          "decimals": 2
        },
        "static": {
          "done": 10,
          "planned": 10,
          "pct": 100.0,
          "unit": "nos"
        },
        "lidar": {
          "done": 0,
          "planned": 1,
          "pct": 0.0,
          "unit": "batch",
          "note": "Helicopter-mounted LiDAR; agency finalisation under process"
        },
        "road": {
          "done": 213.15,
          "planned": 2458,
          "pct": 8.7,
          "unit": "km"
        }
      },
      "milestones": [],
      "notes": [
        "Source WPR: Meerut_Weekly_Progress_Report_06Nov12Nov.docx (reporting period 6–12 Nov 2026).",
        "City area is 141.94 sq km as per the RFP and 143.83 sq km as per the KML.",
        "WPR cumulative survey: primary 80.71 km, secondary/tertiary 440.37 km, static 10 / 10.",
        "Primary progress is shown against the 80 km tentative OSM plan; cumulative alignment is 80.71 km.",
        "DGPS deployment is 1 base and 6 rovers.",
        "No GCP data is reported for Meerut.",
        "No drone flight blocks are required; LiDAR is planned with a helicopter-mounted system and is not started.",
        "TBM and static points are taken from the supplied TBM.kmz.",
        "The 5 Nov primary layer contains 20 alignments and 74.7 km; the secondary/tertiary SHP has 189 secondary, 64 tertiary and 730 unclassified segments.",
        "The 13–19 Nov SHP adds 624 new unclassified segments / 107.2 km; the map now has 1,886 segments / 443.8 km.",
        "Outfalls identified: 5."
      ],
      "gcpAvailable": false,
      "blocksAvailable": false,
      "lidarCard": false,
      "layersAvailable": true,
      "layerKey": "meerut",
      "overall": 50.5
    },
    {
      "id": "ghaziabad",
      "name": "Ghaziabad",
      "shortName": "Ghaziabad",
      "state": "Uttar Pradesh",
      "coords": [
        28.6692,
        77.4538
      ],
      "status": "reporting",
      "statusLabel": "Reporting",
      "reportPeriod": "13–19 Nov 2026",
      "reportIssued": "2026-11-20",
      "reportDate": "2026-11-20",
      "area": {
        "rfp": 225,
        "kml": 170.97,
        "unit": "sq km"
      },
      "outfalls": 4,
      "surveyTeam": {
        "base": 3,
        "rovers": 10,
        "members": 11
      },
      "aerialSurvey": {
        "status": "Permission awaited"
      },
      "components": {
        "primary": {
          "done": 160.5,
          "planned": 223,
          "pct": 72.0,
          "unit": "km",
          "note": "160.5 km cumulative; 11 km invert levels this week; 171.5 km cumulative with invert"
        },
        "secondary": {
          "done": null,
          "planned": null,
          "pct": null,
          "unit": "km"
        },
        "tertiary": {
          "done": null,
          "planned": null,
          "pct": null,
          "unit": "km"
        },
        "secondaryTertiary": {
          "done": 239.97,
          "planned": null,
          "pct": null,
          "unit": "km",
          "note": "Combined secondary + tertiary length; target not notified"
        },
        "road": {
          "done": 327.88,
          "planned": 3450,
          "pct": 9.5,
          "unit": "km"
        },
        "static": {
          "done": 6,
          "planned": 6,
          "pct": 100.0,
          "unit": "nos"
        },
        "lidar": {
          "done": 0,
          "planned": 1,
          "pct": 0.0,
          "unit": "batch",
          "note": "Helicopter-mounted LiDAR; agency finalisation pending"
        }
      },
      "milestones": [
        {
          "date": "13 Sep 2026",
          "label": "DGPS survey commenced",
          "status": "done"
        },
        {
          "date": "16 Sep 2026",
          "label": "Inception report submitted",
          "status": "done"
        },
        {
          "date": "22 Sep 2026",
          "label": "DGPS calibration report submitted",
          "status": "done"
        },
        {
          "date": "12 Nov 2026",
          "label": "Latest reporting period closed",
          "status": "done"
        },
        {
          "date": "Pending",
          "label": "Helicopter LiDAR - agency finalisation",
          "status": "pending"
        }
      ],
      "notes": [
        "Source WPR: Ghaziabad_WPR_20261120.docx (reporting period 13–19 Nov 2026).",
        "Overall progress is the simple average of the available component percentages (primary drains, road survey, static points and LiDAR).",
        "City area is 225 sq km as per the RFP and 170.97 sq km as per the supplied outer boundary.",
        "Outfalls identified: Shahberi, Raj Nagar Extension, Hindon Ghat and Hindon cut to Yamuna.",
        "WPR cumulative survey: primary 160.5 km, road 327.88 km, secondary/tertiary 239.97 km, static 6 / 6.",
        "Primary invert-level survey added 11 km this week; cumulative with invert levels is 171.5 km.",
        "Current DGPS deployment is 3 base and 10 rovers with 11 team members.",
        "The WPR shows previous-week secondary/tertiary as 94.8 km (the prior week's weekly addition) and cumulative 239.97 km; the reported cumulative is used.",
        "Drains combine the 29 Oct KMZ (3,121 features / 102.6 km), the 30 Oct–5 Nov SHP (123 segments / 102.2 km), the 6–12 Nov SHP (186 segments / 59.8 km) and the 13–19 Nov SHP (485 segments / 96.0 km); new segments are unclassified.",
        "The supplied outer boundary and 100-ward SHP are used for the map; no buffer or AOI layer was supplied.",
        "Static points are mapped from the supplied six-point SHP, with elevations from the main control-point CSV. The KMZ contains Static Point 8 only and is included in the SHP.",
        "TBM layer contains 22 benchmarks from Ghaziabad_Most_22_TBMs.csv; TBM 6 is a CAD/grid point and the rest are RTK fixes.",
        "No drone-block or ortho layers were supplied.",
        "About 80% of the city area is in a red zone, restricting drone operations; LiDAR is planned with a helicopter-mounted system.",
        "Secondary/tertiary target has not been notified; only the combined completed length is reported."
      ],
      "overall": 44.9,
      "gcpAvailable": false,
      "blocksAvailable": false,
      "lidarCard": false,
      "layersAvailable": true,
      "layerKey": "ghaziabad"
    }
  ]
};
