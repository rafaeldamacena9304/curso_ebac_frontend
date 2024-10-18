import { AddContatoComponent } from "../../components/AddContatoComponent"
import { ListaContatos } from "../../components/ListaContatos"
import { ActionBar } from "../../components/ActionBar"

export const AddContatoPage = () => (
    <>
        <ActionBar/>
        <AddContatoComponent/>
        <ListaContatos/>
    </>
)