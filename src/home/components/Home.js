import React, {useState, useCallback, useMemo} from 'react';
import styled from 'styled-components';
import {media} from 'shared/theme';
import VideoModal from 'shared/components/VideoModal';

import Menu from './Menu';
import Header from './Header';
import MainSlider from './Sections/MainSlider';
import ConsultingAndMentoring from './Sections/ConsultingAndMentoring/ConsultingAndMentoring';
import OurCustomers from './Sections/OurCustomers/AnimatedCustomers';
import Technologies from './Sections/Technologies/Technologies';
import CustomersSays from './Sections/CustomersSays/CustomersSays';
import JoinUs from './Sections/JoinUs/JoinUs';
import LetsTalk from './Sections/LetsTalk/LetsTalk';
import CoreValues from './Sections/CoreValues/CoreValues';
import Projects from './Sections/Projects/Projects';
import Footer from './Footer';

const Content = styled.div`
  position: relative;
  overflow-x: hidden;
  & > div {
    ${media.minSmallDesktop`
      padding-left: 10rem;
      padding-right: 10rem;
    `}
  }
`;

const Home = ({
  allContent: {project, customer, technology, homepage, customerfeedbacks, layer, seo, footer},
  lang,
}) => {
  const [video, setVideo] = useState(undefined);
  const playVideo = useCallback(videoUrl => setVideo(videoUrl), [setVideo]);
  const closeVideoModal = useCallback(() => setVideo(undefined), [setVideo]);

  const homepageBody = useMemo(() => {
    return homepage[0].data.body.reduce((result, slice) => {
      // eslint-disable-next-line no-param-reassign
      result[slice.slice_type] = slice;
      return result;
    }, {});
  }, [homepage]);

  return (
    <>
      <Header fields={seo[0].data.field} lang={lang} />
      <Menu />
      <Content>
        <MainSlider welldoneVideo={homepageBody.rope_modal.primary.video} onVideoPlay={playVideo} />
        <Technologies items={technology} text={homepageBody.technology} />
        <OurCustomers customers={customer} text={homepageBody.top_customers} />
        <Projects
          projectsBlock={homepageBody.projects.primary}
          projects={project}
          layers={layer}
          onVideoPlay={playVideo}
        />
        <CustomersSays customerSays={customerfeedbacks} title={homepageBody.what_customer_say} />
        <ConsultingAndMentoring ingredients={homepageBody.consulting_and_mentoring} />
        <CoreValues coreValues={homepageBody.core_values} />
        <JoinUs joinUs={homepageBody.joinus} />
        <LetsTalk letsTalk={homepageBody.let_s_talk} contactItems={homepageBody.let_s_talk.items} />
        <VideoModal open={!!video} onClose={closeVideoModal} video={video} />
      </Content>
      <Footer footer={footer[0].data} follow={footer[0].data.body[0].items} />
    </>
  );
};

export default Home;
