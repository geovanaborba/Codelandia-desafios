const left = ScrollReveal({
    origin: 'left',
    distance: '80px',
    scale: 1,
    duration: 3000,
    reset: false
});
ScrollReveal().reveal('.left', { delay: 200 });

const right = ScrollReveal({
    origin: 'right',
    distance: '80px',
    scale: 0.80,
    duration: 3000,
    reset: false
});
ScrollReveal().reveal('.right', { delay: 200 });

const share = document.querySelector('img.share');
share.addEventListener('click', shareContent);

/* ----------Botão de Compartilhar ---------- */ 
function shareContent() {
    if (navigator.share) {
      navigator.share({
        title: 'Desafio 7 - Valorant',
        text: 'Confira a landing page de Valorant, criada por Geovana Borba para o desafio 7 da comunidade Codelândia no Discord.',
        url: 'https://geovanaborba.github.io/Codelandia-desafios/Desafio-7/',
      }).then(() => {
        console.log('Compartilhado com sucesso!');
      })
      .catch(console.error);
     } else {
       // fallback
       console.log('Seu sistema não suporta esse tipo de compartilhamento.');
     }
  };
