import * as React from 'react'
import styled from 'styled-components'
import NavbarLinks from '../components/header/navlinks'
import Logo from '../components/header/logo'

const Navigation = styled.nav`
    overflow: auto;
    max-height: 3vh;
    padding: 1vh;
    max-width: 100vw;
    display: flex;
    justify-content: space-between;
    margin: 0;
    position: sticky;
    z-index: 1;
    top: 0;
    // background-color: #0B0C10;
    border-bottom-width: 3px;
    border-bottom-color: #45A29E;
    border-bottom-style: solid;
    background-image: linear-gradient(#0B0C10, #1F2833)
`

const Header = ({ id }) => {
    return (
        <Navigation id={id}>
            <Logo />
            <NavbarLinks />
        </Navigation>
    )
}

export default Header