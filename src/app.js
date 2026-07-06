import { days, kitesurfInfo } from './data.js';

// ─── STATE ────────────────────────────────────────────────────────────────────
const state = {
  done:          {},   // { activityId: true }
  dayOf:         {},   // { activityId: dayId } — attività spostate
  dayTitleSwap:  {},   // { dayId: sourceDayId } — scambia titolo/emoji/meta
  shuttleInfo:   {},   // { activityId: { tel, luogo } }
  openDays:      {},
  modal:         null, // { activity, dayId }
  movingId:      null,
  swappingDayId: null,
  resetModal:    false,
  activeWeek:    0,
  syncStatus:    'syncing',
  editUnlocked:  localStorage.getItem('editUnlocked') === '1',
  pinModal:      false,
  pinValue:      '',
  pinError:      false
};

// ─── FIREBASE ─────────────────────────────────────────────────────────────────
const db  = window.__db;
const fs  = window.__fs;
const REF = () => fs.doc(db, 'trips', 'creta2026');

async function loadFromFirebase() {
  try {
    const snap = await fs.getDoc(REF());
    if (snap.exists()) {
      const data = snap.data();
      Object.assign(state.done,         data.done         || {});
      Object.assign(state.dayOf,        data.dayOf        || {});
      Object.assign(state.dayTitleSwap, data.dayTitleSwap || {});
      Object.assign(state.shuttleInfo,  data.shuttleInfo  || {});
    }
    setSyncStatus('synced');
  } catch (e) {
    console.error('Firebase load error:', e);
    setSyncStatus('error');
  }
}

async function saveToFirebase() {
  setSyncStatus('syncing');
  try {
    await fs.setDoc(REF(), {
      done:         state.done,
      dayOf:        state.dayOf,
      dayTitleSwap: state.dayTitleSwap,
      shuttleInfo:  state.shuttleInfo,
      updatedAt:    new Date().toISOString()
    });
    setSyncStatus('synced');
  } catch (e) {
    console.error('Firebase save error:', e);
    setSyncStatus('error');
  }
}

