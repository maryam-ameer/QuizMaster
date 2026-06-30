// ─── QUIZ DATA (60 questions, 15 per category) ───
const QUIZ_DATA = {
    'Computer Science': {
      icon: 'fa-laptop-code',
      color: '#6c5ce7',
      questions: [
        { q: 'What does CPU stand for?', opts: ['Central Processing Unit', 'Computer Personal Unit', 'Core Process Utility', 'Central Program Unit'], ans: 0 },
        { q: 'What is the binary representation of decimal 10?', opts: ['1010', '1100', '1001', '1110'], ans: 0 },
        { q: 'What does API stand for?', opts: ['Application Programming Interface', 'Advanced Program Integration', 'Application Process Interface', 'Automated Program Instruction'], ans: 0 },
        { q: 'What is the time complexity of binary search?', opts: ['O(log n)', 'O(n)', 'O(n²)', 'O(1)'], ans: 0 },
        { q: 'What is a compiler?', opts: ['Translates code to machine language', 'A type of database', 'A network protocol', 'A hardware component'], ans: 0 },
        { q: 'What is the default port for HTTP?', opts: ['80', '443', '21', '25'], ans: 0 },
        { q: 'What is an algorithm?', opts: ['A step-by-step procedure for solving a problem', 'A type of computer virus', 'A programming language', 'A hardware device'], ans: 0 },
        { q: 'What is SQL primarily used for?', opts: ['Database management', 'Web development', 'Graphic design', 'Network security'], ans: 0 },
        { q: 'Which protocol is connection-oriented?', opts: ['TCP', 'UDP', 'HTTP', 'FTP'], ans: 0 },
        { q: 'What data structure uses LIFO?', opts: ['Stack', 'Queue', 'Array', 'Linked List'], ans: 0 },
        { q: 'What is the main function of an operating system?', opts: ['Resource management', 'Web browsing', 'Document editing', 'Graphic rendering'], ans: 0 },
        { q: 'What is the Internet?', opts: ['A global network of computers', 'A type of browser', 'A programming language', 'A hardware device'], ans: 0 },
        { q: 'What is a database?', opts: ['An organized collection of data', 'A type of processor', 'A network protocol', 'A programming paradigm'], ans: 0 },
        { q: 'What significant event happened in 1969 in computing?', opts: ['ARPANET was established', 'The first PC was invented', 'Microsoft was founded', 'The internet went public'], ans: 0 },
        { q: 'What is the purpose of a firewall?', opts: ['Network security', 'Data storage', 'Code compilation', 'Graphic rendering'], ans: 0 }
      ]
    },
    'General Knowledge': {
      icon: 'fa-globe-americas',
      color: '#00cec9',
      questions: [
        { q: 'What is the capital of France?', opts: ['Paris', 'London', 'Berlin', 'Madrid'], ans: 0 },
        { q: 'Who wrote the national anthem of India?', opts: ['Rabindranath Tagore', 'Mahatma Gandhi', 'Jawaharlal Nehru', 'Bankim Chandra'], ans: 0 },
        { q: 'Which is the largest ocean on Earth?', opts: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'], ans: 0 },
        { q: 'What is the currency of Japan?', opts: ['Yen', 'Won', 'Dollar', 'Euro'], ans: 0 },
        { q: 'What is the tallest mountain in the world?', opts: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'], ans: 0 },
        { q: 'Which is the largest continent by area?', opts: ['Asia', 'Africa', 'North America', 'Europe'], ans: 0 },
        { q: 'Who is credited with inventing the telephone?', opts: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Guglielmo Marconi'], ans: 0 },
        { q: 'Which is considered the oldest civilization?', opts: ['Mesopotamia', 'Egypt', 'Indus Valley', 'Chinese'], ans: 0 },
        { q: 'What is the national animal of India?', opts: ['Tiger', 'Lion', 'Elephant', 'Peacock'], ans: 0 },
        { q: 'What is the longest river in the world?', opts: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'], ans: 0 },
        { q: 'Which is the largest desert in the world?', opts: ['Sahara', 'Gobi', 'Kalahari', 'Arabian'], ans: 0 },
        { q: 'Who painted the Mona Lisa?', opts: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Donatello'], ans: 0 },
        { q: 'What is the smallest country in the world?', opts: ['Vatican City', 'Monaco', 'Nauru', 'San Marino'], ans: 0 },
        { q: 'What is the capital of Australia?', opts: ['Canberra', 'Sydney', 'Melbourne', 'Brisbane'], ans: 0 },
        { q: 'Who discovered penicillin?', opts: ['Alexander Fleming', 'Louis Pasteur', 'Robert Koch', 'Joseph Lister'], ans: 0 }
      ]
    },
    'Science': {
      icon: 'fa-flask',
      color: '#fd79a8',
      questions: [
        { q: 'What is the chemical symbol for water?', opts: ['H₂O', 'CO₂', 'NaCl', 'HCl'], ans: 0 },
        { q: 'What process converts sunlight into chemical energy?', opts: ['Photosynthesis', 'Respiration', 'Fermentation', 'Combustion'], ans: 0 },
        { q: 'Which is the largest planet in our solar system?', opts: ['Jupiter', 'Saturn', 'Neptune', 'Uranus'], ans: 0 },
        { q: 'What is the smallest planet in our solar system?', opts: ['Mercury', 'Mars', 'Venus', 'Pluto'], ans: 0 },
        { q: 'What is the chemical symbol for gold?', opts: ['Au', 'Ag', 'Fe', 'Cu'], ans: 0 },
        { q: 'What is the study of living organisms called?', opts: ['Biology', 'Zoology', 'Botany', 'Ecology'], ans: 0 },
        { q: 'What is the formula for speed?', opts: ['Distance ÷ Time', 'Time ÷ Distance', 'Distance × Time', 'Mass × Acceleration'], ans: 0 },
        { q: 'What is the atomic number of carbon?', opts: ['6', '8', '12', '14'], ans: 0 },
        { q: 'What is the process of cell division in somatic cells called?', opts: ['Mitosis', 'Meiosis', 'Binary fission', 'Budding'], ans: 0 },
        { q: 'What is the chemical symbol for oxygen?', opts: ['O', 'O₂', 'Ox', 'Om'], ans: 0 },
        { q: 'What is the center of an atom called?', opts: ['Nucleus', 'Electron shell', 'Proton', 'Neutron'], ans: 0 },
        { q: 'What is the study of light called?', opts: ['Optics', 'Acoustics', 'Thermodynamics', 'Electromagnetism'], ans: 0 },
        { q: 'What is the chemical formula for table salt?', opts: ['NaCl', 'KCl', 'CaCl₂', 'Na₂CO₃'], ans: 0 },
        { q: 'What is known as the powerhouse of the cell?', opts: ['Mitochondria', 'Ribosome', 'Nucleus', 'Golgi body'], ans: 0 },
        { q: 'What is the pH of pure water?', opts: ['7', '1', '14', '5'], ans: 0 }
      ]
    },
    'Mathematics': {
      icon: 'fa-calculator',
      color: '#fdcb6e',
      questions: [
        { q: 'What is the value of π (pi) to 5 decimal places?', opts: ['3.14159', '3.14285', '3.14592', '3.15129'], ans: 0 },
        { q: 'What is the square root of 144?', opts: ['12', '14', '16', '18'], ans: 0 },
        { q: 'What is 7 × 8?', opts: ['56', '54', '58', '52'], ans: 0 },
        { q: 'What is the formula for the area of a circle?', opts: ['πr²', '2πr', 'πd', 'πr³'], ans: 0 },
        { q: 'What is the value of 2³?', opts: ['8', '6', '9', '4'], ans: 0 },
        { q: 'What is the sum of the interior angles of a triangle?', opts: ['180°', '90°', '360°', '270°'], ans: 0 },
        { q: 'What is the square of 9?', opts: ['81', '72', '90', '99'], ans: 0 },
        { q: 'What is 15% of 200?', opts: ['30', '25', '35', '40'], ans: 0 },
        { q: 'What is the cube root of 27?', opts: ['3', '9', '6', '4'], ans: 0 },
        { q: 'What is the area of a rectangle with length 5 and width 4?', opts: ['20', '18', '22', '24'], ans: 0 },
        { q: 'What is the perimeter of a square with side 6?', opts: ['24', '36', '12', '18'], ans: 0 },
        { q: 'What is the value of 5! (factorial)?', opts: ['120', '60', '25', '100'], ans: 0 },
        { q: 'What is 0.5 as a fraction in simplest form?', opts: ['½', '⅓', '¼', '⅕'], ans: 0 },
        { q: 'What is the formula for the distance between two points?', opts: ['√((x₂−x₁)² + (y₂−y₁)²)', '(x₂−x₁) + (y₂−y₁)', '√(x₂² + y₂²)', '(x₂−x₁)² + (y₂−y₁)²'], ans: 0 },
        { q: 'What is the sum of all integers from 1 to 100?', opts: ['5050', '5000', '5100', '4950'], ans: 0 }
      ]
    }
  };
  
  const CATEGORY_NAMES = Object.keys(QUIZ_DATA);
  
  // ─── State ────────────────────────────────────────────────────────
  const state = {
    completed: {},        // categoryName → true
    results: {},          // categoryName → { correct, wrong, total, percentage, score }
    currentCategory: null,
    currentIndex: 0,
    selectedOption: null,
    quizAnswers: [],      // array of { selected, correct }
    totalCorrect: 0,
    allCompleted: false
  };
  
  // ─── DOM refs ────────────────────────────────────────────────────
  const $ = id => document.getElementById(id);
  const homeScreen = $('homeScreen');
  const quizScreen = $('quizScreen');
  const resultScreen = $('resultScreen');
  const finalScreen = $('finalScreen');
  const categoryGrid = $('categoryGrid');
  const quizCategoryTitle = $('quizCategoryTitle');
  const quizProgress = $('quizProgress');
  const quizProgressBar = $('quizProgressBar');
  const questionText = $('questionText');
  const optionsContainer = $('optionsContainer');
  const nextBtn = $('nextBtn');
  const quitQuizBtn = $('quitQuizBtn');
  const completedCount = $('completedCount');
  const totalCorrectDisplay = $('totalCorrectDisplay');
  
  // ─── Helpers ─────────────────────────────────────────────────────
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  function getPerformance(percent) {
    if (percent >= 90) return { label: 'Excellent', cls: 'excellent' };
    if (percent >= 70) return { label: 'Good', cls: 'good' };
    if (percent >= 50) return { label: 'Average', cls: 'average' };
    return { label: 'Needs Improvement', cls: 'needs-improvement' };
  }
  
  // ─── Confetti ────────────────────────────────────────────────────
  function fireConfetti(count = 80) {
    const container = document.getElementById('confettiContainer');
    const colors = ['#6c5ce7', '#00cec9', '#fd79a8', '#fdcb6e', '#00b894', '#ff6b6b', '#74b9ff'];
    for (let i = 0; i < count; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      const size = 6 + Math.random() * 8;
      piece.style.width = size + 'px';
      piece.style.height = size + 'px';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.left = Math.random() * 100 + '%';
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      piece.style.animationDuration = (2 + Math.random() * 2.5) + 's';
      piece.style.animationDelay = (Math.random() * 0.8) + 's';
      container.appendChild(piece);
      setTimeout(() => piece.remove(), 5000);
    }
  }
  
  // ─── Screen management ──────────────────────────────────────────
  function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = $(screenId);
    if (el) el.classList.add('active');
  }
  
  function updateHeaderStats() {
    const done = Object.keys(state.completed).length;
    completedCount.textContent = done;
    let total = 0;
    for (const cat of CATEGORY_NAMES) {
      if (state.results[cat]) total += state.results[cat].correct;
    }
    state.totalCorrect = total;
    totalCorrectDisplay.textContent = total;
  }
  
  // ─── Render Home ─────────────────────────────────────────────────
  function renderHome() {
    categoryGrid.innerHTML = '';
    for (const cat of CATEGORY_NAMES) {
      const data = QUIZ_DATA[cat];
      const isDone = !!state.completed[cat];
      const card = document.createElement('div');
      card.className = 'category-card';
      card.setAttribute('data-category', cat);
      const doneBadge = isDone ?
        `<span class="badge-complete show"><i class="fas fa-check-circle"></i> Done</span>` :
        `<span class="badge-complete"><i class="fas fa-check-circle"></i> Done</span>`;
      const pct = isDone ? 100 : 0;
      card.innerHTML = `
        <div class="icon-wrap" style="color:${data.color};">
          <i class="fas ${data.icon}"></i>
        </div>
        <div class="cat-name">${cat}</div>
        <div class="cat-count">${data.questions.length} questions</div>
        ${doneBadge}
        <div class="progress-ring"><div class="fill" style="width:${pct}%;background:${data.color};"></div></div>
      `;
      card.addEventListener('click', () => startQuiz(cat));
      categoryGrid.appendChild(card);
    }
    updateHeaderStats();
    const allDone = CATEGORY_NAMES.every(c => !!state.completed[c]);
    if (allDone && !state.allCompleted) {
      state.allCompleted = true;
      setTimeout(showFinalResult, 300);
    } else {
      state.allCompleted = allDone;
    }
  }
  
  // ─── Start Quiz ──────────────────────────────────────────────────
  function startQuiz(category) {
    // Get a fresh copy of the questions (deep clone) and shuffle
    const originalQuestions = QUIZ_DATA[category].questions;
    const freshQuestions = deepClone(originalQuestions);
    // Shuffle options for each question and keep correct index
    for (const q of freshQuestions) {
      const correctText = q.opts[q.ans];
      const shuffled = shuffleArray([...q.opts]);
      const newCorrectIndex = shuffled.indexOf(correctText);
      q.opts = shuffled;
      q.ans = newCorrectIndex;
    }
    // Shuffle question order
    shuffleArray(freshQuestions);
    // Store the shuffled questions in state for this session
    state._currentQuestions = freshQuestions;
  
    state.currentCategory = category;
    state.currentIndex = 0;
    state.selectedOption = null;
    state.quizAnswers = [];
  
    showScreen('quizScreen');
    quizCategoryTitle.textContent = category;
    renderQuestion();
  }
  
  function renderQuestion() {
    const questions = state._currentQuestions;
    const idx = state.currentIndex;
    if (idx >= questions.length) {
      finishQuiz();
      return;
    }
    const q = questions[idx];
    questionText.textContent = q.q;
    quizProgress.textContent = `${idx+1} / ${questions.length}`;
    quizProgressBar.style.width = `${((idx+1)/questions.length)*100}%`;
  
    state.selectedOption = null;
    nextBtn.disabled = true;
  
    const letters = ['A', 'B', 'C', 'D'];
    optionsContainer.innerHTML = '';
    q.opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="letter">${letters[i]}</span><span>${opt}</span>`;
      btn.dataset.index = i;
      btn.addEventListener('click', () => selectOption(i));
      optionsContainer.appendChild(btn);
    });
  }
  
  function selectOption(index) {
    if (state.selectedOption !== null) return;
    const questions = state._currentQuestions;
    const idx = state.currentIndex;
    const q = questions[idx];
    const isCorrect = (index === q.ans);
  
    state.selectedOption = index;
    state.quizAnswers.push({ selected: index, correct: isCorrect });
  
    const btns = optionsContainer.querySelectorAll('.option-btn');
    btns.forEach((btn, i) => {
      btn.classList.add('disabled');
      if (i === q.ans) btn.classList.add('correct');
      if (i === index && !isCorrect) btn.classList.add('wrong');
      if (i === index) btn.classList.add('selected');
    });
  
    nextBtn.disabled = false;
  }
  
  function goToNext() {
    const questions = state._currentQuestions;
    state.currentIndex++;
    if (state.currentIndex >= questions.length) {
      finishQuiz();
    } else {
      renderQuestion();
    }
  }
  
  function finishQuiz() {
    const cat = state.currentCategory;
    const questions = state._currentQuestions;
    const answers = state.quizAnswers;
    let correct = 0;
    for (const a of answers) {
      if (a.correct) correct++;
    }
    const wrong = questions.length - correct;
    const percentage = Math.round((correct / questions.length) * 100);
    const score = correct;
  
    state.results[cat] = { correct, wrong, total: questions.length, percentage, score };
    state.completed[cat] = true;
  
    showResult(cat, correct, wrong, percentage, score);
    updateHeaderStats();
    renderHome(); // update cards
  
    const allDone = CATEGORY_NAMES.every(c => !!state.completed[c]);
    if (allDone) {
      state.allCompleted = true;
      setTimeout(showFinalResult, 600);
    }
  }
  
  function showResult(category, correct, wrong, percentage, score) {
    showScreen('resultScreen');
    const perf = getPerformance(percentage);
    const icon = percentage >= 90 ? '🏆' : percentage >= 70 ? '🎉' : percentage >= 50 ? '👍' : '💪';
    document.getElementById('resultIcon').textContent = icon;
    document.getElementById('resultTitle').textContent = percentage >= 70 ? 'Great Job!' : percentage >= 50 ? 'Not Bad!' : 'Keep Practicing!';
    document.getElementById('resultSub').textContent = `You scored ${score}/${correct+wrong} in ${category}`;
    document.getElementById('resultScore').textContent = `${score}/${correct+wrong}`;
    document.getElementById('resultCorrect').textContent = correct;
    document.getElementById('resultWrong').textContent = wrong;
    document.getElementById('resultPercentage').textContent = percentage + '%';
    const perfEl = document.getElementById('resultPerformance');
    perfEl.textContent = perf.label;
    perfEl.className = 'result-performance ' + perf.cls;
  
    if (percentage >= 70) fireConfetti(50);
  }
  
  // ─── Final Overall Result ───────────────────────────────────────
  function showFinalResult() {
    let totalQ = 0, totalCorrect = 0, totalWrong = 0;
    for (const cat of CATEGORY_NAMES) {
      if (state.results[cat]) {
        totalQ += state.results[cat].total;
        totalCorrect += state.results[cat].correct;
        totalWrong += state.results[cat].wrong;
      }
    }
    const pct = totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : 0;
    const perf = getPerformance(pct);
  
    document.getElementById('finalTotalQ').textContent = totalQ;
    document.getElementById('finalCorrect').textContent = totalCorrect;
    document.getElementById('finalWrong').textContent = totalWrong;
    document.getElementById('finalPercentage').textContent = pct + '%';
    const fp = document.getElementById('finalPerformance');
    fp.textContent = perf.label;
    fp.className = 'final-perf ' + perf.cls;
  
    showScreen('finalScreen');
    if (pct >= 70) fireConfetti(100);
    updateHeaderStats();
  }
  
  // ─── Reset Everything ────────────────────────────────────────────
  function resetAll() {
    // Reset state
    state.completed = {};
    state.results = {};
    state.currentCategory = null;
    state.currentIndex = 0;
    state.selectedOption = null;
    state.quizAnswers = [];
    state.totalCorrect = 0;
    state.allCompleted = false;
    state._currentQuestions = null;
    renderHome();
  }
  
  // ─── Event Listeners ─────────────────────────────────────────────
  nextBtn.addEventListener('click', goToNext);
  
  quitQuizBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to quit this quiz? Progress will be lost.')) {
      showScreen('homeScreen');
      renderHome();
    }
  });
  
  document.getElementById('resultHomeBtn').addEventListener('click', () => {
    showScreen('homeScreen');
    renderHome();
  });
  
  document.getElementById('resultRetryBtn').addEventListener('click', () => {
    const cat = state.currentCategory;
    if (cat) {
      delete state.completed[cat];
      delete state.results[cat];
      renderHome();
      startQuiz(cat);
    }
  });
  
  document.getElementById('finalHomeBtn').addEventListener('click', () => {
    showScreen('homeScreen');
    renderHome();
  });
  
  document.getElementById('finalRetryAllBtn').addEventListener('click', () => {
    if (confirm('Retry all categories? This will reset your progress.')) {
      resetAll();
    }
  });
  
  // Keyboard shortcut: Enter to go next
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && quizScreen.classList.contains('active')) {
      if (!nextBtn.disabled) nextBtn.click();
    }
  });
  
  // ─── Initialize ──────────────────────────────────────────────────
  renderHome();
  console.log('🏆 QuizMaster Pro loaded!');
  console.log(`📚 ${CATEGORY_NAMES.length} categories, 60 questions total.`);