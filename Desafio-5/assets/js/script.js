const songOn = document.getElementById('song-on');
const songOff = document.getElementById('song-off');
const music = document.getElementById('audio');

function playAudio() {
    music.play();
    songOn.style.display = 'none';
    songOff.style.display = 'block';
}

function pauseAudio() {
    music.pause();
    songOn.style.display = 'block';
    songOff.style.display = 'none';
}

const btnPlay = document.getElementById('play');
const btnTrailer = document.getElementById('trailer');

function changeTrailer() {
    btnTrailer.style.backgroundColor = '#628E75';
    btnTrailer.style.color = '#fff';
    btnTrailer.style.border = 'none';

    btnPlay.style.backgroundColor = 'transparent';
    btnPlay.style.color = '#fff';
    btnPlay.style.border = '2px solid #628E75';
}

function backTrailer() {
    btnTrailer.style.backgroundColor = 'transparent';
    btnTrailer.style.color = '#fff';
    btnTrailer.style.border = '2px solid #628E75';

    btnPlay.style.backgroundColor = '#628E75';
    btnPlay.style.color = '#fff';
    btnPlay.style.border = 'none'; 
}