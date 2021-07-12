import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// image, title, description, technologies, link/s as icons

const ProjectBox = styled.div`
    min-height: 25vh;
    max-height: 90vh;
    // height: 25vh;
    width: 60vw;
    background-color: #1F2833;
    margin: 1rem;
    box-shadow: 5px 5px #354B65;
    display: flex;
    justify-content: center;
`

const ProjectImage = styled.div`
    background-color: yellow;
    display: flex;
    justify-content: center;
    overflow: hidden;
    flex-grow: 1;
    max-width: 30vw;
`

const ProjectDetails = styled.div`
    // background-color: green;
    flex-grow: 1;
    max-width: 30vw;
    padding: 1rem;
    box-sizing: border-box;
`




const ProjectList = () => {

    const data = useStaticQuery(graphql`
    {
        query: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "project" } } }
            sort: { fields: [frontmatter___date], order: ASC }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        tech
                        github
                        external
                        cover {
                            childImageSharp {
                                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                            }
                        }
                    }
                    html
                }
            }
        }
    }
    `)


    const projects = data.query.edges.filter(({ node }) => node)
    const projectNum = projects.length

    return (
        <React.Fragment>

            {projects &&
            projects.map(({ node }, i) => {
                const { frontmatter, html } = node;
                const { external, title, tech, github, cover } = frontmatter
                const image = getImage(cover)
                return (
                    <ProjectBox key={i}>
                        <ProjectImage>
                            <GatsbyImage image={image} alt={title} className="img" />
                        </ProjectImage>
                        <ProjectDetails>
                            <h3 className="project-title">
                                <a href={(external !== "none") ? external : github} target="_blank" rel="noopener noreferrer">
                                    {title}
                                </a>
                            </h3>
                            <div 
                            className="project-description"
                            dangerouslySetInnerHTML={{ __html: html }}
                            />

                            {tech.length && (
                                <ul className="project-tech">
                                {tech.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                                </ul>
                            )}

                            
                        </ProjectDetails>
                    </ProjectBox>
                )
            })}
        </React.Fragment>
    )
}

export default ProjectList