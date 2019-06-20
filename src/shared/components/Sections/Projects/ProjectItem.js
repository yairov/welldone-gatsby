import styled from 'styled-components';

import {Header as BaseHeader, SubHeader as BaseSubHeader} from '../../UI/Typography';
import {withState} from 'recompose';
import React from 'react';
import ReactPlayer from 'react-player';
const Root = styled.div`
  flex: 1;
  padding: 1rem 0;
  margin: 0 0.5rem;

  transition: all 150ms cubic-bezier(0.25, 0.25, 0.75, 0.75);
  &:hover {
    box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.15), 0 7px 20px 0 rgba(0, 0, 0, 0.1);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 20rem;
  cursor: pointer;
  
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  cursor: pointer;
`;
const Icons = styled.div`
  display: flex;
`;
const Title = styled(BaseHeader)``;

const SubTitle = styled(BaseSubHeader)`
font-weight: 400;

`;

const Video = styled.video`
  width: 100%;
  height: 10rem;
  cursor: pointer;
`;

const ProjectItem = ({title, subtitle, thumbnail, video, playVideo, setPlayVideo, desktop, mobile, cloud}) => {


 const mcloud =  cloud ? <Icon src={cloud} />: null;
 const mdesktop =  desktop ? <Icon src={desktop} />: null;
 const mmobile =  mobile ? <Icon src={mobile} />: null;
  


  return (
    <Root >
    <ReactPlayer url='https://www.youtube.com/watch?v=OMnbT-o_zQ4&list=RDOMnbT-o_zQ4&start_radio=1' playing={true} light={thumbnail } width='100%' height='20rem'/>
    <Title>{title}</Title>

    <Icons>
      {mdesktop} 
      {mmobile} 
      {mcloud} 
    </Icons>
    <SubTitle>{subtitle}</SubTitle>

  </Root>
  );
} 
export default withState('playVideo', 'setPlayVideo', false)(ProjectItem);
