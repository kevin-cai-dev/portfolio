import * as React from 'react'
import styled from 'styled-components'
import Subtitle from '../components/common/subtitle'
import ProjectList from '../components/projects/project-list'

const ProjectWrapper = styled.div`
    min-height: 95vh;
    display: flex;
    // justify-content: center;
    align-items: center;
    padding-top: 2rem;
    flex-direction: column;
`

// const Filler = styled.div`
//     min-height: 20vh;
//     width: 70vw;
//     background-color: #1F2833;
//     margin: 1rem;
//     box-shadow: 5px 5px #354B65;
//     // border: 5px ridge #354B65;
//     flex-grow: 1;
// `

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