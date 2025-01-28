const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt('Digite o primeiro número: '));
let n2 = parseFloat(prompt('Digite o segundo número: '));
let n3 = parseFloat(prompt('Digite o terceiro número: '));

let maiorNumero;
if (n1 > n2 && n1 > n3) {
    maiorNumero = n1;
} else if (n2 > n3) {
    maiorNumero = n2;
} else {
    maiorNumero =n3;
}

let menorNumero;
if (n1 < n2 && n1 < n3) {
    menorNumero= n1;
} else if (n2 < n3) {
    menorNumero = n2;
} else {
    menorNumero =n3;
}

console.log('O maior número é: ', maiorNumero)
console.log('O menor número é: ', menorNumero)