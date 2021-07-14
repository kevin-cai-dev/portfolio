import * as React from "react"
import FrontPage from '../templates/frontpage'
import Projects from '../templates/projects'
import Barrier from '../components/common/barrier'
import Layout from '../templates/layout'




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