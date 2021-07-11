import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const LinkStyles = styled.a`
    margin: 1rem;
    width: 3.5rem;
`

const IconWrapper = styled.div`
    display: flex;
`

const IconLinks = () => {
    return (
        <IconWrapper>
            <LinkStyles href="https://google.com">
                <StaticImage 
                    src="../../images/icon.png"
                    placeholder="blurred"
                    alt="Placeholder icon"
                />
            </LinkStyles>
            <LinkStyles href="https://google.com">
                <StaticImage 
                    src="../../images/icon.png"
                    placeholder="blurred"
                    alt="Placeholder icon"
                />
            </LinkStyles>
            <LinkStyles href="https://google.com">
                <StaticImage 
                    src="../../images/icon.png"
                    placeholder="blurred"
                    alt="Placeholder icon"
                />
            </LinkStyles>
        </IconWrapper>
    )
}

export default IconLinks