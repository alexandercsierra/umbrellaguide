import React from 'react';
import styled from 'styled-components'
import {NavLink, Link, useLocation, useHistory} from 'react-router-dom'
import logo from '../imgs/umbrellalogo.png'
import { useOktaAuth } from '@okta/okta-react';
import Loader from './Loader';

const Nav = () => {

    const history = useHistory();
    const { authState, authService } = useOktaAuth();

    const location = useLocation().pathname

    const logout = async () => {
        authService.logout('/');
      };

      if (authState.isPending) {
        return (
          <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Loader/>
          </div>
        );
      }

    return(
        <NavBar>
            <LogoDiv>
                <Link to="/">
                    <Logo src={logo}/>
                </Link>
            </LogoDiv>
            <LinkDiv>
                <Links to="/">HOME</Links>
                <Links to="/profile">LOGIN</Links>
                <Links to="/">SIGNUP</Links>
                {location !=="/" && <Signout onClick={()=>{
                    localStorage.clear();
                    logout();                
                    // history.push('/')
                }}>SIGNOUT</Signout>}
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

const Signout = styled.p`
    color: white;
    margin: 1% 2%; 
    text-decoration: none;
    cursor: pointer;
    font-weight: 700;
    @media(max-width: 970px){
        margin: 2% 4%; 
        color: #111725;
    }
`;