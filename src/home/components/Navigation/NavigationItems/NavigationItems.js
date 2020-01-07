import React from 'react';
import styled from 'styled-components';
import {media} from 'shared/theme/media';
import NavigationItem from './NavigationItem/NavigationItem';

const A = styled.a`
  color: #51718c;
  text-decoration: underline;
  :visited,
  :active,
  :focus,
  :hover {
    color: #51718c;
    text-decoration: underline;
  }
`;

const NavigationItemsContainer = styled.div`
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

const NavigationItems = ({onClick}) => {
  return (
    <Margin>
      <NavigationItemsContainer>
        <NavigationItem onClick={onClick} link="Projects">
          Latest Projects
        </NavigationItem>
        <NavigationItem onClick={onClick} link="CustomersSays">
          What Customers Say
        </NavigationItem>
        <NavigationItem onClick={onClick} link="WhatWeDo">
          What We Do
        </NavigationItem>
        <NavigationItem onClick={onClick} link="CoreValues">
          Who We Are
        </NavigationItem>
        <NavigationItem simple>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <A href="https://medium.com/welldone-software" rel="noopener" target="_blank">
            Blog
          </A>
        </NavigationItem>
        <NavigationItem onClick={onClick} link="Join">
          Join Us
        </NavigationItem>
      </NavigationItemsContainer>
    </Margin>
  );
};

export default NavigationItems;
