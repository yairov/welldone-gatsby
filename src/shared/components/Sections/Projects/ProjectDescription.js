import React from 'react';
import styled from 'styled-components';
import AnimateHeight from 'react-animate-height';
import {RichText} from 'prismic-reactjs';
import {media} from 'shared/theme';

const unextendedLength = 77;
const unextendedSuffix = '...';
const extendDuration = 1000;

const getShortDescription = description => {
  const longDescription = description.toString().slice(0, unextendedLength);
  if (!longDescription.includes(' ', 0)) {
    return longDescription + unextendedSuffix;
  }

  const endIndex = longDescription.search(/\s\S*\s?$/);
  return longDescription.slice(0, endIndex) + unextendedSuffix;
};

const DescriptionWrapper = styled(AnimateHeight).attrs(({extend}) => ({
  duration: extendDuration,
  height: extend ? 'auto' : 35,
  extend: undefined,
}))`
  position: relative;
  margin: 0;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 100;
  overflow: hidden;
  min-height: 4.2rem;

  ${media.minSmallDesktop`
		text-align: start;
    font-size: 1.4rem;
  `}

  p {
    margin-bottom: 1rem;
  }
`;

const Description = styled.div`
  opacity: ${({show}) => (show ? 1 : 0)};
  transition: opacity 1s ease-out 100ms;
`;

const ShortDescription = styled(Description)`
  position: absolute;
  top: 0;
  left: 0;
`;

const ProjectDescription = ({text, extend}) => {
  const shortText = React.useMemo(() => getShortDescription(RichText.asText(text)), [text]);
  const longText = React.useMemo(() => RichText.asText(text), [text]);

  return (
    <DescriptionWrapper extend={extend}>
      <Description show={extend}>{longText}</Description>
      <ShortDescription show={!extend}>{shortText}</ShortDescription>
    </DescriptionWrapper>
  );
};

export default ProjectDescription;
