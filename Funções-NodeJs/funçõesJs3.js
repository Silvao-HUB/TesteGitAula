const prompt = require('prompt-sync')();

let vetVetor = [];
let contagem = {};

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
  vetVetor.push(numero);
}

vetVetor.forEach(numero => {
  contagem[numero] = (contagem[numero] || 0) + 1;
});

const repetidos = [];
for (const numero in contagem) {
  if (contagem[numero] > 1) {
    repetidos.push(numero);
  }
}


if (repetidos.length === 0) {
  console.log("Não há números repetidos.");
} else {
  console.log("Números repetidos:", repetidos);
}