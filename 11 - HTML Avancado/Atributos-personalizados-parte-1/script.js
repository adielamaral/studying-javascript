// let image = document.getElementById("pug");

// image.addEventListener("click", function() {

//     // image.src = "./imagens/pug2.jpg"

//     //"Pegar" um atributo
//     // let lastImage = image.getAttribute("src");
//     // console.log(lastImage);

//     image.setAttribute("src", "./imagens/pug2.jpg");

// })


let lista = document.getElementById("lista");

let num = parseInt(lista.getAttribute("num"));


let conteudo = "";

for (let i=0; i<num; i++){

    conteudo += "<li>" + i + "</li>";

}

lista.innerHTML = conteudo;