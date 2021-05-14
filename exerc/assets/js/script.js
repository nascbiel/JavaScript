const form = document.querySelector('#formulario')


form.addEventListener('submit', function (event) {
    event.preventDefault();


    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
  
    // console.log(inputPeso, inputAltura)

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    console.log(peso, altura)
    
    let armazenador = imc(peso,altura);
    console.log(armazenador);
    tabela(armazenador);
    
});

function imc (peso, altura){
    let imc 
    imc = peso / (altura * altura);
    return imc;
}

function tabela (resultado){

    let armazena;

    if(resultado <= 0){
       armazena = setResultado(`Os valores informados foram insulficientes!`);
    }
    else{

            if (resultado < 18.5){
                armazena = setResultado(`Abaixo do peso, imc: ${resultado}`);

            } else if(resultado >= 18.5 && resultado <= 24.9){
                armazena =  setResultado(`Peso Normal, imc: ${resultado}`);
            } else if(resultado >= 25 && resultado <= 29.9){
                armazena =  setResultado(`Sobrepeso, imc: ${resultado}`);
            } else if (resultado >= 30 && resultado <= 34.9){
                armazena =  setResultado(`Obesidade grau 1, imc: ${resultado}`);
            } else if (resultado >= 35 && resultado <= 39.9){
                armazena =  setResultado(`Obesidade grau 2, imc: ${resultado}`);
            } else if (resultado >= 40){
                armazena = setResultado(`Obesidade grau 3, imc: ${resultado}`);
            } 

      }

      return armazena;

}

 

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado (msg){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = msg;
    resultado.classList.add('paragrafo-resultado')
    criaP();

    /*
    const p = document.createElement('p');
    p.innerHTML = 'Qualquer coisa';
    p.classList.add('paragrafo-resultado')
    resultado.appendChild(p);
    */
}