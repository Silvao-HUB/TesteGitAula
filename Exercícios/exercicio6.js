const prompt = require ('prompt-sync')();

const peso= parseFloat(prompt("Qual é seu peso em KG: "));
const altura= parseFloat(prompt("Qual é sua altura? "));

var IMC= (peso / (altura*altura)).toFixed(2);

console.log("Seu IMC é: ", IMC)