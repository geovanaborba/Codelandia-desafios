/* -- Animação texto -- */

var string = 'Olá, eu sou a Geovana Borba ♥';
var array = string.split('');
var timer;

function frameLooper() {
  if (array.length > 0) {
    document.getElementById('text').innerHTML += array.shift();
  } else {
    clearTimeout(timer);
  }
  loopTimer = setTimeout('frameLooper()', 120);
};
frameLooper();

/* -- Botão Voltar ao Topo -- */
var btn = document.querySelector('#back-to-top');
// função para aparecer apenas após rolar a página
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  };
};
// volta para posição 0
btn.addEventListener('click', function () {
  window.scrollTo(0, 0);
});

/* -- Botão 'ver todos os cursos' -- */
const elementsOpen = document.querySelectorAll('.open')
elementsOpen.forEach(function (open) {
  open.addEventListener('click', function () {
    open.classList.toggle('ativa')
  });
});

/* -- Dark Mode -- */
function darkMode() {
  document.body.classList.toggle('dark');
};

/* -- Download CV -- */
const cvBtn = document.querySelector('.cv');
const cvLink = './assets/img/cv.pdf';
cvBtn.setAttribute("href", cvLink);