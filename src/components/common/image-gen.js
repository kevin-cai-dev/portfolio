import React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.a`
    margin: 0.5rem;
`
// https://codepen.io/sosuke/pen/Pjoqqp
const Icon = styled.img`
    width: ${props => props.width ? `${props.width}vh` : '4vh'};
    filter:  brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(36%)
    hue-rotate(169deg) brightness(94%) contrast(91%);

    &:hover {
        filter: brightness(0) saturate(100%) invert(80%) sepia(78%) saturate(4678%) hue-rotate(357deg) brightness(99%) contrast(108%);
    }
`

const StaticIcon = styled.img`
    width: ${props => props.width ? `${props.width}vh` : '4vh'};
    // filter:  brightness(0) saturate(100%) invert(84%) sepia(7%) saturate(36%)
    // hue-rotate(169deg) brightness(94%) contrast(91%);

    // &:hover {
    //     filter: brightness(0) saturate(100%) invert(80%) sepia(78%) saturate(4678%) hue-rotate(357deg) brightness(99%) contrast(108%);
    // }
`


const ImgLink = (props) => {
    if (!props.link) {
        return (
            <StaticIcon src={props.img} alt='' width={props.width} />
        )
    }
    return (
        <IconWrapper href={props.link} target='_blank' rel='noopener noreferrer'>
            <Icon src={props.img} alt='' width={props.width} />
        </IconWrapper>
    )
}

export default ImgLink