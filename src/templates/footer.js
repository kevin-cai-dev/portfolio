import React from 'react'
import styled from 'styled-components'
import Barrier from '../components/common/barrier'

const LayoutWrapper = styled.div`
    margin-top: auto;
    margin-bottom: 5px;
`

const FooterWrapper = styled.div`
    height: 5vh;
    display: flex;
    justify-content: center; 
`

const FooterContent = styled.div`
    display: flex;
    width: 60vw;
`

const Footer = () => {

    const d = new Date()
    const year = d.getFullYear()
    return (
        <LayoutWrapper>
            <Barrier id="footer"/>
            <FooterWrapper>
                <FooterContent>
                    <p>Copyright © {year} Kevin Cai</p>
                </FooterContent>
            </FooterWrapper>
        </LayoutWrapper>
    )
}

export default Footer