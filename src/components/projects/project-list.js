import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ProjectLinks from '../projects/project-links'
import '@fontsource/bebas-neue'
// image, title, description, technologies, link/s as icons

const ProjectBox = styled.div`
    height: 25vh;
    width: 60vw;
    max-width: var(--project-width);
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
    // flex-grow: 1;
    width: 30vw;
    max-width: calc(var(--project-width) / 2);
    overflow: hidden;
    filter: blur(1px);
`

const ProjectInfo = styled.div`
    width: 30vw;
    max-width: calc(var(--project-width) / 2);
    padding: 1rem;
    box-sizing: border-box;
    position: relative;

    .project-description {
        font-family: "Roboto", "Arial";
        font-size: 18px;
        margin-bottom: 2rem;
    }

    .project-tech {
        display: flex;
        flex-wrap: wrap;
        font-family: "IBM Plex Mono", Arial;
        list-style-type: none;
        padding: 0;
    }
    .project-tech li {
        white-space: nowrap;
        margin: 0 1rem 0.2rem 0;
    }
`

const ProjectLink = styled.div`
    margin: 0.2rem;
`

const ProjectLinkWrapper = styled.div`
    display: flex;
`

const ProjectTitleWrapper = styled.div`
    overflow: auto;
    display: flex;
    justify-content: space-between;
    margin: 0;
    align-items: center;
    font-family: "Bebas Neue", "Arial";
    font-size: 1.7rem;
    letter-spacing: 0.1rem;
`

const ProjectTitle = styled.h3`
    margin: 0;
    padding: 0;

    .project-title {
        text-decoration: none;
        color: #66FCF1;
    }
`

const PlaceholderText = styled.h3`
    font-family: "Roboto", "Arial";
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
                        <ProjectInfo>
                            <ProjectTitleWrapper>
                                <ProjectTitle>
                                    <a href={(external !== "none") ? external : github} target="_blank" rel="noopener noreferrer" className="project-title">
                                        {title}
                                    </a>
                                </ProjectTitle>
                                <ProjectLinkWrapper>
                                    <ProjectLink>
                                        {external !== 'none' && (
                                            <ProjectLinks link={external} src={false} />
                                        )}
                                    </ProjectLink>
                                    <ProjectLink>
                                        {github && (
                                            <ProjectLinks link={github} src={true} />
                                        )}
                                    </ProjectLink>
                                </ProjectLinkWrapper>
                            </ProjectTitleWrapper>

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
                        </ProjectInfo> 
                    </ProjectBox>
                )
            })}
            {projectNum < 3 && (
                <PlaceholderText>
                    More coming soon!
                </PlaceholderText>
            )}
        </React.Fragment>
    )
}

export default ProjectList