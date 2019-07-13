import React from 'react';
import {RichText} from 'prismic-reactjs';
import styled from 'styled-components';
import {Header as BaseHeader, SubHeader as BaseSubHeader} from '../../UI/Typography';
import {media} from '../../../theme';

const Root = styled.div`
  flex: 1;
  padding: 1rem 1rem;
  margin: 0 0.5rem;
  transition: all 150ms cubic-bezier(0.25, 0.25, 0.75, 0.75);
`;

const MyImageWrap = styled.div`
  position: relative;
  height: 25rem;
  flex: 1;

  ${media.maxSmallDesktop`
   height: 35rem;
    height: 35rem;
  `}
`;

const MyImage = styled.img`
  width: 100%;
  height: 25rem;
  position: absolute;
  ${media.maxSmallDesktop`
   height: 35rem;
    height: 35rem;
  `}
`;

const MyPlayIndicator = styled.img`
  width: 100%;
  height: 25rem;
  position: absolute;
  background-color: transparent;
  &:hover {
    transition: background-color 300ms linear;
    background-color: rgba(0, 0, 0, 0.3);
  }
  ${media.maxSmallDesktop`
    height: 35rem;
    height: 35rem;
    background-color: rgba(0, 0, 0, 0.3);
  `}
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

  ${media.maxSmallDesktop`
    padding: 0 25rem;
  `}
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
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
export default function ProjectItem({
  layers: layersMeta,
  project: {title, description, thumbnail, video, customer, technologies, layers},
}) {
  return (
    <Root>
      <MyImageWrap>
        {/* <MyImage src={thumbnail.url} /> */}
        {/* <MyPlayIndicator /> */}
      </MyImageWrap>
      <Title>{RichText.asText(title)}</Title>
      {/* <Layers {...{layers, layersMeta}} /> */}
      <SubTitle>{RichText.render(description)}</SubTitle>
    </Root>
  );
}
