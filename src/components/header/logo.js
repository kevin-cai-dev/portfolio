import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'


const LogoItem = styled(props => <AnchorLink {...props} />)`
    margin: auto 0;
    flex 0 1 3vh;
`


const Logo = (props) => {
    return (
        <LogoItem to="/#front-page">
            <StaticImage 
                src="../../images/icon.png"
                placeholder="blurred"
                alt="Placeholder icon"
            />
        </LogoItem>
    )
}

export default Logo