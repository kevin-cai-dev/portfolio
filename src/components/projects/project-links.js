import React from 'react'
import ImageInfo from '../common/image-info'
import ImgLink from '../common/image-gen'

const ProjectLinks = ({ link, src }) => {
    let name
    if (src) {
        name = 'github-icon'
    } else {
        name = 'external'
    }

    const linkInfo = ImageInfo.find((item) => item.name === name)
    linkInfo.link = link
    linkInfo.width = 2

    return (
        <ImgLink {...linkInfo} />
    )
}

export default ProjectLinks