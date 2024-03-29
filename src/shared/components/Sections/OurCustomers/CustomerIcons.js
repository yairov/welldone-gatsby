import React from 'react';
import styled from 'styled-components';
import {media} from '../../../theme';
import Slider from '../../UI/Slider/Slider';

const Root = styled.div`
    visibility: ${props => props.seeMore ? "visible" : "hidden"};
    transition: ${props => props.seeMore ? "all 1s ease-out" : "none"};
    opacity: ${props => props.seeMore ? 1 : 0};
    max-height: ${props => props.seeMore ? '100%' : 0};

`;

const Wrapper = styled.div`
  display: none;
  flex-wrap: wrap;
  padding-top: 3rem;
  padding-bottom: 3rem;
  justify-content: space-between;
  & > a {
    width: 32%;
    max-height: 33%;
    margin-right: 1%;
    & > img {
      width: 100%;
      height: 100%;
    }
    ${media.minSmallDesktop`
      width: 15%;
      height: 7rem;
      margin-bottom: 3rem;
    `}
    &:nth-child(4) {
      margin-right: 0;
    }
  }
  ${media.minSmallDesktop`
    padding: 2rem;
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
const MAX_ICONS = 9;

const IconsSliderWrapper = styled(Wrapper)`
  display: flex;
  padding-bottom: 0;
  ${media.minSmallDesktop`
    display:none;
  `}
`;

const RenderItems = ({items}) => {

  return items
    .sort((l, r) => l.order - r.order)
    .map(({data}, idx) => (
      <a key={idx} title={data.title} href={data.website.url} target="_blank">
        <CustomerIcon src={data.white_logo.url} />
      </a>
    ));
};

const CustomerIcons = ({items, seeMore}) => {

  const sliders = items.reduce(
    (icons, icon, idx) =>
      idx % MAX_ICONS === 0
        ? [...icons, [icon]]
        : icons.map((innerIcons, innerIdx) =>
            innerIdx === Math.floor(idx / MAX_ICONS) ? [...innerIcons, icon] : innerIcons
          ),
    []
  );

  return (
    <Root seeMore={seeMore}>
      <SliderWrapper>
        <Slider>
            {sliders.map((sliderItems, idx) => (
                <IconsSliderWrapper key={idx}>
                <RenderItems items={sliderItems} />
                </IconsSliderWrapper>
            ))}
            </Slider>
      </SliderWrapper>
      <Wrapper>
        <RenderItems items={items} />
      </Wrapper>

    </Root>
  );
};

export default CustomerIcons;
