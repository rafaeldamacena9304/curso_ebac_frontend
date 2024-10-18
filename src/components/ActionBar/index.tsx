import * as style from './styles'

import { FaPlus } from "react-icons/fa";


export const ActionBar = () => (
    <style.ActionBarContainer>
        <style.PesquisarContato type="search" placeholder="Encontrar contato"/>
        <style.AddButon to="/adicionar_contato"><FaPlus/></style.AddButon>
    </style.ActionBarContainer>
)