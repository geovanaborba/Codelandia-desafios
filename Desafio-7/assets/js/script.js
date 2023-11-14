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