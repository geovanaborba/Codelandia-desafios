const chk = document.getElementById('chk');
const right = document.getElementById('col-right');
const left = document.getElementById('col-left');

chk.addEventListener('change', () => {
    right.classList.toggle('dark');
    left.classList.toggle('dark');
});