import { listaContatosActionTypes } from "./listaContatosActionTypes"

export const AddContato = (payload: any) => ({
    type: listaContatosActionTypes.ADD,
    payload: payload
})

export const RemoveContato = (payload: any) => ({
    type: listaContatosActionTypes.REMOVE,
    payload: payload
})

export const EditarContato = (payload: any) => ({
    type:listaContatosActionTypes.EDIT,
    payload:payload
})