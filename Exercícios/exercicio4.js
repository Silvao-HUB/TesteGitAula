const prompt = require ('prompt-sync')();

const nota1 = parseFloat(prompt("Qual a nota1 do aluno: "));
const nota2 = parseFloat(prompt("Qual a nota2 do aluno? "));
const nota3= parseFloat(prompt("Qual a nota3 do aluno? "));

var peso1= 1;
var peso2= 2;
var peso3= 3;

const médiaPonderada= nota1*peso1 + nota2*peso2 + nota3*peso3 / 1 + 2 + 3
console.log("A média do aluno é: ",+médiaPonderada, "Parabéns!")