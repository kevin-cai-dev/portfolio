import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../templates/header'
import Metadata from '../components/metadata'
import Footer from '../templates/footer'


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

        --project-width: 60vw;
        --max-content-width: 1500px;
        
        --title-shadow: #DDDDDD;
        --subtitle-shadow: #FFA500;
        --box-shadow: #354B65;
        

        --title-font: "Bebas Neue", "Arial";
        --subtitle-font: "IBM Plex Mono", Arial;
        --section-title-font: "Cutive Mono", Arial;
        --text-font: "Montserrat", "Arial";
        --header-font: "Quicksand", Arial;

        @media only screen and (max-width: 450px) {
            font-size: 12px;
        }

        @media only screen and (min-width: 450px) and (max-width: 768px) {  
            font-size: 14px;
        }

        @media only screen and (max-width: 986px) {
            --project-width: 80vw;
        }

    }
    body {
        padding: 0;
        margin: 0;
        background-color: var(--background-color);
        color: var(--text-color);
        font-family: var(--text-font);
    }
`

const Content = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Metadata />
            <Content>
                <span id="top"></span>
                <Header id="header"/>
                {children}
                <Footer />
            </Content>
        </React.Fragment>
    )
}

export default Layout