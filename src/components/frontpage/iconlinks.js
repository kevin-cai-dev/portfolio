import * as React from 'react'
import styled from 'styled-components'
// import GitHub from '../../images/github.svg'
// import LinkedIn from '../../images/linkedin.svg'
// import Document from '../../images/document.svg'
import ImgLink from '../common/image-gen'
import ImageInfo from '../common/image-info'

// add span here, turn into vertical flexbox, add opacity and transitions

const IconWrapper = styled.div`
    display: flex;
`

const IconLinks = () => {
    const links = ['github', 'linkedin', 'document']

    const linkInfo = ImageInfo.filter((item) => links.includes(item.name))
    console.log(linkInfo)

    return (
        <IconWrapper>
            {linkInfo.map((item) => {
                return (
                    <ImgLink {...item} />
                )
            })}
        </IconWrapper>
    )
}

export default IconLinks