import React from 'react';
import styled from 'styled-components';
// import {BoldText} from 'shared/components/UI/Typography';
import {media} from 'shared/theme/media';

const Root = styled.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background-position: top -20px left -20px;
  border: 1px solid #deeefc;
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
  color: #41566e;
  margin-bottom: 1rem;
`;

const InfoBox = ({src, header, children, background}) => {
  return (
    <Root>
      <Icon src={src} />
      <Wrapper>
        <Header>{header}</Header>
        {children}
      </Wrapper>
      <BackgroundImg src={background} />
    </Root>
  );
};
export default InfoBox;
