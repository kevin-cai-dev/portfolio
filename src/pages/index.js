import * as React from "react"
import FrontPage from '../templates/frontpage'
import { createGlobalStyle } from 'styled-components'
import Header from '../templates/header'
import Metadata from '../components/metadata'
import Projects from '../templates/projects'

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }
`

// markup
const IndexPage = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Metadata />
            <Header />
            <FrontPage />
            <Projects />
        </React.Fragment>
    )
}

export default IndexPage