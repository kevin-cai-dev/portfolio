import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const LogoWrap = styled.div`
    margin: auto 0;
    flex 0 1 5vh;
`

const Logo = (props) => {
    return (
        <LogoWrap as={Link} to={props.link}>
            <StaticImage 
                src="../images/icon.png"
                placeholder="blurred"
                alt="Placeholder icon"
            />
        </LogoWrap>
    )
}

export default Logo