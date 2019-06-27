import React from 'react';



import GlobalStyle from '../../../theme/globalStyle';

import styled from 'styled-components';
import triangle from '../../../../shared/assets/icons/triangle1.svg';
import lefttopbg from '../../../../shared/assets/icons/lefttopbg.svg';
import leftbottombg from '../../../../shared/assets/icons/lefttopbg.svg';
import {media} from '../../../theme';
import SlideView from './SlideView/SlideView';


const BackgroundTriangle = styled.img.attrs({src: triangle})`

height: 60rem;
position: absolute;
right: -24rem;
top: -6rem;
width: 90rem;
z-index: -1;
`;

const LeftTopTriangle = styled.img.attrs({
src: lefttopbg,
})`

position: absolute;
left: -16rem;
top: -10rem;
z-index: -1;
width: 40rem;
transform: rotate(-202deg);
height: 30rem;
`;

const LeftBottomTriangle = styled.img.attrs({src: leftbottombg})`

position: absolute;
left: -7rem;
top: 24rem;
z-index: -1;
width: 20rem;
transform: rotate(143deg);
height: 24rem;
`;

const Content = styled.div`
position: relative;
overflow-x: hidden;
padding-top: 7rem;
${media.minSmallDesktop`
padding-top: 0;
`}


& > div {
  ${media.minSmallDesktop`
    padding: 0 10rem;
    padding-right: 0;
  `}
}
`;

const Size = styled.div`
    height: 65rem;
    ${media.minSmallDesktop`
        height: 50rem;
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
