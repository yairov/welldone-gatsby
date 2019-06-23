import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import styled, {css} from 'styled-components'
import {media} from '../../../theme/media';
const NavigationItems = styled.div`
    margin: 0;
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


const navigationItems = (props) => {
   // console.log(props)
    return (    
    <NavigationItems >
        <NavigationItem closed={props.closed} link="Projects" >Latest Projects</NavigationItem> 
        <NavigationItem closed={props.closed} link="CustomersSays" >What Customers Says</NavigationItem>
        <NavigationItem closed={props.closed} link="CoreValues" >Who We Are</NavigationItem> 
        <NavigationItem closed={props.closed} link="WhatWeDo" >What We Do</NavigationItem> 
        <NavigationItem closed={props.closed} link="Join" >Join Us</NavigationItem>

    </NavigationItems>
    );
}

export default navigationItems;