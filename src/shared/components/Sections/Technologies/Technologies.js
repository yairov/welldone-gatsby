import React from 'react';
import styled from 'styled-components';
import {media} from '../../../theme';
import Slider from '../../UI/Slider/Slider';
import {Header as BaseHeader} from '../../UI/Typography';

const Root = styled.div`
  margin-bottom: 2rem;
  & > div {
    ${media.minSmallDesktop`
        padding: 0 10rem;
      `}
  }
`;

const Wrapper = styled.div`
  display: none;
  flex-wrap: wrap;

  padding-top: 3rem;
  padding-bottom: 1rem;
  justify-content: space-between;
  & > a {
    width: 32%;
    max-height: 33%;
    margin-right: 1%;
    & > img {
      width: 100%;
    }
    ${media.minSmallDesktop`
      width: 9%;
      height: 10rem;
      padding: 0 1rem;
      padding-bottom: 5rem;
      padding-top: 2.5rem;

    `}
    &:nth-child(4) {
      margin-right: 0;
    }
  }
  ${media.minSmallDesktop`
    display: flex;
  `}
`;

const CustomerIcon = styled.img``;
const SliderWrapper = styled.div`
  padding-bottom: 3rem;
  ${media.minSmallDesktop`
    display:none;
  `}
`;
const MAX_ICONS = 3;

const IconsSliderWrapper = styled(Wrapper)`
  display: flex;
  padding-bottom: 0;
  ${media.minSmallDesktop`
    display:none;
  `}
`;
const Title = styled(BaseHeader)`
  padding: 1rem 0rem;
  font-weight: bold;
  color: #3a3b3b;
  text-align: center;
  font-size: 2.3rem;
  ${media.minSmallDesktop`
  `}
`;

const RenderItems = ({items}) => {
  return items
    .sort((l, r) => l.data.order - r.data.order)
    .map(item => (
      <a key={item.data.icon.url} title={item.data.title} href="#">
        <CustomerIcon src={item.data.icon.url} />
      </a>
    ));
};

const Technologies = ({items}) => (
  <Root id="Technologies">
    <Title>LEADERS IN TOP TECHNOLOGIES</Title>
    <Wrapper>
      <RenderItems items={items} />
    </Wrapper>
  </Root>
);

export default Technologies;
