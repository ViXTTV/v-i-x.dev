function playAll() {
    document.querySelector('.container').classList.add('playing');
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
      audio.play();
    });
}

function Sanz() {
    document.getElementById('sanz').style.display="none"
    document.getElementById('sanz_dans').style.display="block"
}
