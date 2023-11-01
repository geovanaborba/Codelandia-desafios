const btnMore = document.getElementById('more');
const btnLess = document.getElementById ('less');
const infos = document.querySelector('.infos');

function more() {
    infos.style.display = 'block';
    btnMore.style.display = 'none';
    btnLess.style.display = 'block';
    btnLess.style.textAlign = 'center';
};

function less() {
    infos.style.display = 'none';
    btnLess.style.display = 'none';
    btnMore.style.display = 'block';
};