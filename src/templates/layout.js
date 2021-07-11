import * as React from 'react'
import { Link } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import Header from './header'
import Metadata from '../components/metadata'

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }
`

const Layout = ({ pageTitle, children }) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Metadata />
            <Header />
            {children}
        </React.Fragment>
    )
}

export default Layout