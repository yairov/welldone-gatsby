import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styled, {css} from 'styled-components';
import {media} from '../../../theme/media';
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

const navigationItems = props => {
  // console.log(props)
  return (
    <Margin>
      <NavigationItems>
        <NavigationItem closed={props.closed} link="Projects">
          Latest Projects
        </NavigationItem>
        <NavigationItem closed={props.closed} link="CustomersSays">
          What Customers Says
        </NavigationItem>
        <NavigationItem closed={props.closed} link="WhatWeDo">
          What We Do
        </NavigationItem>
        <NavigationItem closed={props.closed} link="CoreValues">
          Who We Are
        </NavigationItem>
        <NavigationItem simple>
          <a href="https://medium.com/welldone-software" rel="noopener noreferrer" target="_blank">
            Blog
          </a>
        </NavigationItem>
        <NavigationItem closed={props.closed} link="Join">
          Join Us
        </NavigationItem>
      </NavigationItems>
    </Margin>
  );
};

export default navigationItems;
