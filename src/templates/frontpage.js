import * as React from 'react'
import styled from 'styled-components'
import Introduction from '../components/introduction'
import IconLinks from '../components/iconlinks'

const FrontStyle = styled.div`
    background-color: green;
    height: 93vh;
`

const FrontPage = () => {
    return (
        <FrontStyle>
            <Introduction />
            <IconLinks />
        </FrontStyle>
    )
}

export default FrontPage