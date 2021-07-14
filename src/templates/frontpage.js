import * as React from 'react'
import styled from 'styled-components'
import Title from '../components/frontpage/title'
import Description from '../components/frontpage/description'
import IconLinks from '../components/frontpage/iconlinks'
import background from '../images/volcano-background.jpg'

const FrontStyle = styled.div`
    height: 100vh;
    text-align: center;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${background});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    backdrop-filter: blur(5px);
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