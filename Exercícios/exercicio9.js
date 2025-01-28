const prompt = require ('prompt-sync')();

const cotação= parseFloat(prompt("Informe o valor do dólar hoje: "));
const valordólar= parseFloat(prompt("Quantos dólares você possui: "));

var conversão= Number(valordólar*cotação).toFixed(2);
console.log ("O valor que você possui em reais é de: ", conversão, "Reais")