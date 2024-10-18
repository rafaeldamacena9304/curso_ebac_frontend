import { Contato } from "../Contato";
import * as style from './styles'
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";


export const ListaContatos = () => {

    const { contatos } = useSelector((state: RootState) => state.listaContatosReducer)

    return (
    <style.ListaContatos>
        {contatos.map((contato)  => (
            <style.ListaItem key={contato.id}>
                <Contato id={contato.id}
                    nome={contato.nome}
                    email={contato.email}
                    telefone={contato.telefone}
                />
            </style.ListaItem>
        ))}
    </style.ListaContatos>
    )
}