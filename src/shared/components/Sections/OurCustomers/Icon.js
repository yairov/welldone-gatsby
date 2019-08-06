import React from 'react';
import styled from 'styled-components';
import { media } from '../../../theme';

export const PromotedIcon = styled.img`
  height: 3.5rem;
  width: auto;
  max-width: 12rem;
  z-index: 1;

  ${media.maxMobile`
  height: 6rem;
  max-width: 25rem;
`};
`;

export const RegularIcon = styled(PromotedIcon)`
  height: 4.5rem;
  
  ${media.maxMobile`
  height: 6.5rem;
  max-width: 13rem;
`};
`;