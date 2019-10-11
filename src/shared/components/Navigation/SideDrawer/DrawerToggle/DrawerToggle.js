import React from 'react';
import styled from 'styled-components';
import {media} from 'shared/theme/media';

const SideDrawer = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    margin-left: 10px;
    background: #1FABF3;
    border-radius: 5px;
    margin-top: 10px; 
    &>div {
        width: 90%;
        height: 3px;
        background-color: white;
        ${media.maxMediumTablet`
        height: 2px;
    `}
        ${media.maxSmallTablet`
            height: 1px;
        `}
    }
    ${media.minSmallDesktop`
        display: none;
    
`}
    ${media.maxMediumTablet`
    width: 35px;
    height: 35px;
    `}
    ${media.maxSmallTablet`
    width: 30px;
    height: 30px;
    `}
`;

const drawerToggle = ({clicked}) => (
  <SideDrawer onClick={clicked}>
    <div />
    <div />
    <div />
  </SideDrawer>
);

export default drawerToggle;
