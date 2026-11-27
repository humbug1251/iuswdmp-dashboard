window.DASHBOARD = {
  "meta": {
    "project": "Survey, Collection of Data, Preparation of Integrated Urban Storm Water Drainage Master Plan (IUSWDMP)",
    "shortProject": "IUSWDMP Progress",
    "state": "Uttar Pradesh",
    "generated": "2026-11-27",
    "latestReport": "21-27 Nov 2026",
    "latestReportDate": "2026-11-27",
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
      "Progress numbers are taken from the latest WPR period, 21–27 Nov 2026."
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
      "reportPeriod": "21–27 Nov 2026",
      "reportIssued": "2026-11-27",
      "reportDate": "2026-11-27",
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
          "done": 65.415,
          "planned": 40.7,
          "pct": 100.0,
          "unit": "km",
          "decimals": 3,
          "note": "65.415 km surveyed; target 40.7 km (extended to outfalls)"
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
          "done": 486.685,
          "planned": null,
          "pct": null,
          "unit": "km",
          "decimals": 3,
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
        "Latest WPR period: 21–27 Nov 2026 (figures to 26 Nov 2026). Primary 65.415 km, secondary + tertiary 486.685 km, total 552.1 km; road 388.715 km.",
        "Overall progress is the simple average of primary drains, road survey, GCP marking and LiDAR acquisition percentages.",
        "The primary-drain target (40.7 km) is tentative and based on OSM; the surveyed length includes extensions to outfalls.",
        "Secondary and tertiary drain targets have not been notified, so only completed lengths are shown. The latest cumulative length is 486.685 km combined.",
        "Drain progress uses the PST_Upto_26th-Nov classified layers: primary 65.415 km and secondary + tertiary 486.685 km (552.1 km total).",
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
      "reportPeriod": "21–27 Nov 2026",
      "reportIssued": "2026-11-27",
      "reportDate": "2026-11-27",
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
          "done": 34.6,
          "planned": 31.4,
          "pct": 100.0,
          "unit": "km",
          "decimals": 1,
          "note": "45 primary drains identified and completed; 34.6 km cumulative"
        },
        "secondaryTertiary": {
          "done": 515.1,
          "planned": null,
          "pct": null,
          "unit": "km",
          "decimals": 1,
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
        "Latest WPR period: 21–27 Nov 2026; drain totals updated to 27 Nov 2026.",
        "City area is 56.24 sq km as per the RFP and 40.1 sq km as per the ward KML; the supplied outer boundary measures 56.46 sq km.",
        "Latest cumulative survey: primary 34.6 km, secondary/tertiary 515.1 km (total 549.7 km), road 367 km, GCP 77 / 77, static 5 / 5.",
        "The SURVEY CLASSIFICATION 27.11.26 zip contains 5,385 segments and 474.4 km raw: primary 34.6 km, secondary 57.2 km, tertiary 380.7 km; 5 canal/road/other segments are unclassified.",
        "Reported cumulative secondary/tertiary is 515.1 km; the classified SHP covers 437.9 km of secondary + tertiary, so the reported total is the reconciled survey figure.",
        "The map drains layer has been updated to the 27.11.26 classification (5,385 segments).",
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
      "reportPeriod": "21–27 Nov 2026",
      "reportIssued": "2026-11-27",
      "reportDate": "2026-11-27",
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
          "done": 14.6,
          "planned": 14.6,
          "pct": 100.0,
          "unit": "km",
          "note": "Primary drains completed as per the WPR"
        },
        "secondary": {
          "done": 17.8,
          "planned": null,
          "pct": null,
          "unit": "km",
          "decimals": 1,
          "note": "Secondary drains; target not notified"
        },
        "tertiary": {
          "done": 221.03,
          "planned": null,
          "pct": null,
          "unit": "km",
          "decimals": 2,
          "note": "Tertiary drains; target not notified"
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
        "Latest WPR period: 21–27 Nov 2026.",
        "City area is 73.7 sq km as per the RFP and 80.544 sq km as per the WPR KML.",
        "WPR cumulative survey: primary 14.6 km, secondary 17.8 km, tertiary 221.03 km (secondary + tertiary 238.83 km), road 173.119 km, GCP 182 / 182, static 5 / 5, river 22.38 km.",
        "LiDAR acquisition covered 90 sq km; a 10 sq km jail area is excluded as a restricted area.",
        "The map drains layer is the 26 Nov conduit SHP (Conduits_till_Survey_26_Nov.shp); primary geometry is 13.57 km against the WPR's 14.6 km completed.",
        "The 26 Nov SHP contains 8,671 source segments and 280.22 km. After removing zero-length and duplicate geometry, 8,602 segments / 278.5 km are mapped: primary 13.6 km, secondary 18.9 km, tertiary 219.4 km, natural streams 22.7 km and unclassified/canal 4.0 km. Classification comes from the SHP's DRAIN_CLAS field; one segment with no class is mapped as Unclassified.",
        "The GCP KML contains 182 placemarks; 181 unique name-and-location points are mapped, matching the WPR total of 182 completed GCPs within one point.",
        "The TBM CSV contains 42 rows and 40 unique labels (TBM1 and TBM3 repeat). All 42 CSV points are mapped; matching elevations come from TBM_KML.kml.",
        "The WPR reports secondary 17.8 km and tertiary 221.03 km (combined 238.83 km); no separate target was notified.",
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
      "reportPeriod": "21–27 Nov 2026",
      "reportIssued": "2026-11-27",
      "reportDate": "2026-11-27",
      "area": {
        "rfp": 85.2,
        "kml": 64.52,
        "unit": "sq km"
      },
      "outfalls": 15,
      "surveyTeam": {
        "base": 1,
        "rovers": 5,
        "members": 10,
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
          "done": 82.085,
          "planned": null,
          "pct": null,
          "unit": "km",
          "decimals": 2
        },
        "tertiary": {
          "done": 168.855,
          "planned": null,
          "pct": null,
          "unit": "km",
          "decimals": 2
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
        "Latest WPR period: 21–27 Nov 2026.",
        "City area is 85.2 sq km as per the RFP and 64.52 sq km as per the Nagar Nigam KML.",
        "Latest cumulative survey: primary 148 km, secondary 82.09 km, tertiary 168.86 km (total 398.94 km), road 232.54 km, GCP 206 / 206, static 10 / 10.",
        "Drain progress uses the 26 Nov classified SHPs: primary 148 km, secondary 82.09 km and tertiary 168.86 km (398.94 km total).",
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
      "reportPeriod": "21–27 Nov 2026",
      "reportIssued": "2026-11-27",
      "reportDate": "2026-11-27",
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
          "done": 476.32,
          "planned": null,
          "pct": null,
          "unit": "km",
          "note": "Combined secondary and tertiary drains through 26 Nov (+106.2 km this week); target not notified",
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
        "Latest WPR period: 21–27 Nov 2026; drain totals updated to 26 Nov 2026.",
        "City area is 141.94 sq km as per the RFP and 143.83 sq km as per the KML.",
        "Latest cumulative survey: primary 80.71 km (unchanged), secondary/tertiary 476.32 km (total 557.03 km), static 10 / 10; secondary addition this week is 106.2 km.",
        "Primary progress is shown against the 80 km tentative OSM plan; cumulative alignment is 80.71 km.",
        "DGPS deployment is 1 base and 6 rovers.",
        "No GCP data is reported for Meerut.",
        "No drone flight blocks are required; LiDAR is planned with a helicopter-mounted system and is not started.",
        "TBM and static points are taken from the supplied TBM.kmz.",
        "The 5 Nov primary layer contains 20 alignments and 74.7 km; the secondary/tertiary SHP has 189 secondary, 64 tertiary and 730 unclassified segments.",
        "The 26 Nov complete drains SHP contains 3,118 segments / 560.9 km raw and is a superset of the 21 Nov map layer (2,567 segments / 497.9 km); it adds 541 new segments / 62.4 km. The map layer has not yet been rebuilt from the 26 Nov file.",
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
      "reportPeriod": "21–27 Nov 2026",
      "reportIssued": "2026-11-27",
      "reportDate": "2026-11-27",
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
          "done": 369.55,
          "planned": null,
          "pct": null,
          "unit": "km",
          "note": "Combined secondary + tertiary length through 26 Nov; target not notified",
          "decimals": 2
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
        "Latest WPR period: 21–27 Nov 2026.",
        "Overall progress is the simple average of the available component percentages (primary drains, road survey, static points and LiDAR).",
        "City area is 225 sq km as per the RFP and 170.97 sq km as per the supplied outer boundary.",
        "Outfalls identified: Shahberi, Raj Nagar Extension, Hindon Ghat and Hindon cut to Yamuna.",
        "Latest cumulative survey: primary 160.5 km, road 327.88 km, secondary/tertiary 369.55 km (311.25 km to 19 Nov + 31.1 km on 25 Nov + 27.2 km on 26 Nov), static 6 / 6.",
        "Primary invert-level survey added 11 km this week; cumulative with invert levels is 171.5 km.",
        "Current DGPS deployment is 3 base and 10 rovers with 11 team members.",
        "The WPR showed 239.97 km cumulative secondary/tertiary to 12 Nov and 311.25 km to 19 Nov; the 25 Nov (31.1 km) and 26 Nov (27.2 km) digitized additions bring the cumulative to 369.55 km.",
        "Drain progress adds the 25 Nov (31.1 km) and 26 Nov (27.2 km) digitized lengths to the previous cumulative; new daily segments remain unclassified in the source SHPs.",
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
