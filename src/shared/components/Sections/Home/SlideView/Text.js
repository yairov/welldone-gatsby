import React from 'react';
import styled, {css} from 'styled-components';
import {RichText} from 'prismic-reactjs';
import {Link} from 'react-scroll';
import Button from '../../../UI/Button/Button';
import VideoImage from '../../../../components/VideoImage';
import {media} from '../../../../theme/media';
import {Header as BaseHeader, SubHeader as BaseSubHeader} from '../../../UI/Typography';
import playIcon from '../../../../assets/icons/play.png';

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

const Header = styled(BaseHeader)`
  color: #1fabf3;
  padding: 0 6rem;
  margin-bottom: 1.5rem;
  ${media.minSmallTablet`
    padding: 0;
    font-size: 3.5rem;
    text-align: start;
  `}
`.withComponent('h1');

const SubTextWrapper = styled(BaseSubHeader)`
  ${applyRenderCss}

  margin-bottom: 1.5rem;
  flex-direction: column;
  font-weight: 400;
  width: 80%;
  ${media.minSmallTablet`
  font-size: 2.1rem;
  margin-bottom:5rem;
  text-align: start;
`}
  /* a {
    display: inline;
  } */
  img {
    display: inline;
    width: 1em;
    text-align: middle;
    position: relative;
    top: 0.2em;
  }
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

const SmallVideoImage = styled(VideoImage)`
  position: relative;
  height: 6em;
  width: 9em;
`;

const MyLink = styled(Link)`
  width: 14em;
  button {
    font-size: 1.5em !important;
  }

  x-margin: 0 auto;
`;

const Text = ({welldoneVideo, subText, header, onVideoPlay}) => {
  return (
    <Wrapper>
      <Header>{header}</Header>
      <SubTextWrapper>
        We create amazing front ends and rock-solid backends while upgrading your inhouse team.
        <br />
        Boost your project's quality and your time to market without compromising your team's
        expertise, productivity and practices.
        {/* <a
          style={{cursor: 'pointer'}}
          onClick={() => {
            onVideoPlay(welldoneVideo);
          }}
        >
          {<img src={playIcon} alt="Welldone explainer video" />}
        </a> */}
      </SubTextWrapper>
      <MyLink to={'LetsTalk'} spy smooth offset={-70} duration={500}>
        <Button btnType="Success">Start Today!</Button>
      </MyLink>
      {/* <Prompt>{subText}</Prompt> */}
      {/* <SmallVideoImage
        src={welldoneVideo.thumbnail_url}
        alt={'Watch explainer video'}
        onClick={() => {
          onVideoPlay(welldoneVideo);
        }}
      /> */}
      {/* <Boosts>
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
      <ButtonAndText>
        <Text> {props.spice_up_project}</Text>
        <ButtonSize>
          <Link onClick={props.closed} to={'LetsTalk'} spy smooth offset={-70} duration={500}>
            <Button btnType="Success">{props.button}</Button>
          </Link>
        </ButtonSize>
      </ButtonAndText>
    */}
    </Wrapper>
  );
};
export default Text;
