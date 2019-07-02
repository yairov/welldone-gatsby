import React from 'react';
import styled from 'styled-components';
// import {BoldText} from '../../../UI/Typography';
import {media} from '../../../../theme/media';

const Root = styled.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background-position: top -20px left -20px;
  border: 1px solid #DEEEFC;
  padding: 3rem;
  height: 22rem;
  background-color: white;
  margin-right: 1rem;
  ${media.minSmallDesktop`
    margin-right: 0;
    width:25%;
    background-color: transparent;
  `}
`;

const Icon = styled.img`
  height: 5rem;
  width: 5rem;
  z-index: 1;
`;

const Wrapper = styled.div`
  margin-top: 2rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  & > div {
    & > p {
      font-size: 1.4rem;
    }
  }
`;

const BackgroundImg = styled.img`
  z-index: 0;
  top: -2rem;
  position: absolute;
  left: -3rem;
  width: 19rem;
  height: 19rem;
`;

const Header = styled.div`
margin-bottom: 1rem;
margin: 0;
font-weight: 500;
font-size: 1.4rem;
color: #41566E;
margin-bottom: 1rem;
`;

const InfoBox = (props) => {

  return (
    <Root>
    <Icon src={props.src} />
    <Wrapper>
      <Header>{props.header}</Header>
      {props.children}
    </Wrapper>
    <BackgroundImg src={props.background} />
  </Root>
  );
  
};
export default InfoBox;
