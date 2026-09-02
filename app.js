/**
 * ==========================================================================
 * SIMULATOR LOGIC & APPLICATION ENGINE (app.js)
 * Manejo de estados, selección múltiple, detección de respuestas faltantes,
 * temporizador y renderizado responsivo.
 * ==========================================================================
 */

// Estado global de la aplicación
const state = {
  questions: [],          // Preguntas cargadas para la sesión actual
  currentIndex: 0,        // Índice de la pregunta activa (0 a N-1)
  userAnswers: {},        // Mapa: { [questionIndex]: [selectedOptionIndices] }
  verifiedQuestions: {},  // Mapa: { [questionIndex]: evalResult } cuando el usuario da clic en "Verificar"
  mode: 'exam',           // 'exam' o 'practice'
  timeLimitMinutes: 5,    // Tiempo total configurado en minutos
  timeRemainingSeconds: 0,// Segundos restantes
  timerInterval: null,    // Referencia del setInterval
  isFinished: false,      // Flag de finalización
  theme: localStorage.getItem('simula_theme') || 'dark'
};

// Referencias del DOM
const DOM = {
  // Contenedores de Pantalla
  screenConfig: document.getElementById('screenConfig'),
  screenQuiz: document.getElementById('screenQuiz'),
  screenResults: document.getElementById('screenResults'),

  // Configuración
  selectCategory: document.getElementById('selectCategory'),
  selectQuantity: document.getElementById('selectQuantity'),
  selectTime: document.getElementById('selectTime'),
  selectShuffle: document.getElementById('selectShuffle'),
  modeOptions: document.querySelectorAll('.mode-option'),
  btnStartQuiz: document.getElementById('btnStartQuiz'),

  // Tema
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  themeIcon: document.getElementById('themeIcon'),

  // Encabezado del Quiz
  badgeCategory: document.getElementById('badgeCategory'),
  badgeType: document.getElementById('badgeType'),
  timerBox: document.getElementById('timerBox'),
  timerText: document.getElementById('timerText'),
  questionCounterText: document.getElementById('questionCounterText'),
  progressPercentText: document.getElementById('progressPercentText'),
  progressFill: document.getElementById('progressFill'),

  // Contenido de la Pregunta
  questionText: document.getElementById('questionText'),
  questionInstruction: document.getElementById('questionInstruction'),
  optionsList: document.getElementById('optionsList'),
  btnVerifyAnswer: document.getElementById('btnVerifyAnswer'),
  btnVerifyText: document.getElementById('btnVerifyText'),
  verifySpinner: document.getElementById('verifySpinner'),
  verifyIcon: document.getElementById('verifyIcon'),
  verifyHint: document.getElementById('verifyHint'),
  practiceFeedback: document.getElementById('practiceFeedback'),
  practiceFeedbackHeader: document.getElementById('practiceFeedbackHeader'),
  practiceFeedbackBody: document.getElementById('practiceFeedbackBody'),

  // Navegación
  btnPrev: document.getElementById('btnPrev'),
  btnNext: document.getElementById('btnNext'),
  btnFinishQuiz: document.getElementById('btnFinishQuiz'),
  paletteGrid: document.getElementById('paletteGrid'),
  paletteSummary: document.getElementById('paletteSummary'),

  // Resultados
  resScorePercent: document.getElementById('resScorePercent'),
  resScoreFraction: document.getElementById('resScoreFraction'),
  resTitle: document.getElementById('resTitle'),
  resFeedbackMsg: document.getElementById('resFeedbackMsg'),
  statPerfect: document.getElementById('statPerfect'),
  statPartial: document.getElementById('statPartial'),
  statWrong: document.getElementById('statWrong'),
  btnRestartQuiz: document.getElementById('btnRestartQuiz'),
  btnNewQuiz: document.getElementById('btnNewQuiz'),
  reviewList: document.getElementById('reviewList'),
  filterChips: document.querySelectorAll('.filter-tab, .filter-chip'),

  // Modal
  confirmModal: document.getElementById('confirmModal'),
  modalTitle: document.getElementById('modalTitle'),
  modalDesc: document.getElementById('modalDesc'),
  modalBtnCancel: document.getElementById('modalBtnCancel'),
  modalBtnConfirm: document.getElementById('modalBtnConfirm')
};

