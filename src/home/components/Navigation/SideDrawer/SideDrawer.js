import React from 'react';
import {Link} from 'react-scroll';
import styled from 'styled-components';
import Backdrop from 'shared/components/UI/Backdrop/Backdrop';
import Aux from 'shared/components/UI/Auxiliary';
import Button from 'shared/components/UI/Button/Button';
import {media} from 'shared/theme/media';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';

const SideDrawerContainer = styled.div`
  position: fixed;
  width: 75%;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  transform: ${({isOpen}) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  ${media.minSmallDesktop`
    display: none;
  `}
`;

const LogoSize = styled.div`
  height: 11%;
`;

const SideDrawer = ({isOpen, onClick, navItems}) => {
  return (
    <Aux>
      <Backdrop show={isOpen} clicked={onClick} />
      <SideDrawerContainer isOpen={isOpen} onClick={onClick}>
        <LogoSize>
          <Logo />
        </LogoSize>
        <nav>
          <NavigationItems onClick={onClick} navItems={navItems} />
          <Link onClick={onClick} to="LetsTalk" spy smooth offset={-70} duration={500}>
            <div style={{width: '40%', margin: 'auto 30%'}}>
              <Button>Let&#39;s Talk</Button>
            </div>
          </Link>
        </nav>
      </SideDrawerContainer>
    </Aux>
  );
};

export default SideDrawer;
