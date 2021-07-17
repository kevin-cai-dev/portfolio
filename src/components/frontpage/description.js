import * as React from 'react'
import styled from 'styled-components'

const DescriptionWrapper = styled.h2`
    font-size: 2em;
    font-family: var(--text-font);
    font-weight: 200;
`

const Description = () => {
    return (
        <DescriptionWrapper>
            Bachelor of Adv. Computing @ University of Sydney
        </DescriptionWrapper>
    )
}

export default Description