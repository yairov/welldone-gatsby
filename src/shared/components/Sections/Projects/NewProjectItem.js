import React, {Component} from 'react';
// import ReactPlayer from 'react-player';
import {RichText} from 'prismic-reactjs';
import styled from 'styled-components';
import {Header as BaseHeader, SubHeader as BaseSubHeader} from '../../UI/Typography';
// import Backdrop from '../../UI/Backdrop/Backdrop';
import {media} from '../../../theme';
import playIcon from '../../../assets/icons/play.png'

const Root = styled.div`
  width: 36rem;
  padding: 2rem 0;

  ${media.minSmallDesktop`
    width: 26rem;
    padding: 0 2rem;
  `}
`;

const Image = styled.a`
  display: block;
  width: 25rem;
  height: 25rem;
  margin: auto;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;

  :after {
    content: "";
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
    transition: opacity .25s ease-in-out;
  }

  :hover:after {
    opacity: 1;
  }
`;

const Title = styled(BaseHeader)`
  margin: 1rem 0 0.5rem 0;
  text-transform: uppercase;
`;

const SubTitle = styled(BaseSubHeader)`
  font-weight: 400;
  p {
    margin-bottom: 1rem;
  }
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;

  /* ${media.maxSmallDesktop`
    padding: 0 25rem;
  `} */
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 0.5rem;

  ${media.maxSmallDesktop`
    justify-content: center;
  `}
`;

function Layers({layers, layersMeta}) {
  console.log({layers, layersMeta});
  return (
    <Icons>
      {layers
        .map(({layer: {id}}) => layersMeta.find(l => l.id === id))
        .map(({data: {icon, title}}) => ({icon, title: title[0].text}))
        .map(({icon, title}) => (
          <Icon key={title} alt={title} title={title} src={icon.url} />
        ))}
    </Icons>
  );
}
export default function ProjectItem({
  layers: layersMeta,
  project: {title, description, thumbnail, video, customer, technologies, layers},
  onVideoPlay
}) {
  console.log(title[0].text, thumbnail.url);
  // console.log('onVideoPlay:', onVideoPlay);
  return (
    <Root>
      <Image
        src={thumbnail.url}
        alt={RichText.asText(title)}
        onClick={() => {onVideoPlay(video.embed_url); console.log('projitemvideourl', video);}}
      />
      <Title>{RichText.asText(title)}</Title>
      <Layers {...{layers, layersMeta}} />
      <SubTitle>{RichText.render(description)}</SubTitle>
    </Root>
  );
}