function setSyncStatus(s) {
  state.syncStatus = s;
  const dot = document.querySelector('.sync-dot');
  if (dot) {
    dot.className = 'sync-dot ' + s;
  }
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
// Costruisce la lista dei giorni con le attività eventualmente spostate
function buildDayMap() {
  const map = {};
  days.forEach(d => {
    map[d.id] = { ...d, activities: [...d.activities] };
  });

  // Applica spostamenti
  Object.entries(state.dayOf).forEach(([actId, targetDayId]) => {
    if (targetDayId === '__removed') return;
    // Rimuovi dall'origine
    days.forEach(d => {
      const idx = map[d.id].activities.findIndex(a => a.id === actId);
      if (idx !== -1) map[d.id].activities.splice(idx, 1);
    });
    // Aggiungi alla destinazione
    if (map[targetDayId]) {
      const origActivity = findActivityById(actId);
      if (origActivity && !map[targetDayId].activities.find(a => a.id === actId)) {
        map[targetDayId].activities.push(origActivity);
      }
    }
  });

  return map;
}

function findActivityById(id) {
  for (const d of days) {
    const a = d.activities.find(a => a.id === id);
    if (a) return a;
  }
  return null;
}

function getDayActivities(dayId) {
  const map = buildDayMap();
  return map[dayId]?.activities || [];
}

function swapDays(dayIdA, dayIdB) {
  // Scambia attività
  const actsA = getDayActivities(dayIdA).map(a => a.id);
  const actsB = getDayActivities(dayIdB).map(a => a.id);
  actsA.forEach(actId => {
    const orig = days.find(d => d.activities.some(a => a.id === actId))?.id;
    if (orig === dayIdB) delete state.dayOf[actId];
    else state.dayOf[actId] = dayIdB;
  });
  actsB.forEach(actId => {
    const orig = days.find(d => d.activities.some(a => a.id === actId))?.id;
    if (orig === dayIdA) delete state.dayOf[actId];
    else state.dayOf[actId] = dayIdA;
  });

  // Scambia titolo/emoji/meta
  const prevA = state.dayTitleSwap[dayIdA] || dayIdA;
  const prevB = state.dayTitleSwap[dayIdB] || dayIdB;
  // Se erano già scambiati tra loro, ripristina originale
  if (prevA === dayIdB && prevB === dayIdA) {
    delete state.dayTitleSwap[dayIdA];
    delete state.dayTitleSwap[dayIdB];
  } else {
    state.dayTitleSwap[dayIdA] = prevB;
    state.dayTitleSwap[dayIdB] = prevA;
  }

  console.log('swapDays', dayIdA, '↔', dayIdB, '| dayOf entries:', Object.keys(state.dayOf).length, '| titleSwap:', JSON.stringify(state.dayTitleSwap));
}

function countDone(dayId) {
  const acts = getDayActivities(dayId);
  return acts.filter(a => state.done[a.id]).length;
}

function totalDone() {
  return Object.values(state.done).filter(Boolean).length;
}

function totalActivities() {
  return days.reduce((sum, d) => sum + d.activities.length, 0);
}

function getWeekDays(week) {
  // week 0: gg 1-8, week 1: gg 9-16
  // week 0: primi 9 giorni (6-14 lug), week 1: restanti (15-22 lug)
  const mid = 9;
  return week === 0 ? days.slice(0, mid) : days.slice(mid);
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('it-IT', { weekday: 'short', day: 'numeric', month: 'short' });
}

const TAG_LABELS = {
  mare: 'Mare', gita: 'Gita', cultura: 'Cultura',
  relax: 'Relax', cena: 'Cena 🍽', trekking: 'Trekking', kite: 'Kite 🪂',
  logistica: 'Logistica'
};

// ─── RENDER ───────────────────────────────────────────────────────────────────
function render() {
  const root = document.getElementById('root');
  const done = totalDone();
  const total = totalActivities();
  const pct = Math.round((done / total) * 100);

  root.innerHTML = `
    <header class="app-header">
      <div class="header-inner">
        <div>
          <div class="header-title">🌊 Creta 2026</div>
          <div class="header-sub">
            <span class="sync-dot ${state.syncStatus}"></span>
            7–22 luglio · Lagada Bay Resort
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <div class="progress-ring">
            <div class="progress-bar-wrap">
              <div class="progress-bar-fill" style="width:${pct}%"></div>
            </div>
            <div class="progress-label">${done}/${total} attività</div>
          </div>
          ${state.editUnlocked
            ? `<button class="lock-btn unlocked" id="open-reset" title="Reset modifiche">↺</button>`
            : `<button class="lock-btn" id="open-lock" title="Sblocca modifiche">🔒</button>`
          }
        </div>
      </div>
    </header>

    <div class="week-tabs">
      <button class="week-tab${state.activeWeek===0?' active':''}" data-week="0">
        6–14 lug
      </button>
      <button class="week-tab${state.activeWeek===1?' active':''}" data-week="1">
        15–22 lug
      </button>
    </div>

    ${state.editUnlocked && state.swappingDayId ? `
    <div class="swap-banner">
      <span>↕ Tocca ⇄ su un'altra giornata per scambiare</span>
      <button class="swap-cancel-btn" data-cancelswap>Annulla</button>
    </div>
    ` : ''}

    <main class="main" id="main-content">
      ${getWeekDays(state.activeWeek).map(renderDayCard).join('')}

      ${state.activeWeek === 0 ? renderKitesurfCard() : ''}
    </main>

    ${state.modal ? renderModal() : ''}
    ${state.editUnlocked && state.resetModal ? renderResetModal() : ''}
    ${state.pinModal ? renderPinModal() : ''}
  `;

  attachEvents();
}

function renderDayCard(day) {
  const acts = getDayActivities(day.id);
  const done = countDone(day.id);
  const isOpen = state.openDays[day.id];
  const isSwapping = state.swappingDayId === day.id;
  const isSwapTarget = state.swappingDayId && !isSwapping;
  // Data badge: sempre la data di calendario reale
  const d = new Date(day.date + 'T00:00:00');
  const dayNum = d.getDate();
  const month = d.toLocaleDateString('it-IT', { month: 'short' }).slice(0,3);
  // Titolo/emoji/meta: dal giorno sorgente se scambiato
  const metaSrcId = state.dayTitleSwap[day.id] || day.id;
  const meta = days.find(d => d.id === metaSrcId) || day;

  return `
    <div class="day-card${isOpen ? ' open' : ''}${isSwapping ? ' swap-selecting' : ''}${isSwapTarget ? ' swap-target' : ''}" data-dayid="${day.id}">
      <div class="day-header" data-toggle="${day.id}">
        <div class="day-date-badge">
          <span class="day-num">${dayNum}</span>
          <span class="day-mon">${month}</span>
        </div>
        <div class="day-info">
          <div class="day-title">
            ${meta.emoji} ${meta.title}
          </div>
          <div class="day-meta">
            <span>${meta.label}</span>
            ${meta.distanza ? `<span>🚗 ${meta.distanza}</span>` : ''}
            <span class="day-progress-mini">${done}/${acts.length}</span>
          </div>
        </div>
        ${state.editUnlocked ? `<button class="day-swap-btn${isSwapping ? ' active' : ''}" data-swapday="${day.id}" title="Scambia giornata">⇄</button>` : ''}
        <span class="day-expand-icon">▾</span>
      </div>
      <div class="activity-list">
        ${acts.map(a => renderActivity(a, day.id)).join('')}
      </div>
    </div>
  `;
}

function renderActivity(a, dayId) {
  const isDone = !!state.done[a.id];
  return `
    <div class="activity-item${isDone ? ' done' : ''}" data-actid="${a.id}" data-dayid="${dayId}">
      <div class="activity-check${state.editUnlocked ? '' : ' check-locked'}" ${state.editUnlocked ? `data-check="${a.id}"` : ''}>
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
          <path d="M1 5l3.5 3.5L11 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="activity-body" data-open="${a.id}">
        <div class="activity-name">
          ${a.name}
          <span class="activity-tag tag-${a.tag}">${TAG_LABELS[a.tag] || a.tag}</span>
        </div>
        <div class="activity-desc">${a.desc}</div>
      </div>
      ${state.editUnlocked ? `<span class="activity-move-btn" title="Sposta" data-move="${a.id}">⇅</span>` : ''}
    </div>
  `;
}

function renderKitesurfCard() {
  return `
    <div class="day-card" style="border:2px solid #4a8db7">
      <div class="day-header">
        <div class="day-date-badge" style="background:#2a5a8c">
          <span class="day-num">🪂</span>
          <span class="day-mon">kite</span>
        </div>
        <div class="day-info">
          <div class="day-title">Kitesurf a Kouremenos</div>
          <div class="day-meta">
            <span>🚗 ~45 min</span>
            <span>Combinabile con Vai/Toplou</span>
          </div>
        </div>
      </div>
      <div class="activity-list" style="display:block">
        <div style="padding:8px;font-size:13px;color:var(--text)">
          <b>Spot:</b> ${kitesurfInfo.spot}<br>
          <b>Scuola:</b> ${kitesurfInfo.scuola} — <a href="tel:${kitesurfInfo.tel}">${kitesurfInfo.tel}</a><br>
          <b>Noleggio:</b> ~60-80€ mezza giornata · ~100-130€ giornata intera<br>
          <b>Vento:</b> Meltemi quasi garantito in luglio (6 Bft media)<br>
          <div style="margin-top:8px">
            <a href="${kitesurfInfo.mapsUrl}" target="_blank" class="modal-map-btn" style="font-size:13px;padding:10px">
              📍 Apri mappa Kouremenos
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderShuttleRecovery(sourceActId) {
  const info = state.shuttleInfo[sourceActId] || {};
  const hasSaved = info.tel || info.luogo;
  return `
    <div class="modal-section">
      <div class="modal-section-title">🚌 Navetta — info di recupero</div>
      ${hasSaved ? `
      <div class="shuttle-saved">
        ${info.tel ? `
        <div class="shuttle-saved-row">
          <span>📞 ${info.tel}</span>
          <a href="tel:${info.tel.replace(/\s/g, '')}" class="shuttle-call-btn">Chiama</a>
        </div>
        ` : ''}
        ${info.luogo ? `<span>📍 ${info.luogo}</span>` : ''}
      </div>
      ` : `
      <div class="shuttle-missing">
        ⚠️ Nessun dato salvato — aprire l'attività del parcheggio nel giorno 0 per salvare il numero e il punto di ritrovo.
      </div>
      `}
    </div>
  `;
}

function renderShuttleSection(actId) {
  const info = state.shuttleInfo[actId] || {};
  const hasSaved = info.tel || info.luogo;
  return `
    <div class="modal-section">
      <div class="modal-section-title">🚌 Navetta ritorno — dati da salvare</div>
      <div class="shuttle-edit">
        <div class="shuttle-field">
          <label class="shuttle-label">📞 Telefono navetta</label>
          <input id="shuttle-tel" type="tel" class="shuttle-input"
                 placeholder="ti verrà indicato al parcheggio"
                 value="${info.tel || ''}">
        </div>
        <div class="shuttle-field">
          <label class="shuttle-label">📍 Punto di ritrovo a Malpensa</label>
          <input id="shuttle-luogo" type="text" class="shuttle-input"
                 placeholder="es. Uscita T1, Area navette private"
                 value="${info.luogo || ''}">
        </div>
        <button class="shuttle-save-btn" id="shuttle-save">💾 Salva info navetta</button>
      </div>
    </div>
  `;
}

function renderPinModal() {
  const filled = state.pinValue.length;
  const dots = Array.from({length: 6}, (_, i) =>
    `<span class="pin-dot${i < filled ? ' pin-dot-filled' : ''}"></span>`
  ).join('');
  const keys = [1,2,3,4,5,6,7,8,9,null,0,'⌫'];
  const keypad = keys.map(k => {
    if (k === null) return `<div class="pin-key pin-key-empty"></div>`;
    if (k === '⌫') return `<button class="pin-key pin-key-del" data-pinkey="del">⌫</button>`;
    return `<button class="pin-key" data-pinkey="${k}">${k}</button>`;
  }).join('');
  return `
    <div class="modal-backdrop" id="pin-backdrop">
      <div class="pin-modal${state.pinError ? ' pin-shake' : ''}">
        <div class="pin-title">🔒 Sblocca modifiche</div>
        <div class="pin-dots">${dots}</div>
        ${state.pinError ? `<div class="pin-error-msg">Codice errato</div>` : '<div class="pin-error-msg"></div>'}
        <div class="pin-keypad">${keypad}</div>
        <button class="pin-cancel-btn" id="pin-cancel">Annulla</button>
      </div>
    </div>
  `;
}

function renderResetModal() {
  return `
    <div class="modal-backdrop" id="reset-backdrop">
      <div class="modal">
        <div class="modal-handle"></div>
        <div class="modal-header">
          <div class="modal-title">↺ Reset modifiche</div>
          <button class="modal-close" id="reset-close">✕</button>
        </div>
        <div class="modal-body">
          <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px">
            Cosa vuoi azzerare?
          </p>

          <button class="reset-option-btn reset-moves" id="reset-moves">
            <span class="reset-option-icon">↕</span>
            <span class="reset-option-text">
              <strong>Solo spostamenti</strong>
              <span>Cancella spostamenti di attività e scambi di giornate. Mantieni le spunte e le info navetta.</span>
            </span>
          </button>

          <button class="reset-option-btn reset-all" id="reset-all">
            <span class="reset-option-icon">🗑</span>
            <span class="reset-option-text">
              <strong>Reset completo</strong>
              <span>Cancella tutto: spostamenti, spunte e info navetta.</span>
            </span>
          </button>

          <button class="modal-done-btn is-done" id="reset-cancel" style="margin-top:8px">
            Annulla
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderModal() {
  const { activity: a, dayId } = state.modal;
  const isDone = !!state.done[a.id];

  const otherDays = days.filter(d => d.id !== dayId);

  return `
    <div class="modal-backdrop" id="modal-backdrop">
      <div class="modal">
        <div class="modal-handle"></div>
        <div class="modal-header">
          <div class="modal-title">${a.name}</div>
          <button class="modal-close" id="modal-close">✕</button>
        </div>
        <div class="modal-body">

          <div class="modal-section">
            <div class="modal-section-title">📌 Descrizione</div>
            <div class="modal-desc">${a.detail}</div>
          </div>

          ${a.tips && a.tips.length > 0 ? `
          <div class="modal-section">
            <div class="modal-section-title">💡 Consigli</div>
            <ul class="modal-tips">
              ${a.tips.map(t => `<li><span>→</span><span>${t}</span></li>`).join('')}
            </ul>
          </div>
          ` : ''}

          ${a.photoUrl ? `
          <div class="modal-photo">
            <img src="${a.photoUrl}" alt="${a.name}" loading="lazy" />
          </div>
          ` : ''}

          ${a.mapsUrl ? `
          <div class="modal-section">
            <div class="modal-section-title">🗺 Mappa</div>
            <a href="${a.mapsUrl}" target="_blank" class="modal-map-btn">
              📍 Apri in Google Maps — ${a.mapsLabel}
            </a>
          </div>
          ` : ''}

          ${a.editableShuttle    ? (state.editUnlocked ? renderShuttleSection(a.id) : '') : ''}
          ${a.showShuttleRecovery ? renderShuttleRecovery(a.shuttleSourceId) : ''}

          ${state.editUnlocked ? `
          <div class="modal-section">
            <div class="modal-section-title">📅 Sposta in un altro giorno</div>
            <div class="move-section">
              <select id="move-select">
                <option value="">— scegli un giorno —</option>
                ${otherDays.map(d => `
                  <option value="${d.id}">${d.emoji} ${new Date(d.date+'T00:00:00').toLocaleDateString('it-IT',{day:'numeric',month:'short'})} — ${d.title}</option>
                `).join('')}
              </select>
              <button class="move-confirm-btn" id="move-confirm">Sposta attività</button>
            </div>
          </div>

          <button class="modal-done-btn ${isDone ? 'is-done' : 'not-done'}" id="toggle-done">
            ${isDone ? '✅ Fatto! Segna come da fare' : '☑️ Segna come fatto'}
          </button>
          ` : ''}

        </div>
      </div>
    </div>
  `;
}

// ─── EVENTS ───────────────────────────────────────────────────────────────────
function attachEvents() {
  // Lucchetto — apre PIN modal se bloccato, altrimenti apre reset modal
  document.getElementById('open-lock')?.addEventListener('click', () => {
    state.pinModal = true;
    state.pinValue = '';
    state.pinError = false;
    render();
  });

  // PIN keypad
  document.querySelectorAll('[data-pinkey]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.pinkey;
      if (key === 'del') {
        state.pinValue = state.pinValue.slice(0, -1);
        render();
      } else if (state.pinValue.length < 6) {
        state.pinValue += key;
        render();
        if (state.pinValue.length === 6) {
          if (state.pinValue === '130817') {
            state.editUnlocked = true;
            localStorage.setItem('editUnlocked', '1');
            state.pinModal = false;
            state.pinValue = '';
            state.pinError = false;
          } else {
            state.pinError = true;
            setTimeout(() => {
              state.pinValue = '';
              state.pinError = false;
              render();
            }, 700);
          }
          render();
        }
      }
    });
  });

  document.getElementById('pin-cancel')?.addEventListener('click', () => {
    state.pinModal = false;
    state.pinValue = '';
    state.pinError = false;
    render();
  });
  document.getElementById('pin-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'pin-backdrop') {
      state.pinModal = false;
      state.pinValue = '';
      render();
    }
  });

  // Reset modal
  document.getElementById('open-reset')?.addEventListener('click', () => {
    state.resetModal = true;
    render();
  });
  document.getElementById('reset-close')?.addEventListener('click', () => {
    state.resetModal = false;
    render();
  });
  document.getElementById('reset-cancel')?.addEventListener('click', () => {
    state.resetModal = false;
    render();
  });
  document.getElementById('reset-backdrop')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('reset-backdrop')) {
      state.resetModal = false;
      render();
    }
  });
  document.getElementById('reset-moves')?.addEventListener('click', () => {
    state.dayOf        = {};
    state.dayTitleSwap = {};
    state.resetModal   = false;
    render();
    saveToFirebase();
  });
  document.getElementById('reset-all')?.addEventListener('click', () => {
    state.done         = {};
    state.dayOf        = {};
    state.dayTitleSwap = {};
    state.shuttleInfo  = {};
    state.resetModal   = false;
    render();
    saveToFirebase();
  });

  // Annulla swap
  const cancelSwap = document.querySelector('[data-cancelswap]');
  if (cancelSwap) cancelSwap.addEventListener('click', () => {
    state.swappingDayId = null;
    render();
  });

  // Pulsante ⇄ — entra in swap mode, annulla, o completa lo swap
  document.querySelectorAll('[data-swapday]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const dayId = el.dataset.swapday;
      if (!state.swappingDayId) {
        state.swappingDayId = dayId;
        render();
      } else if (state.swappingDayId === dayId) {
        state.swappingDayId = null;
        render();
      } else {
        swapDays(state.swappingDayId, dayId);
        state.openDays[state.swappingDayId] = true;
        state.openDays[dayId] = true;
        state.swappingDayId = null;
        render();
        saveToFirebase();
      }
    });
  });

  // Week tabs
  document.querySelectorAll('.week-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeWeek = parseInt(btn.dataset.week);
      render();
    });
  });

  // Toggle day open/close — in modalità swap completa lo scambio
  document.querySelectorAll('[data-toggle]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.toggle;
      if (state.swappingDayId && state.swappingDayId !== id) {
        swapDays(state.swappingDayId, id);
        state.openDays[state.swappingDayId] = true;
        state.openDays[id] = true;
        state.swappingDayId = null;
        render();
        saveToFirebase();
      } else {
        state.openDays[id] = !state.openDays[id];
        render();
      }
    });
  });

  // Check/uncheck activity
  document.querySelectorAll('[data-check]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = el.dataset.check;
      state.done[id] = !state.done[id];
      if (!state.done[id]) delete state.done[id];
      render();
      saveToFirebase();
    });
  });

  // Open modal
  document.querySelectorAll('[data-open]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const actId = el.dataset.open;
      const dayId = el.closest('[data-dayid]')?.dataset.dayid;
      const activity = findActivityById(actId);
      if (activity) {
        state.modal = { activity, dayId };
        render();
      }
    });
  });

  // Move button — apre il modal direttamente alla sezione sposta
  document.querySelectorAll('[data-move]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const actId = el.dataset.move;
      const dayId = el.closest('[data-dayid]')?.dataset.dayid;
      const activity = findActivityById(actId);
      if (activity) {
        state.modal = { activity, dayId };
        render();
        // Scroll alla sezione sposta
        setTimeout(() => {
          document.querySelector('.move-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    });
  });

  // Modal close
  const closeBtn = document.getElementById('modal-close');
  const backdrop = document.getElementById('modal-backdrop');
  if (closeBtn) closeBtn.addEventListener('click', () => { state.modal = null; render(); });
  if (backdrop) backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) { state.modal = null; render(); }
  });

  // Toggle done dal modal
  const doneBtn = document.getElementById('toggle-done');
  if (doneBtn) {
    doneBtn.addEventListener('click', () => {
      const id = state.modal.activity.id;
      state.done[id] = !state.done[id];
      if (!state.done[id]) delete state.done[id];
      state.modal = null;
      render();
      saveToFirebase();
    });
  }

  // Shuttle info save
  const shuttleSave = document.getElementById('shuttle-save');
  if (shuttleSave) {
    shuttleSave.addEventListener('click', () => {
      const actId = state.modal.activity.id;
      const tel   = document.getElementById('shuttle-tel')?.value.trim()   || '';
      const luogo = document.getElementById('shuttle-luogo')?.value.trim() || '';
      state.shuttleInfo[actId] = { tel, luogo };
      render();
      saveToFirebase();
    });
  }

  // Move confirm
  const moveConfirm = document.getElementById('move-confirm');
  if (moveConfirm) {
    moveConfirm.addEventListener('click', () => {
      const select = document.getElementById('move-select');
      const targetDayId = select?.value;
      if (!targetDayId) return;
      const actId = state.modal.activity.id;
      state.dayOf[actId] = targetDayId;
      state.modal = null;
      render();
      saveToFirebase();
    });
  }
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
async function init() {
  // Mostra loading
  document.getElementById('root').innerHTML = `
    <div class="loading-screen">
      <div class="spinner"></div>
      <span>Caricamento dati...</span>
    </div>
  `;

  await loadFromFirebase();

  // Apri di default il giorno corrente se è nel viaggio
  const today = new Date().toISOString().slice(0, 10);
  const todayDay = days.find(d => d.date === today);
  if (todayDay) {
    state.openDays[todayDay.id] = true;
    const idx = days.indexOf(todayDay);
    state.activeWeek = idx >= 9 ? 1 : 0;
  }

  render();
}

init().catch(console.error);