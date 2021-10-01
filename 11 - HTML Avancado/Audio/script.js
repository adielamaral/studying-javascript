let audio = document.getElementById("music");

function play(){
    audio.play();
}

function pause(){
    audio.pause();
}

function stop(){
    audio.pause();
    audio.currentTime = 0;
}

function adv15(){
    audio.currentTime += 15;
}

function back15(){
    audio.currentTime -= 15;
}