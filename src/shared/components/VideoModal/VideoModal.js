import React, {Component, createRef} from 'react';
import './videoModal.css';
import Modal from 'react-modal';
import _ReactPlayer from 'react-player';
import styled from 'styled-components';

const ReactPlayer = styled(_ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default class VideoModal extends Component {
  playerRef = createRef();

  state = {
    contentStyle: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  };

  playVideo = event => {
    this.playerRef.playing = true;
  };

  handleVideoEnd = () => {
    setTimeout(this.props.onClose, 1000);
  };

  calculatestyle = () => {
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    const wMargin = winWidth * 0.05;
    const hMargin = winHeight * 0.05;
    let ratio = 9 / 16;
    let height = 0,
      width = 0;
    let top = 0,
      left = 0,
      bottom = 0,
      right = 0;
    if (winHeight / winWidth >= ratio) {
      width = winWidth - 2 * wMargin;
      height = width * ratio;
      top = (winHeight - height) / 2;
      left = wMargin;
      bottom = top;
      right = wMargin;
    } else {
      ratio = 16 / 9;
      height = winHeight - 2 * hMargin;
      width = height * ratio;
      top = hMargin;
      left = (winWidth - width) / 2;
      bottom = top;
      right = left;
    }

    this.setState({
      contentStyle: {
        top,
        left,
        bottom,
        right,
      },
    });
  };

  componentDidMount = () => {
    this.calculatestyle();
    window.addEventListener('resize', this.calculatestyle);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.calculatestyle);
  };

  getVideoUrl() {
    const video = this.props?.video;
    if (!video) {
      return null;
    }
    if (video.provider_name === 'Vimeo') {
      return video.provider_url + video.video_id;
    } else {
      return video.embed_url;
    }
  }

  render() {
    return (
      <Modal
        isOpen={!!this.props.video}
        onRequestClose={this.props.onClose}
        shouldCloseOnOverlayClick={true}
        contentLabel="Video"
        closeTimeoutMS={1000}
        style={{content: this.state.contentStyle}}
      >
        {/* <StyledPlayer
          dangerouslySetInnerHTML={{
            __html: this.props?.video?.html?.replace(/(height|width)="[^"]*"/gi, '$1="100%"'),
          }}
		/> */}

        <ReactPlayer
          url={this.getVideoUrl()}
          className="react-player"
          width="100%"
          height="100%"
          playing
          onEnded={this.handleVideoEnd}
        />

        {/* <StyledPlayer
		


		 || ''

		
          url={cleanUrl(this.props.videoUrl)}
          width="100%"
          height="100%"
          preload="true"
          ref={this.playerRef}
          //   opts={{
          //     autoplay: 1,
          //     playerVars: {rel: 0, showinfo: 0, ecver: 2},
          //   }}
          onReady={this.playVideo}
          onEnded={this.handleVideoEnd}
        /> */}
      </Modal>
    );
  }
}

/*

embed_url: "https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/347868730"
height: 240
html: "<iframe src="https://player.vimeo.com/video/347868730?app_id=122963" width="426" height="240" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>"
provider_name: "Vimeo"
provider_url: "https://vimeo.com/"
title: null
type: "video"
uri: "/videos/347868730"
version: "1.0"
video_id: 347868730
width: 426

*/

// author_name: "Powtoon"
// author_url: "https://www.youtube.com/user/PowToon"
// cache_age: null
// embed_url: "https://youtu.be/AwhW1JCy0tI"
// height: 270
// html: "<iframe width="480" height="270" src="https://www.youtube.com/embed/AwhW1JCy0tI?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>"
// provider_name: "YouTube"
// provider_url: "https://www.youtube.com/"
// thumbnail_height: 360
// thumbnail_url: "https://i.ytimg.com/vi/AwhW1JCy0tI/hqdefault.jpg"
// thumbnail_width: 480
// title: "Create Awesome Videos With the NEW Powtoon"
// type: "video"
// version: "1.0"
// width: 480

// function cleanUrl(videoUrl) {
//   console.log({videoUrl, cut: videoUrl.split('url=')[1]});
//   return (videoUrl.split('url=')[1] && decodeURIComponent(videoUrl.split('url=')[1])) || videoUrl;
// }
