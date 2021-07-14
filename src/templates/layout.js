import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from '../templates/header'
import Metadata from '../components/metadata'
import Footer from '../templates/footer'
import Barrier from '../components/common/barrier'

import '@fontsource/ibm-plex-mono'
import '@fontsource/bebas-neue'
import "@fontsource/cutive-mono"
import "@fontsource/montserrat"
import "@fontsource/quicksand"

// #1F2833
const GlobalStyle = createGlobalStyle`
    :root {
        --background-color: #151515;
        --text-color: #C5C6C7;
        --title-color: #66FCF1;
        --box-color: #1F2833;
        --hover-color: #FFC100;
        --header-color: #3C3C3C;
        --accent-color: #45A29E;

        --project-width: 1800px;
        
        --title-shadow: #DDDDDD;
        --subtitle-shadow: #FFA500;
        --box-shadow: #354B65;
        

        --title-font: "Bebas Neue", "Arial";
        --subtitle-font: "IBM Plex Mono", Arial;
        --section-title-font: "Cutive Mono", Arial;
        --text-font: "Montserrat", "Arial";
        --header-font: "Quicksand", Arial;
    }
    body {
        padding: 0;
        margin: 0;
        background-color: var(--background-color);
        color: var(--text-color);
        font-family: var(--text-font);
    }
`

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Metadata />
            <span id="top"></span>
            <Header id="header"/>
            {children}
            <Barrier id="footer"/>
            <Footer />
        </React.Fragment>
    )
}

export default Layout