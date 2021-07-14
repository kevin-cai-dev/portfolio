import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const AboutStyle = styled.div`
    height: 100vh;
    box-sizing: border-box;
    padding: 6vh 0 3vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: var(--box-color);

    .description {
        font-family: var(--text-font);
        font-size: 20px;
        max-width: 55vw;
        box-sizing: border-box;
        position: relative;
        line-height: 2vh;
        ul, li {
            margin: 0 0 3px 0;
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
    font-family: var(--section-title-font);
    font-size: 5rem;
    color: var(--title-color);
    position: relative;
    width: max-content;
    --delay: 1s;
    --duration: 2s;
    --blink-frequency: 1000ms;

    &:before, &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    &:before {
        background: var(--background-color);
        animation: typewriter var(--duration) steps(8) var(--delay) forwards;
    }

    &:after {
        width: 0.25rem;
        background: var(--text-color);
        animation: typewriter var(--duration) steps(8) var(--delay) forwards, blink var(--blink-frequency) steps(8) infinite;
    }

    @keyframes typewriter {
        to { left: 100%; }
    }

    @keyframes blink {
        to { background: transparent; }
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