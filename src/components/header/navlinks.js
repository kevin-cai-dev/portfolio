import * as React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import styled from 'styled-components'

const NavItem = styled(props => <AnchorLink {...props} />)`
    color: #C5C6C7;
    margin: 0 1vw;
    font-family: "Bebas Neue", Arial;
    font-size: 2rem;
    letter-spacing: 0.05rem;
    text-decoration: none;
    transition: all 100ms ease-in;

    &:hover {
        color: #FFC100;
    }
`


const NavbarLinks = () => {
    return (
        <div>
            <NavItem to="/#projects">Projects</NavItem>
            <NavItem to="/404">About</NavItem>
            <NavItem to="/404">Contact Me</NavItem>
        </div>
    )
}

export default NavbarLinks