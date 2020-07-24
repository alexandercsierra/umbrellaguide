import React from 'react';
import styled from 'styled-components'
import {NavLink, Link} from 'react-router-dom'
import logo from '../imgs/umbrellalogo.png'

const Nav = () => {
    return(
        <NavBar>
            <LogoDiv>
                <Link to="/">
                    <Logo src={logo}/>
                </Link>
            </LogoDiv>
            <LinkDiv>
                <Links to="/">HOME</Links>
                <Links to="/">LOGIN</Links>
                <Links to="/">SIGNUP</Links>
            </LinkDiv>
        </NavBar>
    )
}

export default Nav;

const LogoDiv = styled.div`
    max-width: 100%;
    width: 50%;
    // border: 1px solid red;
`;

const LinkDiv = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Logo = styled.img`
    width: 20%;
    margin-left: 10%;
`;

const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    background: #0A1331;
`;

const Links = styled(NavLink)`
    margin: 0 6%;
    text-decoration: none;
    color: white;
`;