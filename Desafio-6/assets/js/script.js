/* Card de Informações do layout mobile */
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

/* Modal de Trailer */ 
const btnTrailer = document.querySelector('.trailer');
const modal = document.querySelector('.modal-bg');

btnTrailer.addEventListener('click', () => {
    modal.innerHTML = `
    <div class="modal">
    <iframe src="https://www.youtube.com/embed/nW948Va-l10?si=Ynyv3ahEhIj_IHk9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    `;

    modal.style.display = "flex";
    setTimeout( () => {
        modal.style.opacity = "1";
    }, 50);
});

    modal.addEventListener('click', () => {
        modal.innerHTML = '';
        modal.style.opacity = "0";
        setTimeout( () => {
            modal.style.display = "none";
        }, 450);
    });