const prompt =require('prompt-sync')();

let soma = parseFloat(prompt('Informe o primeiro número para somar: '));
let soma1 = parseFloat(prompt('Informe o segundo número para somar: '));

var resultado= (soma + soma1);
console.log('O resultado da sua conta  salva é: ', resultado)

