import * as React from "react"
import FrontPage from '../templates/frontpage'
import { createGlobalStyle } from 'styled-components'
import Header from '../templates/header'
import Metadata from '../components/metadata'
import Projects from '../templates/projects'
import styled from 'styled-components'

import '@fontsource/ibm-plex-mono'
import '@fontsource/roboto/300.css'
import '@fontsource/bebas-neue'

// #1F2833
const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: #151515;
        color: #C5C6C7;
    }
    :root {
        --project-width: 1800px;
    }
    
`

const Barrier = styled.hr`
    border-bottom-width: 1px;
    border-bottom-color: #C5C6C7;
    border-bottom-style: solid;
    width: 60vw;
    margin: auto;
`

// markup
const IndexPage = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Metadata />
            <span id="top"></span>
            <Header id="header"/>
            <FrontPage id="front-page"/>
            <Barrier id="projects"/>
            <Projects />
        </React.Fragment>
    )
}

export default IndexPage