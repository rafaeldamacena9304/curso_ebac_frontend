import { useState } from 'react'
import Formulario from './components/Formulario'


function App() {

  return (
    <div className="container">
      <h1 className='tituloPrincipal'>Calcular IMC</h1>
      <h3 className='subTitulo'>Preencha os campos abaixo para calcular seu IMC</h3>
      <Formulario></Formulario>

      <p className="observacao">
        Observação: os cálculos feitos neste site tem como objetivo o aprendizado,
        não significando o estado verdadeiro do indivíduo, sendo necessário uma avaliação
        do todo: como idade, gênero, condições de saúde e físicas. Para uma versão apurada,
        procure um Nutricionista.
      </p>
    </div>
  )
}

export default App
