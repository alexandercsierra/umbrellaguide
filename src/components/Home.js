import React from 'react';
import umbrella from '../imgs/trans3d.png';
import styled from 'styled-components';

const Home = () => {
    return(
        <div>
            {/* <LogoDiv><Logo src={umbrella}/></LogoDiv> */}
            {/* <LogoTitle>Umbrella</LogoTitle>
            <LogoTitle2>Guide</LogoTitle2> */}
        </div>
    )
}

export default Home;

const LogoTitle = styled.h1`
  color: white;
  position: absolute;
  top: 80px;
  left: 20px;
`;
const LogoTitle2 = styled.h1`
  color: white;
  position: absolute;
  top: 80px;
  left: 220px;
`;

const LogoDiv = styled.div`
  width: 10%;
  // border: 1px solid red;
  max-width: 100%;
`;

const Logo = styled.img`
  width: 125px;
  position: absolute;
  left: 130px;
  top: 20px;
`;
