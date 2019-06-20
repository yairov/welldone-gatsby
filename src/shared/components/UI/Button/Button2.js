import styled from 'styled-components';
import {media} from '../../../theme/media';

const Button = styled.button`
  color: white};
  background: #1FABF3;
  padding: 0.8rem;
  border-radius: 4px;
  border: none;
  width: ${({fullOnMobile}) => (fullOnMobile ? '100%' : '12rem')};
  font-size: 1rem;
  cursor: pointer;
  ${media.minSmallDesktop`
    width:10rem;
  `}
  &:focus {
    outline: 0;
  }
`;

export default Button;
