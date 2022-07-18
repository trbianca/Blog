import React from 'react'
import styled from "styled-components"


const CaixaPrincipal = styled.div`
    background-color: #D2691E;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
` 

const CaixaH1 = styled.div`
    width: 20%;
    height: 60%;
    color:#FFDEAD;
    display: flex;
    align-items: center;
    margin-left: 5%;
`
const CaixaBlog = styled.div`
    width: 40%;
    height: 60%;
    color:#FFDEAD;
    display flex;
    align-items: center;
    margin-right: 5%;
`
const TextoA = styled.a`
    text-decoration: none;
    color: #FFDEAD;
`


export default function Header (){
    return(
        <CaixaPrincipal>
            <CaixaH1>
                <h1>Bianca Trindade</h1>
            </CaixaH1>

            <CaixaBlog>
                <TextoA href=""><p>Os Objetivos de Desenvolvimento na cidade de Queimados</p></TextoA>
            </CaixaBlog>
        </CaixaPrincipal>
    )
}