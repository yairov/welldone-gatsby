import React from 'react';
import {RichText} from 'prismic-reactjs';
import styled from 'styled-components';
import {Header as BaseHeader} from 'shared/components/UI/Typography';
import {media} from 'shared/theme';
import _VideoImage from 'shared/components/VideoImage';
import useBooleanState from 'shared/hooks/useBooleanState';
import Description from './ProjectDescription';

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

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
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

const MoreButton = styled.div`
  cursor: pointer;
  width: 100%;
  color: #1fabf3;
  text-align: center;
  margin-top: 5px;
  font-size: 1.25em;
`;

function Layers({layers, layersMeta}) {
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

function ProjectItem({
  layers: layersMeta,
  project: {title, description, thumbnail, video, layers},
  onVideoPlay,
}) {
  const [expendDescription, toggleExpendDescription] = useBooleanState(false);

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
      <Description text={description} extend={expendDescription} />
      <MoreButton onClick={toggleExpendDescription}>
        {expendDescription ? 'Less...' : 'More...'}
      </MoreButton>
    </Root>
  );
}

export default ProjectItem;
