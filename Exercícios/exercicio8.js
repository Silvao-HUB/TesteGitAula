const prompt = require ('prompt-sync')();

const valor= parseFloat(prompt("Informe o valor  : "));

var antecessor = Number(valor - 1);
var sucessor = Number(valor + 1);

console.log ("O número antecessor é: ", antecessor);
console.log ("O número sucessor é: ", sucessor);