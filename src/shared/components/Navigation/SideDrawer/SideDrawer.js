import React from 'react';
import {Link} from 'react-scroll';
import styled from 'styled-components';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../UI/Auxiliary';
import Button from '../../UI/Button/Button';
import Logo from '../Logo/Logo';

import {media} from '../../../theme/media';

const SideDrawer = styled.div`
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
  transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  ${media.minSmallDesktop`
    display: none;
}
`}
`;

const LogoSize = styled.div`
  height: 11%;
`;

const sideDrawer = ({open, closed}) => {
  return (
    <Aux>
      <Backdrop show={open} clicked={closed} />

      <SideDrawer open={open} onClick={closed}>
        <LogoSize>
          <Logo />
        </LogoSize>
        <nav>
          <NavigationItems closed={closed} />
          <Link
            onClick={closed}
            activeClass="NavigationItem-module--active--3NifW"
            to="LetsTalk"
            spy
            smooth
            offset={-70}
            duration={500}
          >
            <div style={{width: '40%', margin: 'auto 30%'}}>
              <Button buttonType="Success">Let&#39;s Talk</Button>
            </div>
          </Link>
        </nav>
      </SideDrawer>
    </Aux>
  );
};
export default sideDrawer;
