import styled from "styled-components";

export const ContatoContainer = styled.div`
    padding:24px;
    border:1px solid gray;
    border-radius:16px;
`
export const ContatoTitulo = styled.p`
    font-size:22px;
    font-weight:bold;
    margin-bottom:8px;
`
export const ActionBar = styled.div`
    display:flex;
    align-items:center;
    justify-content:end;
    margin-top:8px;
`
export const Botao = styled.button`
    padding:8px 16px;
    margin-right:8px;
    border:none;
    background-color:#222;
    color:white;
    font-size:18px;
    border-radius:8px;
    font-weight:bold;
    cursor:pointer;
    display:flex;
    align-items: center;
`
export const BotaoRemover = styled(Botao)`
    background-color:red;
`
export const SalvarButton = styled(Botao)`
    background-color:green;
`