import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#EF8A56' : '#000')};
    height: 80px;
    margin-top: -80px;
    color: #fff;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: all 0.3s ease;
`;

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1300px;
`;

export const NavLogo = styled(LinkR)`
    font-family: 'Ubuntu', sans-serif;
    font-size: 2rem;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #067eb7;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff
    }
`;

export const MobileIconSearch = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding 0 2rem;
    height: 100%;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #067eb7;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding 0 2rem;
    height: 100%;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #067eb7;
    }
`;
