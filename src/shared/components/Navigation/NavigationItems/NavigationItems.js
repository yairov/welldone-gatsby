import React from 'react';
import styled from 'styled-components';
import {media} from 'shared/theme/media';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = styled.div`
  margin: auto;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  ${media.minSmallDesktop`
        flex-direction: row;
  `}
`;

const Margin = styled.div`
  margin: auto 0;
`;

const navigationItems = ({closed}) => {
  // console.log(props)
  return (
    <Margin>
      <NavigationItems>
        <NavigationItem closed={closed} link="Projects">
          Latest Projects
        </NavigationItem>
        <NavigationItem closed={closed} link="CustomersSays">
          What Customers Says
        </NavigationItem>
        <NavigationItem closed={closed} link="WhatWeDo">
          What We Do
        </NavigationItem>
        <NavigationItem closed={closed} link="CoreValues">
          Who We Are
        </NavigationItem>
        <NavigationItem simple>
          <a href="https://medium.com/welldone-software" rel="noopener noreferrer" target="_blank">
            Blog
          </a>
        </NavigationItem>
        <NavigationItem closed={closed} link="Join">
          Join Us
        </NavigationItem>
      </NavigationItems>
    </Margin>
  );
};

export default navigationItems;
