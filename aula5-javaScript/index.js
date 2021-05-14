
let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

let apoio = varA;

varA = varB;
varB = varC;
varC = apoio;

console.log(varA , varB, varC)