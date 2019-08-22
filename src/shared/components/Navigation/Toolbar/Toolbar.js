import {Link} from 'react-scroll';
import React, {useEffect, useCallback, useMemo, useState} from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import {media} from '../../../theme/media';
import Button from '../../UI/Button/Button';
import {ButtonTypes} from '../../../../components/utilities/enums';

const Toolbar = styled.div`
  transition: 0.5s; /* Add a transition effect (when scrolling - and font size is decreased) */
  height: 5.5rem;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #1fabf3;
  display: flex;
  justify-content: space-between;
  padding: 0, 20px;
  box-sizing: border-box;
  z-index: 90;
  background: none;
  font-size: 1.2rem;
  color: #51718c;
  &.scrolled {
    background: white;
    z-index: 1000;
  }
  ${media.minSmallDesktop`
height: 7rem;
&.scrolled {
  margin-top:0;
  padding:0;
  height: 2.5rem;
  font-size: 0.9rem;
  align-items: baseline;
  background:white;
  z-index:1000;
}
`}
`;

const Items = styled.div`
  float: left;
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 0;
  background: none;
`;

const LogoSize = styled.div`
  height: 100%;
  float: left;
`;
const DrawerToggleSize = styled.div`
  float: right;
  margin-top: 0%;
  margin-right: 20px;
  display: flex;
`;
const DesktopOnly = styled.div`
  float: right;
  margin-top: 0%;
  display: flex;
  margin-right: 20px;
  height: 100%;
  ${media.maxSmallDesktop`
    display: none;
`}
`;

const ButtonSize = styled.div`
  margin: auto;
  width: 8rem;
  font-size: small;
`;

const Header = ({
  buttonType,
  buttonTypeSuccessHandler,
  buttonTypeDangerHandler,
  drawerToggleClicked,
  closed,
}) => {
  const isOverTop = useCallback((topPx = 5) => {
    return document.body.scrollTop > topPx || document.documentElement.scrollTop > topPx;
  }, []);

  const [toolbarClassName, setToolbarClassname] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      if (isOverTop()) {
        if (!toolbarClassName) {
          setToolbarClassname('scrolled');
          buttonTypeSuccessHandler();
        }
      } else if (toolbarClassName) {
        setToolbarClassname(null);
        buttonTypeDangerHandler();
      }
    };
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [buttonType, buttonTypeDangerHandler, buttonTypeSuccessHandler, isOverTop, toolbarClassName]);

  return (
    <Toolbar className={toolbarClassName}>
      <Items>
        <LogoSize className={toolbarClassName}>
          <Logo />
        </LogoSize>
        <DrawerToggleSize>
          <DrawerToggle clicked={drawerToggleClicked} />
        </DrawerToggleSize>
        <DesktopOnly>
          <NavigationItems />
          <ButtonSize>
            <Link
              onClick={closed}
              activeClass="NavigationItem-module--active--3NifW"
              to="LetsTalk"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              <Button buttonType={buttonType}>Let&apos;s Talk</Button>
            </Link>
          </ButtonSize>
        </DesktopOnly>
      </Items>
    </Toolbar>
  );
};

export default Header;
