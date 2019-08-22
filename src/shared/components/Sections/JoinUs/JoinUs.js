import React from 'react';
import styled from 'styled-components';
import {Element} from 'react-scroll';
import {RichText} from 'prismic-reactjs';
import {media} from '../../../theme/media';
import {Header as BaseHeader} from '../../UI/Typography';

const Wrapper = styled(Element)`
  background-image: linear-gradient(257deg, #d9f1f5, #347cac);
  position: relative;
  padding: 4rem 2rem;

  &&& {
    ${media.minSmallDesktop`
    padding: 4rem 13rem;
  `} /* padding-bottom: 2rem;
    padding-top: 2rem; */
  }
`;

const Header = styled(BaseHeader)`
  color: white;

  ${media.minSmallDesktop`
    font-size:2rem;
  `}
`;

const Content = styled.div`
  font-size: 1.5rem;
  color: white;
  text-align: center;
  flex: 1;
  max-width: 70%;
  ${media.minSmallMobile`
    text-align: start;
  `}

  ${media.minSmallDesktop`
    max-width: 29rem;
  `}

  div {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    ${media.minSmallDesktop`
    
      max-height: 34rem;
      align-items: flex-start;
      flex-wrap: wrap;
      /* text-align: start; */
    `}
  }
  p {
    z-index: 2;
    margin-top: 2rem;
    ${media.minSmallDesktop`
      max-width: 26rem;
      text-align: left;
    `}
  }
`;

const Image = styled.img`
  position: absolute;
  right: 8rem;
  height: 113%;
  bottom: 0;
  display: none;
  top: -5.8rem;
  ${media.minSmallDesktop`
    display: flex;
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.minSmallDesktop`
    align-items: flex-start;
    flex-direction: row;
  `}
`;

const JoinUs = ({joinUs: {primary}}) => {
  return (
    <Wrapper id="Join">
      <Header>{RichText.render(primary.title)}</Header>
      <ContentWrapper>
        <Content>{RichText.render(primary.content)}</Content>
        <Content>{RichText.render(primary.content2)}</Content>
      </ContentWrapper>
      <Image src={primary.img.url} />
    </Wrapper>
  );
};

export default JoinUs;
