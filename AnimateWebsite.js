window.onload = function() {
    document.getElementById('AnimatedText1').style.display = 'none';
}

function playAll() {
    document.querySelector('.container').classList.add('playing');
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
      audio.play();
    });
}

function AnimateWebsite() {
    document.getElementById('NonAnimatedText1').style.display="none"
    document.getElementById('AnimateButton').style.display="none"
}

function AnimateWebsite2() {
    document.getElementById('AnimatedText1').style.display="block"
    document.getElementById('AnimateButton').style.display="none"
}