// EXEMPLO 1
// var aluno = {
//     nome: "Adiel", 
//     notas: [7, 8], 

//     // CRIANDO UM MÉTODO DO OBJETO:
//     media: function(n1, n2){
//         return (n1+n2) / 2;
//     }
// };

// var aluno1 = {
//     nome: "João", 
//     notas: [6, 8], 

//     // CRIANDO UM MÉTODO DO OBJETO:
//     media: function(n1, n2){
//         return (n1+n2) / 2;
//     }
// };

// // IMPRIMINDO DADOS DO ALUNO
// console.log(aluno.nome);
// console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

// // IMPRIMINDO DADOS DO ALUNO1
// console.log(aluno1.nome);
// console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));


// EXEMPLO 2:
// Função
// function calcMedia(n1, n2){
//     return (n1 + n2) / 2;
// };

// var aluno = {
//     nome: "Adiel", 
//     notas: [7, 8], 

//     // Chamando a função 'media' no Objeto
//     media: calcMedia
    
// };

// var aluno1 = {
//     nome:"João", 
//     notas:[6, 8], 

//     media: calcMedia
// };

// // IMPRIMINDO DADOS DO ALUNO
// console.log(aluno.nome);
// console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

// // IMPRIMINDO DADOS DO ALUNO1
// console.log(aluno1.nome);
// console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));


// MELHORANDO O EXEMPLO 2 (utlizando .this):
function calcMedia (){
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome: "Adiel", 
    notas: [8, 8], 

    media: calcMedia
};

var aluno1 = {
    nome:"João", 
    notas:[6, 6], 

    media: calcMedia
};

// IMPRIMINDO DADOS DO ALUNO
console.log(aluno.nome);
console.log(aluno.media());

// IMPRIMINDO DADOS DO ALUNO1
console.log(aluno1.nome);
console.log(aluno1.media());