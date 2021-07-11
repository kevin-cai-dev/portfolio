import * as React from 'react'
import styled from 'styled-components'

const DescriptionWrapper = styled.h2`
font-size: 2rem;
font-family: Roboto, "Arial";
font-weight: 200;
// color: #C5C6C7;
`

const Description = () => {
    return (
        <DescriptionWrapper>
            Bachelor of Adv. Computing @ University of Sydney
        </DescriptionWrapper>
    )
}

export default Description