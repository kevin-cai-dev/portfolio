import * as React from 'react'
import { Helmet } from 'react-helmet'

const Metadata = () => {
    return (
        <Helmet>
            <title>Kevin Cai</title>
            <meta name="description" content="Kevin Cai's portfolio website" />
            <meta name="keywords" content="CSS, Gatsby, React, Javascript" />
            <meta name="author" content="Kevin Cai" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
    )
}

export default Metadata