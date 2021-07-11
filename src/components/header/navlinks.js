import * as React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import styled from 'styled-components'

const NavItem = styled(props => <AnchorLink {...props} />)`
    color: #66FCF1;
    margin: 0 1vw;
    font-family: Roboto, Arial;
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