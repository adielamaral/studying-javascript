function loaded(){

    let t = document.getElementById("titulo")

    // t.onclick = mudarText;

    t.addEventListener("mouseover", mudarText)
    t.addEventListener("mouseout", mouseOut)
}

function mudarText(){
    this.innerHTML = "Novo Texto";
}

function mouseOut(){
    this.innerHTML = "Mouse fora do elemento"
}