import React from 'react';
import styled from 'styled-components';
import {media} from 'shared/theme/media';
import A from 'shared/components/A';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItemsContainer = styled.ul`
  margin: 0;
  margin-left: auto;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  ${media.minSmallDesktop`
    flex-direction: row;
  `}
`;

const NavigationItems = ({navItems, onClick}) => {
  return (
    <NavigationItemsContainer>
      {navItems.map(navItem => (
        // TODO: link to where?
        <NavigationItem
          link={navItem.header[0].text}
          key={navItem.header[0].text}
          onClick={onClick}
        >
          {navItem.header[0].text}
        </NavigationItem>
      ))}
      {/*<NavigationItem onClick={onClick} link="Projects">*/}
      {/*  Latest Projects*/}
      {/*</NavigationItem>*/}
      {/*<NavigationItem onClick={onClick} link="CustomersSays">*/}
      {/*  What Customers Says*/}
      {/*</NavigationItem>*/}
      {/*<NavigationItem onClick={onClick} link="WhatWeDo">*/}
      {/*  What We Do*/}
      {/*</NavigationItem>*/}
      {/*<NavigationItem onClick={onClick} link="CoreValues">*/}
      {/*  Who We Are*/}
      {/*</NavigationItem>*/}
      <NavigationItem simple>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <A href="https://medium.com/welldone-software" rel="noopener" target="_blank">
          Blog
        </A>
      </NavigationItem>
      {/*<NavigationItem onClick={onClick} link="Join">*/}
      {/*  Join Us*/}
      {/*</NavigationItem>*/}
    </NavigationItemsContainer>
  );
};

export default NavigationItems;
