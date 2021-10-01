let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let img = new Image();
img.src = "./Imagens/image.png";

img.onload = desenharImg;

function desenharImg(){

    ctx.drawImage(this, 130, 120, this.naturalWidth, this.naturalHeight);

}