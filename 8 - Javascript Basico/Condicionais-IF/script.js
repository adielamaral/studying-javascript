var idade = 18;

if (idade >= 18 && idade < 19) {
    console.log("Pode!");
    var id = prompt("Digite o número da sua identidade (é necessário mostrar seu documento para o vendededor)");
    var pedido = prompt("Qual o seu pedido?");
    console.log(id);
    console.log(pedido);
}
else if (idade > 19 && idade < 70) {
    console.log("Pode!");
    var pedido = prompt("Qual o seu pedido?");
    console.log(pedido);
}
else {
    console.log("Não pode!");
    alert("Volte futuramente.");
}