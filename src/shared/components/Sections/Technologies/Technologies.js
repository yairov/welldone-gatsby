import React from 'react';
import styled from 'styled-components';
import {media} from '../../../theme'
import Slider from '../../UI/Slider/Slider';
import {
    Header as BaseHeader,
  } from '../../UI/Typography.js';



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
  let hrefLink = '#'
  return items
    .sort((l, r) => l.order - r.order)
    .map((items, idx) => (
      <a key={idx} title={items.data.title} href={hrefLink}>
        <CustomerIcon src={items.data.icon.url} />
      </a>
    ));
};

const CustomerIcons = (props) => {

  const sliders = props.items.reduce(
    (icons, icon, idx) =>
      idx % MAX_ICONS === 0
        ? [...icons, [icon]]
        : icons.map((innerIcons, innerIdx) =>
            innerIdx === Math.floor(idx / MAX_ICONS) ? [...innerIcons, icon] : innerIcons
          ),
    []
  );

  return (
    <Root id="Technologies">
    <Title>LEADERS IN TOP TECHNOLOGIES</Title> 
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
        <RenderItems items={props.items} />
      </Wrapper>
    </Root>
  );
};

export default CustomerIcons;
