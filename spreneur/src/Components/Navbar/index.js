import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    MobileIconSearch,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'>BOOK</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>Blog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>ACADEMY</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavLogo onClicked={toggleHome} to='/'>SPRENEUR</NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'>ABOUT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>EVENTS</NavLinks>
                        </NavItem>
                        <MobileIconSearch>
                            <BsSearch />
                        </MobileIconSearch>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;