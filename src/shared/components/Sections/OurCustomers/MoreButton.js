import React from 'react';
import { media } from '../../../theme';
import styled, { keyframes } from 'styled-components';
import moreSVG from '../../../assets/icons/more-icon.svg';

const upDownAnim = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-0.5rem); }
`;

const MoreButtonWrapper = styled.div`
  cursor: pointer;
  position: relative;
  align-self: center;
  top: 3.6rem;
  
  &&{
    padding: 0;
  }

  animation: ${upDownAnim} 0.5s infinite alternate;
  animation-play-state: paused;

  ${media.minSmallDesktop`
    top: 3rem;
  `}

  :hover{
    animation-play-state: running;
  }
`;

const MoreButtonIcon = styled.img`
  width: 7rem;
  height: auto;
  transform: rotate(${({ showMore }) => showMore ? '180deg' : 0 });
`;

const MoreButton = props => (
  <MoreButtonWrapper {...props}>
    <MoreButtonIcon
      src={moreSVG}
      showMore={props.showMore}
      />
  </MoreButtonWrapper>
);

export default MoreButton;