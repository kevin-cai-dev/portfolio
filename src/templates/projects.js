import * as React from 'react'
import styled from 'styled-components'
import Subtitle from '../components/common/subtitle'

const ProjectWrapper = styled.div`
    height: 95vh;
    display: flex;
    justify-content: center;
    padding-top: 2rem;
`

const Projects = () => {
    return (
        <ProjectWrapper>
            <Subtitle text="Projects">
                Projects
            </Subtitle>
        </ProjectWrapper>
    )
}

export default Projects