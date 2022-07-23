import React from 'react'
import { createGlobalStyle} from "styled-components"
import styled from "styled-components"
import Header from "./componentes/Header"
import Main from "./componentes/Main"
import Footer from "./componentes/Footer"
// import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
// import Portf from "./componentes/Portfolio"

const GlovalStyle = createGlobalStyle`
*{
  marin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

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

const CaixaEngloba = styled.div`
  // background-color: black;
  width: 100%;
  height: 800px;
`

export default function App(){
  return(
    <CaixaEngloba>
              {/* <CaixaPrincipal>
            <CaixaH1>
                <h1>Bianca Trindade</h1>
            </CaixaH1>

            <CaixaBlog>
                <TextoA href="https://desenvolvimentodequeimados.netlify.app/"><p>Os Objetivos de Desenvolvimento na cidade de Queimados</p></TextoA>
            </CaixaBlog>

            <Router>
              <Routes>
                <Route path = "/Portfolio" element={<Portf></Portf>}/>
                <Link to="Portfolio">Portfolio</Link>
              </Routes>
            </Router>

        </CaixaPrincipal> */}
      <Header/>
      <Main/>
      <Footer/>
    </CaixaEngloba>
  )
}