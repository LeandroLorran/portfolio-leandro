console.log("Portfólio de Leandro carregado");

// Animação suave ao clicar no menu
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute('href'));
    alvo.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.background = "#222";
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = "#1a1a1a";
  });
});

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});
