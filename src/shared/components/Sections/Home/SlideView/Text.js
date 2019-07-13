import React from 'react';
//import classes from './Text.css';
import styled, {css} from 'styled-components';
import {media} from '../../../../theme/media';
import {Header as BaseHeader, SubHeader as BaseSubHeader} from '../../../UI/Typography';
import Button from '../../../UI/Button/Button';
import {Link} from 'react-scroll';
const applyRenderCss = css`
  div {
    padding: 0 2rem;
    font-weight: 300;
    ${media.minSmallDesktop`
      padding: 0;
    `}
    h1 {
      font-weight: 500;
      ${media.minSmallDesktop`
        font-size: 2.5rem;
      `}
      strong {
        font-weight: 500;
        color: #1FABF3;;
      }
    }
    p {
      font-size: 2rem;
      display: inline;
      ${media.minSmallDesktop`
        font-size: 1.5rem;
      `}
      }
      &:last-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

const Wrapper = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  ${media.minSmallTablet`
    align-items: stretch;
    margin-right: 2rem;
    width:80%;
  `}
`;

const ButtonAndText = styled.div`
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  ${media.maxSmallDesktop`
    display:none;
  `}
`;
const ButtonSize = styled.div`
  height: 3.5rem;
  width: 18rem;

  ${media.maxSmallDesktop`
    display:none;
  `}
`;
const Text = styled.div`
  color: #000000;
  padding: 1rem 0;
  font-weight: bold;
  margin-bottom: 0.5rem;
  ${media.minSmallDesktop`
    padding: 0;
    font-size: 1.3rem;
    padding: 0 ;
  `}
`;

const Header = styled(BaseHeader)`
  color: #1fabf3;
  padding: 0 6rem;
  margin-bottom: 1.5rem;
  ${media.minSmallTablet`
    padding: 0;
    font-size: 3.5rem;
    text-align: start;
  `}
`;
const SubTextWrapper = styled(BaseSubHeader)`
  ${applyRenderCss}
  display: flex;
  margin-bottom: 1.5rem;
  flex-direction: column;
  font-weight: 400;
  width: 80%;
  ${media.minSmallTablet`
  font-size: 2.1rem;
  margin-bottom:5rem;
  text-align: start;
`}
`;

const Boosts = styled.div`
  display: flex;
  flex-direction: row;
  b {
    color: #1fabf3;
  }
`;

const Boost = styled.div`
  border: 1px solid #1fabf3;
  width: 13rem;
  height: 10rem;
  padding: 0.5rem;
  margin-right: 1rem;
`;

const text = props => {
  return (
    <Wrapper>
      <Header>{props.header}</Header>
      <SubTextWrapper>{props.subText}</SubTextWrapper>
      <Boosts>
        <Boost>
          <b>Boost your Front End.</b> Create an amazing, pixel perfect and responsive UI.{' '}
        </Boost>
        <Boost>
          <b>Boot your Quality and Practices.</b> architecture and best practices
        </Boost>
        <Boost>
          <b>Boot your Productivity.</b> architecture and best practices
        </Boost>
        <Boost>
          <b>Boot your Team.</b> architecture and best practices
        </Boost>
      </Boosts>
      {/* <ButtonAndText>
        <Text> {props.spice_up_project}</Text>
        <ButtonSize>
          <Link
            onClick={props.closed}
            activeClass="NavigationItem-module--active--3NifW"
            to={'LetsTalk'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button btnType={'Success'}>{props.button}</Button>
          </Link>
        </ButtonSize>
      </ButtonAndText> */}
    </Wrapper>
  );
};
export default text;
