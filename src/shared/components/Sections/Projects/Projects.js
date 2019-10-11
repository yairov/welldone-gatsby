import React from 'react';
import styled from 'styled-components';
import {RichText} from 'prismic-reactjs';
import {Element} from 'react-scroll';

import {Header2 as BaseHeader, SubHeader} from '../../UI/Typography';
import {media} from '../../../theme';
import ProjectItem from './NewProjectItem';

const Root = styled(Element)`
  margin-top: 5em;
  padding-top: 5rem;
  ${media.minSmallDesktop`
    padding: 4rem 5rem;
  `}
`;

const Header = styled(BaseHeader)`
  display: flex;
  align-items: center;

  ${media.maxSmallDesktop`
    flex-direction: column;
  `}
`;

const HeaderImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-right: 1rem;
  /* vertical-align: text-top; */
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem 0;

  ${media.minSmallDesktop`
    flex-direction: row;
    align-items: start;

  `}
`;

const SubHeaderWrapper = styled.div`
  max-width: 80%;
`;

// const MainHeader = styled(BaseHeader)`
//   color: #4b4b4b;
//   margin-bottom: 1rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   ${media.minSmallDesktop`
//   font-size: 5rem;
// `}
// `;

// const Header = styled(BaseHeader)`
//   color: #4b4b4b;
//   margin-bottom: 1rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const LatestWorkWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const TitleWrapper = styled.div`
//   display: block;
//   x-align-items: center;
//   justify-content: left;
//   x-margin-left: 3rem;
//   ${media.minSmallDesktop`
//   display: flex;
// `}
// `;

// const HeaderContent = styled.div`
//   margin: auto 1rem;
// `;

const Projects = ({projectsBlock, projects, layers, onVideoPlay}) => {
  const promoted = projects
    .map(({data}) => data)
    .sort((l, r) => (l.order || Number.MAX_VALUE) - (r.order || Number.MAX_VALUE))
    .filter(p => p.promoted === 'yes');
  // console.log('promoted projects:', promoted);
  const itemsPerLine = 4;
  const promotedLines = promoted.reduce((result, curr, index) => {
    if (index % itemsPerLine === 0) {
      result.push([]);
    }
    result[result.length - 1].push(curr);
    return result;
  }, []);

  return (
    <Root name="Projects" id="Projects">
      <Header>
        <HeaderImage src={projectsBlock.img.url} />
        <SubHeaderWrapper>
          {RichText.asText(projectsBlock.title)}
          <SubHeader>{RichText.asText(projectsBlock.subtitle)}</SubHeader>
        </SubHeaderWrapper>
      </Header>
      {promotedLines.map((line, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <ProjectWrapper key={i}>
          {line.map(item => (
            <ProjectItem
              key={item.thumbnail.url}
              project={item}
              layers={layers}
              onVideoPlay={onVideoPlay}
            />
          ))}
        </ProjectWrapper>
      ))}
    </Root>
  );
};

export default Projects;
