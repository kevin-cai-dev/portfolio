import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import NavbarLinks from '../components/header/navlinks'
import Logo from '../components/header/logo'

const Navigation = styled.nav`
    overflow: auto;
    height: 5vh;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-self: center;
    margin: 0;
    position: fixed;
    z-index: 10;
    top: 0;
    transition: all 0.1s ease-in;
    background-color: ${props => (props.isScrolled ? '#3C3C3C' : 'transparent')};
    box-shadow: ${props => (props.isScrolled ? '0 3px #45A29E' : 'none')};
`

const Header = ({ id }) => {

    // determined if page has scrolled and if the view is on mobile
    const [scrolled, setScrolled] = useState(false);

    // change state on scroll
    useEffect(() => {
        const handleScroll = () => {
        const isScrolled = window.scrollY > 30;
        if (isScrolled !== scrolled) {
            setScrolled(!scrolled);
        }
        };

        document.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
        // clean up the event handler when the component unmounts
        document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <Navigation isScrolled={scrolled}>
            <Logo />
            <NavbarLinks />
        </Navigation>
    )
}

export default Header