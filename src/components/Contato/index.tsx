import { useState } from 'react'


import * as style from './styles'
import * as style2 from '../AddContatoComponent/styles'
import { useDispatch } from 'react-redux'
import { EditarContato, RemoveContato } from '../../redux/ListaContatos/actions'

import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaBan } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";


type ContatoProps = {
    id: number,
    nome: string,
    email: string,
    telefone: string
}



export const Contato = (props: ContatoProps) => {

    const dispatch = useDispatch()

    const [isEditing, setIsEditing] = useState(false)

    const [contatoEditado, setContatoEditado] = useState({
        id: props.id,
        nome: '',
        email: '',
        telefone:'',
    })

    function handleAtualizaContato(){
        dispatch(EditarContato(contatoEditado));
        setIsEditing(false);
    }

    function handleRemoverContato(){
        dispatch(RemoveContato(props.id))
    }


    return(
        <style.ContatoContainer>
            {isEditing ? <>
            <style2.AddContatoCampo $EstaNoEditor={true} onChange={(evento) => setContatoEditado({...contatoEditado, nome: evento.target.value})}  type="text" placeholder={props.nome}/>
            <style2.AddContatoCampo $EstaNoEditor={true} onChange={(evento) => setContatoEditado({...contatoEditado, email: evento.target.value})}  type="text" placeholder={props.email}/>
            <style2.AddContatoCampo $EstaNoEditor={true} onChange={(evento) => setContatoEditado({...contatoEditado, telefone: evento.target.value})} type="text" placeholder={props.telefone}/></>
            : <> 
            <style.ContatoTitulo>{props.nome}</style.ContatoTitulo>
            <p>{props.email}</p>
            <p>{props.telefone}</p> </>
            }
        <style.ActionBar>
            {
            isEditing ? <>
            <style.SalvarButton onClick={handleAtualizaContato}><FaCheck/>Salvar</style.SalvarButton> 
            <style.BotaoRemover onClick={() => setIsEditing(false)}><FaBan/>Cancelar</style.BotaoRemover> </>
             : <>
            <style.Botao onClick={() => setIsEditing(true)}><FaEdit /> Editar</style.Botao>
            <style.BotaoRemover onClick={handleRemoverContato} ><FaRegTrashAlt/>Remover</style.BotaoRemover> </>
            }
            
        </style.ActionBar>
    </style.ContatoContainer>
    )
}