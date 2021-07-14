import * as React from 'react'
import styled from 'styled-components'
import Subtitle from '../components/common/subtitle'
import ProjectList from '../components/projects/project-list'

const ProjectWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    // justify-content: center;
    align-items: center;
    padding-top: 2rem;
    flex-direction: column;
    box-sizing: border-box;
`

const Projects = () => {
    return (
        <ProjectWrapper>
            <Subtitle text="Projects">
                Projects
            </Subtitle>
            <ProjectList />
        </ProjectWrapper>
    )
}

export default Projects