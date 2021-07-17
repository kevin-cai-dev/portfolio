import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const AboutStyle = styled.div`
    box-sizing: border-box;
    padding: 6vh 0 3vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .description {
        font-family: var(--text-font);
        font-size: 1.2rem;
        max-width: 55vw;
        box-sizing: border-box;
        position: relative;
        line-height: 1.2rem;
        ul, li {
            margin: 0 0 3px 0;
        }

        @media only screen and (max-width: 768px) {
            max-width: 80vw;
        }
    }

    .description:before {
        content: '';
        width: 30%;
        position: absolute;
        left: 0;
        top: 0;
        border-bottom-width: 2px;
        border-bottom-color: var(--accent-color);
        border-bottom-style: solid;
    }
`

const Title = styled.h1`
    font-family: var(--title-font);
    font-size: 8em;
    color: var(--title-color);
    letter-spacing: 0.5rem;
    text-shadow: 2px 2px var(--title-shadow);
    margin: 5vh 0 2vh 0;

    @media only screen and (min-width: 320px) and (max-width: 400px) {
        font-size: 7em;
    }

    @media only screen and (max-width: 320px)  {
        font-size: 5em;
    }
`


const About = () => {
    const data = useStaticQuery(graphql`
    {
        query: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "about" } } }
        ) {
            edges {
                node {
                    html
                }
            }
        }
    }
    `)

    const aboutMe = data.query.edges.find(({ node }) => node)
    const html = aboutMe.node.html

    return (
        <AboutStyle>
            <Title>
                About Me
            </Title>
            <div className="description" dangerouslySetInnerHTML={{ __html: html }} />
        </AboutStyle>
    )
}

export default About