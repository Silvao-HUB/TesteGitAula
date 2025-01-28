const prompt=require('prompt-sync')();

const nota1 = parseFloat(prompt('Informe a nota 1 do aluno: '));
const nota2 = parseFloat(prompt('Informe a nota 2 do aluno: '));
const nota3 = parseFloat(prompt('Informe a nota 3 do aluno: '));
const nota4 = parseFloat(prompt('Informe a nota 4 do aluno: '));

var média = (nota1+nota2+nota3+nota4) / 4

console.log('Essa é a média do aluno: ', média)
