const prompt = require ('prompt-sync')();

let numero= parseFloat(prompt('Informe o número: '));

if (numero % 2 === 0) {
console.log('O número é par')
} else{
    console.log('O número é ímpar');
}