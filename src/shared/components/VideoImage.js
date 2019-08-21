import styled from 'styled-components';
import playIcon from '../assets/icons/play.svg';
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
    background-size: 16%;
    background-repeat: no-repeat;
    background-position: bottom 1rem right 1rem;
    font-size: 2rem;
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    transition: opacity 0.25s ease-in-out;
  }

  :hover {
    :after {
      background-color: #c0c0c0;
      opacity: 0.4;
    }
  }
`;

export default VideoImage;
