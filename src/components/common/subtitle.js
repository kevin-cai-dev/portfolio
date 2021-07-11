import * as React from 'react'
import styled from 'styled-components'

import '@fontsource/roboto/300.css'

const TitleWrapper = styled.h2`
margin: 0;
font-size: 4rem;
font-family: "IBM Plex Mono", Arial;
color: #66FCF1;
`

const Subtitle = ({ text }) => {
    return (
        <TitleWrapper>
            {text}
        </TitleWrapper>
    )
}

export default Subtitle