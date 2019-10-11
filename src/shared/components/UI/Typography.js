import styled from 'styled-components';
import {media} from '../../theme';

export const Header = styled.div`
  font-size: 3.3rem;

  margin: 0;
  font-weight: 500;
  text-align: center;
  ${media.minSmallDesktop`
    font-size: 2rem;
    text-align: start;
  `}
`;

export const Header2 = styled.div`
  font-size: 3.3rem;
  margin: 0;
  font-weight: 500;
  text-align: center;
  color: #4b4b4b;
  ${media.minSmallDesktop`
    font-size: 2.7rem;
    text-align: start;
  `}
`;

export const LeftHeader = styled.div`
  font-size: 3.3rem;
  margin: 0;
  font-weight: 500;
  text-align: center;
  margin: auto;
  margin-left: 0rem;
  ${media.minSmallDesktop`
  font-size: 2rem;
  text-align: start;
`}
`;

export const FooterHeader = styled(Header)`
  /* font-size: 20px; */
  font-weight: 300;
  margin-bottom: 12px;
`;

export const HeaderBold = styled(Header)`
  font-weight: 700;
`;

export const HeaderLight = styled(Header)`
  font-weight: 100;
  font-size: ${({fontSize}) => fontSize}px;
`;

export const SubHeader = styled(Header)`
  font-size: 1.6rem;
  font-weight: 400;
  ${media.minSmallDesktop`
    font-size: 1.4rem;
  `}
`;

export const MediumHeader = styled(Header)`
  font-size: 2.8rem;
  font-weight: 300;
`;

export const SubText = styled.div`
  margin: 0;
  color: #51718c;
`;

export const QuoteText = styled(SubText)`
  font-size: 2.4rem;
  font-weight: 100;
`;

export const MediumTitle = styled(Header)`
  font-size: 2rem;
  font-weight: 400;
`;

export const BoldText = styled(SubText)`
  font-weight: 500;
  font-size: 1.4rem;
`;
