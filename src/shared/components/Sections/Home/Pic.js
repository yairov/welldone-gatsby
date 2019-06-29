import React from 'react';
import styled from 'styled-components';
import {media} from '../../../theme/media';

const Image = styled.img`
  max-width: 35rem;
  max-height: 30rem;
  ${media.minSmallDesktop`
    max-height: 35rem;
  `}
`;

const Pic = ({photo}) => {
  return <Image src={photo} />;
};

export default Pic;
