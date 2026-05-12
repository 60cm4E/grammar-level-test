/* ===== Grammar Level Test - App Logic ===== */

const App = {
  state: {
    studentName: '',
    selectedGrade: null,
    answers: {},      // { questionId: choiceIndex(1-5) }
    currentTest: null, // reference to TESTS[grade]
  },

  init() {
    this.bindEvents();
    this.loadHistory();
  },

  bindEvents() {
    // Grade buttons
    document.querySelectorAll('.grade-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.state.selectedGrade = btn.dataset.grade;
        this.updateFormState();
      });
    });

    // Name input
    document.getElementById('studentName').addEventListener('input', (e) => {
      this.state.studentName = e.target.value.trim();
      this.updateFormState();
    });

    // Buttons
    document.getElementById('btnStartInput').addEventListener('click', () => this.startInput());
    document.getElementById('btnPrintTest').addEventListener('click', () => this.showPrintTest());
    document.getElementById('btnSubmit').addEventListener('click', () => this.submitTest());
  },

  updateFormState() {
    const ready = this.state.studentName.length > 0 && this.state.selectedGrade;
    document.getElementById('btnStartInput').disabled = !ready;
    document.getElementById('btnPrintTest').disabled = !ready;
  },

  showScreen(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-' + name).classList.add('active');
    window.scrollTo(0, 0);
  },

  // ===== PRINT TEST =====
  showPrintTest() {
    const grade = this.state.selectedGrade;
    const test = TESTS[grade];
    if (!test) return;

    document.getElementById('printGrade').textContent = test.name;
    document.getElementById('printDate').textContent = this.formatDate(new Date());

    const container = document.getElementById('printQuestions');
    container.innerHTML = '';

    test.questions.forEach((q, i) => {
      const div = document.createElement('div');
      div.className = 'paper-q';
      const labels = ['①','②','③','④','⑤'];
      div.innerHTML = `
        <div class="paper-q-stem">
          <span class="paper-q-num">${i + 1}.</span>
          ${q.stem}
        </div>
        <div class="paper-q-choices">
          ${q.choices.map((c, ci) => `
            <div class="paper-choice">
              <span class="paper-choice-label">${labels[ci]}</span>${c}
            </div>
          `).join('')}
        </div>
      `;
      container.appendChild(div);
    });

    this.showScreen('print');
  },

  // ===== ANSWER INPUT =====
  startInput() {
    const grade = this.state.selectedGrade;
    const test = TESTS[grade];
    if (!test) return;

    this.state.currentTest = test;
    this.state.answers = {};

    document.getElementById('inputStudentName').textContent = this.state.studentName;
    document.getElementById('inputGrade').textContent = test.name;

    const grid = document.getElementById('answerGrid');
    grid.innerHTML = '';

    const labels = ['①','②','③','④','⑤'];

    test.questions.forEach((q, i) => {
      const card = document.createElement('div');
      card.className = 'answer-card';
      card.id = 'acard-' + q.id;
      card.innerHTML = `
        <div class="answer-card-header">
          <div class="q-number">${i + 1}</div>
          <div class="q-topic">${q.chapter} · ${q.topic}</div>
        </div>
        <div class="q-stem">${q.stem}</div>
        <div class="choice-row">
          ${q.choices.map((c, ci) => `
            <button class="choice-btn" data-qid="${q.id}" data-choice="${ci + 1}"
              title="${c}"><span class="choice-label">${labels[ci]}</span><span class="choice-text">${c}</span></button>
          `).join('')}
        </div>
      `;
      grid.appendChild(card);
    });

    // Bind choice buttons
    grid.querySelectorAll('.choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = parseInt(btn.dataset.qid);
        const choice = parseInt(btn.dataset.choice);
        this.selectAnswer(qid, choice, btn);
      });
    });

    this.updateProgress();
    this.showScreen('input');
  },

  selectAnswer(qid, choice, clickedBtn) {
    // Deselect others in same question
    const card = document.getElementById('acard-' + qid);
    card.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'));
    clickedBtn.classList.add('selected');
    card.classList.add('answered');
    this.state.answers[qid] = choice;
    this.updateProgress();
  },

  updateProgress() {
    const total = this.state.currentTest.questions.length;
    const done = Object.keys(this.state.answers).length;
    const pct = (done / total) * 100;
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressText').textContent = `${done} / ${total}`;
    document.getElementById('btnSubmit').disabled = done < total;
  },

  // ===== GRADING & REPORT =====
  submitTest() {
    const total = this.state.currentTest.questions.length;
    const done = Object.keys(this.state.answers).length;
    if (done < total) {
      if (!confirm(`아직 ${total - done}문항이 비어있습니다. 그래도 채점하시겠습니까?`)) return;
    }
    this.generateReport();
  },

  generateReport() {
    const test = this.state.currentTest;
    const answers = this.state.answers;

    // Grade each question
    let totalCorrect = 0;
    const levelScores = {};  // { levelId: { correct: N, total: N, name: '...' } }
    const chapterScores = {}; // { chapterName: { correct: N, total: N, level: '...' } }
    const diagnostics = [];   // wrong answers with analysis

    test.questions.forEach(q => {
      const userAnswer = answers[q.id] || 0;
      const isCorrect = userAnswer === q.answer;

      // Level stats
      if (!levelScores[q.level]) {
        const li = LEVEL_INFO[q.level];
        levelScores[q.level] = { correct: 0, total: 0, name: li.name, desc: li.desc, color: li.color };
      }
      levelScores[q.level].total++;
      if (isCorrect) { levelScores[q.level].correct++; totalCorrect++; }

      // Chapter stats
      const chKey = q.level + '_' + q.chapter;
      if (!chapterScores[chKey]) {
        chapterScores[chKey] = { correct: 0, total: 0, level: q.level, chapter: q.chapter };
      }
      chapterScores[chKey].total++;
      if (isCorrect) chapterScores[chKey].correct++;

      // Diagnostics for wrong answers
      if (!isCorrect && q.analysis && q.analysis[userAnswer]) {
        diagnostics.push({
          qNum: q.id,
          chapter: q.chapter,
          topic: q.topic,
          level: q.level,
          detail: q.analysis[userAnswer],
          chose: userAnswer,
          correct: q.answer
        });
      }
    });

    // Determine diagnosed level
    const levelOrder = test.levels;
    let diagnosedLevel = levelOrder[0];
    for (const lvl of levelOrder) {
      if (levelScores[lvl]) {
        const pct = levelScores[lvl].correct / levelScores[lvl].total;
        if (pct >= 0.8) {
          diagnosedLevel = lvl;
        } else {
          break;
        }
      }
    }

    // Build report HTML
    this.renderReport({
      studentName: this.state.studentName,
      gradeName: test.name,
      date: new Date(),
      totalCorrect,
      totalQuestions: test.questions.length,
      levelScores,
      levelOrder,
      chapterScores,
      diagnostics,
      diagnosedLevel
    });

    // Save to history
    this.saveToHistory({
      name: this.state.studentName,
      grade: this.state.selectedGrade,
      gradeName: test.name,
      score: totalCorrect,
      total: test.questions.length,
      level: diagnosedLevel,
      date: new Date().toISOString(),
      answers: { ...answers },
      levelScores: JSON.parse(JSON.stringify(levelScores))
    });

    this.showScreen('report');
  },

  renderReport(data) {
    const { studentName, gradeName, date, totalCorrect, totalQuestions,
            levelScores, levelOrder, chapterScores, diagnostics, diagnosedLevel } = data;

    const pct = Math.round((totalCorrect / totalQuestions) * 100);
    const liDiag = LEVEL_INFO[diagnosedLevel];
    let barColor = 'var(--green)';
    if (pct < 60) barColor = 'var(--red)';
    else if (pct < 80) barColor = 'var(--yellow)';

    // Separate strong/weak chapters
    const chapters = Object.values(chapterScores);
    const strong = chapters.filter(c => (c.correct / c.total) >= 0.8).sort((a,b) => (b.correct/b.total) - (a.correct/a.total));
    const weak = chapters.filter(c => (c.correct / c.total) < 0.8).sort((a,b) => (a.correct/a.total) - (b.correct/b.total));

    const html = `
      <div class="report-header">
        <h1>📝 Grammar Level Test Report</h1>
        <div class="report-sub">영어 문법 레벨 테스트 성적표</div>
      </div>

      <div class="report-student-info">
        <div class="info-item"><div class="info-label">학생</div><div class="info-value">${studentName}</div></div>
        <div class="info-item"><div class="info-label">학년</div><div class="info-value">${gradeName}</div></div>
        <div class="info-item"><div class="info-label">검사일</div><div class="info-value">${this.formatDate(date)}</div></div>
      </div>

      <div class="score-overview">
        <div class="score-big">${totalCorrect}<span style="font-size:1.5rem;opacity:0.6">/${totalQuestions}</span></div>
        <div class="score-label">총점 (${pct}%)</div>
        <div class="score-bar-container">
          <div class="score-bar-fill" style="width:${pct}%;background:${barColor}"></div>
        </div>
        <div class="level-badge" style="background:${liDiag.color}15;color:${liDiag.color};border:2px solid ${liDiag.color}">
          진단 레벨: ${liDiag.name} (${liDiag.desc})
        </div>
      </div>

      <div class="section-title">📊 레벨별 성적</div>
      <div class="level-cards">
        ${levelOrder.map(lvl => {
          const s = levelScores[lvl];
          if (!s) return '';
          const p = Math.round((s.correct / s.total) * 100);
          let statusClass = 'status-pass', statusText = '통과';
          if (p < 60) { statusClass = 'status-fail'; statusText = '미달'; }
          else if (p < 80) { statusClass = 'status-mid'; statusText = '보통'; }
          return `
            <div class="level-card">
              <div class="level-name">${s.name}<br><small style="color:var(--text-muted)">${s.desc}</small></div>
              <div class="level-bar-wrap">
                <div class="level-bar">
                  <div class="level-bar-inner" style="width:${p}%;background:${s.color}"></div>
                </div>
              </div>
              <div class="level-score">${s.correct}/${s.total} (${p}%)</div>
              <div class="level-status ${statusClass}">${statusText}</div>
            </div>`;
        }).join('')}
      </div>

      <div class="section-title">📋 문법 파트별 분석</div>
      <div class="topic-grid">
        <div class="topic-section">
          <h4>✅ 잘하는 영역</h4>
          ${strong.length === 0 ? '<div class="topic-item"><span class="topic-name" style="color:var(--text-muted)">해당 없음</span></div>' :
            strong.map(c => {
              const p = Math.round((c.correct/c.total)*100);
              return `<div class="topic-item">
                <span class="topic-name">${c.chapter}</span>
                <span class="topic-pct pct-high">${p}%</span>
              </div>`;
            }).join('')}
        </div>
        <div class="topic-section">
          <h4>⚠️ 보완 필요 영역</h4>
          ${weak.length === 0 ? '<div class="topic-item"><span class="topic-name" style="color:var(--text-muted)">해당 없음</span></div>' :
            weak.map(c => {
              const p = Math.round((c.correct/c.total)*100);
              let cls = 'pct-mid';
              if (p < 50) cls = 'pct-low';
              return `<div class="topic-item">
                <span class="topic-name">${c.chapter}</span>
                <span class="topic-pct ${cls}">${p}%</span>
              </div>`;
            }).join('')}
        </div>
      </div>

      ${diagnostics.length > 0 ? `
      <div class="diagnosis-section">
        <h3>🔍 오답 진단 분석</h3>
        <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:16px;">
          학생이 선택한 오답을 기반으로 분석한 문법 이해도입니다.
        </p>
        ${diagnostics.slice(0, 12).map(d => `
          <div class="diagnosis-item">
            <div class="d-chapter">[${d.chapter}] ${d.topic}</div>
            <div class="d-detail">→ ${d.detail}</div>
          </div>
        `).join('')}
        ${diagnostics.length > 12 ? `<div style="color:var(--text-muted);font-size:0.85rem;text-align:center;padding:8px;">외 ${diagnostics.length - 12}건의 진단 결과가 있습니다.</div>` : ''}
      </div>` : ''}

      <div class="recommendation">
        <h3>💡 학습 권장 사항</h3>
        <p>현재 <strong>${liDiag.name} (${liDiag.desc})</strong> 수준입니다.</p>
        ${weak.length > 0 ? `
        <p style="margin-top:8px;">다음 영역의 집중 학습을 권장합니다:</p>
        <ol>
          ${weak.slice(0, 5).map(c => `<li><strong>${c.chapter}</strong> (${LEVEL_INFO[c.level].name})</li>`).join('')}
        </ol>` : '<p style="margin-top:8px;">모든 영역에서 우수한 성적을 거두었습니다. 상위 레벨 학습을 권장합니다.</p>'}
      </div>
    `;

    document.getElementById('reportCard').innerHTML = html;
  },

  // ===== HISTORY =====
  saveToHistory(record) {
    let history = JSON.parse(localStorage.getItem('grammarTestHistory') || '[]');
    history.unshift(record);
    if (history.length > 50) history = history.slice(0, 50);
    localStorage.setItem('grammarTestHistory', JSON.stringify(history));
    this.loadHistory();
  },

  loadHistory() {
    const history = JSON.parse(localStorage.getItem('grammarTestHistory') || '[]');
    const section = document.getElementById('historySection');
    const list = document.getElementById('historyList');
    if (history.length === 0) { section.style.display = 'none'; return; }
    section.style.display = 'block';
    list.innerHTML = history.slice(0, 8).map((h, i) => {
      const pct = Math.round((h.score / h.total) * 100);
      let cls = 'high';
      if (pct < 60) cls = 'low';
      else if (pct < 80) cls = 'mid';
      const dateStr = new Date(h.date).toLocaleDateString('ko-KR');
      return `
        <div class="history-item" onclick="App.viewHistoryReport(${i})">
          <div>
            <div class="name">${h.name}</div>
            <div style="font-size:0.8rem;color:var(--text-muted)">${h.gradeName} · ${dateStr}</div>
          </div>
          <div class="score ${cls}">${h.score}/${h.total} (${pct}%)</div>
        </div>`;
    }).join('');
  },

  viewHistoryReport(index) {
    const history = JSON.parse(localStorage.getItem('grammarTestHistory') || '[]');
    const h = history[index];
    if (!h) return;

    // Reconstruct report from saved data
    const test = TESTS[h.grade];
    if (!test) return;

    this.state.studentName = h.name;
    this.state.selectedGrade = h.grade;
    this.state.currentTest = test;
    this.state.answers = h.answers;

    this.generateReport();
  },

  // ===== UTILS =====
  formatDate(d) {
    if (typeof d === 'string') d = new Date(d);
    return `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`;
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
