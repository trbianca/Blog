import React from 'react'
import { createGlobalStyle} from "styled-components"
import styled from "styled-components"
import Header from "./componentes/Header"
import Main from "./componentes/Main"
import Footer from "./componentes/Footer"

const GlovalStyle = createGlobalStyle`
*{
  marin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

const CaixaEngloba = styled.div`
  // background-color: black;
  width: 100%;
  height: 800px;
`

export default function App(){
  return(
    <CaixaEngloba>
      <Header/>
      <Main/>
      <Footer/>
    </CaixaEngloba>
  )
}