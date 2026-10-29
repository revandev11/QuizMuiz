(() => {
  'use strict';
  const KEY = 'cloud-study-quiz:v1';
  const questions = window.QUIZ_QUESTIONS || [];
  const app = document.getElementById('app');
  const icons = {
    cloud: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 16.5a4.5 4.5 0 0 0-.8-8.93A6 6 0 0 0 7.6 6.3 4 4 0 0 0 4 14h1"/><path d="M12 12v9m-4-4 4 4 4-4"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>',
    checkCircle: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg>',
    xCircle: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6m0-6-6 6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 4.8A1.8 1.8 0 0 1 7.8 3h8.4A1.8 1.8 0 0 1 18 4.8V21l-6-4-6 4z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
    back: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 12H5m6 6-6-6 6-6"/></svg>',
  };
  const icon = (name) => icons[name] || '';
  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const initial = () => {
    try {
      const data = JSON.parse(localStorage.getItem(KEY) || '{}');
      return { history: Array.isArray(data.history) ? data.history : [], savedIds: Array.isArray(data.savedIds) ? data.savedIds : [], mode: data.mode === 'instant' ? 'instant' : 'finish', active: data.active || null };
    } catch { return { history: [], savedIds: [], mode: 'finish', active: null }; }
  };
  let db = initial();
  let screen = 'home';
  let viewedRecord = null;
  let timerHandle = null;
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch { /* Storage can be blocked in private/file contexts. */ } };
  const shuffled = (list) => { const result = [...list]; for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; } return result; };
  const count = (record) => {
    let correct = 0, wrong = 0, blank = 0;
    for (const q of record.questions) { const a = record.responses[q.id]; if (!a) blank++; else if (a === q.answer) correct++; else wrong++; }
    return { correct, wrong, blank, total: record.questions.length };
  };
  const missedIds = () => new Set(db.history.flatMap((r) => r.questions.filter((q) => r.responses[q.id] && r.responses[q.id] !== q.answer).map((q) => q.id)));
  const dateLabel = (time) => new Intl.DateTimeFormat('az-AZ', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).format(time);
  const sourceLabel = { all: 'Ümumi quiz', range: 'Sual aralığı', wrong: 'Səhv sualların təkrarı', saved: 'Yadda saxlanmış suallar' };
  const recordSourceLabel = (record) => record.rangeLabel || sourceLabel[record.source];
  const optionLetter = (index) => String.fromCharCode(65 + index);
  const persistActive = () => { save(); };

  function startQuiz(source, chosenIds = null, rangeLabel = '') {
    let pool = questions;
    if (chosenIds) pool = questions.filter((q) => chosenIds.includes(q.id));
    else if (source === 'wrong') { const ids = missedIds(); pool = questions.filter((q) => ids.has(q.id)); }
    else if (source === 'saved') pool = questions.filter((q) => db.savedIds.includes(q.id));
    if (!pool.length) return;
    const limit = source === 'range' ? pool.length : Math.min(30, pool.length);
    const selected = shuffled(pool).slice(0, limit).map((q) => ({ ...q, options: shuffled([...new Set(q.options)]) }));
    const now = Date.now();
    db.active = { id: `${now}-${Math.random().toString(36).slice(2, 8)}`, startedAt: now, deadline: now + 45 * 60 * 1000, source, rangeLabel, mode: db.mode, questions: selected, responses: {}, currentIndex: 0, checked: {} };
    viewedRecord = null; screen = 'quiz'; save(); render(); window.scrollTo(0, 0);
  }

  function finishQuiz() {
    if (!db.active) return;
    const active = db.active; const endedAt = Date.now();
    const record = { id: active.id, startedAt: active.startedAt, endedAt, source: active.source, rangeLabel: active.rangeLabel, mode: active.mode, questions: active.questions, responses: active.responses };
    db.history.unshift(record); db.history = db.history.slice(0, 40); db.active = null; viewedRecord = record; screen = 'result'; save(); render(); window.scrollTo(0, 0);
  }

  function toggleSaved(id) {
    db.savedIds = db.savedIds.includes(id) ? db.savedIds.filter((item) => item !== id) : [...db.savedIds, id]; save(); render();
  }

  function header() {
    return `<header class="topbar"><a class="brand" href="./index.html"><span class="brand-mark">${icon('cloud')}</span><span><b>Lotuxana</b><small>Öz tempində öyrən</small></span></a><span class="local-pill"><i></i> Lokal yaddaş aktivdir</span></header>`;
  }
  function homeView() {
    const missed = missedIds().size;
    const best = db.history.length ? Math.max(...db.history.map((r) => Math.round(count(r).correct / r.questions.length * 100))) : 0;
    const history = db.history.slice(0, 5).map((record) => { const c = count(record); return `<button class="history-row card" data-action="history" data-id="${escapeHtml(record.id)}"><span class="history-date">${escapeHtml(dateLabel(record.endedAt))}</span><span class="history-source">${escapeHtml(recordSourceLabel(record))}</span><span class="score"><b>${c.correct}</b><small> / ${c.total} doğru</small></span><span class="mini"><i>${icon('check')} ${c.correct}</i><i>${icon('xCircle')} ${c.wrong}</i><i>– ${c.blank}</i></span>${icon('arrow')}</button>`; }).join('');
    return `<main class="wrap"><section class="hero"><div class="hero-copy"><span class="eyebrow">✳ &nbsp;Xoş gəldin, kişi oğlu</span><h1>SALAM ALEYKUM<br><em>KISILER</em></h1><p>Bulud texnologiyaları üzrə ${questions.length} sualdan 30-u seçilir. Nəticələrin və təkrar sualların kompüterində qalır.</p><div class="hero-meta"><span>${icon('clock')} 45 dəqiqə</span><span>⚑ &nbsp;30 sual</span><span>${icon('bookmark')} ${db.savedIds.length} saxlanıb</span></div></div><div class="art" aria-hidden="true"><div class="orbit a"></div><div class="orbit b"></div><div class="cloud">${icon('cloud')}</div><div class="float one">${icon('check')} Hazırsan</div><div class="float two">01 / 30</div><span class="spark one">✳</span><span class="spark two">✦</span></div></section>
      <section class="stats"><div class="stat"><span class="stat-icon">◷</span><span><small>Quiz sayı</small><b>${db.history.length}</b></span></div><div class="stat"><span class="stat-icon">${icon('checkCircle')}</span><span><small>Ən yaxşı nəticə</small><b>${best}%</b></span></div><div class="stat"><span class="stat-icon">↻</span><span><small>Təkrar sual</small><b>${missed}</b></span></div><div class="stat"><span class="stat-icon">${icon('bookmark')}</span><span><small>Yadda saxlanan</small><b>${db.savedIds.length}</b></span></div></section>
      <section class="range-card card"><div class="section-head"><div><span class="eyebrow">Öz aralığını seç</span><h2>İstədiyin suallardan başla</h2><p>Başlanğıc və son sual nömrəsi aralığa daxildir.</p></div><span class="round-icon">↔</span></div><div class="range-controls"><label>İlk sual<input class="range-input" id="range-from" type="number" min="1" value="1" inputmode="numeric"></label><span class="range-dash">—</span><label>Son sual<input class="range-input" id="range-to" type="number" min="1" value="30" inputmode="numeric"></label><button class="primary" data-action="start-range">Bu aralıqla başla ${icon('arrow')}</button></div><p class="range-summary" id="range-summary">30 sual seçilib. Quiz müddəti: 45 dəqiqə.</p></section>      <section class="grid2"><div class="start-card card"><div class="section-head"><div><span class="eyebrow">Yeni quiz</span><h2>Necə cavablandırmaq istəyirsən?</h2></div><span class="round-icon">⚑</span></div><div class="mode-list"><button class="mode ${db.mode === 'instant' ? 'active' : ''}" data-action="mode" data-mode="instant"><span class="radio">${db.mode === 'instant' ? '<i></i>' : ''}</span><span><b>Hər cavabdan sonra yoxla</b><small>Seçdiyin cavabın düz və ya səhv olduğunu dərhal gör.</small></span>${icon('checkCircle')}</button><button class="mode ${db.mode === 'finish' ? 'active' : ''}" data-action="mode" data-mode="finish"><span class="radio">${db.mode === 'finish' ? '<i></i>' : ''}</span><span><b>Quiz bitəndə yoxla</b><small>Cavablar yalnız quiz tamamlanandan sonra göstərilsin.</small></span>◉</button></div><button class="primary" data-action="start" data-source="all">Quizi başlat ${icon('arrow')}</button><p class="note">Hər quizdə təsadüfi 30 sual • 45 dəqiqə</p></div>
      <div class="practice-card card"><div class="section-head"><div><span class="eyebrow">Təkrar məşq</span><h2>Yadda saxlamaq asanlaşsın</h2></div><span class="round-icon">↻</span></div><button class="practice-row" data-action="start" data-source="wrong" ${missed ? '' : 'disabled'}><span class="practice-icon">${icon('xCircle')}</span><span><b>Səhv etdiklərim</b><small>${missed ? `${missed} fərqli sual` : 'Hələ təkrar sual yoxdur'}</small></span>${icon('arrow')}</button><button class="practice-row" data-action="start" data-source="saved" ${db.savedIds.length ? '' : 'disabled'}><span class="practice-icon saved">${icon('bookmark')}</span><span><b>Yadda saxladıqlarım</b><small>${db.savedIds.length ? `${db.savedIds.length} sual` : 'Hələ sual saxlamamısan'}</small></span>${icon('arrow')}</button><p class="note">Təkrar quizində sual sayı mövcud suallara uyğun olur.</p></div></section>
      <section class="history-section"><div class="section-head history-head"><div><span class="eyebrow">Şəxsi tarixçə</span><h2>Son quizlər</h2></div><span class="history-count">◷ &nbsp;${db.history.length} tamamlanıb</span></div>${db.history.length ? `<div class="history-list">${history}</div>` : `<div class="empty card"><span class="empty-icon">◷</span><b>İlk quizini ver, nəticələrin burada görünsün</b><span>Nəticələrin və təkrar etmək istədiyin suallar burada saxlanır.</span></div>`}<p class="disclaimer">Cavablar yüklənmiş Excel sualları və ehtimal olunan cavablar PDF-indən götürülüb; rəsmi cavab açarı deyil.</p></section></main>`;
  }

  function quizView() {
    const s = db.active; const q = s.questions[s.currentIndex]; const answer = s.responses[q.id]; const checked = s.checked[q.id]; const correct = answer === q.answer;
    const answered = Object.keys(s.responses).length; const seconds = Math.max(0, Math.ceil((s.deadline - Date.now()) / 1000)); const time = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
    const clock = seconds < 300 ? 'urgent' : seconds < 600 ? 'warning' : '';
    const options = q.options.map((option, i) => { const chosen = answer === option; const good = s.mode === 'instant' && checked && option === q.answer; const bad = s.mode === 'instant' && checked && chosen && !correct; return `<button class="option ${chosen ? 'chosen' : ''} ${good ? 'good' : ''} ${bad ? 'bad' : ''}" data-action="answer" data-index="${i}"><span class="letter">${String.fromCharCode(65 + i)}</span><span>${escapeHtml(option)}</span>${good ? icon('checkCircle') : bad ? icon('xCircle') : ''}</button>`; }).join('');
    const feedback = s.mode === 'instant' && checked && answer ? `<div class="feedback ${correct ? 'good' : 'bad'}">${icon(correct ? 'checkCircle' : 'xCircle')}<span><b>${correct ? 'Düzgün cavabdır!' : 'Bu cavab düzgün deyil.'}</b>${correct ? '' : `<small>Düzgün cavab: ${escapeHtml(q.answer)}</small>`}</span></div>` : s.mode === 'finish' && answer ? '<p class="delayed-note">Düzgünlük quiz tamamlananda göstəriləcək.</p>' : '';
    const map = s.questions.map((item, i) => `<button class="${i === s.currentIndex ? 'current' : ''} ${s.responses[item.id] ? 'answered' : ''}" data-action="goto" data-index="${i}">${i + 1}</button>`).join('');
    return `<main class="wrap play"><div class="play-head"><div><span class="eyebrow">${escapeHtml(s.rangeLabel || sourceLabel[s.source])}</span><h1>Quiz davam edir</h1></div><div class="timer ${clock}">${icon('clock')}<span><small>Qalan vaxt</small><b id="clock">${time}</b></span></div></div><div class="progress"><span style="width:${answered / s.questions.length * 100}%"></span></div><div class="play-layout"><div><article class="question-card card"><div class="question-meta"><span>SUAL ${String(s.currentIndex + 1).padStart(2, '0')} <i>/ ${String(s.questions.length).padStart(2, '0')}</i></span><button class="save-btn ${db.savedIds.includes(q.id) ? 'saved' : ''}" data-action="save-question">${icon('bookmark')}${db.savedIds.includes(q.id) ? 'Yadda saxlanıb' : 'Sonra bax'}</button></div><h2>${escapeHtml(q.question)}</h2><div class="tags"><span>Mövzu ${escapeHtml(q.topic)}</span><span>${q.difficulty === 1 ? 'Asan' : q.difficulty === 2 ? 'Orta' : 'Çətin'}</span></div><div class="options">${options}</div>${feedback}<div class="question-actions"><button class="nav-btn" data-action="prev" ${s.currentIndex === 0 ? 'disabled' : ''}>${icon('back')} Əvvəlki</button>${s.currentIndex < s.questions.length - 1 ? `<button class="nav-btn next" data-action="next">Növbəti ${icon('arrow')}</button>` : '<button class="finish-btn" data-action="finish">Quizi bitir ✓</button>'}</div></article><div class="bottom-progress"><span>${answered} / ${s.questions.length} cavablanıb</span><span>${s.questions.length - answered} boş</span></div></div><aside class="question-map card"><div class="map-head"><span>Suallar</span><span>${answered} / ${s.questions.length}</span></div><div class="map-grid">${map}</div><div class="legend"><span><i class="current"></i>Cari</span><span><i class="answered"></i>Cavablanıb</span><span><i></i>Boş</span></div><button class="map-finish" data-action="finish">Bitir və nəticəyə bax</button><p class="map-help">Əlfəcin düyməsi sualı təkrar üçün saxlayır.</p></aside></div></main>`;
  }

  function resultView(record) {
    const c = count(record); const percent = c.total ? Math.round(c.correct / c.total * 100) : 0;
    const missed = record.questions.filter((q) => record.responses[q.id] && record.responses[q.id] !== q.answer).map((q) => q.id);
    const heading = percent >= 80 ? 'Əla nəticə!' : percent >= 55 ? 'Yaxşı iş!' : 'Davam et, alınacaq!';
    const items = record.questions.map((q, i) => {
      const answer = record.responses[q.id]; const right = answer === q.answer; const blank = !answer; const state = right ? 'good' : blank ? 'blank' : 'bad';
      return `<article class="review-card card ${state}"><div class="review-top"><span class="review-index">${String(i + 1).padStart(2, '0')}</span><span class="review-status ${state}">${right ? `${icon('checkCircle')} Düzgün` : blank ? '– Boş' : `${icon('xCircle')} Səhv`}</span><button class="save-btn ${db.savedIds.includes(q.id) ? 'saved' : ''}" data-action="save-review" data-id="${q.id}">${icon('bookmark')}${db.savedIds.includes(q.id) ? 'Saxlanıb' : 'Sonra bax'}</button></div><h3>${escapeHtml(q.question)}</h3><div class="review-answers">${answer ? `<p class="${right ? 'answer-good' : 'answer-bad'}"><small>Sənin cavabın</small><b>${escapeHtml(answer)}</b></p>` : ''}<p class="answer-good"><small>Ehtimal olunan düzgün cavab</small><b>${escapeHtml(q.answer)}</b></p>${q.reference ? `<small class="reference">${escapeHtml(q.reference)}</small>` : ''}</div></article>`;
    }).join('');
    return `<main class="wrap results"><section class="results-hero"><span class="award">🏆</span><span class="eyebrow">Quiz tamamlandı</span><h1>${heading}</h1><p>${escapeHtml(recordSourceLabel(record))} • ${escapeHtml(dateLabel(record.endedAt))}</p><div class="ring" style="--score:${percent}%"><span><b>${c.correct}</b><small>/${c.total}</small></span></div></section><section class="result-stats"><div class="result-stat good">${icon('checkCircle')}<span><small>Düzgün</small><b>${c.correct}</b></span></div><div class="result-stat bad">${icon('xCircle')}<span><small>Səhv</small><b>${c.wrong}</b></span></div><div class="result-stat blank">⚑<span><small>Boş</small><b>${c.blank}</b></span></div></section><div class="result-actions"><button class="primary" data-action="retry-wrong" ${missed.length ? '' : 'disabled'}>↻ &nbsp;Səhvləri yenidən işlə (${missed.length})</button><button class="secondary" data-action="home">Ana səhifə ${icon('arrow')}</button></div><div class="section-head review-head"><div><span class="eyebrow">Ətraflı baxış</span><h2>Cavabların</h2></div><span>${c.total} sual</span></div><section class="review-list">${items}</section><div class="end-actions"><button class="secondary" data-action="home">${icon('back')} Quiz siyahısına qayıt</button></div><p class="disclaimer">Cavablar PDF-dəki ehtimal olunan cavablardan götürülüb; rəsmi cavab açarı deyil.</p></main>`;
  }

  function render() {
    clearInterval(timerHandle);
    const content = screen === 'home' ? homeView() : screen === 'quiz' && db.active ? quizView() : screen === 'result' && viewedRecord ? resultView(viewedRecord) : homeView();
    app.innerHTML = `${header()}${content}<footer class="footer">${questions.length} sual &nbsp;•&nbsp; Məlumatlar yalnız bu brauzerdə saxlanır</footer>`;
    if (screen === 'quiz' && db.active) {
      timerHandle = setInterval(() => {
        const time = Math.max(0, db.active.deadline - Date.now()); const node = document.getElementById('clock');
        if (node) node.textContent = `${String(Math.floor(time / 60000)).padStart(2, '0')}:${String(Math.floor((time % 60000) / 1000)).padStart(2, '0')}`;
        if (time <= 0) finishQuiz();
      }, 250);
    }
  }

  app.addEventListener('input', (event) => {
    if (!event.target.matches('.range-input')) return;
    const from = Number(document.getElementById('range-from').value);
    const to = Number(document.getElementById('range-to').value);
    const selected = questions.filter((q) => q.id >= from && q.id <= to);
    const summary = document.getElementById('range-summary');
    const button = app.querySelector('[data-action="start-range"]');
    if (from < 1 || to < from || !selected.length) {
      summary.textContent = 'Bu aralıqda mövcud sual yoxdur.';
      button.disabled = true;
      return;
    }
    const beyond = to > questions.length ? ` ${to - questions.length} sual bankda hələ yoxdur.` : '';
    summary.textContent = `${selected.length} sual seçilib. Quiz müddəti: 45 dəqiqə.${beyond}`;
    button.disabled = false;
  });
  app.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action]'); if (!button || button.disabled) return;
    const action = button.dataset.action; const s = db.active;
    if (action === 'mode') { db.mode = button.dataset.mode; save(); render(); }
    else if (action === 'start') startQuiz(button.dataset.source);
    else if (action === 'start-range') { const from = Number(document.getElementById('range-from').value); const to = Number(document.getElementById('range-to').value); const ids = questions.filter((q) => q.id >= from && q.id <= to).map((q) => q.id); if (ids.length) startQuiz('range', ids, `${from}–${to}`); }
    else if (action === 'answer' && s) { const q = s.questions[s.currentIndex]; const chosen = q.options[Number(button.dataset.index)]; s.responses[q.id] = chosen; s.checked[q.id] = s.mode === 'instant'; save(); render(); }
    else if (action === 'goto' && s) { s.currentIndex = Number(button.dataset.index); save(); render(); }
    else if (action === 'prev' && s) { s.currentIndex = Math.max(0, s.currentIndex - 1); save(); render(); }
    else if (action === 'next' && s) { s.currentIndex = Math.min(s.questions.length - 1, s.currentIndex + 1); save(); render(); }
    else if (action === 'save-question' && s) { toggleSaved(s.questions[s.currentIndex].id); }
    else if (action === 'save-review') toggleSaved(Number(button.dataset.id));
    else if (action === 'finish') finishQuiz();
    else if (action === 'home') { screen = 'home'; viewedRecord = null; save(); render(); window.scrollTo(0, 0); }
    else if (action === 'retry-wrong' && viewedRecord) { const ids = viewedRecord.questions.filter((q) => viewedRecord.responses[q.id] && viewedRecord.responses[q.id] !== q.answer).map((q) => q.id); if (ids.length) startQuiz('wrong', ids); }
    else if (action === 'history') { viewedRecord = db.history.find((r) => r.id === button.dataset.id) || null; if (viewedRecord) { screen = 'result'; render(); window.scrollTo(0, 0); } }
  });

  if (db.active && db.active.deadline <= Date.now()) {
    const active = db.active; db.active = active; screen = 'quiz'; finishQuiz();
  } else if (db.active) screen = 'quiz';
  render();
})();




