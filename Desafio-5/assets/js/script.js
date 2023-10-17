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