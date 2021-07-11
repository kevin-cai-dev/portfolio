import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavItem = styled(Link)`
    color: blue;
    margin: 0 1vw;
`

const NavbarLinks = () => {
    return (
        <div>
            <NavItem to="/404">Projects</NavItem>
            <NavItem to="/404">About</NavItem>
            <NavItem to="/404">Contact</NavItem>
        </div>
    )
}

export default NavbarLinks