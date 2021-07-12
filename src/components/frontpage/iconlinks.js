import * as React from 'react'
import styled from 'styled-components'
import GitHub from '../../images/github.svg'
import LinkedIn from '../../images/linkedin.svg'
import Document from '../../images/document.svg'

// add span here, turn into vertical flexbox, add opacity and transitions
const LinkStyles = styled.a`
    margin: 1rem;
`

const IconWrapper = styled.div`
    display: flex;
`

const Icon = styled.img`
    width: 3.5rem;
    filter:  brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(36%) hue-rotate(169deg) brightness(94%) contrast(91%); 
`

const IconLinks = () => {
    return (
        <IconWrapper>
            <LinkStyles href="https://github.com/Kevin-Cai-dev" target="_blank" rel="noopener noreferrer">
                <Icon src={GitHub} alt="GitHub Link"/>
            </LinkStyles>
            <LinkStyles href="https://www.linkedin.com/in/kevin-cai-39a167203/" target="_blank" rel="noopener noreferrer">
                <Icon src={LinkedIn} alt="LinkedIn Link" />
            </LinkStyles>
            <LinkStyles href={'resume.pdf'} rel="noopener noreferrer" download >
                <Icon src={Document} alt="Resume Download" />
            </LinkStyles>
        </IconWrapper>
    )
}

export default IconLinks