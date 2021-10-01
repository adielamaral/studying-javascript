// Como identificar um Objeto: É possível identificar um Objeto pelas 'Chaves' {}
// Como identificar um Array: É possível identificar um Array pelos 'Colchetes' []

// Como criar um Objeto (maneira mais simples):
// var a = {
//     nome: "Adiel",
//     sobrenome: "Amaral"
// }

// console.log(a);



// Segunda maneira de se criar um Obejto:
// function obj(name, lastname){

//     return{ nome: name, sobrenome: lastname }

// }

// var a = obj("Adiel", "Amaral")

// console.log(a);



// Terceira maneira de se criar um Objeto:
function obj(n, s) {
    
    // .this - Significa "ela mesmo" que representa aquela instância
    this.nome = n;
    this.sobrenome = s;

}

// Instanciando o objeto do tipo (obj) - 'new' 
var a = new obj("Adiel", "Amaral");

console.log(a);