// ==========================================================================
// 1. INICIALIZACIÓN
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  populateCategories();
  bindEvents();
});

function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  if (DOM.themeIcon) {
    DOM.themeIcon.setAttribute('data-feather', state.theme === 'dark' ? 'sun' : 'moon');
    if (window.feather) feather.replace();
  }
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('simula_theme', state.theme);
  updateThemeIcon();
}

// Cargar categorías disponibles dinámicamente desde preguntas.js
function populateCategories() {
  if (typeof bancoPreguntas === 'undefined' || !Array.isArray(bancoPreguntas)) {
    console.error('El banco de preguntas no se encuentra cargado.');
    return;
  }

  const categories = [...new Set(bancoPreguntas.map(q => q.categoria).filter(Boolean))];
  DOM.selectCategory.innerHTML = '<option value="todas">Todas las materias (' + bancoPreguntas.length + ' preguntas)</option>';
  
  categories.forEach(cat => {
    const count = bancoPreguntas.filter(q => q.categoria === cat).length;
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = `${cat} (${count})`;
    DOM.selectCategory.appendChild(option);
  });
}

// ==========================================================================
// 2. GESTIÓN DE EVENTOS
// ==========================================================================
function bindEvents() {
  // Cambio de tema
  DOM.themeToggleBtn.addEventListener('click', toggleTheme);

  // Selector de modo (Examen vs Práctica)
  DOM.modeOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      DOM.modeOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      state.mode = opt.dataset.mode;
    });
  });

  // Iniciar Quiz
  DOM.btnStartQuiz.addEventListener('click', startQuiz);

  // Verificación dinámica AJAX
  if (DOM.btnVerifyAnswer) {
    DOM.btnVerifyAnswer.addEventListener('click', handleVerifyClick);
  }

  // Navegación en el Quiz
  DOM.btnPrev.addEventListener('click', () => navigateQuestion(-1));
  DOM.btnNext.addEventListener('click', () => navigateQuestion(1));
  DOM.btnFinishQuiz.addEventListener('click', promptFinishQuiz);

  // Modal de confirmación
  DOM.modalBtnCancel.addEventListener('click', closeModal);
  DOM.modalBtnConfirm.addEventListener('click', () => {
    closeModal();
    finishQuiz();
  });

  // Acciones en Resultados
  DOM.btnRestartQuiz.addEventListener('click', () => {
    startQuiz(); // Reinicia con la misma configuración
  });
  DOM.btnNewQuiz.addEventListener('click', () => {
    showScreen(DOM.screenConfig);
  });

  // Filtros de revisión en resultados
  DOM.filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      DOM.filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filterReviewItems(chip.dataset.filter);
    });
  });
}

// ==========================================================================
// 3. CONTROL DE PANTALLAS
// ==========================================================================
function showScreen(screenElement) {
  [DOM.screenConfig, DOM.screenQuiz, DOM.screenResults].forEach(s => s.classList.remove('active'));
  screenElement.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.feather) feather.replace();
}

