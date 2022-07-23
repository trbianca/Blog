import React from "react"
import styled from "styled-components"
import TodeCachos from "../imagesPort/logoTodecachos.png"
import SelfCare from "../imagesPort/SelfCare.png"
import TodoFlix from "../imagesPort/TodoFlix.png"

const CaixaEnglova = styled.div`
    width: 100%;
    height: 100px;

`

const CaixaTodeCachos = styled.div`
    width: 20%;
    height: 40%;
`

const CaixaSelfCare = styled.div`
    width: 20%;
    height: 40%:
` 

const CaixaTodoFlix = styled.div`
    width: 20%;
    height: 40%;
`

const ImgTodeCachos = styled.img`
    width: 100%;
    height: 50%;
`

const ImgSelfCare = styled.img`
    width: 100%;
    height: 50%;
    `

const ImgTodoFlix = styled.imf`
    width: 100%;
    height: 50%:

`

export default function Portfolio(){
    return(
        <CaixaEnglova>
            <a href="https://github.com/trbianca/DesafioFinal"><CaixaTodeCachos><ImgTodeCachos src={TodeCachos} alt=""/></CaixaTodeCachos></a>
            <a href="https://github.com/trbianca/selfCare-Desafio/tree/main/Assets"><CaixaSelfCare><ImgSelfCare src={SelfCare} alt=""/></CaixaSelfCare></a>
            <a href="https://github.com/trbianca/ProjetoFinal-Mod2"><CaixaTodoFlix><ImgTodoFlix src={TodoFlix} alt=""/></CaixaTodoFlix></a>
        </CaixaEnglova>
    )
}