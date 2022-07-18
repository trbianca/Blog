import React from 'react'
import styled from "styled-components"
import ImgGitHub from "./imagens/GITHUBPNG.png"
import ImgInsta from "./imagens/INSTPNG.png"

const CaixaPrincipal = styled.div`
    background-color: #D2691E;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

`

const CaixaRedes = styled.div`
    // background-color: brown;
    width: 20%;
    height: 50%;
    display: flex;
    margin-right: 5%;
`

const FotosRedes = styled.img`
    width: 100%;
    height: 100%;
`



export default function Footer (){
    return(
        <CaixaPrincipal>
            <CaixaRedes>
                <a href="https://github.com/trbianca"><FotosRedes src={ImgGitHub} alt="GitHub"/></a>
                <a href="https://www.instagram.com/trbianca/"><FotosRedes src={ImgInsta} alt="Instagram"/></a>
            </CaixaRedes>
        </CaixaPrincipal>
    )
}