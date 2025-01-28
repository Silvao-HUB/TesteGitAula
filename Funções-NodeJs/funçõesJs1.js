const prompt = require('prompt-sync')();

var numeros = [];

function obterNumero(indice) {
  while (true) {
    let numero = parseInt(prompt('Digite o ' + (indice + 1) + '° numero: '));
    if (!isNaN(numero)) {
      return numero;
    } else {
      console.log("Por favor, digite um número válido.");
    }
  }
}

for (let i = 0; i < 20; i++) {
  let numero = obterNumero(i);
  numeros.push(numero);
}

let posicoesDez = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 10) {
    posicoesDez.push(i);
  }
}

if (posicoesDez.length > 0) {
  console.log("Os números 10 foram encontrados nas seguintes posições:", posicoesDez);
} else {
  console.log("Nenhum número 10 foi encontrado.");
}