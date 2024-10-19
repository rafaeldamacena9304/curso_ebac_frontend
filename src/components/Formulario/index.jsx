import { useState } from "react";
import styles from './Formulario.module.css'

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [IMC, setIMC] = useState(0)
    const [classificacao, setClassificacao] = useState('')

    const calcularIMC = (evento) => {
        evento.preventDefault();
        const alturaEmMetros = altura / 100
        const resultado = peso / (alturaEmMetros * alturaEmMetros);
        setIMC(Math.round(resultado))
        classificarIMC(Math.round(resultado))
    }

    const classificarIMC = (IMC) => {
        switch(true){
            case IMC < 18.5:
                setClassificacao('Você está abaixo do peso');
                break
            case IMC >= 18.5 && IMC < 24.9:
                setClassificacao('Você está com o peso normal');
                break
            case IMC >= 25 && IMC < 29.9:
                setClassificacao('Você está acima do peso');
                break
            case IMC >= 30 && IMC < 34.9:
                setClassificacao('Você está obeso (Grau 1)');
            case IMC >= 35 && IMC < 39.9:
                setClassificacao('Você está obeso (Grau 2)');
                break
            default:
                setClassificacao('Você está obeso (Grau 3)')
        }
    }

    return(
        <form className={styles.formulario}>
            <input required className={styles.input} onChange={ evento => setPeso(evento.target.value) } type="number" placeholder="Peso (kg)" />
            <input required className={styles.input} onChange={ evento => setAltura(evento.target.value) } type="number" placeholder="Altura (cm)" />
            <button className={styles.button} onClick={calcularIMC}>Calcular</button>
            
            {IMC > 0 && (
                <p><b>Seu IMC é de:</b> {IMC}</p>
            )}

            {classificacao != '' && (
                <p><b>Classificação:</b> {classificacao}</p>
            )}
            
        </form>
    )
}

export default Formulario;