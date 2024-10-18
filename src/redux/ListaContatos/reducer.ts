import { listaContatosActionTypes } from './listaContatosActionTypes'


const initialState = {
    contatos: [
        {
            id:1,
            nome:'Rafael',
            email:'rafael@rafael.rafael',
            telefone: '40028922'
        }
    ]
}

export const listaContatosReducer = (state = initialState, action: any) => {
    switch(action.type){
        case listaContatosActionTypes.ADD:
            return {...state, contatos: [...state.contatos, action.payload] }
        case listaContatosActionTypes.REMOVE:
            return {...state, contatos: state.contatos.filter(contato => contato.id !== action.payload)}
        case listaContatosActionTypes.EDIT:
            return {...state, contatos: state.contatos.map(contato => contato.id === action.payload.id ? action.payload : contato)}
        default:
            return state
    }
}