import * as React from 'react'
import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import ImageInfo from '../common/image-info'
import ImgLink from '../common/image-gen'


const LogoItem = styled(props => <AnchorLink {...props} />)`
    margin: 0 0.5rem 0 2vw;
    flex 0 1 5vh;
    box-sizing: border-box;
    max-height: 5vh;
`


const Logo = () => {
    const link = 'logo'
    const linkInfo = ImageInfo.find((item) => item.name === link)
    linkInfo.width = 5

    return (
        <LogoItem to="/#top">
            <ImgLink {...linkInfo} />
        </LogoItem>
        
    )
}

export default Logo