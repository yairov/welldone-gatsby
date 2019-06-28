import React from 'react';
import styled from 'styled-components';
import {media} from '../shared/theme';

import MainSlider from '../shared/components/Sections/Home/MainSlider';
import ConsultingAndMentoring from '../shared/components/Sections/ConsultingAndMentoring/ConsultingAndMentoring';
import OurCustomers from '../shared/components/Sections/OurCustomers/OurCustomers';
import Technologies from '../shared/components/Sections/Technologies/Technologies';
import CustomersSays from '../shared/components/Sections/CustomersSays/CustomersSays';
import JoinUs from '../shared/components/Sections/JoinUs/JoinUs';
import LetsTalk from '../shared/components/Sections/LetsTalk/LetsTalk';
import CoreValues from '../shared/components/Sections/CoreValues/CoreValues';
import Projects from '../shared/components/Sections/Projects/Projects';

const Content = styled.div`
  position: relative;
  overflow-x: hidden;
  & > div {
    ${media.minSmallDesktop`
      padding: 0 10rem;
      
    `}
  }
`;
const BlogIndexPage = ({allContent: {customer, technology, homepage, customerfeedbacks}}) => {
  const {body: homepageBody} = homepage[0].data;
  return (
    <Content>
      <MainSlider items={homepageBody[0].items[0]} />
      <Technologies items={technology} />
      <OurCustomers customers={customer} text={homepageBody[2]} />
      <Projects projects={homepageBody[10]} />
      <CustomersSays customerSays={customerfeedbacks} title={homepageBody[6]} />
      <ConsultingAndMentoring ingredients={homepageBody[4]} />
      <CoreValues coreValues={homepageBody[5]} projects={homepageBody[10]} />
      <JoinUs joinUs={homepageBody[9]} />
      <LetsTalk letsTalk={homepageBody[7]} contactItems={homepageBody[7].items} />
    </Content>
  );
};
export default BlogIndexPage;
