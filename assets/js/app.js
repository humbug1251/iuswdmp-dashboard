(function () {
  'use strict';

  const DATA = window.DASHBOARD;
  const CITY_LAYERS = window.CITY_LAYERS || {};

  const BASEMAPS = {
    streets: {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      options: {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'
      }
    },
    satellite: {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      options: {
        maxZoom: 19,
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
      }
    },
    satelliteLabels: {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
      options: { maxZoom: 19, attribution: '' }
    }
  };

  const LAYER_DEFAULTS = {
    ortho: false,
    drains: false,
    gcp: false,
    tbm: false,
    static: false,
    blocks: false,
    wards: false,
    outer: true,
    buffer: false
  };

  const state = {
    currentCity: null,
    map: null,
    coverageMap: null,
    layers: null,
    layerGroups: {},
    tileLayers: [],
    basemap: 'streets',
    landingScroll: 0,
    restoredScroll: false
  };

  const el = {};

  /* ---------------------------------------------------------------------- */
  /* Utilities                                                              */
  /* ---------------------------------------------------------------------- */

  const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch]);
  }

  function formatNumber(value, digits) {
    if (value == null || Number.isNaN(Number(value))) return '—';
    const d = digits == null ? 1 : digits;
    return new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: d
    }).format(Number(value));
  }

  function formatKm(value) {
    if (value == null) return '—';
    const d = value < 10 ? 2 : value < 1000 ? 1 : 0;
    return formatNumber(value, d);
  }

  function formatPct(value) {
    if (value == null || Number.isNaN(Number(value))) return '—';
    const rounded = Math.round(Number(value) * 10) / 10;
    return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  }

  function pctLabel(value) {
    return value == null ? '—' : formatPct(value) + '%';
  }

  function formatDate(isoDate) {
    if (!isoDate) return '—';
    const date = new Date(isoDate + 'T00:00:00');
    if (Number.isNaN(date.getTime())) return isoDate;
    return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
  }

  function getCity(id) {
    return DATA && DATA.cities ? DATA.cities.find((city) => city.id === id) : null;
  }

  function ringMarkup(pct, size, variant) {
    const stroke = variant === 'xl' ? 7 : 6;
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const safePct = pct == null ? null : Math.max(0, Math.min(100, Number(pct)));
    const offset = safePct == null ? circumference : circumference * (1 - safePct / 100);
    return `<div class="ring-wrap ring-${variant || 'sm'} ${safePct == null ? 'is-empty' : ''}" style="--ring-size:${size}px;--ring-circ:${circumference};--ring-offset:${offset}" role="img" aria-label="${safePct == null ? 'No progress data' : 'Overall progress ' + formatPct(safePct) + ' percent'}">
      <svg viewBox="0 0 ${size} ${size}" aria-hidden="true">
        <circle class="ring-track" cx="${size / 2}" cy="${size / 2}" r="${radius}"></circle>
        ${safePct == null ? '' : `<circle class="ring-value" cx="${size / 2}" cy="${size / 2}" r="${radius}"></circle>`}
      </svg>
      <div class="ring-label">${safePct == null ? '<b>—</b>' : `<b>${formatPct(safePct)}</b><small>%</small>`}</div>
    </div>`;
  }

  function barMarkup(pct, tone) {
    const width = pct == null ? 0 : Math.max(0, Math.min(100, Number(pct)));
    return `<div class="bar ${tone ? 'bar-' + tone : ''}" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${formatPct(width)}"><span style="--bar-width:${width}%"></span></div>`;
  }

  function icon(id, className) {
    return `<svg class="icon ${className || ''}" aria-hidden="true"><use href="#i-${id}"></use></svg>`;
  }

  function readout(city) {
    if (!city) return '';
    if (city.area) {
      const kml = city.area.kml != null ? city.area.kml : city.area.rfp;
      return `${formatNumber(kml, 2)} sq km`;
    }
    return 'Area awaited';
  }

  /* ---------------------------------------------------------------------- */
  /* App setup                                                              */
  /* ---------------------------------------------------------------------- */

  function init() {
    cacheDom();
    if (!DATA || !Array.isArray(DATA.cities)) {
      renderDataError();
      return;
    }
    applyMeta();
    buildCitySelect();
    wireEvents();
    route();
  }

  function applyMeta() {
    const latest = DATA.meta.latestReport || '';
    const topbar = document.getElementById('topbar-report');
    if (topbar) topbar.textContent = latest;
  }

  function cacheDom() {
    el.landing = document.getElementById('landing');
    el.cityView = document.getElementById('city-view');
    el.cityGrid = document.getElementById('city-grid');
    el.coverageMap = document.getElementById('coverage-map');
    el.cityTitle = document.getElementById('city-title');
    el.citySub = document.getElementById('city-sub');
    el.citySelect = document.getElementById('city-select');
    el.progressTitle = document.getElementById('progress-title');
    el.layersBody = document.getElementById('layers-body');
    el.layersFoot = document.getElementById('layers-foot');
    el.progressBody = document.getElementById('progress-body');
    el.map = document.getElementById('map');
    el.mapEmpty = document.getElementById('map-empty');
    el.mobileBackdrop = document.getElementById('mobile-backdrop');
  }

  function renderDataError() {
    if (el.cityGrid) {
      el.cityGrid.innerHTML = '<div class="data-error"><strong>Dashboard data not loaded.</strong><p>Check that <code>data/cities.js</code> is present and loads before <code>assets/js/app.js</code>.</p></div>';
    }
  }

  function buildCitySelect() {
    el.citySelect.innerHTML = DATA.cities
      .map((city) => `<option value="${escapeHtml(city.id)}">${escapeHtml(city.name)}${city.status === 'awaiting' ? ' — data awaited' : ''}</option>`)
      .join('');
    el.citySelect.addEventListener('change', () => {
      window.location.hash = '#/city/' + el.citySelect.value;
    });
  }

  function wireEvents() {
    window.addEventListener('hashchange', route);
    window.addEventListener('resize', debounce(() => {
      if (state.map) {
        state.map.invalidateSize();
      }
      if (state.coverageMap) {
        state.coverageMap.invalidateSize();
        state.coverageMap.fitBounds(
          L.latLngBounds(DATA.cities.map((city) => city.coords)),
          { padding: [48, 48], maxZoom: 8 }
        );
      }
    }, 150));

    document.getElementById('open-layers').addEventListener('click', () => openDrawer('layers'));
    document.getElementById('open-progress').addEventListener('click', () => openDrawer('progress'));
    el.mobileBackdrop.addEventListener('click', closeDrawers);
    document.querySelectorAll('[data-close-panel]').forEach((button) => {
      button.addEventListener('click', closeDrawers);
    });

    document.getElementById('fit-map').addEventListener('click', fitMap);
    document.querySelectorAll('[data-map-action]').forEach((button) => {
      button.addEventListener('click', () => {
        if (!state.map) return;
        const action = button.dataset.mapAction;
        if (action === 'in') state.map.zoomIn();
        else if (action === 'out') state.map.zoomOut();
        else fitMap();
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeDrawers();
    });
  }

  function debounce(fn, delay) {
    let timer;
    return function () {
      window.clearTimeout(timer);
      timer = window.setTimeout(fn, delay);
    };
  }

  /* ---------------------------------------------------------------------- */
  /* Routing                                                                */
  /* ---------------------------------------------------------------------- */

  function route() {
    const match = window.location.hash.match(/^#\/city\/([a-z0-9-]+)/i);
    if (match && getCity(match[1])) {
      showCity(match[1]);
      return;
    }
    showLanding();
  }

  function showLanding() {
    if (state.currentCity) {
      state.landingScroll = window.scrollY;
      state.restoredScroll = true;
    }
    state.currentCity = null;
    destroyMap();
    destroyCoverageMap();
    document.body.classList.remove('is-city', 'drawer-open');
    el.cityView.hidden = true;
    el.landing.hidden = false;
    renderLanding();
    document.title = 'Dashboard for Survey Progress';
    if (state.restoredScroll) {
      requestAnimationFrame(() => window.scrollTo(0, state.landingScroll));
      state.restoredScroll = false;
    } else {
      window.scrollTo(0, 0);
    }
  }

  function showCity(id) {
    const city = getCity(id);
    if (!city) {
      window.location.hash = '#/';
      return;
    }
    if (!state.currentCity) {
      state.landingScroll = window.scrollY;
    }
    state.currentCity = city;
    destroyCoverageMap();
    document.body.classList.add('is-city');
    document.body.classList.remove('drawer-open');
    el.landing.hidden = true;
    el.cityView.hidden = false;
    closeDrawers();
    setCityHeader(city);
    renderLayersPanel(city);
    renderProgressPanel(city);
    window.scrollTo(0, 0);
    document.title = city.name + ' · Survey Progress';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => initMap(city));
    });
  }

  function setCityHeader(city) {
    el.cityTitle.textContent = city.name;
    const bits = [];
    if (city.area) bits.push(readout(city));
    if (city.outfalls != null) bits.push(city.outfalls + ' outfalls');
    if (city.reportPeriod) bits.push('WPR ' + city.reportPeriod);
    el.citySub.textContent = city.status === 'reporting' ? bits.join(' · ') : 'No weekly report received';
    el.citySelect.value = city.id;
    el.progressTitle.textContent = city.name;
  }

  /* ---------------------------------------------------------------------- */
  /* Landing page                                                           */
  /* ---------------------------------------------------------------------- */

  function renderLanding() {
    renderCityGrid(DATA.cities);
    observeReveal(el.landing);
    requestAnimationFrame(() => initCoverageMap());
  }

  function renderCityGrid(cities) {
    el.cityGrid.innerHTML = cities.map((city, index) => cityCard(city, index)).join('');
  }

  function cityCard(city, index) {
    const components = city.components || {};
    const primary = Number(components.primary && components.primary.done) || 0;
    const secondary = Number(components.secondary && components.secondary.done) || 0;
    const tertiary = Number(components.tertiary && components.tertiary.done) || 0;
    const combined = Number(components.secondaryTertiary && components.secondaryTertiary.done) || 0;
    const separated = secondary + tertiary;
    const drains = primary + (separated > 0 ? separated : combined);
    const team = city.surveyTeam || {};
    return `<a class="city-card-simple" href="#/city/${escapeHtml(city.id)}" data-reveal style="--delay:${index * 45}ms" aria-label="Open ${escapeHtml(city.name)} dashboard">
      <span class="simple-card-arrow">${icon('arrow')}</span>
      <span class="simple-card-name">${escapeHtml(city.name)}</span>
      <span class="simple-card-stats">
        <span class="simple-stat">
          <span class="simple-stat-label">Drains Surveyed</span>
          <span class="simple-stat-value">${formatNumber(drains, 1)}<small> km</small></span>
        </span>
        <span class="simple-stat">
          <span class="simple-stat-label">Rover Units</span>
          <span class="simple-stat-value">${formatNumber(team.rovers, 0)}<small> units</small></span>
        </span>
      </span>
    </a>`;
  }

  function initCoverageMap() {
    if (!el.coverageMap || el.landing.hidden || typeof L === 'undefined') return;
    destroyCoverageMap();
    el.coverageMap.innerHTML = '';

    const map = L.map(el.coverageMap, {
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: true
    });
    state.coverageMap = map;

    const googleLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      maxZoom: 20,
      attribution: 'Imagery &copy;2026 Google'
    }).addTo(map);

    // If Google tiles are blocked, fall back to an OSM basemap so the
    // locator map still works.
    let googleErrors = 0;
    let fellBack = false;
    googleLayer.on('tileerror', () => {
      googleErrors += 1;
      if (fellBack || googleErrors < 4) return;
      fellBack = true;
      map.removeLayer(googleLayer);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'
      }).addTo(map);
    });

    const labelPositions = {
      firozabad: 'bottom',
      shahjahanpur: 'right',
      saharanpur: 'top',
      moradabad: 'right',
      meerut: 'right',
      ghaziabad: 'left'
    };

    DATA.cities.forEach((city) => {
      const position = labelPositions[city.id] || 'bottom';
      const marker = L.marker(city.coords, {
        keyboard: true,
        title: city.name,
        icon: L.divIcon({
          className: 'coverage-pin-wrap',
          html: `<span class="coverage-pin"></span><span class="coverage-pin-label label-${position}">${escapeHtml(city.name)}</span>`,
          iconSize: [24, 24],
          iconAnchor: [12, 12]
        })
      }).addTo(map);
      marker.on('click', () => {
        window.location.hash = '#/city/' + city.id;
      });
    });

    const bounds = L.latLngBounds(DATA.cities.map((city) => city.coords));
    map.fitBounds(bounds, { padding: [48, 48], maxZoom: 8 });
    window.setTimeout(() => {
      if (state.coverageMap === map) map.invalidateSize();
    }, 100);
  }

  function destroyCoverageMap() {
    if (state.coverageMap) {
      state.coverageMap.remove();
      state.coverageMap = null;
    }
  }

  function observeReveal(root) {
    const nodes = root.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    nodes.forEach((node) => observer.observe(node));
    // Make sure content is never left hidden if the observer does not fire
    // (print, full-page capture, or a very fast scroll).
    window.setTimeout(() => {
      nodes.forEach((node) => node.classList.add('is-visible'));
      observer.disconnect();
    }, 1200);
  }

  /* ---------------------------------------------------------------------- */
  /* City: progress panel                                                   */
  /* ---------------------------------------------------------------------- */

  function renderProgressPanel(city) {
    el.progressTitle.textContent = city.name;
    if (!city.components) {
      el.progressBody.innerHTML = emptyProgressMarkup(city);
      return;
    }

    const c = city.components;
    const cards = [];

    const km = (value) => (value == null ? null : formatKm(value));
    const points = (value) => (value == null ? null : formatNumber(value, 0));
    const sqkm = (value) => (value == null ? null : formatNumber(value, 1));

    if (c.primary) {
      cards.push(metricCard('Primary Drain', km(c.primary.done), 'km', km(c.primary.planned), 'km', c.primary.pct, '#0057ff'));
    }

    const secondaryDone = c.secondary && c.secondary.done != null ? Number(c.secondary.done) : null;
    const tertiaryDone = c.tertiary && c.tertiary.done != null ? Number(c.tertiary.done) : null;
    const combinedDone = c.secondaryTertiary && c.secondaryTertiary.done != null
      ? Number(c.secondaryTertiary.done)
      : null;

    if (secondaryDone != null || tertiaryDone != null) {
      const total = (secondaryDone || 0) + (tertiaryDone || 0);
      cards.push(metricCard('Secondary &amp; Tertiary', km(total), 'km', null, '', null, '#ff7a00'));
    } else if (combinedDone != null) {
      cards.push(metricCard('Secondary &amp; Tertiary', km(combinedDone), 'km', null, '', null, '#ff7a00'));
    }

    if (c.road) {
      cards.push(metricCard('Road Survey', km(c.road.done), 'km', km(c.road.planned), 'km', c.road.pct, '#c77d2a'));
    }

    if (c.gcp) {
      cards.push(metricCard('GCP Points', points(c.gcp.done), 'points', points(c.gcp.planned), 'points', c.gcp.pct, '#d94f70'));
    }
    if (c.static) {
      cards.push(metricCard('Static Points', points(c.static.done), 'points', points(c.static.planned), 'points', c.static.pct, '#6d5aa8'));
    }

    if (city.lidarCard !== false) {
      if (c.lidar && c.lidar.unit === 'sq km') {
        cards.push(metricCard('LiDAR Survey', sqkm(c.lidar.done), 'sq km', sqkm(c.lidar.planned), 'sq km', c.lidar.pct, '#0e7490'));
      } else if (c.lidar) {
        cards.push(metricCard('LiDAR Survey', 'Not started', '', null, '', 0, '#0e7490', 'Status'));
      }
    }

    if (city.surveyTeam) {
      cards.push(surveyTeamCard(city.surveyTeam));
    }

    el.progressBody.innerHTML = `
      <div class="progress-wpr"><span>Latest WPR</span><b>${escapeHtml(city.reportPeriod || '')}</b></div>
      <div class="metric-card-list">${cards.join('')}</div>`;
  }

  function metricCard(label, done, doneUnit, target, targetUnit, pct, color, doneLabel) {
    const hasTarget = target != null;
    return `<div class="metric-card" style="--accent:${color}">
      <div class="metric-card-head">
        <span class="metric-card-title"><i></i>${label}</span>
        ${pct != null ? `<b class="metric-card-pct">${pctLabel(pct)}</b>` : ''}
      </div>
      <div class="metric-card-values ${hasTarget ? '' : 'single'}">
        <div class="metric-card-value">
          <span>${doneLabel || 'Done'}</span>
          <b>${escapeHtml(done)}${doneUnit ? `<small>${escapeHtml(doneUnit)}</small>` : ''}</b>
        </div>
        ${hasTarget ? `<div class="metric-card-value">
          <span>Estimated</span>
          <b>${escapeHtml(target)}${targetUnit ? `<small>${escapeHtml(targetUnit)}</small>` : ''}</b>
        </div>` : ''}
      </div>
    </div>`;
  }

  function surveyTeamCard(team) {
    const value = (number) => (number == null ? '—' : formatNumber(number, 0));
    return `<div class="metric-card metric-card-team" style="--accent:#0e7490">
      <div class="metric-card-head">
        <span class="metric-card-title"><i></i>Survey Team</span>
      </div>
      <div class="metric-team">
        <div><span>Rovers</span><b>${value(team.rovers)}</b></div>
        <div><span>Base</span><b>${value(team.base)}</b></div>
        <div><span>Members</span><b>${value(team.members)}</b></div>
      </div>
    </div>`;
  }

  function secondaryTertiaryMarkup(c) {
    if (c.secondary && c.secondary.done != null && c.tertiary && c.tertiary.done != null) {
      const total = c.secondary.done + c.tertiary.done;
      const secondaryShare = total ? (c.secondary.done / total) * 100 : 0;
      const tertiaryShare = total ? (c.tertiary.done / total) * 100 : 0;
      return `<div class="metric-block">
        <div class="metric-head">
          <span><i class="key key-slate"></i>Secondary &amp; tertiary</span>
          <b>${formatKm(total)} km</b>
        </div>
        <div class="stack-bar" role="img" aria-label="Secondary ${formatKm(c.secondary.done)} km and tertiary ${formatKm(c.tertiary.done)} km mapped">
          <span class="seg-amber" style="width:${secondaryShare}%"></span>
          <span class="seg-slate" style="width:${tertiaryShare}%"></span>
        </div>
        <div class="legend-row">
          <span><i class="key key-amber"></i>Secondary ${formatKm(c.secondary.done)} km</span>
          <span><i class="key key-slate"></i>Tertiary ${formatKm(c.tertiary.done)} km</span>
        </div>
        <div class="metric-meta"><span>Length mapped</span><span>Target not notified</span></div>
      </div>`;
    }
    if (c.secondaryTertiary && c.secondaryTertiary.done != null) {
      return `<div class="metric-block">
        <div class="metric-head">
          <span><i class="key key-slate"></i>Secondary &amp; tertiary</span>
          <b>${formatKm(c.secondaryTertiary.done)} km</b>
        </div>
        <div class="length-row"><span class="length-pill">${formatKm(c.secondaryTertiary.done)} km mapped</span><span class="muted">target not notified</span></div>
        ${c.secondaryTertiary.note ? `<p class="metric-note">${escapeHtml(c.secondaryTertiary.note)}</p>` : ''}
      </div>`;
    }
    return `<div class="metric-block">
      <div class="metric-head"><span><i class="key key-slate"></i>Secondary &amp; tertiary</span><b>—</b></div>
      <p class="metric-note">Length not reported in the latest WPR.</p>
    </div>`;
  }

  function timelineMarkup(city) {
    if (!city.milestones || !city.milestones.length) {
      return emptyTimelineMarkup();
    }
    return `<div class="timeline-intro">
      <p>Reported milestones and correspondence from the latest weekly progress report. Pending items stay visible until closed.</p>
    </div>
    <ol class="timeline">
      ${city.milestones.map((item) => `<li class="timeline-item ${escapeHtml(item.status || 'done')}">
        <span class="timeline-dot" aria-hidden="true"></span>
        <div class="timeline-copy">
          <span class="timeline-date">${escapeHtml(item.date)}</span>
          <p>${escapeHtml(item.label)}</p>
        </div>
      </li>`).join('')}
    </ol>`;
  }

  function emptyProgressMarkup(city) {
    return `<div class="empty-panel">
      <span class="empty-icon">${icon('chart')}</span>
      <p class="eyebrow">Data awaited</p>
      <h3>No weekly progress report yet</h3>
      <p>No WPR or survey figures for ${escapeHtml(city.name)} were found in the supplied workspace.</p>
      <ul class="check-list">
        <li>Primary, secondary and tertiary drain lengths</li>
        <li>Road survey completed against target</li>
        <li>GCP, static point and LiDAR coverage</li>
        <li>Drone survey blocks</li>
      </ul>
      <p class="empty-note">The dashboard will populate when the city's WPR and GIS layers are added.</p>
    </div>`;
  }

  function emptyTimelineMarkup() {
    return `<div class="empty-panel compact">
      <span class="empty-icon">${icon('grid')}</span>
      <h3>No milestones reported</h3>
      <p>The timeline will populate from the first weekly progress report.</p>
    </div>`;
  }

  /* ---------------------------------------------------------------------- */
  /* City: layers panel                                                     */
  /* ---------------------------------------------------------------------- */

  function renderLayersPanel(city) {
    const data = city.layerKey ? CITY_LAYERS[city.layerKey] : null;
    const available = data && data.layers;

    if (!available) {
      el.layersBody.innerHTML = `
        ${basicInfoMarkup(city, null, false)}
        <div class="layer-empty">
          <span class="empty-icon">${icon('layers')}</span>
          <h3>Layers awaited</h3>
          <p>No boundary or survey GIS files were supplied for ${escapeHtml(city.name)}.</p>
        </div>
        <div class="layer-group">
          <p class="layer-group-title">Boundaries</p>
          ${layerRow('wards', 'Ward Boundary', 'No data received', 'poly', '#a16207', '', false)}
          ${layerRow('outer', 'Outer Boundary', 'No data received', 'poly', '#0b1f2a', '', false)}
          ${layerRow('buffer', 'Buffer Area', 'No data received', 'poly', '#c77d2a', '', false)}
        </div>
        <div class="layer-group">
          <p class="layer-group-title">Survey layers</p>
          ${layerRow('drains', 'Drains Surveyed', 'No data received', 'line', '#0057ff', '', false)}
          ${city.gcpAvailable !== false ? layerRow('gcp', 'GCP Marked', 'No data received', 'dot', '#d94f70', '', false) : ''}
          ${layerRow('tbm', 'TBM', 'No data received', 'diamond', '#6d5aa8', '', false)}
          ${city.blocksAvailable !== false ? layerRow('blocks', 'Drone Survey Blocks', 'No data received', 'poly', '#00c2ff', '', false) : ''}
        </div>`;
      el.layersFoot.innerHTML = basemapMarkup();
      wireBasemapButtons();
      return;
    }

    const layers = data.layers;
    const stats = data.stats || {};
    const counts = {
      drains: (layers.drains.features || []).length,
      gcp: (layers.gcp.features || []).length,
      tbm: (layers.tbm.features || []).length,
      static: (layers.static && layers.static.features ? layers.static.features : []).length,
      blocks: (layers.blocks.features || []).length,
      wards: (layers.wards.features || []).length,
      outer: (layers.outer.features || []).length,
      buffer: (layers.buffer.features || []).length
    };
    const outerArea = layers.outer.features[0] && layers.outer.features[0].properties.area_sqkm;
    const bufferArea = layers.buffer.features[0] && layers.buffer.features[0].properties.area_sqkm;
    const wardSample = layers.wards.features.length > 0 && layers.wards.features.every((feature) => feature.properties.sample);
    const drainClasses = new Set((layers.drains.features || []).map((feature) => feature.properties.hierarchy));
    const wardFormat = data.wardSource === 'SHP' ? 'SHP' : 'KML';
    const gcpProgress = city.components && city.components.gcp ? city.components.gcp.done : null;
    const gcpCount = gcpProgress != null ? gcpProgress : counts.gcp;

    el.layersBody.innerHTML = `
      ${basicInfoMarkup(city, counts.wards, wardSample)}
      <div class="layer-group">
        <p class="layer-group-title">Boundaries</p>
        ${layerRow('wards', 'Ward Boundary', `${formatNumber(counts.wards, 0)} wards · ${wardFormat}`, 'poly', '#a16207', '', counts.wards > 0)}
        ${layerRow('outer', 'Outer Boundary', `${formatNumber(outerArea, 2)} sq km`, 'poly', '#0b1f2a', '', counts.outer > 0)}
        ${counts.buffer > 0 ? layerRow('buffer', 'Buffer Area', `${formatNumber(bufferArea, 2)} sq km`, 'poly', '#c77d2a', '', true) : ''}
      </div>
      <div class="layer-group">
        <p class="layer-group-title">Survey layers</p>
        ${data.ortho
          ? layerRow('ortho', 'Ortho Image', `${formatNumber(data.ortho.resolution_m, 2)} m/px · ortho`, 'raster', '#8b5cf6', 'ORTHO', true)
          : ''}
        ${layerRow('drains', 'Drains Surveyed', `${formatNumber(counts.drains, 0)} segments`, 'line', '#0057ff', '', counts.drains > 0)}
        ${counts.drains && data.drainClassification !== false ? `<div class="layer-sublegend" aria-label="Drain hierarchy colours">
          ${drainClasses.has('Primary') ? '<span><i class="line-key line-primary"></i>Primary</span>' : ''}
          ${drainClasses.has('Secondary') ? '<span><i class="line-key line-secondary"></i>Secondary</span>' : ''}
          ${drainClasses.has('Tertiary') ? '<span><i class="line-key line-tertiary"></i>Tertiary</span>' : ''}
          ${drainClasses.has('Natural Stream') ? '<span><i class="line-key line-natural"></i>Natural Stream</span>' : ''}
          ${drainClasses.has('Unclassified') ? '<span><i class="line-key line-unclassified"></i>Unclassified</span>' : ''}
        </div>` : ''}
        ${counts.gcp > 0 ? layerRow('gcp', 'GCP Marked', `${formatNumber(gcpCount, 0)} points`, 'dot', '#d94f70', '', true) : ''}
        ${counts.tbm > 0 ? layerRow('tbm', 'TBM', `${formatNumber(counts.tbm, 0)} benchmark${counts.tbm === 1 ? '' : 's'}`, 'diamond', '#6d5aa8', '', true) : ''}
        ${counts.static > 0 ? layerRow('static', 'Static Points', `${formatNumber(counts.static, 0)} points`, 'dot', '#14b8a6', '', true) : ''}
        ${counts.blocks > 0 ? layerRow('blocks', 'Drone Survey Blocks', `${formatNumber(counts.blocks, 0)} blocks`, 'poly', '#00c2ff', '', true) : ''}
      </div>`;

    el.layersFoot.innerHTML = basemapMarkup();
    wireBasemapButtons();
  }

  function basicInfoMarkup(city, wardCount, wardSample) {
    const area = city.area ? (city.area.kml != null ? city.area.kml : city.area.rfp) : null;
    return `<div class="basic-info">
      <p class="panel-label">Basic information</p>
      <div class="basic-info-grid">
        <div class="basic-info-tile">
          <span>No. of Wards</span>
          <b>${wardCount != null ? formatNumber(wardCount, 0) : '—'}</b>
          ${wardSample ? '<small>sample</small>' : ''}
        </div>
        <div class="basic-info-tile">
          <span>Area (Sq. km)</span>
          <b>${area != null ? formatNumber(area, 2) : '—'}</b>
        </div>
      </div>
    </div>`;
  }

  function layerRow(key, label, copy, type, color, tag, available) {
    return `<label class="layer-row ${available ? '' : 'is-disabled'}" data-layer-row="${escapeHtml(key)}">
      <span class="layer-swatch swatch-${escapeHtml(type)}" style="--swatch:${escapeHtml(color)}" aria-hidden="true"></span>
      <span class="layer-copy">
        <b>${escapeHtml(label)}${tag ? `<em class="tag">${escapeHtml(tag)}</em>` : ''}</b>
        <small>${escapeHtml(copy)}</small>
      </span>
      <span class="switch">
        <input type="checkbox" data-layer-input="${escapeHtml(key)}" ${available ? '' : 'disabled'} aria-label="Toggle ${escapeHtml(label)}">
        <span class="switch-ui" aria-hidden="true"></span>
      </span>
    </label>`;
  }

  function basemapMarkup() {
    return `<div class="basemap-block">
      <span class="panel-label">Basemap</span>
      <div class="segmented" role="group" aria-label="Basemap">
        <button type="button" data-basemap="streets" class="${state.basemap === 'streets' ? 'is-active' : ''}">${icon('grid')} Streets</button>
        <button type="button" data-basemap="satellite" class="${state.basemap === 'satellite' ? 'is-active' : ''}">${icon('satellite')} Satellite</button>
      </div>
    </div>`;
  }

  function wireBasemapButtons() {
    document.querySelectorAll('[data-basemap]').forEach((button) => {
      button.addEventListener('click', () => setBasemap(button.dataset.basemap));
    });
  }

  /* ---------------------------------------------------------------------- */
  /* Map                                                                    */
  /* ---------------------------------------------------------------------- */

  function destroyMap() {
    if (state.map) {
      state.map.remove();
      state.map = null;
    }
    state.layers = null;
    state.layerGroups = {};
    state.tileLayers = [];
    if (el.map) el.map.innerHTML = '';
  }

  function initMap(city) {
    destroyMap();
    const map = L.map(el.map, {
      zoomControl: false,
      attributionControl: true,
      minZoom: 9,
      maxZoom: 19,
      zoomSnap: 0.5,
      preferCanvas: false
    });
    state.map = map;
    createPanes(map);
    setBasemap(state.basemap || 'streets');

    const cityLayers = city.layerKey ? CITY_LAYERS[city.layerKey] : null;
    state.layers = cityLayers || null;

    if (cityLayers && cityLayers.layers) {
      el.mapEmpty.hidden = true;
      buildOverlays(map, cityLayers);
      wireLayerInputs();
      map.invalidateSize();
      fitMap();
    } else {
      el.mapEmpty.hidden = false;
      renderMapEmpty(city);
      map.setView(city.coords, 12);
      addCityMarker(map, city);
    }

    L.control.scale({ position: 'bottomleft', imperial: false, maxWidth: 110 }).addTo(map);
    map.whenReady(() => {
      window.setTimeout(() => {
        if (state.map !== map) return;
        map.invalidateSize();
        if (cityLayers && cityLayers.layers) fitMap();
        else map.setView(city.coords, 12);
      }, 80);
    });
  }

  function createPanes(map) {
    const panes = {
      orthoPane: 300,
      bufferPane: 350,
      outerPane: 360,
      blocksPane: 388,
      wardsPane: 385,
      drainsPane: 390,
      pointsPane: 400
    };
    Object.keys(panes).forEach((name) => {
      const pane = map.createPane(name);
      pane.style.zIndex = String(panes[name]);
    });
  }

  function setBasemap(name) {
    state.basemap = name;
    document.querySelectorAll('[data-basemap]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.basemap === name);
    });
    if (!state.map) return;

    state.tileLayers.forEach((layer) => state.map.removeLayer(layer));
    state.tileLayers = [];

    const add = (definition) => {
      const layer = L.tileLayer(definition.url, definition.options).addTo(state.map);
      state.tileLayers.push(layer);
    };
    add(BASEMAPS[name] || BASEMAPS.streets);
    if (name === 'satellite') add(BASEMAPS.satelliteLabels);
  }

  function buildOverlays(map, data) {
    const layers = data.layers;

    const buffer = L.geoJSON(layers.buffer, {
      pane: 'bufferPane',
      style: {
        color: '#c77d2a',
        weight: 2.2,
        opacity: 0.95,
        dashArray: '9 6',
        fill: false,
        className: 'boundary-line buffer-line'
      },
      onEachFeature: (feature, layer) => {
        layer.bindTooltip('Survey buffer', { sticky: true, direction: 'top', className: 'map-tip' });
        layer.bindPopup(popupCard('Boundary', 'Survey buffer', [
          ['Area', formatNumber(feature.properties.area_sqkm, 2) + ' sq km'],
          ['Source', feature.properties.source]
        ], feature.properties.source));
      }
    });

    const outer = L.geoJSON(layers.outer, {
      pane: 'outerPane',
      style: {
        color: '#0b1f2a',
        weight: 2.6,
        opacity: 0.95,
        fillColor: '#0b1f2a',
        fillOpacity: 0.025,
        className: 'boundary-line outer-line'
      },
      onEachFeature: (feature, layer) => {
        layer.bindTooltip('Nagar Nigam outer boundary', { sticky: true, direction: 'top', className: 'map-tip' });
        layer.bindPopup(popupCard('Boundary', 'Nagar Nigam outer boundary', [
          ['Area', formatNumber(feature.properties.area_sqkm, 2) + ' sq km'],
          ['Source', feature.properties.source]
        ], feature.properties.source));
      }
    });

    const wardLabels = L.layerGroup();
    const wards = L.geoJSON(layers.wards, {
      pane: 'wardsPane',
      style: {
        color: '#8a5a1f',
        weight: 1.2,
        opacity: 0.9,
        dashArray: '3 3',
        fillColor: '#e8b878',
        fillOpacity: 0.015,
        className: 'ward-line'
      },
      onEachFeature: (feature, layer) => {
        const props = feature.properties;
        layer.bindTooltip(props.name, { sticky: true, direction: 'center', className: 'map-tip map-tip-center' });
        layer.bindPopup(popupCard('Ward boundary', props.name, [
          ['Ward no.', props.ward_no != null ? String(props.ward_no) : '—'],
          ['Area', formatNumber(props.area_sqkm, 2) + ' sq km'],
          ['Source', props.source]
        ], ''));
        if (data.wardLabels && props.label_point) {
          wardLabels.addLayer(L.marker(props.label_point, {
            interactive: false,
            keyboard: false,
            icon: L.divIcon({
              className: 'ward-label-wrap',
              html: `<span>${escapeHtml(props.label)}</span>`,
              iconSize: [26, 16],
              iconAnchor: [13, 8]
            })
          }));
        }
      }
    });
    const wardsGroup = data.wardLabels ? L.layerGroup([wards, wardLabels]) : wards;

    const blocks = L.geoJSON(layers.blocks, {
      pane: 'blocksPane',
      style: {
        color: '#00c2ff',
        weight: 1.8,
        opacity: 0.95,
        dashArray: '7 4',
        fillColor: '#00c2ff',
        fillOpacity: 0.04,
        className: 'block-line'
      },
      onEachFeature: (feature, layer) => {
        const props = feature.properties;
        layer.bindTooltip(props.name, { sticky: true, direction: 'center', className: 'map-tip map-tip-center' });
        layer.bindPopup(popupCard('Drone survey block', props.name, [
          ['Area', formatNumber(props.area_sqkm, 2) + ' sq km'],
          ['Status', props.status],
          ['Source', props.source]
        ], ''));
      }
    });

    const drains = L.geoJSON(layers.drains, {
      pane: 'drainsPane',
      renderer: L.canvas({ pane: 'drainsPane', padding: 0.5 }),
      style: (feature) => {
        const hierarchy = feature.properties.hierarchy;
        if (data.drainClassification === false) {
          return {
            color: '#0057ff',
            weight: 2.2,
            opacity: 0.9,
            lineCap: 'round',
            lineJoin: 'round'
          };
        }
        if (hierarchy === 'Primary') {
          return { color: '#0057ff', weight: 2.6, opacity: 0.98, lineCap: 'round', lineJoin: 'round' };
        }
        if (hierarchy === 'Secondary') {
          return { color: '#ff7a00', weight: 2.2, opacity: 0.95, lineCap: 'round', lineJoin: 'round' };
        }
        if (hierarchy === 'Natural Stream') {
          return { color: '#0e9f6e', weight: 1.7, opacity: 0.9, lineCap: 'round', lineJoin: 'round' };
        }
        if (hierarchy === 'Unclassified') {
          return { color: '#8a9299', weight: 1.2, opacity: 0.65, lineCap: 'round', lineJoin: 'round' };
        }
        return { color: '#ff2d95', weight: 1.4, opacity: 0.8, lineCap: 'round', lineJoin: 'round' };
      },
      onEachFeature: (feature, layer) => {
        const props = feature.properties;
        layer.bindTooltip(props.name + ' · ' + formatKm(props.length_km) + ' km', { sticky: true, direction: 'top', className: 'map-tip' });
        const rows = [
          ['Length', formatKm(props.length_km) + ' km'],
          ['Status', props.status],
          ['Source', props.source]
        ];
        if (props.ward_no) rows.splice(1, 0, ['Ward', String(props.ward_no)]);
        const title = props.hierarchy === 'Drain'
          ? 'Drain'
          : props.hierarchy === 'Unclassified'
            ? 'Unclassified drain'
            : props.hierarchy === 'Natural Stream'
              ? 'Natural stream'
              : props.hierarchy + ' drain';
        layer.bindPopup(popupCard(title, props.name, rows, ''));
      }
    });

    const gcp = L.geoJSON(layers.gcp, {
      pane: 'pointsPane',
      pointToLayer: (feature, latlng) => L.circleMarker(latlng, {
        radius: 4.6,
        color: '#8f2340',
        weight: 1.4,
        fillColor: '#d94f70',
        fillOpacity: 0.95,
        pane: 'pointsPane'
      }),
      onEachFeature: (feature, layer) => {
        const props = feature.properties;
        layer.bindTooltip(props.name, { direction: 'top', offset: [0, -7], className: 'map-tip' });
        layer.bindPopup(popupCard('Ground control point', props.name, [
          ['Elevation', props.elevation_m != null ? formatNumber(props.elevation_m, 2) + ' m' : '—'],
          ['Source', props.source]
        ], ''));
      }
    });

    const tbmIcon = L.divIcon({
      className: 'tbm-icon-wrap',
      html: '<span class="tbm-icon"></span>',
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });
    const tbm = L.geoJSON(layers.tbm, {
      pane: 'pointsPane',
      pointToLayer: (feature, latlng) => L.marker(latlng, { icon: tbmIcon, pane: 'pointsPane', keyboard: true }),
      onEachFeature: (feature, layer) => {
        const props = feature.properties;
        layer.bindTooltip(props.name, { direction: 'top', offset: [0, -9], className: 'map-tip' });
        layer.bindPopup(popupCard('Temporary benchmark', props.name, [
          ['Elevation', props.elevation_m != null ? formatNumber(props.elevation_m, 2) + ' m' : '—'],
          ['Source', props.source]
        ], ''));
      }
    });

    let staticPoints = null;
    if (layers.static && layers.static.features.length) {
      staticPoints = L.geoJSON(layers.static, {
        pane: 'pointsPane',
        pointToLayer: (feature, latlng) => L.circleMarker(latlng, {
          radius: 4.4,
          color: '#0f766e',
          weight: 1.4,
          fillColor: '#14b8a6',
          fillOpacity: 0.95,
          pane: 'pointsPane'
        }),
        onEachFeature: (feature, layer) => {
          const props = feature.properties;
          layer.bindTooltip(props.name, { direction: 'top', offset: [0, -7], className: 'map-tip' });
          layer.bindPopup(popupCard('Static point', props.name, [
            ['Elevation', props.elevation_m != null ? formatNumber(props.elevation_m, 2) + ' m' : '—'],
            ['Source', props.source]
          ], ''));
        }
      });
    }

    state.layerGroups = { buffer, outer, wards: wardsGroup, blocks, drains, gcp, tbm };
    if (staticPoints) state.layerGroups.static = staticPoints;
    if (data.ortho) {
      const ortho = L.imageOverlay(data.ortho.url, data.ortho.bounds, {
        pane: 'orthoPane',
        opacity: 1,
        interactive: false,
        attribution: 'Ortho: Firozabad drone survey'
      });
      state.layerGroups.ortho = L.layerGroup([ortho]);
    }
    Object.keys(state.layerGroups).forEach((key) => {
      const group = state.layerGroups[key];
      if (group.getLayers().length && LAYER_DEFAULTS[key]) group.addTo(map);
    });
  }

  function wireLayerInputs() {
    document.querySelectorAll('[data-layer-input]').forEach((input) => {
      const key = input.dataset.layerInput;
      const group = state.layerGroups[key];
      if (!group || !group.getLayers().length) {
        input.checked = false;
        input.disabled = true;
        return;
      }
      input.checked = state.map.hasLayer(group);
      input.addEventListener('change', () => {
        if (input.checked) group.addTo(state.map);
        else state.map.removeLayer(group);
      });
    });
  }

  function popupCard(kicker, title, rows, source, note) {
    return `<div class="map-popup">
      <span class="popup-kicker">${escapeHtml(kicker)}</span>
      <h4>${escapeHtml(title)}</h4>
      <dl>${rows.map(([term, value]) => `<div><dt>${escapeHtml(term)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl>
      ${note ? `<p class="popup-note">${escapeHtml(note)}</p>` : ''}
      ${source ? `<p class="popup-source">${escapeHtml(source)}</p>` : ''}
    </div>`;
  }

  function renderMapEmpty(city) {
    const reporting = city.status === 'reporting';
    el.mapEmpty.innerHTML = `<div class="map-empty-card">
      <span class="empty-icon">${icon(reporting ? 'layers' : 'pin')}</span>
      <p class="eyebrow">${reporting ? 'GIS layers awaited' : 'No GIS data yet'}</p>
      <h3>${reporting ? 'Survey layers pending' : 'Base map only'}</h3>
      <p>${reporting
        ? `${escapeHtml(city.name)} has current progress figures, but no boundary or survey layers were supplied.`
        : `No boundary, drain, GCP, TBM or LiDAR layers have been received for ${escapeHtml(city.name)}.`}</p>
      <ul class="map-empty-list">
        <li>Boundary and buffer</li>
        <li>Drains surveyed</li>
        <li>${city.gcpAvailable === false ? 'TBM and LiDAR layers' : 'GCP, TBM and LiDAR layers'}</li>
      </ul>
    </div>`;
  }

  function addCityMarker(map, city) {
    const marker = L.marker(city.coords, {
      icon: L.divIcon({
        className: 'city-pin-wrap',
        html: `<span class="city-pin-pulse"></span><span class="city-pin-dot"></span><span class="city-pin-label">${escapeHtml(city.name)}</span>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      }),
      keyboard: true
    }).addTo(map);
    marker.bindPopup(`<div class="map-popup"><span class="popup-kicker">City</span><h4>${escapeHtml(city.name)}</h4><p class="popup-note">Boundary and survey GIS layers are awaited.</p></div>`);
  }

  function fitMap() {
    if (!state.map || !state.currentCity) return;
    const desktop = window.matchMedia('(min-width: 1201px)').matches;
    let bounds = state.layers && state.layers.bounds;

    // The initial view is boundary-first: fit the outer boundary rather than
    // the full drain/control-point extent, so the city reads clearly.
    const outer = state.layers && state.layers.layers && state.layers.layers.outer;
    if (outer && outer.features && outer.features.length) {
      bounds = L.geoJSON(outer).getBounds();
    }

    if (bounds) {
      state.map.fitBounds(bounds, {
        paddingTopLeft: desktop ? [340, 44] : [22, 28],
        paddingBottomRight: desktop ? [400, 44] : [22, 88],
        maxZoom: 14,
        animate: true
      });
    } else {
      state.map.setView(state.currentCity.coords, 12, { animate: true });
    }
  }

  /* ---------------------------------------------------------------------- */
  /* Notes dialog                                                           */
  /* ---------------------------------------------------------------------- */

  /* ---------------------------------------------------------------------- */
  /* Mobile drawers                                                         */
  /* ---------------------------------------------------------------------- */

  function openDrawer(name) {
    closeDrawers();
    const panel = document.getElementById(name === 'layers' ? 'layers-panel' : 'progress-panel');
    panel.classList.add('is-open');
    el.mobileBackdrop.classList.add('is-visible');
    document.body.classList.add('drawer-open');
    const closeButton = panel.querySelector('.panel-close');
    if (closeButton) closeButton.focus({ preventScroll: true });
  }

  function closeDrawers() {
    document.querySelectorAll('.panel.is-open').forEach((panel) => panel.classList.remove('is-open'));
    if (el.mobileBackdrop) el.mobileBackdrop.classList.remove('is-visible');
    document.body.classList.remove('drawer-open');
  }

  document.addEventListener('DOMContentLoaded', init);
})();
