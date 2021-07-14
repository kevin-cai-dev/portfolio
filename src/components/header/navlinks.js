import * as React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import styled from 'styled-components'

const NavItem = styled(props => <AnchorLink {...props} />)`
    color: #C5C6C7;
    margin: 0 1vw;
    font-family: var(--title-font);
    font-size: 2.5vh;
    letter-spacing: 0.03vw;
    text-decoration: none;
    transition: all 100ms ease-in;
    &:hover {
        color: var(--hover-color);
    }
    max-height: 5vh;
`

const NavLinks = styled.div`
    margin: 1vh;
`


const NavbarLinks = () => {
    return (
        <NavLinks>
            <NavItem to="/#projects">Projects</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/404">Contact Me</NavItem>
        </NavLinks>
    )
}

export default NavbarLinks