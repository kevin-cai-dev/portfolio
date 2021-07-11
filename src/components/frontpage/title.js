import * as React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.h1`
    margin: 0;
    font-size: 10rem;
    font-family: "Bebas Neue", "Arial";
    color: #66FCF1;
    letter-spacing: 0.5rem;
    text-shadow: 2px 2px #DDDDDD;
`

const Title = () => {
    return (
        <TitleWrapper>
            Kevin Cai
        </TitleWrapper>
    )
}

export default Title