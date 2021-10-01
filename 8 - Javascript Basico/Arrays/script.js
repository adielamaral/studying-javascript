// PRIMEIRA E MENOS UTILIZADA FORMA DE SE CRIAR UM ARRAY:
// var alunos = new Array("Adiel", "Igor", "João", "Maria");

// console.log(alunos[3]);



// SEGUNDA FORMA DE SE CRIAR UM ARRAY:
// var alunos = ["Adiel", "Igor", "Marcos", "Maria", "Mario", "Luidy"];

// for (var i = 0; i < alunos.length; i++){
//     console.log(alunos[i]);
// }

// VARIAÇÃO DO EXEMPLO ACIMA (IN - com o "in" vai pegar o index):
// var alunos = ["Adiel", "Igor", "Marcos", "Maria", "Mario", "Luidy"];

// for (var aluno in alunos){
//     console.log(alunos[aluno]);
// }

// VARIAÇÃO DO EXEMPLO ACIMA (OF - com o "of" vai pegar o valor do index):
var alunos = ["Adiel", "Igor", "Marcos", "Maria", "Mario", "Luidy"];

for (var aluno of alunos){
    console.log(aluno);
}