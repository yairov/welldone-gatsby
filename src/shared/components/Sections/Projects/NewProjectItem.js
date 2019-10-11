import React from 'react';
// import ReactPlayer from 'react-player';
import {RichText} from 'prismic-reactjs';
import styled from 'styled-components';
import {Header as BaseHeader, SubHeader as BaseSubHeader} from 'shared/components/UI/Typography';
// import Backdrop from 'shared/components/UI/Backdrop/Backdrop';
import {media} from 'shared/theme';
import _VideoImage from 'shared/components/VideoImage';

const Root = styled.div`
  width: 36rem;
  padding: 2rem 0;

  ${media.minSmallDesktop`
    width: 26rem;
    padding: 0 2rem;
  `}
`;

const Title = styled(BaseHeader)`
  margin: 1rem 0 0.5rem 0;
  text-transform: uppercase;
`;

const SubTitle = styled(BaseSubHeader)`
  font-weight: 100;
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

const VideoImage = styled(_VideoImage)`
  border: solid 1px #ddd;
`;

const Layers = ({layers, layersMeta}) => {
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
};

const ProjectItem = ({
  layers: layersMeta,
  project: {title, description, thumbnail, video /* , customer, technologies */, layers},
  onVideoPlay,
}) => {
  return (
    <Root>
      <VideoImage
        src={thumbnail.url}
        alt={RichText.asText(title)}
        onClick={() => {
          onVideoPlay(video);
        }}
      />
      <Title>{RichText.asText(title)}</Title>
      <Layers layers={layers} layersMeta={layersMeta} />
      <SubTitle>{RichText.render(description)}</SubTitle>
    </Root>
  );
};

export default ProjectItem;
