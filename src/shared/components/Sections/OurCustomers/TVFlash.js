import styled from 'styled-components';
import posed from 'react-pose';
import {media} from '../../../theme';
import horizontalFlashSVG from '../../../assets/graphics/horizontal-flash.svg';
import verticalFlashSVG from '../../../assets/graphics/vertical-flash.svg';

const TVFlashAnim = posed.div({
  show: {
    scale: 1,
    transition: {
      duration: 200,
    },
  },
  hide: {
    scale: 0,
    transition: {
      duration: 400,
    },
  },
});

const TVFlash = styled(TVFlashAnim)`
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  width: 90rem;
  height: 53rem;
  top: 4rem;
  background-image: url(${verticalFlashSVG});

  ${media.minMobile`
      top: -2rem;
    `}
  ${media.minSmallDesktop`
      top: 4rem;
      width: 90rem;
      height: 18rem;
      background-image: url(${horizontalFlashSVG});
    `}
`;

export default TVFlash;
