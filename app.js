(function () {
  const MM = window.MM;
  const LS = { lang: 'mm.lang', theme: 'mm.theme', saved: 'mm.saved', done: 'mm.done', sort: 'mm.sort', quiz: 'mm.quiz' };

  MM.resources.forEach((g, i) => { if (!g.id) g.id = 'r-' + i; });
  (MM.glossary || []).forEach((g, i) => { g.id = 'g' + i; });
  const ALL = MM.resources.concat(MM.bulk || []);
  const MAP = new Map(ALL.map((r) => [r.id, r]));

  const state = {
    lang: localStorage.getItem(LS.lang) || 'en',
    theme: localStorage.getItem(LS.theme) || 'light',
    type: 'all',
    region: 'all',
    level: 'all',
    sort: localStorage.getItem(LS.sort) || 'popular',
    hindiOnly: false,
    noSignup: false,
    q: '',
    track: 'all',
    glCat: 'all',
    shown: 48,
    calc: {},
    calcCat: 'all',
    qz: { id: 'q-beginner', i: 0, chosen: null, score: 0, done: false, log: [], mixed: false, mixSeed: 0 },
    qzMixed: null,
    qzBest: JSON.parse(localStorage.getItem(LS.quiz) || '{}'),
    saved: new Set(JSON.parse(localStorage.getItem(LS.saved) || '[]')),
    done: new Set(JSON.parse(localStorage.getItem(LS.done) || '[]')),
  };

  const T = (key) => {
    const [ns, k] = key.split('.');
    const dict = MM.i18n[state.lang][ns] || {};
    return dict[k] !== undefined ? dict[k] : key;
  };
  const pick = (obj) => (obj == null ? '' : typeof obj === 'string' ? obj : obj[state.lang] || obj.en || '');
  const persist = () => {
    localStorage.setItem(LS.saved, JSON.stringify([...state.saved]));
    localStorage.setItem(LS.done, JSON.stringify([...state.done]));
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const byId = (id) => MAP.get(id);
  const titleOf = (r) => pick(r.title) || r.title;
  const hit = (hay) => state.q.split(/\s+/).filter(Boolean).every((w) => hay.includes(w));
  const compact = (n) => (n >= 1e6 ? (n / 1e6).toFixed(1) + 'M' : n >= 1e3 ? Math.round(n / 1e3) + 'K' : String(n));
  const num = (n) => n.toLocaleString(state.lang === 'hi' ? 'en-IN' : 'en-US');

  /* ---------------- i18n static nodes ---------------- */
  function applyStatic() {
    document.documentElement.lang = state.lang === 'hi' ? 'hi' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((el) => (el.textContent = T(el.dataset.i18n)));
    document.querySelectorAll('[data-i18n-ph]').forEach((el) => (el.placeholder = T(el.dataset.i18nPh)));
    document.getElementById('langLabel').textContent = state.lang === 'en' ? 'हिंदी में पढ़ें' : 'Read in English';
  }

  /* ---------------- hero ---------------- */
  function renderHero() {
    const c1 = (f) => ALL.filter(f).length;
    const nBooks = c1((r) => r.type === 'book' || r.type === 'pdf');
    const nVids = c1((r) => r.type === 'video');
    const hi = state.lang === 'hi';
    const covers = [
      { t: MM.i18n[state.lang].hero.covers[0], s: 'OpenStax', c: 'linear-gradient(150deg,#7a5af8,#4a34c0)', i: '📗', r: '-11deg', x: '0%', y: '2%' },
      { t: 'Varsity · ' + (hi ? 'नोट्स + PDF' : 'notes + PDFs'), s: 'Zerodha · हिंदी', c: 'linear-gradient(150deg,#2f62e8,#1b3f99)', i: '🎋', r: '6deg', x: '28%', y: '0%' },
      { t: hi ? num(nBooks) + ' किताबें + PDF' : num(nBooks) + ' books + PDFs', s: 'Archive.org', c: 'linear-gradient(150deg,#e8622f,#b83f14)', i: '📚', r: '-6deg', x: '57%', y: '6%' },
      { t: MM.i18n[state.lang].hero.covers[3], s: 'NPCI · UPI', c: 'linear-gradient(150deg,#3fbf93,#1d8b66)', i: '⚡', r: '9deg', x: '12%', y: '52%' },
      { t: hi ? num(nVids) + '+ वीडियो लेक्चर' : num(nVids) + '+ video lectures', s: 'YouTube · हिंदी/EN', c: 'linear-gradient(150deg,#f0b429,#c78c05)', i: '▶', r: '-9deg', x: '45%', y: '55%' },
    ];
    document.getElementById('heroCards').innerHTML = covers
      .map((c, i) => `<div class="tcard" style="--r:${c.r};left:${c.x};top:${c.y};background:${c.c};animation-delay:${i * 0.5}s;transform:rotate(${c.r})">
        <i>${c.i}</i><div><div>${esc(c.t)}</div><small>${c.s}</small></div></div>`)
      .join('');

    const counts = [
      [num(ALL.length), T('hero.s1')],
      [num(c1((r) => r.type === 'book' || r.type === 'pdf')), T('hero.s2')],
      [num(c1((r) => r.type === 'course' || r.type === 'notes')), T('hero.s3')],
      [num(c1((r) => r.type === 'video')), T('hero.s5')],
      [num(c1((r) => r.langs.includes('hi'))), T('hero.s4')],
    ];
    document.getElementById('stats').innerHTML =
      counts.map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`).join('');

    document.getElementById('sourceStrip').innerHTML =
      MM.sources.map((s) => `<span>${esc(s)}</span>`).join('');
  }

  /* ---------------- chips ---------------- */
  function chipRow(el, options, active, onPick) {
    el.innerHTML = options.map((o) =>
      `<button class="chip ${active === o.id ? 'on' : ''}" data-v="${o.id}" type="button">${pick(o.label)}</button>`).join('');
    el.onclick = (e) => { const b = e.target.closest('button'); if (b) onPick(b.dataset.v); };
  }

  function renderChips() {
    chipRow(document.getElementById('typeChips'), MM.filterTypes.type, state.type,
      (v) => { state.type = v; state.shown = 48; renderAll(); });
    chipRow(document.getElementById('regionChips'), MM.filterTypes.region, state.region,
      (v) => { state.region = v; state.shown = 48; renderAll(); });
    chipRow(document.getElementById('levelChips'), MM.filterTypes.level, state.level,
      (v) => { state.level = v; state.shown = 48; renderAll(); });
    chipRow(document.getElementById('sortChips'), MM.sorts, state.sort,
      (v) => { state.sort = v; localStorage.setItem(LS.sort, v); renderResources(); });
    chipRow(document.getElementById('trackChips'), MM.tracksUI, state.track, (v) => { state.track = v; renderTopics(); });
    chipRow(document.getElementById('glCatChips'), MM.glCats, state.glCat, (v) => { state.glCat = v; renderGlossary(); });
    chipRow(document.getElementById('calcCats'), MM.calcCats, state.calcCat, (v) => { state.calcCat = v; renderCalc(); });
    document.getElementById('hindiChip').setAttribute('aria-pressed', state.hindiOnly);
    document.getElementById('freeChip').setAttribute('aria-pressed', state.noSignup);
  }

  /* ---------------- resources ---------------- */
  const hayOf = (r) =>
    [titleOf(r), r.src, pick(r.desc), r.desc.en, r.desc.hi, r.tags.join(' ')].filter(Boolean).join(' ').toLowerCase();

  function matches(r) {
    if (state.type !== 'all' && r.type !== state.type) return false;
    if (state.region !== 'all' && r.region !== state.region && r.region !== 'both') return false;
    if (state.level !== 'all' && r.level !== state.level) return false;
    if (state.hindiOnly && !r.langs.includes('hi')) return false;
    if (state.noSignup && r.signup) return false;
    if (state.q && !hit(hayOf(r))) return false;
    return true;
  }

  // "nifty options" rarely appears as one phrase, so a strict AND that finds
  // nothing falls back to items matching any word, best match first.
  function softList() {
    const words = state.q.split(/\s+/).filter(Boolean);
    if (words.length < 2) return [];
    return ALL
      .map((r) => {
        const h = hayOf(r);
        return [r, words.filter((w) => h.includes(w)).length];
      })
      .filter(([, n]) => n > 0)
      .sort((a, b) => b[1] - a[1] || (b[0].heat || 0) - (a[0].heat || 0))
      .map(([r]) => r);
  }

  // Pure heat puts a whole block of one source on the first screen, so the
  // default view deals the ranked types out in rotation instead.
  function interleave(list) {
    const buckets = new Map();
    list.forEach((r) => {
      const b = buckets.get(r.type);
      if (b) b.push(r); else buckets.set(r.type, [r]);
    });
    const rows = [...buckets.values()];
    const out = [];
    for (let i = 0; ; i++) {
      let added = false;
      for (const b of rows) if (i < b.length) { out.push(b[i]); added = true; }
      if (!added) break;
    }
    return out;
  }

  function sorted() {
    const strict = ALL.filter(matches);
    const multi = state.q && state.q.split(/\s+/).filter(Boolean).length > 1;
    if (multi && strict.length < 12) {
      const have = new Set(strict.map((r) => r.id));
      return strict.concat(softList().filter((r) => !have.has(r.id)));
    }
    let list = strict;
    const s = state.sort;
    if (s === 'newest') list.sort((a, b) => (b.year || 0) - (a.year || 0) || (b.heat || 0) - (a.heat || 0));
    else if (s === 'az') list.sort((a, b) => titleOf(a).localeCompare(titleOf(b)));
    else if (s === 'source') list.sort((a, b) => a.src.localeCompare(b.src) || (b.heat || 0) - (a.heat || 0));
    else { list.sort((a, b) => (b.heat || 0) - (a.heat || 0) || (b.pop || 0) - (a.pop || 0)); list = interleave(list); }
    return list;
  }

  function cardHTML(r) {
    const isDone = state.done.has(r.id);
    const isSaved = state.saved.has(r.id);
    const lvl = T('level.' + r.level) || r.level;
    const tl = MM.typeLabel[r.type];
    const pop = r.pop ? `<span class="pop">${compact(r.pop)} ${r.type === 'video' ? T('lib.views') : T('lib.pop')}</span>` : '';
    return `<article class="res" data-id="${r.id}">
      <div class="res-top">
        <span class="badge b-${r.type}">${pick(tl) || r.type}</span>
        <span class="res-src">${esc(r.src)}</span>
        ${pop}
      </div>
      <h3>${esc(titleOf(r))}</h3>
      <p>${esc(pick(r.desc))}</p>
      <div class="meta">
        <span>${r.region === 'both' ? T('meta.both') : T('meta.' + r.region)}</span>
        <span>${lvl}</span>
        ${r.langs.includes('hi') ? '<span class="hi">EN + हिंदी</span>' : '<span>EN</span>'}
        <span>${r.signup ? T('meta.signup') : T('meta.instant')}</span>
      </div>
      <div class="res-foot">
        <a class="open" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${T('lib.open')} <span>↗</span></a>
        <button class="mini ${isSaved ? 'on' : ''}" data-act="save" title="${T('lib.save')}" type="button">${isSaved ? '★' : '☆'}</button>
        <button class="mini ${isDone ? 'done' : ''}" data-act="done" title="${T('lib.done')}" type="button">${isDone ? '✓' : '○'}</button>
        <span class="free-tag" style="margin-left:auto">${r.signup ? T('cost.freeSignup') : T('cost.free')}</span>
      </div>
    </article>`;
  }

  function renderResources() {
    const list = sorted();
    const slice = list.slice(0, state.shown);
    document.getElementById('resourceGrid').innerHTML = slice.map(cardHTML).join('');
    document.getElementById('resultCount').textContent = num(list.length);
    document.getElementById('emptyState').hidden = list.length > 0;
    const more = document.getElementById('moreBtn');
    const rest = list.length - slice.length;
    more.hidden = rest <= 0;
    more.innerHTML = `<b>${T('lib.more')}</b><span>+${num(Math.min(48, rest))} ${T('lib.rest')}</span>`;
  }

  function savedChipsHTML(items, kind, label, textOf) {
    if (!items.length) return '';
    return `<h4 class="shelf-h">${esc(label)}</h4><div class="chips shelf-chips">` + items.map((x) =>
      `<button class="chip" data-save="${x.id}" type="button"><span class="s-on">★</span> ${esc(textOf(x))} <i>${kind}</i></button>`
    ).join('') + '</div>';
  }

  function renderSaved() {
    const ids = [...state.saved];
    const list = ids.map(byId).filter(Boolean);
    const topics = MM.topics.filter((t) => state.saved.has(t.id));
    const paths = MM.paths.filter((p) => state.saved.has(p.id));
    const gl = MM.glossary.filter((g) => state.saved.has(g.id));
    document.getElementById('savedGrid').innerHTML = list.map(cardHTML).join('');
    document.getElementById('savedExtra').innerHTML =
      savedChipsHTML(topics, T('kind.topic'), T('kn.title'), (t) => pick(t.title)) +
      savedChipsHTML(paths, T('kind.path'), T('pa.title'), (p) => pick(p.title)) +
      savedChipsHTML(gl, T('kind.glossary'), T('gl.title'), (g) => g[state.lang] || g.en);
    document.getElementById('savedEmpty').hidden = (list.length + topics.length + paths.length + gl.length) > 0;
    const total = ALL.length + MM.topics.length + MM.paths.length + MM.glossary.length;
    const pct = Math.round((state.done.size / total) * 100);
    document.getElementById('progressBar').style.width = pct + '%';
    document.getElementById('progressText').textContent = pct + '%';
  }

  /* ---------------- topics ---------------- */
  function renderTopics() {
    const list = MM.topics.filter((t) => state.track === 'all' || t.track === state.track)
      .filter((t) => {
        if (!state.q) return true;
        const hay = [t.title.en, t.title.hi, t.lede.en, t.lede.hi, t.points.map((p) => p.en + p.hi).join(' ')].join(' ').toLowerCase();
        return hit(hay);
      });
    document.getElementById('topicGrid').innerHTML = list.map((t, i) => `
      <div class="topic" data-topic="${t.id}" role="button" tabindex="0">
        <span class="num">${String(i + 1).padStart(2, '0')}</span>
        <span class="track">${pick(MM.tracksUI.find((x) => x.id === t.track).label)}</span>
        <button class="star ${state.saved.has(t.id) ? 'on' : ''}" data-save="${t.id}" type="button" title="${T('lib.save')}" aria-label="${T('lib.save')}">${state.saved.has(t.id) ? '★' : '☆'}</button>
        <h3>${esc(pick(t.title))}</h3>
        <p>${esc(pick(t.lede))}</p>
      </div>`).join('');
  }

  function relatedTo(t) {
    const words = (t.title.en + ' ' + t.lede.en + ' ' + t.points.map((p) => p.en).join(' ')).toLowerCase();
    const topicHit = (t.links || []).map(byId).filter(Boolean);
    const scored = ALL.map((r) => {
      let sc = 0;
      const ti = titleOf(r).toLowerCase();
      const hay = (ti + ' ' + r.tags.join(' ') + ' ' + r.desc.en).toLowerCase();
      r.tags.forEach((g) => { if (g.length > 3 && words.includes(g)) sc += 3; });
      if (r.region === t.region) sc += 1;
      ti.split(/[^a-z0-9]+/).forEach((w) => { if (w.length > 4 && words.includes(w)) sc += 2; });
      if (hay.includes('india') && words.includes('india')) sc += 1;
      return [r, sc];
    }).filter(([, sc]) => sc > 0).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([r]) => r);
    const seen = new Set(topicHit.map((r) => r.id));
    return topicHit.concat(scored.filter((r) => !seen.has(r.id) && scored.indexOf(r) < 4)).slice(0, 8);
  }

  function topicModalHTML(t) {
    const links = relatedTo(t);
    return `
      <p class="kicker">${pick(MM.tracksUI.find((x) => x.id === t.track).label)}</p>
      <h3 id="modalTitle">${esc(pick(t.title))}</h3>
      <p class="lede">${esc(pick(t.lede))}</p>
      <button class="pill pill-dark starbtn ${state.saved.has(t.id) ? 'on' : ''}" data-save="${t.id}" type="button">
        ${state.saved.has(t.id) ? '★' : '☆'} ${T('lib.save')}</button>
      <h4>${T('kn.points')}</h4>
      <ul>${t.points.map((p) => `<li>${pick(p)}</li>`).join('')}</ul>
      ${links.length ? `<h4>${T('kn.readNext')}</h4><div class="links">${links.map((l) =>
        `<a class="chip" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(titleOf(l))} <i>${pick(MM.typeLabel[l.type])}</i> ↗</a>`).join('')}</div>` : ''}`;
  }

  function openTopic(id) {
    const t = MM.topics.find((x) => x.id === id);
    if (!t) return;
    document.getElementById('modalBody').innerHTML = topicModalHTML(t);
    const m = document.getElementById('modal');
    m.hidden = false;
    if (!state.done.has(t.id)) { state.done.add(t.id); persist(); renderSaved(); renderTopics(); }
  }

  /* ---------------- paths ---------------- */
  function stepLabel(step) {
    const r = byId(step.ref);
    if (r) return { text: titleOf(r), kind: pick(MM.typeLabel[r.type]) };
    const t = MM.topics.find((x) => x.id === step.ref);
    if (t) return { text: pick(t.title), kind: T('kind.topic') };
    return { text: step.ref, kind: '' };
  }

  function renderPaths() {
    document.getElementById('pathGrid').innerHTML = MM.paths.map((p) => {
      const done = p.steps.filter((s) => state.done.has(s.ref)).length;
      const pct = Math.round((done / p.steps.length) * 100);
      return `<div class="path" data-path="${p.id}">
        <div class="path-head"><h3>${esc(pick(p.title))}</h3><span class="weeks">${esc(pick(p.weeks))}</span>
          <button class="star ${state.saved.has(p.id) ? 'on' : ''}" data-save="${p.id}" type="button" title="${T('lib.save')}" aria-label="${T('lib.save')}">${state.saved.has(p.id) ? '★' : '☆'}</button></div>
        <p>${esc(pick(p.desc))}</p>
        <div class="steps">${p.steps.map((s, i) => {
          const l = stepLabel(s);
          return `<button class="step ${state.done.has(s.ref) ? 'done' : ''}" data-ref="${s.ref}" type="button">
            <span class="box">✓</span><span>${i + 1}. ${esc(l.text)}</span><span class="kind">${l.kind}</span></button>`;
        }).join('')}</div>
        <div class="bar"><i style="width:${pct}%"></i></div>
      </div>`;
    }).join('');
  }

  /* ---------------- glossary ---------------- */
  function renderGlossary() {
    const list = MM.glossary.filter((g) => {
      if (state.glCat !== 'all' && g.cat !== state.glCat) return false;
      if (!state.q) return true;
      return hit([g.en, g.hi, g.d.en, g.d.hi, g.ex.en, g.ex.hi].join(' ').toLowerCase());
    });
    const catOf = (id) => pick((MM.glCats.find((c) => c.id === id) || { label: '' }).label);
    document.getElementById('glGrid').innerHTML = list.map((g) => `
      <div class="gl" data-id="${g.id}"><b>${esc(g.en)}</b><span class="hi">${esc(g.hi)}</span>
        <span class="gl-cat">${esc(catOf(g.cat))}</span>
        <button class="star ${state.saved.has(g.id) ? 'on' : ''}" data-save="${g.id}" type="button" title="${T('lib.save')}" aria-label="${T('lib.save')}">${state.saved.has(g.id) ? '★' : '☆'}</button>
        <p>${esc(pick(g.d))}</p>
        <p class="gl-ex"><span>${T('gl.ex')}</span>${esc(pick(g.ex))}</p></div>`).join('');
    document.getElementById('glEmpty').hidden = list.length > 0;
  }

  /* ---------------- calculators ---------------- */
  const fmtOf = (kind, v) => {
    if (typeof v === 'string') return v;
    if (!isFinite(v)) return '—';
    if (kind === 'inr') return (v < 0 ? '−' : '') + '₹' + Math.round(Math.abs(v)).toLocaleString('en-IN');
    if (kind === 'num') return Math.round(v).toLocaleString('en-IN');
    if (kind === 'pct') return (Math.abs(v) < 1 ? v.toFixed(3) : v.toFixed(2)) + '%';
    if (kind === 'x') return v.toFixed(2) + '×';
    return String(v);
  };

  const CALC_FN = {
    sip: (v) => {
      const i = v.rate / 100 / 12;
      const n = Math.max(0, Math.round(v.yrs * 12));
      const fvAt = (m) => (i > 0 ? v.amt * ((Math.pow(1 + i, m) - 1) / i) : v.amt * m) + v.lump * Math.pow(1 + i, m);
      const fv = fvAt(n);
      const inv = v.amt * n + v.lump;
      return { fv, inv, gain: fv - inv, mult: inv > 0 ? fv / inv : 0, y5: fvAt(60), y10: fvAt(120), y20: fvAt(240) };
    },
    cost: (v) => {
      const leg = v.price * v.qty;
      const turn = leg * 2;
      const cBrok = v.brok * 2;
      const cStt = ((v.sttB + v.sttS) / 100) * leg;
      const cExch = ((v.exch + v.sebi) / 100) * turn;
      const cStamp = (v.stamp / 100) * leg;
      const cGst = (v.gst / 100) * (cBrok + cExch);
      const total = cBrok + cStt + cExch + cStamp + cGst;
      return {
        turn, cBrok, cStt, cExch, cStamp, cGst, total,
        pct: leg > 0 ? (total / leg) * 100 : 0,
        be: v.qty > 0 ? total / v.qty : 0,
      };
    },
    tax: (v) => {
      const hi = state.lang === 'hi';
      const gain = (v.sell - v.buy) * v.qty;
      const long = v.months > 12;
      let rate = 0;
      let taxable = 0;
      if (gain > 0) {
        if (long) {
          taxable = Math.max(gain - Math.max(125000 - v.used, 0), 0);
          rate = 12.5;
        } else {
          taxable = gain;
          rate = 20;
        }
      }
      const tax = (taxable * rate) / 100;
      const klass = gain <= 0
        ? (hi ? 'नुकसान — सेट-ऑफ़ के नियम देखें' : 'Loss — check the set-off rules')
        : long ? (hi ? 'LTCG · 12 महीने से ज़्यादा' : 'LTCG · held over 12 months')
          : (hi ? 'STCG · 12 महीने या कम' : 'STCG · 12 months or less');
      return { gain, klass, rate, taxable, tax, after: gain - tax, eff: gain > 0 ? (tax / gain) * 100 : 0 };
    },
    risk: (v) => {
      const hi = state.lang === 'hi';
      const per = v.entry - v.stop;
      const riskAmt = (v.cap * v.rpct) / 100;
      const qty = per > 0 ? Math.floor(riskAmt / per) : 0;
      const posVal = qty * v.entry;
      const posPct = v.cap > 0 ? (posVal / v.cap) * 100 : 0;
      const warn = per <= 0
        ? (hi ? 'स्टॉप, एंट्री से नीचे होना चाहिए' : 'Stop must sit below entry')
        : posVal > v.cap ? (hi ? 'कैपिटल से ज़्यादा — जोखिम % घटाएँ' : 'Bigger than your capital — lower the risk %')
          : posPct > 25 ? (hi ? 'बड़ी पोज़िशन — कैपिटल का 25% से ऊपर' : 'Heavy position — over 25% of capital')
            : (hi ? 'आपके कैपिटल में फ़िट बैठती है' : 'Fits inside your capital');
      return { riskAmt, qty, posVal, posPct, idle: Math.max(0, v.cap - posVal), realRisk: qty * per, tgt: v.entry + v.rr * per, reward: qty * v.rr * per, warn };
    },
    swp: (v) => {
      const hi = state.lang === 'hi';
      const i = v.rate / 100 / 12;
      const n = Math.max(0, Math.round(v.yrs * 12));
      let bal = v.corpus; let months = 0; let paid = 0; let last = 0;
      while (months < n && v.wd > 0 && bal > 0) {
        const owed = bal * (1 + i);
        const take = Math.min(v.wd, owed);
        bal = owed - take; paid += take; last = take; months++;
      }
      const ranOut = bal <= 0 && months < n;
      const infl = 1 + v.infl / 100;
      const yrsRun = months / 12;
      const lasts = v.wd <= 0
        ? (hi ? 'निकासी रकम डालें' : 'Enter a withdrawal amount')
        : ranOut
          ? (hi ? `${(months / 12).toFixed(1)} वर्ष (${months} महीने)` : `${(months / 12).toFixed(1)} years (${months} months)`)
          : (hi ? `पूरी ${v.yrs} वर्ष की अवधि चलती है` : `Lasts the full ${v.yrs}-year plan`);
      return {
        lasts, end: bal, paid,
        maxSafe: n > 0 ? (i > 0 ? v.corpus * i / (1 - Math.pow(1 + i, -n)) : v.corpus / n) : 0,
        yieldPct: v.corpus > 0 ? ((v.wd * 12) / v.corpus) * 100 : 0,
        realWd: last / Math.pow(infl, yrsRun), realEnd: bal / Math.pow(infl, yrsRun),
      };
    },
    goal: (v) => {
      const i = v.rate / 100 / 12;
      const needAt = (amt, yrs) => {
        const m = Math.round(yrs * 12);
        if (m <= 0 || amt <= 0) return NaN;
        const rest = amt - v.have * Math.pow(1 + i, m);
        if (rest <= 0) return 0;
        return i > 0 ? (rest * i) / (Math.pow(1 + i, m) - 1) : rest / m;
      };
      const monthly = needAt(v.goal, v.yrs);
      const n = Math.round(v.yrs * 12);
      const fv = (isNaN(monthly) ? 0 : monthly * (i > 0 ? (Math.pow(1 + i, n) - 1) / i : n)) + v.have * Math.pow(1 + i, n);
      const totalInv = (isNaN(monthly) ? 0 : monthly * n) + v.have;
      const inflGoal = v.goal * Math.pow(1 + v.infl / 100, v.yrs);
      return {
        monthly, totalInv, gain: fv - totalInv,
        late1: needAt(v.goal, v.yrs - 1), late3: needAt(v.goal, v.yrs - 3),
        inflGoal, monthlyReal: needAt(inflGoal, v.yrs),
      };
    },
    compound: (v) => {
      const hi = state.lang === 'hi';
      const nominal = v.amt * Math.pow(1 + v.rate / 100, v.yrs);
      const priceOfToday = v.amt * Math.pow(1 + v.infl / 100, v.yrs);
      const real = nominal / Math.pow(1 + v.infl / 100, v.yrs);
      const realRate = ((1 + v.rate / 100) / (1 + v.infl / 100) - 1) * 100;
      const dblM = v.rate > 0 ? 72 / v.rate : Infinity;
      const dblP = v.infl > 0 ? 72 / v.infl : Infinity;
      const dbl = hi
        ? `पैसा ~${dblM.toFixed(1)} वर्ष में डबल, कीमतें ~${dblP.toFixed(1)} वर्ष में`
        : `Money ~${dblM.toFixed(1)} yrs, prices ~${dblP.toFixed(1)} yrs`;
      return { nominal, real, realGain: real - v.amt, realRate, priceOfToday, dbl, eaten: nominal - real };
    },
    emi: (v) => {
      const hi = state.lang === 'hi';
      const i = v.rate / 100 / 12;
      const n = Math.max(1, Math.round(v.yrs * 12));
      const emi = i > 0 ? (v.P * i) / (1 - Math.pow(1 + i, -n)) : v.P / n;
      const amort = (pay) => {
        let bal = v.P; let m = 0; let sum = 0;
        while (bal > 0.5 && m < 1200) {
          const owed = bal * (1 + i);
          const take = Math.min(pay, owed);
          bal = owed - take; sum += take; m++;
        }
        return { m, sum };
      };
      const base = amort(emi);
      const withExtra = v.extra > 0 ? amort(emi + v.extra) : base;
      const cut = (base.m - withExtra.m) / 12;
      return {
        emi, total: base.sum, interest: base.sum - v.P,
        intPct: v.P > 0 ? ((base.sum - v.P) / v.P) * 100 : 0,
        perLakh: v.P > 0 ? (emi / v.P) * 100000 : 0,
        emi2: emi + v.extra,
        yrsSaved: v.extra > 0
          ? (hi ? `${cut.toFixed(1)} वर्ष` : `${cut.toFixed(1)} years`)
          : (hi ? 'अतिरिक्त भुगतान डालें' : 'Enter an extra payment'),
        intSaved: base.sum - withExtra.sum,
      };
    },
    margin: (v) => {
      const notional = v.price * v.lot;
      const used = (notional * v.mgn) / 100;
      const lots = used > 0 ? Math.floor(v.cap / used) : 0;
      return {
        notional, used,
        lev: v.mgn > 0 ? 100 / v.mgn : Infinity,
        lots, per1: notional * 0.01,
        loss: (notional * v.move) / 100,
        wipe: v.mgn,
        exposurePct: v.cap > 0 ? ((lots * notional) / v.cap) * 100 : 0,
        marginAll: lots * used, spare: Math.max(0, v.cap - lots * used),
      };
    },
    drawdown: (v) => {
      const hi = state.lang === 'hi';
      const d = Math.min(Math.max(v.dd, 0), 99.9) / 100;
      const need = (x) => (x >= 1 ? Infinity : (1 / (1 - x) - 1) * 100);
      const growth = v.ret / 100;
      const yrs = growth > 0 && d > 0 ? Math.log(1 / (1 - d)) / Math.log(1 + growth) : NaN;
      const drag = (((v.vol / 100) * (v.vol / 100)) / 2) * 100;
      return {
        after: v.cap * (1 - d), need: need(d),
        yrs: isFinite(yrs) ? (hi ? `${yrs.toFixed(1)} वर्ष` : `${yrs.toFixed(1)} years`) : '—',
        r10: need(0.1), r20: need(0.2), r50: need(0.5),
        geo: v.ret - drag, drag,
      };
    },
  };

  const calcVals = (id) => {
    if (!state.calc[id]) {
      const o = {};
      MM.calcs.find((c) => c.id === id).fields.forEach((f) => { o[f.k] = f.val; });
      state.calc[id] = o;
    }
    return state.calc[id];
  };

  const fieldHTML = (c, v, f) => {
    const lab = esc(pick(f.label));
    if (f.kind === 'sel') {
      return `<label class="cf"><span>${lab}</span><select data-c="${c.id}" data-k="${f.k}">` +
        f.opts.map((o) => `<option value="${o.v}"${v[f.k] === o.v ? ' selected' : ''}>${esc(pick(o.label))}</option>`).join('') +
        '</select></label>';
    }
    return `<label class="cf"><span>${lab}</span><input type="number" inputmode="decimal" data-c="${c.id}" data-k="${f.k}" value="${v[f.k]}" step="${f.step || 1}" min="0"></label>`;
  };

  const outHTML = (c) => {
    const r = CALC_FN[c.id](calcVals(c.id));
    return c.out.map((o) => `<div class="co${o.strong ? ' co-strong' : ''}"><span>${esc(pick(o.label))}</span><b>${esc(fmtOf(o.fmt, r[o.k]))}</b></div>`).join('');
  };

  const barsHTML = (c) => {
    if (!c.bars) return '';
    const r = CALC_FN[c.id](calcVals(c.id));
    const vals = c.bars.map((b) => Math.max(0, Number(r[b.k]) || 0));
    const sum = vals.reduce((a, x) => a + x, 0);
    if (sum <= 0) return '';
    return `<div class="calc-bar" role="img" aria-label="${esc(pick(c.title))}">${vals.map((x, i) =>
      `<i class="b${i}" style="width:${((x / sum) * 100).toFixed(2)}%"></i>`).join('')}</div>` +
      `<div class="calc-legend">${c.bars.map((b, i) =>
        `<span class="lg b${i}"><i></i>${esc(pick(b.label))} <b>${esc(fmtOf('inr', vals[i]))}</b></span>`).join('')}</div>`;
  };

  function renderCalc() {
    const list = MM.calcs.filter((c) => state.calcCat === 'all' || c.cat === state.calcCat);
    document.getElementById('calcGrid').innerHTML = list.map((c) => {
      const v = calcVals(c.id);
      const main = c.fields.filter((f) => !f.adv);
      const adv = c.fields.filter((f) => f.adv);
      return `<div class="calc">
        <b class="calc-title">${esc(pick(c.title))}</b>
        <p class="calc-lede">${esc(pick(c.lede))}</p>
        <div class="calc-fields">${main.map((f) => fieldHTML(c, v, f)).join('')}</div>
        ${adv.length ? `<details class="calc-adv"><summary>${T('calc.adv')}</summary>${c.id === 'cost' ? `<p class="calc-hint">${T('calc.segHint')}</p>` : ''}<div class="calc-fields">${adv.map((f) => fieldHTML(c, v, f)).join('')}</div></details>` : ''}
        ${barsHTML(c)}
        <div class="calc-out" id="out-${c.id}">${outHTML(c)}</div>
        <p class="calc-note">${esc(pick(c.note))}</p>
      </div>`;
    }).join('');
  }

  /* ---------------- self-check quizzes ---------------- */
  const MIX_N = 10;
  const QZ_MSG = [
    { f: 1, en: 'Every one correct — open the next learning path.', hi: 'सब सही — अगला लर्निंग पाठ खोलें।' },
    { f: 0.65, en: 'Solid. Read the ones you missed below, then run it again.', hi: 'अच्छा। नीचे चूक वाले कारण पढ़ें, फिर दोबारा करें।' },
    { f: 0, en: 'Start with the matching learning path above, then come back.', hi: 'पहले ऊपर दिया मेल खाता पाठ पढ़ें, फिर यहाँ लौटें।' },
  ];

  const hash32 = (s) => {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
    return h;
  };
  MM.quizzes.forEach((q) => q.qs.forEach((it, i) => { it.k = q.id + '-' + i; }));

  // fixed per question so the order does not jump around between renders
  const qzOrder = (key, n) => {
    let h = hash32(key);
    const idx = [...Array(n).keys()];
    for (let i = n - 1; i > 0; i--) {
      h = (Math.imul(h, 1664525) + 1013904223) >>> 0;
      const j = h % (i + 1);
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    return idx;
  };
  const optKey = (it) => it.k + (state.qz.mixed ? '@' + state.qz.mixSeed : '');
  const qzOpts = (it) => qzOrder(optKey(it), it.opts.length);
  const qzRight = (it, pos) => qzOpts(it)[pos] === it.a;

  function mixedQuiz() {
    if (state.qzMixed) return state.qzMixed;
    const qs = [];
    for (let i = 0; i < MIX_N; i++) {
      const track = MM.quizzes[i % MM.quizzes.length];
      qs.push(track.qs[hash32(track.id + '#' + state.qz.mixSeed + '#' + i) % track.qs.length]);
    }
    state.qzMixed = { id: 'q-mixed', title: { en: 'Mixed challenge', hi: 'मिश्रित चुनौती' }, qs, mixed: true };
    return state.qzMixed;
  }
  const qzOf = () => (state.qz.id === 'q-mixed' ? mixedQuiz() : MM.quizzes.find((q) => q.id === state.qz.id) || MM.quizzes[0]);
  const qzReset = (id) => {
    state.qzMixed = null;
    state.qz = {
      id, i: 0, chosen: null, score: 0, done: false, log: [],
      mixed: id === 'q-mixed', mixSeed: id === 'q-mixed' ? 1 + (Date.now() % 99991) : 0,
    };
  };
  const qzChips = () => {
    const list = MM.quizzes.map((q) => ({ id: q.id, title: q.title, n: q.qs.length }));
    list.push({ id: 'q-mixed', title: { en: 'Mixed challenge', hi: 'मिश्रित चुनौती' }, n: MIX_N });
    return list.map((q) => {
      const best = state.qzBest[q.id];
      const tail = best === undefined ? '' : ' · ' + best + '/' + q.n;
      return { id: q.id, label: { en: q.title.en + tail, hi: q.title.hi + tail } };
    });
  };

  function quizHTML(q) {
    const item = q.qs[state.qz.i];
    const order = qzOpts(item);
    const answered = state.qz.chosen !== null;
    const last = state.qz.i + 1 === q.qs.length;
    return `<div class="quiz">
      <div class="quiz-top"><b>${esc(pick(q.title))}</b><span class="quiz-count">${state.qz.i + 1} / ${q.qs.length}</span></div>
      <div class="quiz-bar"><i style="width:${(((state.qz.i + (answered ? 1 : 0)) / q.qs.length) * 100).toFixed(1)}%"></i></div>
      <p class="quiz-q"><span class="q-diff d${item.d || 2}">${T('qz.d' + (item.d || 2))}</span>${esc(pick(item.q))}</p>
      <div class="quiz-opts">${order.map((oi, pos) => {
        const cls = answered ? (oi === item.a ? ' q-right' : pos === state.qz.chosen ? ' q-wrong' : ' q-dim') : '';
        return `<button type="button" class="qopt${cls}" data-qopt="${pos}"${answered ? ' disabled' : ''}>${esc(pick(item.opts[oi]))}${answered && oi === item.a ? ' ✓' : ''}</button>`;
      }).join('')}</div>
      ${answered ? `<div class="quiz-why"><b>${qzRight(item, state.qz.chosen) ? T('qz.right') : T('qz.wrong')}</b><p>${esc(pick(item.why))}</p>
        <button type="button" class="pill pill-dark qnext" data-${last ? 'qfin' : 'qnext'}="1">${last ? T('qz.score') : T('qz.next')} →</button></div>`
        : `<p class="quiz-keys">${T('qz.keys')}</p>`}
    </div>`;
  }

  function quizEndHTML(q) {
    const s = state.qz.score;
    const n = q.qs.length;
    const msg = QZ_MSG.find((m) => s >= m.f * n) || QZ_MSG[QZ_MSG.length - 1];
    const missed = state.qz.log.filter((l) => !l.ok);
    return `<div class="quiz quiz-end">
      <div class="quiz-top"><b>${esc(pick(q.title))}</b><span class="quiz-count">${T('qz.done')}</span></div>
      <p class="quiz-score">${s} <span>/ ${n}</span></p>
      <p class="quiz-msg">${esc(pick(msg))}</p>
      ${missed.length ? `<p class="quiz-review-h">${T('qz.review')} · ${missed.length}</p>
        <ol class="quiz-review">${missed.map((l) => `<li><b>${esc(pick(l.it.q))}</b>
          <p class="qr-q">${T('qz.yourPick')} ${esc(pick(l.it.opts[l.picked]))}</p>
          <p class="qr-a">${esc(pick(l.it.opts[l.it.a]))} ✓</p>
          <p class="qr-w">${esc(pick(l.it.why))}</p></li>`).join('')}</ol>` : ''}
      <div class="quiz-end-btns">
        <button type="button" class="pill pill-ghost" data-qagain="1">${T('qz.again')}</button>
        ${q.path ? `<a class="pill pill-dark" href="#paths">${T('qz.path')} →</a>` : ''}
      </div>
    </div>`;
  }

  function renderQuiz() {
    chipRow(document.getElementById('qzChips'), qzChips(), state.qz.id, (v) => { qzReset(v); renderQuiz(); });
    const done = MM.quizzes.filter((q) => state.qzBest[q.id] !== undefined).length;
    document.getElementById('qzMeta').innerHTML =
      `<span>${done} / ${MM.quizzes.length} ${T('qz.tracksWord')}</span>` +
      `<span>${MM.quizzes.reduce((a, q) => a + q.qs.length, 0)} ${T('qz.qWord')}</span>`;
    const q = qzOf();
    document.getElementById('qzBox').innerHTML = state.qz.done ? quizEndHTML(q) : quizHTML(q);
  }

  /* ---------------- events ---------------- */
  function bind() {
    document.getElementById('langBtn').onclick = () => {
      state.lang = state.lang === 'en' ? 'hi' : 'en';
      localStorage.setItem(LS.lang, state.lang);
      applyStatic(); renderHero(); renderAll();
    };
    document.getElementById('themeBtn').onclick = () => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = state.theme;
      document.getElementById('themeBtn').innerHTML = state.theme === 'dark'
        ? '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5z"/></svg>'
        : '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4"/></svg>';
      localStorage.setItem(LS.theme, state.theme);
    };
    document.getElementById('qzBox').addEventListener('click', (e) => {
      const b = e.target.closest('[data-qopt],[data-qnext],[data-qfin],[data-qagain]');
      if (!b) return;
      const q = qzOf();
      if (b.dataset.qagain) { qzReset(q.id); renderQuiz(); return; }
      if (b.dataset.qnext) { state.qz.i++; state.qz.chosen = null; renderQuiz(); return; }
      if (b.dataset.qfin) {
        state.qz.done = true;
        if (state.qzBest[q.id] === undefined || state.qz.score > state.qzBest[q.id]) {
          state.qzBest[q.id] = state.qz.score;
          localStorage.setItem(LS.quiz, JSON.stringify(state.qzBest));
        }
        renderQuiz();
        return;
      }
      if (state.qz.chosen !== null) return;
      const item = q.qs[state.qz.i];
      const pos = Number(b.dataset.qopt);
      const oi = qzOpts(item)[pos];
      state.qz.chosen = pos;
      const ok = oi === item.a;
      if (ok) state.qz.score++;
      state.qz.log.push({ it: item, ok, picked: oi });
      renderQuiz();
    });
    document.addEventListener('keydown', (e) => {
      if (!/^[1-4]$/.test(e.key) || (e.target.matches && e.target.matches('input,select,textarea'))) return;
      const box = document.getElementById('qzBox');
      if (!box.getBoundingClientRect().height) return;
      const b = box.querySelectorAll('.qopt:not([disabled])')[Number(e.key) - 1];
      if (!b) return;
      e.preventDefault();
      b.click();
    });

    const pfWrap = document.getElementById('pfWrap');
    const pfBtn = document.getElementById('profileBtn');
    const pfMenu = document.getElementById('profileMenu');
    const pfSet = (on) => {
      pfMenu.hidden = !on;
      pfBtn.setAttribute('aria-expanded', String(on));
      pfWrap.classList.toggle('is-open', on);
    };
    pfBtn.onclick = () => pfSet(pfMenu.hidden);
    document.addEventListener('click', (e) => {
      if (e.target.closest('.pf-item') || e.target.closest('.pf-all') || !pfWrap.contains(e.target)) pfSet(false);
    });

    const RATE_K = ['sttB', 'sttS', 'exch', 'sebi', 'stamp', 'gst'];
    document.getElementById('calcGrid').addEventListener('input', (e) => {
      const t = e.target;
      if (!t.dataset || !t.dataset.c) return;
      const c = MM.calcs.find((x) => x.id === t.dataset.c);
      const f = c.fields.find((x) => x.k === t.dataset.k);
      const v = calcVals(c.id);
      v[t.dataset.k] = f.kind === 'sel' ? t.value : Number(t.value) || 0;
      if (c.id === 'cost' && t.dataset.k === 'mode' && MM.calcRates[t.value]) {
        Object.entries(MM.calcRates[t.value]).forEach(([k, val]) => { v[k] = val; });
        document.querySelectorAll('#calcGrid [data-c="cost"]').forEach((el) => {
          if (RATE_K.includes(el.dataset.k)) el.value = v[el.dataset.k];
        });
      }
      document.getElementById('out-' + c.id).innerHTML = outHTML(c);
    });

    const si = document.getElementById('searchInput');
    si.oninput = () => {
      state.q = si.value.trim().toLowerCase(); state.shown = 48;
      renderResources(); renderTopics(); renderGlossary();
    };
    document.getElementById('hindiChip').onclick = () => { state.hindiOnly = !state.hindiOnly; state.shown = 48; renderChips(); renderResources(); };
    document.getElementById('freeChip').onclick = () => { state.noSignup = !state.noSignup; state.shown = 48; renderChips(); renderResources(); };
    document.getElementById('clearBtn').onclick = () => {
      Object.assign(state, { type: 'all', region: 'all', level: 'all', hindiOnly: false, noSignup: false, q: '', shown: 48 });
      si.value = ''; renderAll();
    };
    document.getElementById('moreBtn').onclick = () => { state.shown += 48; renderResources(); };

    document.addEventListener('click', (e) => {
      const sv = e.target.closest('[data-save]');
      if (sv) {
        const id = sv.dataset.save;
        state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id);
        persist(); renderTopics(); renderGlossary(); renderPaths(); renderSaved();
        if (!document.getElementById('modal').hidden) {
          const t = MM.topics.find((x) => x.id === id);
          if (t) document.getElementById('modalBody').innerHTML = topicModalHTML(t);
        }
        const card = e.target.closest('.res');
        if (card && !sv.closest('.links')) renderResources();
        return;
      }
      const card = e.target.closest('.res');
      if (card) {
        const act = e.target.closest('[data-act]');
        if (act) {
          const id = card.dataset.id;
          if (act.dataset.act === 'save') state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id);
          if (act.dataset.act === 'done') state.done.has(id) ? state.done.delete(id) : state.done.add(id);
          persist(); renderResources(); renderSaved(); renderPaths();
          return;
        }
      }
      const topic = e.target.closest('[data-topic]');
      if (topic) { openTopic(topic.dataset.topic); return; }
      const step = e.target.closest('.step');
      if (step) {
        const ref = step.dataset.ref;
        state.done.has(ref) ? state.done.delete(ref) : state.done.add(ref);
        persist(); renderPaths(); renderSaved(); return;
      }
      if (e.target.closest('#modalClose') || e.target === document.getElementById('modal')) {
        document.getElementById('modal').hidden = true;
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== si) { e.preventDefault(); si.focus(); }
      if (e.key === 'Escape' && !pfMenu.hidden) { pfSet(false); pfBtn.focus(); }
      if (e.key === 'Escape') document.getElementById('modal').hidden = true;
      if ((e.key === 'Enter' || e.key === ' ') && document.activeElement && document.activeElement.dataset.topic) {
        e.preventDefault(); openTopic(document.activeElement.dataset.topic);
      }
    });

    const spy = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (!en.isIntersecting) return;
        document.querySelectorAll('.mainnav a').forEach((a) =>
          a.classList.toggle('active', a.dataset.nav === en.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['library', 'knowledge', 'paths', 'tools', 'practice', 'glossary', 'saved', 'connect'].forEach((id) => {
      const el = document.getElementById(id); if (el) spy.observe(el);
    });
  }

  /* ---------------- profiles / connect ---------------- */
  function renderConnect() {
    document.getElementById('connectCards').innerHTML = MM.connect.map((c) => `
      <a class="ncard" href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">
        <span class="ncard-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round">${c.icon}</svg></span>
        <span class="ncard-body">
          <span class="ncard-kind">${esc(c.kind)}<i>${pick(c.tag)}</i></span>
          <span class="ncard-title">${esc(pick(c.title))}</span>
          <span class="ncard-desc">${esc(pick(c.desc))}</span>
          <span class="ncard-foot"><b>${esc(c.handle)}</b><em>${T('co.cta')} ↗</em></span>
        </span>
      </a>`).join('');
  }

  function renderProfileMenu() {
    document.getElementById('pfItems').innerHTML = MM.connect.map((c) => `
      <a class="pf-item" href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">
        <span class="pf-item-icon"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round">${c.icon}</svg></span>
        <span class="pf-item-body"><b>${esc(c.kind)} · ${esc(c.handle)}</b><small>${esc(pick(c.title))}</small></span>
        <span class="pf-item-go" aria-hidden="true">↗</span>
      </a>`).join('');
  }

  function renderAll() { renderChips(); renderResources(); renderTopics(); renderPaths(); renderCalc(); renderQuiz(); renderGlossary(); renderSaved(); renderConnect(); renderProfileMenu(); }

  document.documentElement.dataset.theme = state.theme;
  applyStatic(); renderHero(); renderAll(); bind();
})();
