import React from 'react';
import styled from 'styled-components';

import {Element} from 'react-scroll';
import {RichText} from 'prismic-reactjs';
import {media} from 'shared/theme/media';
import {Header2 as BaseHeader, SubHeader as BaseSubHeader} from 'shared/components/UI/Typography';
import InfoBox from './InfoBox/InfoBox';

const Root = styled(Element)`
  padding: 4rem 1rem;
  margin-top: 0;
  ${media.minSmallDesktop`
    /* margin-bottom:5rem; */
    padding: 4rem 20rem;
    text-align: left;
  `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background-color: #f4f9fe;
  padding: 1rem 2rem;
  overflow: auto;
  flex-direction: row;
  ${media.minSmallDesktop`
    padding:0 3rem;
    background-color:transparent;
    flex-wrap: wrap;
  `}
  & > * {
    box-sizing: border-box;
  }
`;

const SubText = styled(BaseSubHeader)`
  ${media.minSmallDesktop`
    max-width: 45rem;
  `}
`;

const InfoBoxSubText = styled(SubText)`
  text-align: start;
  font-weight: 400;
  color: #51718c;
`;

const Header = styled(BaseHeader)`
  color: #4b4b4b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 3rem;

  ${media.maxSmallDesktop`
    flex-direction: column;
    /* justify-content: center; */
  `}
`;

const HeaderContent = styled.div`
  margin: auto 1rem;
`;

const Thumbnail = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-bottom: 4rem;

  ${media.maxSmallDesktop`
    margin-bottom: 0;
  `}
`;

const ConsultingAndMentoring = ({ingredients}) => {
  return (
    <Root id="WhatWeDo">
      <TitleWrapper>
        <Thumbnail src={ingredients.primary.topimage.url} />
        <HeaderContent>
          <Header>{RichText.asText(ingredients.primary.header)}</Header>
        </HeaderContent>
      </TitleWrapper>
      <Wrapper>
        {ingredients.items.map((item, idx) => (
          <InfoBox
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            header={RichText.asText(item.header)}
            background={item.background.url}
            src={item.icon.url}
          >
            <InfoBoxSubText>{RichText.asText(item.content)}</InfoBoxSubText>
          </InfoBox>
        ))}
      </Wrapper>
    </Root>
  );
};

export default ConsultingAndMentoring;
