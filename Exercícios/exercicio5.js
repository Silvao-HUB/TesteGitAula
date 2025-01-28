const prompt = require ('prompt-sync')();

const horasnormais= parseFloat(prompt("Quantas horas normais você trabalhou? "));
const horasextras= parseFloat(prompt("Quantas horas extras você fez? "));

var valorhora= 10;
var valorextra= 15;
var descontoImposto= 0.1

// calculo salário bruto
const salariobruto= (horasnormais*valorhora) + (horasextras*valorextra)
// calculo desconto
const desconto= (salariobruto*descontoImposto)
// calculo salário liquido
const salarioliquido= (salariobruto-desconto)

console.log("Seu salário bruto é: R$", salariobruto);
console.log ("Seu salário liquido é: R$", salarioliquido)