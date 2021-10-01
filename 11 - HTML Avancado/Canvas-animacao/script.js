let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");



let circle = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 0,
    antiHor: false,
}

function drawCircle(circle){

    ctx.beginPath();
    ctx.rect(0, 0, 500, 500);
    ctx.fillStyle = "beige";
    ctx.fill();


    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";

    ctx.arc(circle.x, circle.y, circle.raio, circle.inicio, circle.fim, circle.antiHor);

    ctx.fill();
    ctx.stroke();
}

setInterval(function() {

    if (circle.fim < 2 * Math.PI){
        circle.fim += 0.3;
        circle.x += 3;
    }

    drawCircle(circle);


}, 100);