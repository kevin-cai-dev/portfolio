import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import NavbarLinks from '../components/navlinks'
import Logo from '../components/logo'

const Navigation = styled.nav`
    background-color: #aaaaaa;
    overflow: auto;
    height: 5vh;
    padding: 1vh;
    max-width: 100vw;
    display: flex;
    justify-content: space-between;
    margin: 0;
`

const Header = () => {
    return (
        <Navigation>
            <Logo link="/404"/>
            <NavbarLinks />
        </Navigation>
    )
}

export default Header