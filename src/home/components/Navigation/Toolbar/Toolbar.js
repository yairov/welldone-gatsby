import {Link} from 'react-scroll';
import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import {media} from 'shared/theme/media';
import Button from 'shared/components/UI/Button/Button';
import A from 'shared/components/A';

import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const ToolbarContainer = styled.div`
  transition: 0.5s; /* Add a transition effect (when scrolling - and font size is decreased) */
  height: 5.5rem;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 90;
  background: none;
  font-size: 1.2rem;
  color: #51718c;
  ${media.minSmallDesktop`
    height: 7rem;
  `}
  ${({bodyScrolled}) => {
    // prettier-ignore
    return bodyScrolled && css`
      background: white;
      z-index: 1000;
      ${media.minSmallDesktop`
        margin-top: 0;
        padding: 0;
        height: 2.5rem;
        font-size: 0.9rem;
        align-items: baseline;
        background: white;
        z-index: 1000;
      `}
    `;
  }}
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 0;
  background: none;
`;

const LogoSize = styled.div`
  height: 100%;
`;

const DrawerToggleSize = styled.div`
  margin-top: 0%;
  margin-right: 20px;
  display: flex;
`;

const DesktopOnly = styled.div`
  flex: 1;
  display: flex;
  ${media.maxSmallDesktop`
    display: none;
  `}
`;

const LetsTalkButton = styled(Button)`
  height: auto;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4em;
  padding: 0 15px;
`;

const LanguageChangeLinkA = styled(A)`
  color: #51718;
  font-weight: bold;
`;

const LanguageChangeLink = ({lang}) => (
  <LinkContainer>
    <LanguageChangeLinkA href={lang === 'he' ? '/' : '/he/'}>
      {lang === 'he' ? 'English' : 'עברית'}
    </LanguageChangeLinkA>
  </LinkContainer>
);

const Toolbar = ({drawerToggleClicked, onClick, navItems, lang}) => {
  const [bodyScrolled, setBodyScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const newBodyScrolled = document.documentElement.scrollTop > 5;
      if (newBodyScrolled !== bodyScrolled) {
        setBodyScrolled(newBodyScrolled);
      }
    };
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [bodyScrolled, setBodyScrolled]);

  return (
    <ToolbarContainer bodyScrolled={bodyScrolled}>
      <Items>
        <LogoSize>
          <Logo />
        </LogoSize>
        <DrawerToggleSize>
          <DrawerToggle onClick={drawerToggleClicked} />
        </DrawerToggleSize>
        <DesktopOnly>
          <NavigationItems navItems={navItems} onClick={onClick} />
          <LinkContainer>
            <Link onClick={onClick} to="LetsTalk" spy smooth offset={-70} duration={500}>
              <LetsTalkButton>Let&apos;s Talk</LetsTalkButton>
            </Link>
          </LinkContainer>
        </DesktopOnly>
        <LanguageChangeLink lang={lang} />
      </Items>
    </ToolbarContainer>
  );
};

export default Toolbar;
