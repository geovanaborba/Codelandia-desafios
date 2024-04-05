// left 
const left = ScrollReveal({
    origin: 'left',
    distance: '250px',
    duration: 2000,
    reset: true,
    delay: 200 
});
ScrollReveal().reveal('.describe p');
ScrollReveal().reveal('.describe ul');
ScrollReveal().reveal('.btn-describe');
ScrollReveal().reveal('.img-pt1');
ScrollReveal().reveal('.img-pt2', {origin: 'right'});

// right (feito com a classe diretamente, pois só usei uma)
ScrollReveal().reveal('.photo', {
    origin: 'right',
    distance: '80px',
    scale: 0.80,
    duration: 2500,
    reset: true,
    delay: 200,
});

// bottom (mais de uma classe para os mesmos efeitos da const)
const bottom = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    reset: true,
    delay: 200,
    opacity: 0.4,
    scale: 1,
});
ScrollReveal().reveal('.contacts-container');
ScrollReveal().reveal('.certificates-container');
ScrollReveal().reveal('.services-container');
ScrollReveal().reveal('#skills i');