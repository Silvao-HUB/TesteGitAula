const prompt = require('prompt-sync')();

let vetVetor = [];
let continuar = true;

while (continuar) {
    let numero = prompt('Digite os números que deseja somar, logo após, digite SAIR: ');
    if (!isNaN(numero)) {
        vetVetor.push(parseFloat(numero));
    } else if (numero.toLowerCase() === "sair") {
        continuar = false;
    } else {
        console.log("Entrada inválida. Por favor, digite um número ou 'sair'.");
    }
}

let soma = 0;
for (let i = 0; i < vetVetor.length; i++) {
    soma += vetVetor[i];
}

console.log("A soma dos números é:", soma);