// ==========================================================================
// 4. INICIO Y PREPARACIÓN DEL SIMULACRO
// ==========================================================================
function startQuiz() {
  if (typeof bancoPreguntas === 'undefined' || bancoPreguntas.length === 0) {
    alert('Tu banco de preguntas está vacío.\nPega las preguntas generadas en el archivo preguntas.js para comenzar tu simulacro.');
    return;
  }

  // Filtrar por categoría seleccionada
  const selectedCat = DOM.selectCategory.value;
  let pool = selectedCat === 'todas'
    ? [...bancoPreguntas]
    : bancoPreguntas.filter(q => q.categoria === selectedCat);

  if (pool.length === 0) {
    alert('No se encontraron preguntas en esta categoría.');
    return;
  }

  // Barajar si está activado
  const shouldShuffle = DOM.selectShuffle.value === 'yes';
  if (shouldShuffle) {
    pool = shuffleArray(pool);
  }

  // Limitar cantidad
  const qtyVal = DOM.selectQuantity.value;
  const maxQty = qtyVal === 'all' ? pool.length : Math.min(parseInt(qtyVal, 10), pool.length);
  state.questions = pool.slice(0, maxQty);

  // Reiniciar variables
  state.currentIndex = 0;
  state.userAnswers = {};
  state.verifiedQuestions = {};
  state.isFinished = false;
  state.timeLimitMinutes = parseInt(DOM.selectTime.value, 10);

  // Configurar temporizador
  clearInterval(state.timerInterval);
  if (state.timeLimitMinutes > 0) {
    state.timeRemainingSeconds = state.timeLimitMinutes * 60;
    DOM.timerBox.style.display = 'flex';
    DOM.timerBox.classList.remove('warning');
    updateTimerDisplay();
    startTimer();
  } else {
    DOM.timerBox.style.display = 'none';
  }

  // Renderizar
  renderQuestion(state.currentIndex);
  renderPalette();
  showScreen(DOM.screenQuiz);
}

