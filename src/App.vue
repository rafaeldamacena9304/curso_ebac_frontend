<script setup>
  import { reactive } from 'vue'
  
  const reativos = reactive({
    operador: 'Somar',
    numeroA: 0,
    numeroB: 0,
    resultado:null,
  })

  function calcular(){
    switch(reativos.operador){
      case 'Somar':
        reativos.resultado = parseFloat(reativos.numeroA) + parseFloat(reativos.numeroB)
        break
      case 'Subtrair':
        reativos.resultado = reativos.numeroA - reativos.numeroB
        break
      case 'Multiplicar':
        reativos.resultado = reativos.numeroA * reativos.numeroB
        break
      case 'Dividir':
        reativos.resultado = reativos.numeroA / reativos.numeroB
        break
      default:
        reativos.resultado = 'Selecione um operador válido'
    }
  }

</script>

<template>
  <div class="container">
    <h1>Calculadora Vue.JS</h1>
  <form>
    <input @keyup="evento => reativos.numeroA = evento.target.value" type="number" placeholder="Numero A">
    <select @change="evento => reativos.operador = evento.target.value" @click="calcular">
      <option value="Somar">Somar</option>
      <option value="Subtrair">Subtrair</option>
      <option value="Multiplicar">Multiplicar</option>
      <option value="Dividir">Dividir</option>
    </select>
    <input @keyup="evento => reativos.numeroB = evento.target.value" @change="calcular" type="number" placeholder="Numero B">
  </form>
  <p>O resultado final é: {{ reativos.resultado }}</p>
  </div>

</template>

<style scoped>
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:sans-serif;
  }
  h1{
    margin-bottom:24px;
    text-align:center
  }
  .container{
    max-width:1024px;
    width:100%;
    margin:0 auto;
  }
  form{
    display:flex;
    align-items: center;
    flex-direction:column;
    margin-bottom:24px;
  }
  form input{
    margin-bottom:16px;
    width:140px;
    height:24px;
    font-size:20px;
    border-radius:8px;
    border:none;
    background-color:#f0f0f0;
    padding:16px;

  }
  form select{
    margin-bottom:16px;
    width:140px;
    padding:8px;
    border-radius:8px;
    background-color:#E7E7E7;
  }
  p{
    text-align:center;
    font-size:20px;
  }

</style>
