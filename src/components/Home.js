import React, {useState, Component} from 'react';
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
import TLDRModal from '../shared/components/Sections/TLDRModal/TLDRModal';

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

// const BlogIndexPage = ({
//   allContent,
//   allContent: {project, customer, technology, homepage, customerfeedbacks, layer},
// }) => {
//   const homepageBody = homepage[0].data.body.reduce((result, slice) => {
//     // eslint-disable-next-line no-param-reassign
//     console.log("customers:", customer);
//     result[slice.slice_type] = slice;
//     return result;
//   }, {});

//   const {videoModalState, setVideoModalState} = useState('shit');
//   function playVideo(videoID) {
//     const tempFunk = videoID => setVideoModalState({videoModalState: {open: true, videoID: videoID}});
//     tempFunk(videoID);
//     console.log("videoModalState:", videoModalState);
//   };
//   console.log("setVideoModalState:", setVideoModalState);
//   return (
//     <Content>
//       <MainSlider />
//       <Technologies items={technology} text={homepageBody.technology} />
//       <OurCustomers customers={customer} text={homepageBody.top_customers} />
//       <Projects
//         projectsBlock={homepageBody.projects.primary}
//         projects={project}
//         layers={layer}
//         onVideoPlay={() => {setVideoModalState('videoID'); console.log("videoModalState:", videoModalState);}}
//       />
//       <CustomersSays customerSays={customerfeedbacks} title={homepageBody.what_customer_say} />
//       <ConsultingAndMentoring ingredients={homepageBody.consulting_and_mentoring} />
//       <CoreValues coreValues={homepageBody.core_values} />
//       <JoinUs joinUs={homepageBody.joinus} />
//       <LetsTalk letsTalk={homepageBody.let_s_talk} contactItems={homepageBody.let_s_talk.items} />
//       <VideoModal open={videoModalState}/>
//     </Content>
//   );
// };

export default class BlogIndexPage extends Component {
  state = {
    video: undefined,
    tldrOpen :false
  };

  playVideo = video => {
    this.setState({
      video,
    });
  };

  closeVideoModal = () => {
    this.setState({video: undefined});
  };

  closeTLDRModal = () => {
    this.setState({tldrOpen: false});
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({tldrOpen: true});
    }, 8000);
  };

  render() {
    const {
      allContent,
      allContent: {project, customer, technology, homepage, customerfeedbacks, layer},
    } = this.props;

    const homepageBody = homepage[0].data.body.reduce((result, slice) => {
      // eslint-disable-next-line no-param-reassign
      result[slice.slice_type] = slice;
      return result;
    }, {});

    return (
      <Content>
        <MainSlider video={this.state.video} />
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
        <LetsTalk letsTalk={homepageBody.let_s_talk} contactItems={homepageBody.let_s_talk.items} />
        <VideoModal
          open={!!this.state.video}
          onClose={this.closeVideoModal}
          video={this.state.video}
        />
        <TLDRModal
          open={this.state.tldrOpen}
          onClose={this.closeTLDRModal}
          onPlay={this.playVideo}
        />
      </Content>
    );
  }
}