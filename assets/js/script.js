function menuA() {
    let menuMobol = document.querySelector('.mobol-menu');
    if (menuMobol.classList.contains('open')) {
        menuMobol.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu.svg";
    }
    else {
        menuMobol.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close.svg";
    }
}

function menuA() {
  const menu = document.querySelector(".mobol-menu");
  menu.classList.toggle("open");
}


// Fecha o menu quando clicar em um link
document.querySelectorAll(".mobol-menu a").forEach(link => {
  link.addEventListener("click", () => {
    const menuMobol = document.querySelector(".mobol-menu");
    menuMobol.classList.remove("open");
    document.querySelector('.icon').src = "assets/img/menu.svg";
  });
});


// Ano automático no rodapé
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();