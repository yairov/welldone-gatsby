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
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
  ${media.minSmallDesktop`
    display: none;
}
`}
`;
const LogoSize = styled.div`
  height: 11%;
`;

const sideDrawer = props => {
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />

      <SideDrawer open={props.open} onClick={props.closed}>
        <LogoSize>
          <Logo />
        </LogoSize>
        <nav>
          <NavigationItems closed={props.closed} />

          <Link
            onClick={props.closed}
            activeClass="NavigationItem-module--active--3NifW"
            to={'LetsTalk'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div style={{width: '40%', margin: 'auto 30%'}}>
              <Button btnType="Success">Let's Talk</Button>
            </div>
          </Link>
        </nav>
      </SideDrawer>
    </Aux>
  );
};
export default sideDrawer;
