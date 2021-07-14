import * as React from "react"
import FrontPage from '../templates/frontpage'
import Projects from '../templates/projects'
import Barrier from '../components/common/barrier'
import Layout from '../templates/layout'

import '@fontsource/ibm-plex-mono'
import '@fontsource/roboto/300.css'
import '@fontsource/bebas-neue'


// markup
const IndexPage = () => {
    return (
        <Layout>
            <FrontPage id="front-page"/>
            <Barrier id="projects"/>
            <Projects />
        </Layout>
    )
}

export default IndexPage