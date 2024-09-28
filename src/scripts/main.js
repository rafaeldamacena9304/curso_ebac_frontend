document.addEventListener('DOMContentLoaded', function(){
    const formulario = document.getElementById('formulario');
    const inputNome = document.getElementById('nome');
    const resultado = document.getElementById('resultado');
    const resultadoContainer = document.getElementById('resultado-container');
    
    resultadoContainer.style.display = 'none'

    formulario.addEventListener('submit', function(e){
        e.preventDefault();

        resultadoContainer.style.display = 'block';

        const resultadoFinal = inputNome.value;
        
        resultado.innerText = resultadoFinal;
    })
})