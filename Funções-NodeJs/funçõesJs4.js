const prompt = require('prompt-sync')();
let alturas = [];
let pesos = [];

for (let i = 0; i < 15; i++) {
  let numero;
  do {
    numero = parseFloat(prompt('Digite a ALTURA do ' + (i + 1) + ' ° aluno: '));
    if (isNaN(numero)) {
      console.log('Isso não é um número, repita o processo!');
    }
  } while (isNaN(numero));

  alturas.push(numero);
}

for (let i = 0; i < 15; i++) {
  let numero1;
  do {
    numero1 = parseFloat(prompt('Digite o PESO do ' + (i + 1) + '° aluno: '));
    if (isNaN(numero1)) {
      console.log('Isso não é um número, repita o processo!');
    }
  } while (isNaN(numero1));
  pesos.push(numero1);
}

const somaAlturas = alturas.reduce((total, altura) => total + altura, 0);
const somaPesos = pesos.reduce((total, peso) => total + peso, 0);
const alunoMaisAlto = alturas.reduce((maior, altura, indice) => {
  if (altura > maior.altura) {
    return { altura, indice };
  }
  return maior;
}, { altura: 0, indice: -1 });


const mediaAltura = somaAlturas / alturas.length;
const mediaPeso = somaPesos / pesos.length;

console.log('A média da altura dos alunos é:', mediaAltura.toFixed(2) + 'm.');
console.log('A média do peso dos alunos é:', mediaPeso.toFixed(2) + 'kg');
console.log(`O ${alunoMaisAlto.indice + 1}º aluno é o mais alto, com ${alunoMaisAlto.altura}m.`)
