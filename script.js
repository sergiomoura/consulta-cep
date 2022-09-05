// Capturar os inputs
const inputCep = document.getElementById("cep");
const inputLogradouro = document.getElementById("logradouro");
const inputCidade = document.getElementById("cidade");
const inputEstado = document.getElementById("estado");

// Criar a função onCepKeyup
function onCepKeyup(evt){
    
    // Capturar o cep digitado
    let cepDigitado = inputCep.value;

    // Testar se cep digitado tem tamanho 8
    if(cepDigitado.length == 8){

        // Se sim, executar a função consultaCep
        consultaCep(cepDigitado);

    }

}

// Criando a função consultaCep
function consultaCep(cep){
    console.log(cep);
}

// Associar ao input do CEP o keypress.
// Toda vez que uma tecla for pressionada executar onCepKeyup
inputCep.addEventListener("keyup", onCepKeyup);

// Criar a função onCepKeyup:
// Verificar se o tamanho do texto digitado é igual a 8.
// Caso seja, executar a função consultaCep(cep).