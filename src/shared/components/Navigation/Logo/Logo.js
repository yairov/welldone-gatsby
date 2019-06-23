import React from 'react';
import burgerLogo from '../../../assets/icons/logo.svg';

import styled, {css} from 'styled-components';
import {media} from '../../../theme/media';


const Logo = styled.div`
    height: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 0 16px;
    padding: 4px;
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
const logo = (props) => (
    <Logo>
        <LogoImg src={burgerLogo} alt="MyBurger"/>
    </Logo>
);
export default logo;
