// MOSTRANDO A DATA DE HOJE:
// var d = new Date();

// console.log(d);



// CRIANDO UMA DATA ESPECÍFICA:
// var d = new Date(year, month, day, hours, minutes, seconds, miliseconds);
// var d = new Date(2021, 01, 12, 22, 45);

// console.log(d);


// OUTRA MANEIRA DE CRIAR UMA DATA:
// Quando passamos apenas 1 elemento para o 'Date' ele conta os milisegundos do horário (a partir de 1969).
// var d = new Date(86400000);

// console.log(d);



// OUTRA MANEIRA DE CRIAR UMA DATA:
// Passar os dados por String
// var d = new Date("02 05 2017 23:25");
// var d = new Date("05/25/1999");

// console.log(d);


// 'BRINCANDO' COM AS MANEIRAS DE SE CRIAR UMA DATA:
var d = new Date(15454845);

// var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

console.log(d);
// O get.Day mostra o dia da semana.
console.log(d.getHours());