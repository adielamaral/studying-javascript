// Carne - 400 g por pessoa + de 6 horas 650
// Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// Refrigerante/água - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando...");

    let qtdAdultos = inputAdultos.value;
    let qtdCriancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePorPessoa(duracao) * qtdAdultos  + (carnePorPessoa(duracao) / 2 * qtdCriancas);
    let qtdTotalCerveja = cervejaPorPessoa(duracao) * qtdAdultos;
    let qtdTotalBebidas = bebidasPorPessoa(duracao) * qtdAdultos  + (bebidasPorPessoa(duracao) / 2 * qtdCriancas);
    
    resultado.innerHTML = `<p>${qtdTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} Pet's 2L de Bebida</p>`

}

function carnePorPessoa(duracao){
    if(duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}

function cervejaPorPessoa(duracao){
    if(duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPorPessoa(duracao){
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}    