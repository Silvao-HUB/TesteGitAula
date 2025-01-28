const prompt = require ('prompt-sync')();

const valor1= parseFloat(prompt("Informe o valor1 do Triângulo: "));
const valor2= parseFloat(prompt("Informe o valor2 do Triângulo: "));

const quadrado1= valor1*valor1;
const quadrado2= valor2*valor2;

const resultado1= quadrado1 + quadrado2;
const raiz= Math.sqrt(resultado1);
console.log ("A hipotenusa do seu triângulo é: ", raiz)