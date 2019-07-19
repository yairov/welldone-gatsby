import styled from 'styled-components';
import playIcon from '../assets/icons/play.png';
import {media} from '../theme/media';

const VideoImage = styled.a`
  display: block;
  width: 25rem;
  height: 25rem;
  margin: auto;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;

  :after {
    content: '';
    background-image: url(${playIcon});
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(0.5, 0.5, 0.5, 0.5);
    font-size: 2rem;
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
  }

  :hover:after {
    opacity: 1;
  }

  ${media.maxSmallDesktop`
  :after {
    opacity: 1;
  }
  `}
`;

export default VideoImage;
