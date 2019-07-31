import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
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
      padding-left: 10rem;
      padding-right: 10rem;
    `}
  }
`;

const SeoRenderers = {
  og: ({name, value}) => <meta name={name} property={name} content={value} />,
  tag: ({name, value}) => React.createElement(name, null, value),
  meta: ({name, value}) => <meta name={name} content={value} />,
};
export default class BlogIndexPage extends Component {
  state = {
    video: undefined,
  };

  playVideo = video => {
    this.setState({
      video,
    });
  };

  closeVideoModal = () => {
    this.setState({video: undefined});
  };

  render() {
    const {
      allContent,
      allContent: {project, customer, technology, homepage, customerfeedbacks, layer, seo},
    } = this.props;

    const {video} = this.state;

    const homepageBody = homepage[0].data.body.reduce((result, slice) => {
      // eslint-disable-next-line no-param-reassign
      result[slice.slice_type] = slice;
      return result;
    }, {});

    const seoFields = seo[0].data.field;

    console.log('home props:', this.props);
    return (
      <>
        <Helmet>{seoFields.map(({type, name, value}) => SeoRenderers[type]({name, value}))}</Helmet>
        <Content>
          <MainSlider
            video={video}
            welldoneVideo={homepageBody.rope_modal.primary.video}
            onVideoPlay={this.playVideo}
          />
          <Technologies items={technology} text={homepageBody.technology} />
          <OurCustomers customers={customer} text={homepageBody.top_customers} />
          <Projects
            projectsBlock={homepageBody.projects.primary}
            projects={project}
            layers={layer}
            onVideoPlay={this.playVideo}
          />
          <CustomersSays customerSays={customerfeedbacks} title={homepageBody.what_customer_say} />
          <ConsultingAndMentoring ingredients={homepageBody.consulting_and_mentoring} />
          <CoreValues coreValues={homepageBody.core_values} />
          <JoinUs joinUs={homepageBody.joinus} />
          <LetsTalk
            letsTalk={homepageBody.let_s_talk}
            contactItems={homepageBody.let_s_talk.items}
          />
          <VideoModal open={!!video} onClose={this.closeVideoModal} video={video} />
        </Content>
      </>
    );
  }
}
