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

}
frameLooper();

/* --- */
var btn = document.querySelector('#back-to-top');
btn.addEventListener('click', function () {
  window.scrollTo(0, 0);
});

/* --- */
const elementsOpen = document.querySelectorAll('.open')
elementsOpen.forEach(function (open) {
  open.addEventListener('click', function () {
    open.classList.toggle('ativa')
  });
});