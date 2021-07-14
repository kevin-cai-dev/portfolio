import React from 'react'
import styled from 'styled-components'

const AboutStyle = styled.div`
    height: 100vh;
    box-sizing: border-box;
    padding: 6vh 0 0 0;
`

const About = () => {
    return (
        <AboutStyle>
            <p>About Page!</p>
        </AboutStyle>
    )
}

export default About