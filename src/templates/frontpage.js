import * as React from 'react'
import styled from 'styled-components'
import Title from '../components/frontpage/title'
import Description from '../components/frontpage/description'
import IconLinks from '../components/frontpage/iconlinks'

const FrontStyle = styled.div`
    height: 95vh;
    text-align: center;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`



const FrontPage = ({ id }) => {
    return (
        <FrontStyle id={id}>
            <Title />
            <Description />
            <IconLinks />
        </FrontStyle>
    )
}

export default FrontPage