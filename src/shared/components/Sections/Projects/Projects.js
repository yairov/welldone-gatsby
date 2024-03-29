import React from 'react';
import styled from 'styled-components';
import {RichText} from 'prismic-reactjs';
import {Element} from 'react-scroll';

import {Header2 as BaseHeader, SubHeader} from '../../UI/Typography';
import {media} from '../../../theme';
import ProjectItem from './NewProjectItem';

const Root = styled(Element)`
  padding-top: 5rem;
  ${media.minSmallDesktop`
    padding: 0 25rem;
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
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;

  ${media.minSmallDesktop`
    flex-direction: row;
    align-items: start;

    /* flex-direction: row; */
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

const Projects = ({projectsBlock, projects, layers}) => {
  return (
    <Root name="Projects" id="Projects">
      <Header>
        <HeaderImage src={projectsBlock.img.url} />
        <SubHeaderWrapper>
          {RichText.asText(projectsBlock.title)}
          <SubHeader>{RichText.asText(projectsBlock.subtitle)}</SubHeader>
        </SubHeaderWrapper>
      </Header>
      <ProjectWrapper>
        {projects
          .map(({data}) => data)
          .filter(p => p.promoted === 'yes')
          .sort((l, r) => (l.order || Number.MAX_VALUE) - (r.order || Number.MAX_VALUE))
          .map(d => {
            console.log({d});
            return d;
          })
          .map(data => (
            <ProjectItem key={data.thumbnail.url} project={data} layers={layers} />
          ))}
      </ProjectWrapper>
    </Root>
  );
};

// {/* <Root name="Projects" id="Projects">
// <MainHeader>
//   <LatestWorkWrapper>
//     <TitleWrapper>
//       <Thumbnail src={projectsBlock.img.url} />
//       <HeaderContent>
//         <Header>{RichText.asText(projectsBlock.title)}</Header>
//       </HeaderContent>
//     </TitleWrapper>
//     <SubHeader>{RichText.asText(projectsBlock.subtitle)}</SubHeader>
//     <ProjectWrapper>
//       {/* {projects.items.map(item => (
//         <ProjectItem
//           key={item.thumbnail.url}
//           title={RichText.asText(item.title)}
//           subtitle={RichText.asText(item.subtitle)}
//           thumbnail={item.thumbnail.url}
//           mainImg={item.mainimage.url}
//           movie={item.movie.url}
//           desktop={item.desktop.url}
//           mobile={item.mobile.url}
//           cloud={item.cloud.url}
//         />
//       ))} */}
//     </ProjectWrapper>
//   </LatestWorkWrapper>
// </MainHeader>
// </Root> */}

export default Projects;
