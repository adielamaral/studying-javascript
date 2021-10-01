let lista = document.getElementById("lista");

lista.dataset.num = "40";

let num = parseInt(lista.dataset.num);

let conteudo = "";

for (let i=0; i<num; i++){

    conteudo += "<li>" + i + "</li>";

}

lista.innerHTML = conteudo;