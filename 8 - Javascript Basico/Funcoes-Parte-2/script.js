// function media (n1, n2) {
//     var nota1 = n1;
//     var nota2= n2;
//     var media =  (nota1 + nota2) / 2;

//     return media;
// }

// var resultado = media(6, 7);
// var m = media;

// var resultado2 = m(2, 3);

// console.log(resultado);
// console.log(resultado2);



// BASEADO NO EXEMPLO ACIMA, VAMOS CRIAR ABAIXO UMA "FUNÇÃO ANÔNIMA":
var media = function(n1, n2){
    
    return(n1 + n2) / 2;
}

console.log(media(5, 6));