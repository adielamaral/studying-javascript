// É uma variável global
var numero1 = 4;

// A diferença do 'var' para o 'let' é que o 'var' cria uma variável global (que pode ser acessada em qualquer parte), já o 'let' só pode ser acessado dentro do mesmo 'escopo' ou do mesmo bloco.
let numero2 = 5;
// Exemplo:
// {
//     let numero2 = 5;
//     console.log(numero2);
// }

// O const é uma constante, então uma vez que foi atribuído um valor a ele, você não pode atribuir mais nada. Também SÓ pode ser acessada dentro do mesmo escopo ou do mesmo bloco.
const numero3 = 6;

numero2 = 7;

console.log(numero1);
console.log(numero2);
console.log(numero3);