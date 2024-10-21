import { useDispatch } from "react-redux"
import { useState } from "react"

import { AddContato } from "../../redux/ListaContatos/actions"

import * as style from "./styles"

import { FaCheck } from "react-icons/fa";





export const AddContatoComponent = () => {

    const dispatch = useDispatch()


    const [contato, setContato] = useState({
      id: Date.now(),
      nome: '',
      email: '',
      telefone: '',
    })


    function handleAddContactClick(){
      dispatch(AddContato(contato))
    }

    return(
      <style.AddContatoContainer>
      
        <style.AddContatoCampo $EstaNoEditor={false} onChange={(evento) => setContato({...contato, nome: evento.target.value })} type="text" placeholder="Nome do contato"/>
        <style.AddContatoCampo $EstaNoEditor={false} onChange={(evento) => setContato({...contato, email: evento.target.value })} type="text" placeholder="Email do contato"/>
        <style.AddContatoCampo $EstaNoEditor={false} onChange={(evento) => setContato({...contato, telefone: evento.target.value })} type="text" placeholder="Número de telefone"/>
        <div>
        <style.VoltarButton to="/">Voltar</style.VoltarButton>
        <style.SalvarButton onClick={handleAddContactClick} to="/"><FaCheck/>Salvar</style.SalvarButton>
        </div>
      </style.AddContatoContainer>
    )

}
