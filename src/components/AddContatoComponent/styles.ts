import { Link } from "react-router-dom";
import styled from "styled-components";


export const AddContatoContainer = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;

    div{
        display:flex;
        align-items: center;
        
    }
`

export const VoltarButton = styled(Link)`
    padding:8px 16px;
    margin-right:8px;
    border:none;
    background-color:#222 ;
    color:white;
    font-size:18px;
    border-radius:8px;
    font-weight:bold;
    width:50%;
    cursor:pointer;
    text-decoration:none;
    margin-bottom:16px;
`

export const SalvarButton = styled(Link)`
    padding:8px 16px;
    margin-right:8px;
    border:none;
    background-color:green ;
    color:white;
    font-size:18px;
    border-radius:8px;
    font-weight:bold;
    width:50%;
    cursor:pointer;
    text-decoration:none;
    margin-bottom:16px;
    display:flex;
    align-items:center;
`

export const AddContatoCampo = styled.input<{$EstaNoEditor: boolean}>`
    height:${$EstaNoEditor => $EstaNoEditor ? '30px' : '40px'  };
    border:none;
    border:1px solid gray;
    width:100%;
    border-radius:8px;
    margin-bottom:${$EstaNoEditor => $EstaNoEditor ? '4px' : '16px'  };
    padding-left:8px 16px;
    font-size:18px;
`