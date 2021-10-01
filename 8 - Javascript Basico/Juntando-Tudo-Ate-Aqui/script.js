
// Nome do aluno - nota 1 - nota 2- média - Aprovado/Reprovado


var nomes = ["Adiel", "Igor", "Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

// Calcula a Média
function media(n1, n2){
    return (n1 + n2) / 2;
}

// Calcula o resultado
function passou(media){
    if(media > 7){
        return "Aprovado";
    }
    else{
        return "Reprovado";
    }
}

// Apresenta o Relatório
for(var index in nomes){

    var nota1 = notasA[index];
    var nota2 = notasB[index];

    var m = media(nota1, nota2);

    console.log(nomes[index] + " - " + nota1 + " - " + nota2 + " - " + m + " - " + passou(m));
}