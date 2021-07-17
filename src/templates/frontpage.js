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
    margin-left: 0;
    margin-right: 0;
    align-items: center;
    background-image: url(${background});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    backdrop-filter: blur(5px);

    @media only screen and (max-width: 320px) {
        font-size: 0.8rem;
    }
`

const FrontContent = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`



const FrontPage = ({ id }) => {
    return (
        <FrontStyle id={id}>
            <FrontContent>
                <Title />
                <Description />
                <IconLinks />
            </FrontContent>
            
        </FrontStyle>
    )
}

export default FrontPage