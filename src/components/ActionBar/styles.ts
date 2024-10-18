import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ActionBarContainer = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    margin-bottom:16px;
`

export const PesquisarContato = styled.input`
    height:40px;
    border-radius:8px;
    border:none;
    border:1px solid gray;
    width:90%;
    font-size:20px;
    padding-left:8px;
    margin-right:8px;
`

export const AddButon = styled(Link)`
    padding:8px 16px;
    margin-right:8px;
    border:none;
    background-color:green ;
    color:white;
    font-size:18px;
    border-radius:8px;
    font-weight:bold;
    width:10%;
    cursor:pointer;
    text-decoration:none;
    display:flex;
    align-items: center;
    justify-content: center;
`
