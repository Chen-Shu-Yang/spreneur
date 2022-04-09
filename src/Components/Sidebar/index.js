import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLogo, SidebarLink } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}><SidebarLogo>SPRENEUR</SidebarLogo></SidebarLink>
                    <SidebarLink to="/book" onClick={toggle}>BOOK</SidebarLink>
                    <SidebarLink to="/blog" onClick={toggle}>BLOG</SidebarLink>
                    <SidebarLink to="/academy" onClick={toggle}>ACADEMY</SidebarLink>
                    <SidebarLink to="/events" onClick={toggle}>EVENTS</SidebarLink>
                    <SidebarLink to="/" onClick={toggle}>ABOUT</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar