const prompt = require ('prompt-sync')();

const nota2 = parseFloat(prompt ("Quantas notas de 2 reais você possui? "))
const nota5 = parseFloat(prompt ("Quantas notas de 5 reais você possui? "))
const nota10 = parseFloat(prompt ("Quantas notas de 10 reais você possui? "))
const nota20 = parseFloat(prompt ("Quantas notas de 20 reais você possui? "))
const nota50 = parseFloat(prompt ("Quantas notas de 50 reais você possui? "))
const nota100 = parseFloat(prompt ("Quantas notas de 100 reais você possui? "))
const nota200 = parseFloat(prompt ("Quantas notas de 200 reais você possui? "))

const valortotal2= nota2 * 2
const valortotal5= nota5 * 5
const valortotal10= nota10 * 10
const valortotal20= nota20 * 20
const valortotal50= nota50 * 50
const valortotal100= nota100 * 100
const valortotal200 = nota200 * 200

const valortotal= valortotal2 + valortotal5 + valortotal10 + valortotal20 + valortotal50 + valortotal100 + valortotal200
console.log("O valor total do seu montante é: ", valortotal, "reais")
