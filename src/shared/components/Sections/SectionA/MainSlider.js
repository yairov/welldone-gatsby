import React from 'react';



import GlobalStyle from '../../../theme/globalStyle';

import styled from 'styled-components';
import triangle from '../../../../shared/assets/icons/triangle1.svg';
import lefttopbg from '../../../../shared/assets/icons/lefttopbg.svg';
import leftbottombg from '../../../../shared/assets/icons/lefttopbg.svg';
import {media} from '../../../theme';
import SlideView from './SlideView/SlideView';


const BackgroundTriangle = styled.img.attrs({src: triangle})`
position: absolute;
right: -15rem;
top: -5rem;
width: 90rem;
z-index: -1;
height: 50rem;
`;

const LeftTopTriangle = styled.img.attrs({
src: lefttopbg,
})`

position: absolute;
left: -16rem;
top: -5rem;
z-index: -1;
width: 40rem;
transform: rotate(-202deg);
height: 30rem;
`;

const LeftBottomTriangle = styled.img.attrs({src: leftbottombg})`

position: absolute;
left: -7rem;
top: 25rem;
z-index: -1;
width: 20rem;
transform: rotate(143deg);
height: 20rem;
`;

const Content = styled.div`
position: relative;
overflow-x: hidden;
padding-top: 0rem;


& > div {
  ${media.minSmallDesktop`
    padding: 0 10rem;
    
  `}
}
`;

const Size = styled.div`
    height: 60rem;
    ${media.minSmallDesktop`
        height: 45rem;
        text-align: center;
    `}
`;


const a = (props) => {

    return (
        
        <Content>
            <GlobalStyle />
            <BackgroundTriangle />
            <LeftTopTriangle />
            <LeftBottomTriangle />
            <Size >
               <SlideView items = {props.items}/>
            </Size>    
        </Content>

    )
};
export default a;
