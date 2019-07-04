import React, { useState } from "react";
import styled from 'styled-components';
import {media} from '../shared/theme';

import MainSlider from '../shared/components/Sections/Home/MainSlider';
import ConsultingAndMentoring from '../shared/components/Sections/ConsultingAndMentoring/ConsultingAndMentoring';
import OurCustomers from '../shared/components/Sections/OurCustomers/AnimatedCustomers';
import Technologies from '../shared/components/Sections/Technologies/Technologies';
import CustomersSays from '../shared/components/Sections/CustomersSays/CustomersSays';
import JoinUs from '../shared/components/Sections/JoinUs/JoinUs';
import LetsTalk from '../shared/components/Sections/LetsTalk/LetsTalk';
import CoreValues from '../shared/components/Sections/CoreValues/CoreValues';
import Projects from '../shared/components/Sections/Projects/Projects';
import VideoModal from '../shared/components/VideoModal/VideoModal';

const Content = styled.div`
  position: relative;
  overflow-x: hidden;
  & > div {
    ${media.minSmallDesktop`
      padding: 0 10rem;
      
    `}
  }
`;

const BlogIndexPage = ({
  allContent,
  allContent: {project, customer, technology, homepage, customerfeedbacks, layer},
}) => {
  const homepageBody = homepage[0].data.body.reduce((result, slice) => {
    // eslint-disable-next-line no-param-reassign
    console.log("customers:", customer);
    result[slice.slice_type] = slice;
    return result;
  }, {});

  const {videoModalState, setVideoModalState} = useState({videoModalState: {open: false, videoID: ''}});
  const playVideo = videoID => {setVideoModalState({videoModalState: {open: true, videoID: videoID}});};
  console.log("videoModalState:", videoModalState);
  return (
    <Content>
      <MainSlider />
      <Technologies items={technology} text={homepageBody.technology} />
      <OurCustomers customers={customer} text={homepageBody.top_customers} />
      <Projects 
        projectsBlock={homepageBody.projects.primary}
        projects={project}
        layers={layer}
        onVideoPlay={(videoID) => {playVideo}}
      />
      <CustomersSays customerSays={customerfeedbacks} title={homepageBody.what_customer_say} />
      <ConsultingAndMentoring ingredients={homepageBody.consulting_and_mentoring} />
      <CoreValues coreValues={homepageBody.core_values} />
      <JoinUs joinUs={homepageBody.joinus} />
      <LetsTalk letsTalk={homepageBody.let_s_talk} contactItems={homepageBody.let_s_talk.items} />
      <VideoModal open={videoModalState}/>
    </Content>
  );
};
export default BlogIndexPage;
