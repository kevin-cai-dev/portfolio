import * as React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import styled from 'styled-components'

const NavItem = styled(props => <AnchorLink {...props} />)`
    color: #C5C6C7;
    margin: 0 1vw;
    font-family: var(--header-font);
    font-size: 2vh;
    letter-spacing: 0.03vw;
    text-decoration: none;
    transition: all 150ms ease-in;
    &:hover {
        color: var(--hover-color);
        // text-decoration: underline;
        &:after {
            opacity: 1;
        }
    }
    max-height: 5vh;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        border-bottom-width: 2px;
        border-bottom-color: var(--hover-color);
        border-bottom-style: solid;
        opacity: 0;
    }
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