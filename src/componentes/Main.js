import React from 'react'
import styled from "styled-components"
import Img from "./imagens/BiancaTrindade.jpg"

const CaixaPrincipal = styled.div`
    background-color: #FFDEAD;
    width: 100%;
    height: 600px;
`

const CaixaEnquadradora = styled.div`
    width: 80%;
    height: 600px;
    margin: auto;
    // background-color: white;
    display: flex;
    justify-content: space-between;
    padding-top: 5%;
`


const CaixaFoto = styled.div`
    width: 30%;
    height: 50%;
    display: flex;
    // background-color: black;
`
const Foto = styled.img`
    border-radius: 50%;
`

const CaixaSobre = styled.div`
    // background-color:#F5DEB3;
    width: 40%;
    height: 50%;
    display: flex;
    align-items: center;
    color: #8B4513;
`

const ParagrafoSobre = styled.p`
    font-size: 1.3em;
`


export default function Main (){
    return(
        <CaixaPrincipal>
            <CaixaEnquadradora>
                <CaixaFoto>
                    <Foto src={Img} alt="BiancaTrindade"/>
                </CaixaFoto>

                <CaixaSobre>
                    <ParagrafoSobre>Olá, meu nome é Bianca Trindade, tenho 22 anos e sou estudante de Front-End pelo Vai
                        na Web e de Comunicação Social pela Universidade Federal do Rio de Janeiro.
                        Sou apaixonada por fazer trocas, acredito que a comunicação seja
                        umas das bases necessárias para se entender em meio sociedade.
                        E para isso uso da tecnologia e do audiovisual como 
                        instrumento para realizar as minhas trocas, as minhas colaborações
                        para uma sociedade melhor.

                    </ParagrafoSobre>
                </CaixaSobre>
            </CaixaEnquadradora>
        </CaixaPrincipal>
    )
}