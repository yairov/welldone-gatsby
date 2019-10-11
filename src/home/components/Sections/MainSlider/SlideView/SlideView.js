import React from 'react';
import styled from 'styled-components';
import {media} from 'shared/theme/media';
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

const SlideView = ({welldoneVideo, onVideoPlay}) => (
  <Root>
    <Flex>
      <Text
        header="Your Full-Stack Secret Sauce"
        subText="Supreme architectural and technical expertise provided by experienced full-stack polyglots with a holistic approach" // eslint-disable-line max-len
        button="Hire our expert team today"
        spice_up_project="Boost both your project and your team's expertise, productivity and practices."
      />
      <BottleSize
        style={{cursor: 'pointer'}}
        onClick={() => {
          onVideoPlay(welldoneVideo);
        }}
      >
        <Bottle />
      </BottleSize>
    </Flex>
  </Root>
);

export default SlideView;