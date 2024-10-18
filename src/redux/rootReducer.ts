import { combineReducers } from "redux";
import { listaContatosReducer } from "./ListaContatos/reducer";

export const rootReducer = combineReducers({
    listaContatosReducer
})

export type RootState = ReturnType<typeof rootReducer>