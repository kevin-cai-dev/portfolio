import * as React from "react"
import FrontPage from '../templates/frontpage'
import { createGlobalStyle } from 'styled-components'
import Header from '../templates/header'
import Metadata from '../components/metadata'
import Projects from '../templates/projects'
import Footer from '../templates/footer'
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
        color: var(--text-color);
    }
    :root {
        --text-color: #C5C6C7;
        --project-width: 1800px;
        --title-color: #66FCF1;
        --title-shadow: #DDDDDD;
        --subtitle-shadow: #FFA500;
        --box-color: #1F2833;
        --box-shadow: #354B65;
        --hover-color: #FFC100;
        --title-font: "Bebas Neue", "Arial";
        --subtitle-font: "IBM Plex Mono", Arial;
        --text-font: "Roboto", "Arial";

    }
`

const Barrier = styled.hr`
    border-bottom-width: 1px;
    border-bottom-color: #C5C6C7;
    border-bottom-style: solid;
    width: 60vw;
    margin: auto;
    opacity: 0.5;
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
            <Barrier id="footer"/>
            <Footer />
        </React.Fragment>
    )
}

export default IndexPage