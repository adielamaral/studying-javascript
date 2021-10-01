// function criarAluno(nome, n1, n2){

//     return{
//         nome: nome, 
//         nota1: n1, 
//         nota2: n2, 
//         media: function() {
//             return (this.nota1 + this.nota2)/2;
//         } 
//     }
// }

// NOVO OBJETO ALUNO:
function aluno(nome, n1, n2){

    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function media(){
        return (this.nota1 + this.nota2) / 2;
    }
}

// var turma = [
//     criarAluno("Adiel", 9, 6),
//     criarAluno("João", 7, 4),
//     criarAluno("Marcela", 8, 7.5)
// ]

// INSTANCIANDO UM OBJETO
var a = new aluno("Adiel", 8, 7);
var a2 = new aluno("Maria", 6, 7);

console.log(a.nome + " - " + a.media());
console.log(a2.nome + " - " + a2.media());

// for (var aluno of turma) {
//     console.log(aluno.nome + " - " + aluno.media());
// }


// MANEIRA DE "VARRER" O MEU ARRAY E MOSTRAR TODOS OS DADOS CONTIDOS NELE
// turma.forEach( function(elemento) {

//     console.log(elemento);

// })