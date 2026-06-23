// ========================================
// AIWA PLAYBOOK MATRIX V2
// Engine Principal — Atualizado V2.1
// ========================================

// ==================== DATA E HORA ====================
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const dateStr = now.toLocaleDateString('pt-BR', options);
  const timeStr = now.toLocaleTimeString('pt-BR');
  const el = document.getElementById('datetime');
  if (el) {
    el.innerHTML = `${dateStr}<br>🕒 ${timeStr} BRT`;
  }
}
updateDateTime();
setInterval(updateDateTime, 1000);

// ==================== DICAS DE CAMPO ====================
const fieldTips = [
  "Destaque o diferencial Aiwa vs JBL! Sustentação de 200W RMS reais puramente na bateria.",
  "A Aiwa oferece garantia nacional robusta e rede de suporte local via Grupo MK.",
  "O Sistema acústico de 3 Vias reais impede que as vozes fiquem abafadas pelos graves intensos.",
  "A tecnologia Bluetooth 5.3 garante estabilidade de conexão em raios de até 30 metros livres.",
  "A vedação IP66 protege o equipamento contra jatos de água pesados de mangueiras ou piscinas."
];
let currentTipIndex = 0;

function rotateTip() {
  const text = document.getElementById('tipDescText');
  if (!text) return;
  text.innerText = fieldTips[currentTipIndex];
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentTipIndex);
  });
}

const nextTipBtn = document.getElementById('nextTipBtn');
if (nextTipBtn) {
  nextTipBtn.addEventListener('click', () => {
    currentTipIndex++;
    if (currentTipIndex >= fieldTips.length) {
      currentTipIndex = 0;
    }
    rotateTip();
  });
}
rotateTip();

// ==================== NAVEGAÇÃO SPA ====================
function switchPage(pageId, pageTitle) {
  const pages = document.querySelectorAll('.app-page');
  pages.forEach(page => page.classList.remove('active-page'));
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active-page');
  }
  const title = document.getElementById('matrixPageTitle');
  if (title) {
    title.innerText = pageTitle;
  }
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => btn.classList.remove('active'));
  const activeNavId = 'nav-' + pageId.replace('page-', '');
  const activeBtn = document.getElementById(activeNavId);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  // Scroll ao topo
  window.scrollTo(0, 0);
}

function goToHome() {
  switchPage('page-home', 'Início');
}

// ==================== SUBABAS ====================
function switchSubTab(tabContentId, element) {
  const parentPage = element.closest('.app-page');
  if (!parentPage) return;
  const tabs = parentPage.querySelectorAll('.tab-btn');
  tabs.forEach(tab => tab.classList.remove('active-tab'));
  element.classList.add('active-tab');
  const contents = parentPage.querySelectorAll('.tab-content');
  contents.forEach(content => content.style.display = 'none');
  const targetContent = parentPage.querySelector('#content-' + tabContentId);
  if (targetContent) {
    targetContent.style.display = 'block';
  }
}

// ==================== FALLBACK AVATAR ====================
function fallbackAvatar(imageElement) {
  imageElement.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239ba2c4'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z'/></svg>";
}

// ==================== TEMAS ====================
const themeToggleBtn = document.getElementById('themeToggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('playbook_theme', currentTheme);
  });
}
const savedTheme = localStorage.getItem('playbook_theme');
if (savedTheme === 'light') {
  document.body.classList.add('light');
}

// ==================== CARREGADOR DE HISTÓRIAS ====================
async function loadStory(story, btn = null) {
  const container = document.getElementById("story-container");
  if (!container) {
    console.error("story-container não encontrado");
    return;
  }
  container.innerHTML = `<div class="loading-story">Carregando história...</div>`;
  try {
    const response = await fetch(`components/historias/${story}.html`);
    if (!response.ok) {
      throw new Error(`Erro ${response.status}`);
    }
    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.error(error);
    container.innerHTML = `<div class="error-box"><h3>⚠ Erro ao carregar</h3><p>Arquivo: <b>${story}.html</b></p></div>`;
  }
  document.querySelectorAll("#page-historias .tab-btn").forEach(button => {
    button.classList.remove("active-tab");
  });
  if (btn) {
    btn.classList.add("active-tab");
  }
}

// ==================== CARREGADOR DE TECNOLOGIAS ====================
async function loadTechnology(tech, btn = null) {
  const container = document.getElementById("tech-container");
  if (!container) {
    console.error("tech-container não encontrado");
    return;
  }
  container.innerHTML = `<div class="loading-story">Carregando tecnologia...</div>`;
  try {
    const response = await fetch(`components/tecnologias/${tech}.html`);
    if (!response.ok) {
      throw new Error(`Erro ${response.status}`);
    }
    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.error(error);
    container.innerHTML = `<div class="error-box"><h3>⚠ Erro ao carregar</h3><p>Arquivo: <b>${tech}.html</b></p></div>`;
  }
  document.querySelectorAll("#page-tecnologias .tab-btn").forEach(button => {
    button.classList.remove("active-tab");
  });
  if (btn) {
    btn.classList.add("active-tab");
  }
}

// ==================== CARREGADOR UNIVERSAL DE COMPONENTES ====================
async function loadComponent(targetId, file) {
  const target = document.getElementById(targetId);
  if (!target) {
    console.error("Elemento não encontrado:", targetId);
    return;
  }
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const html = await response.text();
    target.innerHTML = html;
  } catch (error) {
    console.error(error);
    target.innerHTML = `<div class="error-box"><h3>⚠ Erro</h3><p>Não foi possível carregar:</p><b>${file}</b></div>`;
  }
}

// ==================== ASSISTENTE AIWA ====================
function initAssistant() {
  const input = document.getElementById('assistant-input');
  const sendBtn = document.getElementById('assistant-send');
  const chat = document.getElementById('assistant-chat');
  const suggestions = document.querySelectorAll('.assistant-suggestion');

  if (!input || !chat) return;

  function addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `assistant-msg ${sender}`;
    div.innerHTML = `<p>${text}</p>`;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
  }

  function processQuestion(q) {
    if (!q.trim()) return;
    addMessage(q, 'user');
    // Simula digitação
    setTimeout(() => {
      const resposta = AI_ASSISTANT.responder(q);
      addMessage(resposta, 'bot');
    }, 600);
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      processQuestion(input.value);
      input.value = '';
    });
  }

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      processQuestion(input.value);
      input.value = '';
    }
  });

  suggestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.innerText;
      input.value = q;
      processQuestion(q);
      input.value = '';
    });
  });
}

// ==================== INICIALIZAÇÃO ====================
document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent('page-historias', 'components/historias.html');
  await loadComponent('page-comparativos', 'components/comparativos.html');
  await loadComponent('page-pilares', 'components/pilares.html');
  await loadComponent('page-tecnologias', 'components/tecnologias.html');
  await loadComponent('page-conclusoes', 'components/conclusoes.html');
  await loadComponent('page-sobre', 'components/sobre.html');
  await loadComponent('page-assistente', 'components/assistente.html');

  loadStory("hist1");

  // Inicializa assistente se a página for aberta
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.target.id === 'page-assistente' && mutation.target.classList.contains('active-page')) {
        initAssistant();
      }
    });
  });
  const appScreen = document.querySelector('.app-screen');
  if (appScreen) {
    observer.observe(appScreen, { childList: true, subtree: true, attributes: true });
  }
});
