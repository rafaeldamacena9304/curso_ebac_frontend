const formulario = document.querySelector('.formulario')
const numeroA = document.querySelector('.numero-a')
const numeroB = document.querySelector('.numero-b')
const successMessage = document.querySelector('.mensagem-sucesso')
const errorMessage = document.querySelector('.mensagem-erro')

function verificarNumeros(){
    const valorA = numeroA.value;
    const valorB = numeroB.value;
    if(valorB > valorA){ 
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
    }
    else{
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    verificarNumeros()
})
function esconderMensagens(){
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
}
numeroA.addEventListener('input', esconderMensagens);
numeroB.addEventListener('input', esconderMensagens);



