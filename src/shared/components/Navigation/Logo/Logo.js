import React from 'react';
import styled from 'styled-components';
import burgerLogo from '../../../assets/icons/logo.svg';
import {media} from '../../../theme/media';

const Logo = styled.div`
height: 100%;
box-sizing: border-box;
order-radius: 5px
padding: 1.5rem 0;
    ${media.minSmallDesktop`
        margin: 0 16px;
        padding: 4px;
`}

`;
const LogoImg = styled.img`
  margin: 2px;
  margin-top: 0px;
  height: 3rem;
  width: 21rem;
  ${media.minSmallDesktop`
        height: 100%;
        margin: auto;
  `}
`;
const logo = () => (
  <Logo>
    <LogoImg src={burgerLogo} alt="MyBurger" />
  </Logo>
);
export default logo;
