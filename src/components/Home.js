import React, {useState, useCallback, useMemo} from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import {media} from 'shared/theme';

import MainSlider from 'shared/components/Sections/Home/MainSlider';
import ConsultingAndMentoring from 'shared/components/Sections/ConsultingAndMentoring/ConsultingAndMentoring';
import OurCustomers from 'shared/components/Sections/OurCustomers/AnimatedCustomers';
import Technologies from 'shared/components/Sections/Technologies/Technologies';
import CustomersSays from 'shared/components/Sections/CustomersSays/CustomersSays';
import JoinUs from 'shared/components/Sections/JoinUs/JoinUs';
import LetsTalk from 'shared/components/Sections/LetsTalk/LetsTalk';
import CoreValues from 'shared/components/Sections/CoreValues/CoreValues';
import Projects from 'shared/components/Sections/Projects/Projects';
import VideoModal from 'shared/components/VideoModal/VideoModal';

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

const SeoRenderers = {
  og: ({name, value}) => <meta name={name} property={name} content={value} key={`og-${name}`} />,
  tag: ({name, value}) => React.createElement(name, {key: `tag-${name}`}, value),
  meta: ({name, value}) => <meta name={name} content={value} key={`meta-${name}`} />,
};

const BlogIndexPage = ({
  allContent: {project, customer, technology, homepage, customerfeedbacks, layer, seo},
}) => {
  const [video, setVideo] = useState(undefined);

  const homepageBody = useMemo(() => {
    return homepage[0].data.body.reduce((result, slice) => {
      // eslint-disable-next-line no-param-reassign
      result[slice.slice_type] = slice;
      return result;
    }, {});
  }, [homepage]);

  const [seoFields] = useState(seo[0].data.field);

  const playVideo = useCallback(
    videoUrl => {
      setVideo(videoUrl);
    },
    [setVideo]
  );

  const closeVideoModal = useCallback(() => {
    setVideo(undefined);
  }, [setVideo]);

  return (
    <>
      <Helmet>{seoFields.map(({type, name, value}) => SeoRenderers[type]({name, value}))}</Helmet>
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
    </>
  );
};

export default BlogIndexPage;
