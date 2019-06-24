import React from 'react';
import styled from 'styled-components';
import {Header2 as BaseHeader} from '../../UI/Typography';
import {RichText} from 'prismic-reactjs';
import {media} from '../../../theme';
import ProjectItem from './ProjectItem';
import {Element} from 'react-scroll';



const Thumbnail = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-bottom: 4rem;
  
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  
  ${media.minSmallDesktop`
    flex-direction: row;
  `}
`;

const Root = styled(Element)`
  display: flex;
  flex-direction: column-reverse;
  padding-top: 5rem;
  

  ${media.minSmallDesktop`
    padding: 0 25rem;
    flex-direction: column;


  `}
`;

const MainHeader = styled(BaseHeader)`
  color: #4b4b4b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.minSmallDesktop`
  font-size: 5rem;
`}
`;

const Header = styled(BaseHeader)`
  color: #4b4b4b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LatestWorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;



const TitleWrapper = styled.div`
  display: block;
  align-items: center;
  justify-content: left;
  margin-left: 3rem;
  ${media.minSmallDesktop`
  display: flex;
`}
`;

const HeaderContent = styled.div`
    margin: auto 1rem;
`;

const Projects = (props) => {
  console.log('props.projects.items');
  console.log(props.projects.items);

return  (
  <Root id="Projects">
    <MainHeader>
      <LatestWorkWrapper>
        <TitleWrapper>
          <Thumbnail src={props.projects.primary.img.url} />
          <HeaderContent>
              <Header>{RichText.asText(props.projects.primary.title)}</Header>
          </HeaderContent>
        </TitleWrapper>
        <ProjectWrapper>

            {props.projects.items.map((item, idx) =>
              <ProjectItem
                key={idx}
                title={RichText.asText(item.title)}
                subtitle={RichText.asText(item.subtitle)}
                thumbnail={item.thumbnail.url}
                mainImg={item.mainimage.url}

                desktop={item.desktop.url}
                mobile={item.mobile.url}
                cloud={item.cloud.url}
              />
            )}
        </ProjectWrapper>

      </LatestWorkWrapper>
    </MainHeader>
  </Root>
);
} 

export default Projects;
