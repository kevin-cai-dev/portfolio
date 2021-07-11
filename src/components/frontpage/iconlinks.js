import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import GitHub from '../../images/github.svg'
import LinkedIn from '../../images/linkedin.svg'
import Document from '../../images/document.svg'

const LinkStyles = styled.a`
    margin: 1rem;
    // width: 3.5rem;
`

const IconWrapper = styled.div`
    display: flex;

    Icon:hover {
        fill: goldenrod;
    }
`

const Icon = styled.img`
    width: 3.5rem;
    filter:  brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(36%) hue-rotate(169deg) brightness(94%) contrast(91%); 
    
    &:hover .span {
        visibility: visible;
        opacity: 1;
    }
`

const Label = styled.span`
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 1s;
`

const IconLinks = () => {
    return (
        <IconWrapper>
            <LinkStyles href="https://google.com">
                <Icon src={GitHub} alt="GitHub Link"/>
            </LinkStyles>
            <LinkStyles href="https://google.com">
                <Icon src={LinkedIn} alt="LinkedIn Link" />
            </LinkStyles>
            <LinkStyles href="https://google.com">
                <Icon src={Document} alt="Resume Download" />
            </LinkStyles>
        </IconWrapper>
    )
}

export default IconLinks