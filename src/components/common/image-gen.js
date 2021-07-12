import React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.a`
    margin: 0.5rem;
`
// https://codepen.io/sosuke/pen/Pjoqqp
const Icon = styled.img`
    width: ${props => props.width ? `${props.width}rem` : '3.5rem'};
    filter:  brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(36%)
    hue-rotate(169deg) brightness(94%) contrast(91%); 

    &:hover {
        filter: brightness(0) saturate(100%) invert(74%) sepia(44%) saturate(5121%) hue-rotate(0deg) brightness(105%) contrast(106%);
    }
`

const ImgLink = (props) => {
    return (
        <IconWrapper href={props.link} target='_blank' rel='noopener noreferrer'>
            <Icon src={props.img} alt='' width={props.width} />
        </IconWrapper>
    )
}

export default ImgLink