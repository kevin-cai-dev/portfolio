import * as React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 5rem;
    margin: 0;
`

const Description = styled.h2`
    font-size: 2rem;
`

const IntroText = styled.div`
`

const Introduction = () => {
    return (
        <IntroText>
            <Title>
            Kevin Cai
            </Title>
            <Description>
                Computer Science Student @ University of Sydney
            </Description>
        </IntroText>
    )
}

export default Introduction