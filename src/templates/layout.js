import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from '../templates/header'
import Metadata from '../components/metadata'
import Footer from '../templates/footer'
import Barrier from '../components/common/barrier'


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