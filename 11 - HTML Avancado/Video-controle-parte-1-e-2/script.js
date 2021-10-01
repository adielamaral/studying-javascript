let video = document.getElementById("video1");

function play(){
    video.play();
}

function stop(){
    video.pause();
    video.currentTime = 0;
}

function pause(){
    video.pause();
}

function avancar(){
    video.currentTime += 15;
    // ou // video.currentTime = video.currentTime + 15;
}

function voltar(){
    video.currentTime -= 15;
    // ou // video.currentTime = video.currentTime - 15;
}

function aumentarVel(){
    video.playbackRate += 0.1;
}

function diminuirVel(){
    video.playbackRate -= 0.1;
}

function fullscreen(){
    video.requestFullscreen();
}