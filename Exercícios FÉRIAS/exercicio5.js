const prompt = require('prompt-sync')();

var n1 = parseFloat(prompt('Digite o primeiro número: '));
var n2 = parseFloat(prompt('Digite o segundo número: '));

var op = prompt('Agora escolha o tipo de operação desejada ("+", "-", "/", "*"): ');

switch (op){
    case "+":{
        console.log("o resultado é: ", n1+n2);
        break;
    }
    case "-": {
        console.log("O resultado é: ", n1-n2);
        break;
    }
    case "*": {
        console.log("O resultado é: ", n1*n2);
        break;
    }
    case "/":
    if (n1 === 0) {
        if (n2 === 0);
        console.log("Divisão por zero não é permitida.");
    } else {
        console.log("o resultado é: ", n1 / n2);
    }
    break;
default:
    console.log("Operação inválida.");
}