function shuffleArray(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ==========================================================================
// 5. TEMPORIZADOR
// ==========================================================================
function startTimer() {
  state.timerInterval = setInterval(() => {
    state.timeRemainingSeconds--;
    updateTimerDisplay();

    // Alerta visual cuando queda poco tiempo (< 60s)
    if (state.timeRemainingSeconds <= 60 && !DOM.timerBox.classList.contains('warning')) {
      DOM.timerBox.classList.add('warning');
    }

    // Tiempo agotado
    if (state.timeRemainingSeconds <= 0) {
      clearInterval(state.timerInterval);
      alert('⏰ ¡El tiempo se ha agotado! El simulacro finalizará automáticamente.');
      finishQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(state.timeRemainingSeconds / 60);
  const secs = state.timeRemainingSeconds % 60;
  DOM.timerText.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// ==========================================================================
// 6. RENDERIZADO DE PREGUNTAS (OPCIÓN ÚNICA Y MÚLTIPLE)
// ==========================================================================
function renderQuestion(index) {
  const q = state.questions[index];
  if (!q) return;

  const total = state.questions.length;
  const isMultiple = q.tipo === 'multiple' || (Array.isArray(q.respuestasCorrectas) && q.respuestasCorrectas.length > 1);
  const requiredCount = Array.isArray(q.respuestasCorrectas) ? q.respuestasCorrectas.length : 1;

  // Actualizar metadatos de forma neutral (sin pistas de opción única o múltiple)
  DOM.badgeCategory.textContent = (q.categoria || 'General').toUpperCase();
  if (DOM.badgeType) DOM.badgeType.style.display = 'none';

  DOM.questionInstruction.className = 'editorial-instruction';
  DOM.questionInstruction.innerHTML = `
    <span class="prompt-arrow">→</span>
    <span>Marca tu(s) alternativa(s)</span>
  `;

  // Contador y Barra de Progreso
  DOM.questionCounterText.textContent = `Pregunta ${index + 1} de ${total}`;
  const percent = Math.round(((index + 1) / total) * 100);
  DOM.progressPercentText.textContent = `${percent}% completado`;
  DOM.progressFill.style.width = `${percent}%`;

  // Texto de la Pregunta
  DOM.questionText.textContent = q.pregunta;

  // Respuestas del usuario para esta pregunta
  const currentSelected = state.userAnswers[index] || [];

  // Renderizar lista de opciones (todas como cuadritos)
  DOM.optionsList.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  q.opciones.forEach((optText, optIndex) => {
    const isSelected = currentSelected.includes(optIndex);

    const optionItem = document.createElement('div');
    optionItem.className = `option-item ${isSelected ? 'selected' : ''}`;
    optionItem.setAttribute('data-index', optIndex);

    // Todos los indicadores son cuadraditos uniformes
    const indicatorHtml = `<div class="option-indicator">${isSelected ? '✓' : ''}</div>`;

    optionItem.innerHTML = `
      ${indicatorHtml}
      <div class="option-letter">${letters[optIndex] || optIndex + 1}</div>
      <div class="option-text">${escapeHtml(optText)}</div>
    `;

    // Evento de selección táctil / click libre
    optionItem.addEventListener('click', () => {
      handleOptionSelect(index, optIndex);
    });

    DOM.optionsList.appendChild(optionItem);
  });

  // Botones de navegación
  DOM.btnPrev.disabled = index === 0;
  DOM.btnNext.disabled = index === total - 1;

  // Estado del botón de verificación y retroalimentación dinámica
  if (state.verifiedQuestions[index]) {
    // Si esta pregunta ya fue verificada previamente por el usuario
    const verifiedEval = state.verifiedQuestions[index];
    displayVerificationFeedback(index, verifiedEval);
    applyVerifiedOptionStyles(index, verifiedEval);

    if (DOM.btnVerifyAnswer) {
      DOM.btnVerifyAnswer.classList.add('verified');
      DOM.btnVerifyAnswer.disabled = false;
      DOM.btnVerifyText.textContent = 'Verificado ✓ (Re-verificar)';
      DOM.verifySpinner.style.display = 'none';
      DOM.verifyIcon.style.display = 'inline-block';
    }
  } else {
    // Si aún no ha sido verificada con el botón
    DOM.practiceFeedback.style.display = 'none';

    if (DOM.btnVerifyAnswer) {
      DOM.btnVerifyAnswer.classList.remove('verified');
      DOM.btnVerifyAnswer.disabled = false;
      DOM.btnVerifyText.textContent = 'Verificar Respuesta';
      DOM.verifySpinner.style.display = 'none';
      DOM.verifyIcon.style.display = 'inline-block';
    }
  }

  updatePaletteHighlight();
  if (window.feather) feather.replace();
}

// Escapar texto HTML para seguridad
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Manejar selección de opción (Libre para todas las preguntas, sin pistas)
function handleOptionSelect(questionIndex, optionIndex) {
  let selected = state.userAnswers[questionIndex] ? [...state.userAnswers[questionIndex]] : [];

  // Toggle: Permite marcar o desmarcar libremente en cualquier pregunta
  if (selected.includes(optionIndex)) {
    selected = selected.filter(i => i !== optionIndex);
  } else {
    selected.push(optionIndex);
  }

  // Guardar o eliminar si quedó vacío
  if (selected.length > 0) {
    state.userAnswers[questionIndex] = selected;
  } else {
    delete state.userAnswers[questionIndex];
  }

  // Si el usuario modifica sus opciones, se remueve el estado de verificación
  // para que pueda volver a presionar "Verificar" y ver el nuevo resultado
  if (state.verifiedQuestions[questionIndex]) {
    delete state.verifiedQuestions[questionIndex];
  }

  // Volver a renderizar la pregunta para actualizar estilos
  renderQuestion(questionIndex);
  renderPalette();
}

// ==========================================================================
// 6.1. VERIFICACIÓN DINÁMICA CON AJAX (FETCH ASÍNCRONO)
// ==========================================================================

/**
 * Manejador del botón "Verificar Respuesta"
 * Solo muestra la retroalimentación tras presionar el botón de verificación
 */
async function handleVerifyClick() {
  const index = state.currentIndex;
  const currentQ = state.questions[index];
  const selected = state.userAnswers[index] || [];

  if (selected.length === 0) {
    alert('Por favor selecciona al menos una respuesta antes de presionar Verificar.');
    return;
  }

  // 1. Mostrar estado de carga asíncrona (AJAX en progreso)
  DOM.btnVerifyAnswer.disabled = true;
  DOM.btnVerifyText.textContent = 'Verificando con AJAX...';
  DOM.verifySpinner.style.display = 'inline-block';
  DOM.verifyIcon.style.display = 'none';

  try {
    // 2. Ejecutar petición AJAX asíncrona (Fetch)
    const evalResult = await verificarRespuestaAjax(index, selected);

    // 3. Guardar en el estado para persistencia entre navegaciones
    state.verifiedQuestions[index] = evalResult;

    // 4. Restaurar estado del botón
    DOM.btnVerifyAnswer.disabled = false;
    DOM.btnVerifyAnswer.classList.add('verified');
    DOM.btnVerifyText.textContent = 'Verificado ✓ (Re-verificar)';
    DOM.verifySpinner.style.display = 'none';
    DOM.verifyIcon.style.display = 'inline-block';

    // 5. Renderizar dinámicamente el mensaje y los estados en las opciones
    displayVerificationFeedback(index, evalResult);
    applyVerifiedOptionStyles(index, evalResult);

    if (window.feather) feather.replace();

  } catch (err) {
    console.error('Error durante la verificación AJAX:', err);
    DOM.btnVerifyAnswer.disabled = false;
    DOM.btnVerifyText.textContent = 'Error. Reintentar';
    DOM.verifySpinner.style.display = 'none';
    DOM.verifyIcon.style.display = 'inline-block';
  }
}

/**
 * Consulta asíncrona simulada o vía Fetch API a preguntas.json (AJAX)
 * Sin recarga de página (Single Page Application).
 */
async function verificarRespuestaAjax(questionIndex, selectedIndices) {
  const currentQ = state.questions[questionIndex];

  // Intento de Fetch real al archivo preguntas.json
  try {
    const res = await fetch('preguntas.json', { cache: 'no-cache' });
    if (res.ok) {
      const jsonList = await res.json();
      const serverQ = jsonList.find(q => q.id === currentQ.id);
      if (serverQ) {
        // Delay táctico de 300ms para apreciar la respuesta asíncrona AJAX
        await new Promise(resolve => setTimeout(resolve, 300));
        return evaluateQuestion(serverQ, selectedIndices);
      }
    }
  } catch (fetchError) {
    // Si el entorno local bloquea fetch (ej. protocolo file:/// sin servidor),
    // continúa con fallback asíncrono sin romper la experiencia del usuario
    console.info('Utilizando validación asíncrona local (file:///):', fetchError.message);
  }

  // Fallback asíncrono con Promise
  await new Promise(resolve => setTimeout(resolve, 300));
  return evaluateQuestion(currentQ, selectedIndices);
}

/**
 * Despliega dinámicamente la tarjeta de retroalimentación
 * destacando claramente qué opciones faltaron marcar
 */
function displayVerificationFeedback(questionIndex, evalResult) {
  const q = state.questions[questionIndex];
  DOM.practiceFeedback.style.display = 'block';
  DOM.practiceFeedback.className = `editorial-feedback-box ${evalResult.status}`;

  if (evalResult.status === 'correct') {
    DOM.practiceFeedbackHeader.innerHTML = '🎉 ¡Respuesta 100% Correcta!';
    DOM.practiceFeedbackBody.innerHTML = `
      <p>Has seleccionado exactamente las opciones requeridas.</p>
      ${q.explicacion ? `<p style="margin-top:0.4rem;"><strong>💡 Explicación:</strong> ${escapeHtml(q.explicacion)}</p>` : ''}
    `;
  } else if (evalResult.status === 'partial') {
    // CASO CLAVE: Faltaron opciones para completar la pregunta
    DOM.practiceFeedbackHeader.innerHTML = '⚠️ ¡Respuesta Incompleta! (Te faltaron opciones)';
    const missedTexts = evalResult.faltantes.map(idx => `«${escapeHtml(q.opciones[idx])}»`).join(', ');
    DOM.practiceFeedbackBody.innerHTML = `
      <p style="font-size: 0.95rem; line-height: 1.5;">
        Has marcado alternativas correctas, pero <strong>te faltó marcar: <span style="color:var(--warning); text-decoration: underline;">${missedTexts}</span></strong> para que toda la pregunta se califique como 100% correcta.
      </p>
      ${q.explicacion ? `<p style="margin-top:0.5rem;"><strong>💡 Explicación:</strong> ${escapeHtml(q.explicacion)}</p>` : ''}
    `;
  } else {
    // CASO: Incorrecta (marcó opciones erróneas)
    DOM.practiceFeedbackHeader.innerHTML = '❌ Respuesta Incorrecta';
    DOM.practiceFeedbackBody.innerHTML = `
      <p>Tu selección contiene opciones incorrectas o no seleccionaste las alternativas válidas.</p>
      ${q.explicacion ? `<p style="margin-top:0.4rem;"><strong>💡 Explicación:</strong> ${escapeHtml(q.explicacion)}</p>` : ''}
    `;
  }

  DOM.practiceFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Resalta en tiempo real las opciones directamente en la tarjeta de la pregunta:
 * - Verde para las acertadas
 * - Rojo para las erróneas
 * - Amarillo/ámbar con badge "⚠️ ¡Te faltó marcar esta!" para las correctas olvidadas
 */
function applyVerifiedOptionStyles(questionIndex, evalResult) {
  const optionElements = DOM.optionsList.querySelectorAll('.option-item');
  const q = state.questions[questionIndex];

  optionElements.forEach((el, optIdx) => {
    // Remover tags previos si existen
    const existingTag = el.querySelector('.in-card-tag');
    if (existingTag) existingTag.remove();

    el.classList.remove('verified-correct', 'verified-wrong', 'verified-missed');

    const isSelected = evalResult.seleccionadas.includes(optIdx);
    const isCorrect = evalResult.correctas.includes(optIdx);

    if (isSelected && isCorrect) {
      el.classList.add('verified-correct');
      const tag = document.createElement('span');
      tag.className = 'in-card-tag tag-correct';
      tag.textContent = '✓ Correcta';
      el.appendChild(tag);
    } else if (isSelected && !isCorrect) {
      el.classList.add('verified-wrong');
      const tag = document.createElement('span');
      tag.className = 'in-card-tag tag-wrong';
      tag.textContent = '✗ Incorrecta';
      el.appendChild(tag);
    } else if (!isSelected && isCorrect) {
      // ¡Opción que faltó marcar!
      el.classList.add('verified-missed');
      const tag = document.createElement('span');
      tag.className = 'in-card-tag tag-missed';
      tag.textContent = '⚠️ ¡Te faltó marcar esta!';
      el.appendChild(tag);
    }
  });
}

// ==========================================================================
// 7. NAVEGACIÓN Y PALETA DE PREGUNTAS
// ==========================================================================
function navigateQuestion(delta) {
  const newIndex = state.currentIndex + delta;
  if (newIndex >= 0 && newIndex < state.questions.length) {
    state.currentIndex = newIndex;
    renderQuestion(state.currentIndex);
  }
}

function renderPalette() {
  DOM.paletteGrid.innerHTML = '';
  const total = state.questions.length;
  const answeredCount = Object.keys(state.userAnswers).length;

  DOM.paletteSummary.textContent = `${answeredCount} de ${total} respondidas`;

  state.questions.forEach((_, idx) => {
    const btn = document.createElement('button');
    btn.className = 'palette-btn';
    btn.textContent = idx + 1;

    const isAnswered = state.userAnswers[idx] && state.userAnswers[idx].length > 0;
    if (isAnswered) btn.classList.add('answered');
    if (idx === state.currentIndex) btn.classList.add('current');

    btn.addEventListener('click', () => {
      state.currentIndex = idx;
      renderQuestion(idx);
    });

    DOM.paletteGrid.appendChild(btn);
  });
}

function updatePaletteHighlight() {
  const buttons = DOM.paletteGrid.querySelectorAll('.palette-btn');
  buttons.forEach((btn, idx) => {
    if (idx === state.currentIndex) {
      btn.classList.add('current');
    } else {
      btn.classList.remove('current');
    }
  });
}

// ==========================================================================
// 8. FINALIZACIÓN Y EVALUACIÓN DETALLADA (DETECCIÓN DE FALTANTES)
// ==========================================================================
function promptFinishQuiz() {
  const total = state.questions.length;
  const answeredCount = Object.keys(state.userAnswers).length;
  const unanswered = total - answeredCount;

  if (unanswered > 0) {
    DOM.modalTitle.textContent = '¿Finalizar con preguntas pendientes?';
    DOM.modalDesc.textContent = `Aún tienes ${unanswered} pregunta(s) sin responder de ${total}. ¿Deseas entregar el examen ahora?`;
  } else {
    DOM.modalTitle.textContent = '¿Finalizar Simulacro?';
    DOM.modalDesc.textContent = 'Has respondido todas las preguntas. ¿Listo para ver tus resultados y retroalimentación?';
  }

  DOM.confirmModal.classList.add('active');
}

function closeModal() {
  DOM.confirmModal.classList.remove('active');
}

/**
 * Algoritmo clave de evaluación para cada pregunta
 * Compara las respuestas seleccionadas por el usuario con las correctas
 */
function evaluateQuestion(question, selectedIndices) {
  // Asegurar formato de array
  let correctas = Array.isArray(question.respuestasCorrectas)
    ? [...question.respuestasCorrectas]
    : [question.respuestasCorrectas];

  const seleccionadas = [...selectedIndices];

  // Conjuntos:
  // Acertadas = Seleccionadas que SI están en correctas
  const acertadas = seleccionadas.filter(idx => correctas.includes(idx));
  
  // Sobrantes = Seleccionadas que NO eran correctas (errores del usuario)
  const sobrantes = seleccionadas.filter(idx => !correctas.includes(idx));
  
  // Faltantes = Correctas que el usuario OLVIDÓ seleccionar (¡Requerimiento clave!)
  const faltantes = correctas.filter(idx => !seleccionadas.includes(idx));

  let status = 'wrong'; // 'correct', 'partial', 'wrong'
  let scoreRatio = 0;   // De 0.0 a 1.0

  if (faltantes.length === 0 && sobrantes.length === 0 && acertadas.length === correctas.length) {
    // 100% Acertada: marcó todas las correctas y ninguna incorrecta
    status = 'correct';
    scoreRatio = 1.0;
  } else if (sobrantes.length === 0 && acertadas.length > 0 && faltantes.length > 0) {
    // Parcial: marcó solo buenas, pero le faltaron marcar opciones para el 100%
    status = 'partial';
    scoreRatio = acertadas.length / correctas.length;
  } else {
    // Errónea: o marcó incorrectas o no marcó nada
    status = 'wrong';
    scoreRatio = 0.0;
  }

  return {
    status,
    scoreRatio,
    acertadas,
    sobrantes,
    faltantes,
    correctas,
    seleccionadas
  };
}

function finishQuiz() {
  clearInterval(state.timerInterval);
  state.isFinished = true;

  let totalScore = 0;
  let perfectCount = 0;
  let partialCount = 0;
  let wrongCount = 0;

  const evaluationList = state.questions.map((q, idx) => {
    const selected = state.userAnswers[idx] || [];
    const evaluation = evaluateQuestion(q, selected);

    totalScore += evaluation.scoreRatio;
    if (evaluation.status === 'correct') perfectCount++;
    else if (evaluation.status === 'partial') partialCount++;
    else wrongCount++;

    return {
      question: q,
      index: idx,
      evaluation
    };
  });

  const totalQuestions = state.questions.length;
  const percentage = Math.round((totalScore / totalQuestions) * 100);

  // Actualizar UI de Estadísticas
  DOM.resScorePercent.textContent = `${percentage}%`;
  DOM.resScoreFraction.textContent = `${totalScore.toFixed(1)} / ${totalQuestions} pts`;
  DOM.statPerfect.textContent = perfectCount;
  DOM.statPartial.textContent = partialCount;
  DOM.statWrong.textContent = wrongCount;

  // Mensaje motivacional
  if (percentage >= 90) {
    DOM.resTitle.textContent = '🏆 ¡Excelente Desempeño!';
    DOM.resFeedbackMsg.textContent = 'Dominas casi todos los conceptos evaluados.';
  } else if (percentage >= 70) {
    DOM.resTitle.textContent = '👏 ¡Buen Trabajo!';
    DOM.resFeedbackMsg.textContent = 'Aprobaste el simulacro. Revisa los detalles abajo para pulir los puntos faltantes.';
  } else if (percentage >= 50) {
    DOM.resTitle.textContent = '📚 Necesitas Reforzar';
    DOM.resFeedbackMsg.textContent = 'Has obtenido puntaje regular. Analiza las respuestas que te faltaron marcar.';
  } else {
    DOM.resTitle.textContent = '💪 ¡Sigue Practicando!';
    DOM.resFeedbackMsg.textContent = 'Revisa con calma cada explicación para aprender de los errores.';
  }

  // Renderizar la lista de revisión detallada
  renderDetailedReview(evaluationList);
  showScreen(DOM.screenResults);
}

// ==========================================================================
// 9. RENDERIZADO DE LA REVISIÓN DETALLADA (CON ETIQUETAS DE RESPUESTAS FALTANTES)
// ==========================================================================
function renderDetailedReview(evaluationList) {
  DOM.reviewList.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  evaluationList.forEach(item => {
    const { question, index, evaluation } = item;
    const isMultiple = question.tipo === 'multiple' || question.respuestasCorrectas.length > 1;

    const reviewItem = document.createElement('div');
    reviewItem.className = 'review-item';
    reviewItem.setAttribute('data-status', evaluation.status === 'correct' ? 'perfect' : evaluation.status);

    // Badge de estado de la pregunta
    let statusBadgeHtml = '';
    if (evaluation.status === 'correct') {
      statusBadgeHtml = '<span class="review-status-badge perfect">✓ 100% Correcta</span>';
    } else if (evaluation.status === 'partial') {
      statusBadgeHtml = '<span class="review-status-badge partial">⚠️ Faltaron opciones</span>';
    } else {
      statusBadgeHtml = '<span class="review-status-badge wrong">✗ Incorrecta</span>';
    }

    // Renderizar cada opción con su estado preciso
    let optionsHtml = '';
    question.opciones.forEach((optText, optIdx) => {
      const isSelected = evaluation.seleccionadas.includes(optIdx);
      const isCorrect = evaluation.correctas.includes(optIdx);

      let optionClass = 'neutral';
      let tagHtml = '';

      if (isSelected && isCorrect) {
        // Marcada por el usuario y era correcta
        optionClass = 'correct-selected';
        tagHtml = '<span class="review-option-tag tag-correct">✓ Marcaste bien</span>';
      } else if (isSelected && !isCorrect) {
        // Marcada por el usuario y era INCORRECTA
        optionClass = 'wrong-selected';
        tagHtml = '<span class="review-option-tag tag-wrong">✗ Selección errónea</span>';
      } else if (!isSelected && isCorrect) {
        // NO marcada por el usuario, pero ERA CORRECTA (¡FALTÓ MARCAR!)
        optionClass = 'missed';
        tagHtml = '<span class="review-option-tag tag-missed">⚠️ ¡Te faltó marcar esta!</span>';
      } else {
        // No marcada y no era correcta
        optionClass = 'neutral';
      }

      optionsHtml += `
        <div class="review-option ${optionClass}">
          <div class="review-option-content">
            <span class="option-letter" style="width:20px;height:20px;font-size:0.75rem;">${letters[optIdx] || optIdx + 1}</span>
            <span>${escapeHtml(optText)}</span>
          </div>
          ${tagHtml}
        </div>
      `;
    });

    reviewItem.innerHTML = `
      <div class="review-item-header">
        <div>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">
            Pregunta ${index + 1} • ${escapeHtml(question.categoria || 'General')}
          </span>
          <h3 style="font-size: 1.05rem; font-weight: 700; margin-top: 0.2rem; line-height: 1.4;">
            ${escapeHtml(question.pregunta)}
          </h3>
        </div>
        ${statusBadgeHtml}
      </div>

      <div class="review-options">
        ${optionsHtml}
      </div>

      ${question.explicacion ? `
        <div class="review-explanation">
          <strong>💡 Explicación didáctica:</strong>
          <span>${escapeHtml(question.explicacion)}</span>
        </div>
      ` : ''}
    `;

    DOM.reviewList.appendChild(reviewItem);
  });
}

// Filtrar ítems de revisión
function filterReviewItems(filter) {
  const items = DOM.reviewList.querySelectorAll('.review-item');
  items.forEach(item => {
    const status = item.getAttribute('data-status');
    if (filter === 'all' || status === filter) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}
