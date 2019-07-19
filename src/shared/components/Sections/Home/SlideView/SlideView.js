import React from 'react';

// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';

import styled from 'styled-components';

import {media} from '../../../../theme/media';
import Text from './Text';
import Bottle from './Bottle';

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  flex: 1;

  ${media.minSmallDesktop`
    margin-top: 6rem;
    text-align: start;
    flex-direction: row;
  `}
`;

const BottleSize = styled.div`
  height: 42rem;
  width: 52rem;
  padding-top: 2rem;

  ${media.maxSmallDesktop`
    width: 30rem;
  `}
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  flex: 1;

  ${media.minSmallDesktop`
    text-align: start;
    flex-direction: row;
  `}
`;

const SlideView = ({video, welldoneVideo, onVideoPlay}) => (
  <Root>
    <Flex>
      <Text
        header="Your Full-Stack Secret Sauce"
        subText="Supreme architectural and technical expertise provided by experienced full-stack polyglots with a holistic approach"
        button="Hire our expert team today"
        spice_up_project="Boost both your project and your team's expertise, productivity and practices."
        welldoneVideo={welldoneVideo}
        onVideoPlay={onVideoPlay}
      />
      <BottleSize>
        <Bottle video={video} />
      </BottleSize>
    </Flex>
  </Root>
);

export default SlideView;
