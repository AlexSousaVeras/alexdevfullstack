// Menu sanduíche (hambúrguer)
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger?.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', opened ? 'true' : 'false');
});

// Ano automático no rodapé
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();