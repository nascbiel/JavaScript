
const nome = "Gabriel";
const sobrenome = "Sérgio Nascimento";
const idade = 18;
const peso = 100;
const altura = 1.83;

let imc = peso / (altura*altura);
let anoNascimento = 2021 - idade

console.log(nome, sobrenome, " tem ", idade, " anos, pesa ", peso, " kg e tem a altura ", altura)
console.log("seu imc é de: ", imc);
console.log(nome,"Nasceu em: ", anoNascimento)


window.confirm("Deseja realmente apagar?")
window.prompt("Qual seu nome?")
