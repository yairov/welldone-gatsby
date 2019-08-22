/* eslint-disable no-mixed-operators */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
import React, {useState, useCallback, useEffect} from 'react';
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
  overflow: hidden;
`;

const VideoModal = ({onClose, video}) => {
  const [contentStyle, setContentStyle] = useState({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  });

  const handleVideoEnd = useCallback(() => {
    setTimeout(onClose, 1000);
  }, [onClose]);

  const calculatestyle = useCallback(() => {
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    const wMargin = winWidth * 0.05;
    const hMargin = winHeight * 0.05;
    let ratio = 9 / 16;
    let height = 0;
    let width = 0;
    let top = 0;
    let left = 0;
    let bottom = 0;
    let right = 0;
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

    setContentStyle({
      top,
      left,
      bottom,
      right,
      zIndex: 1150,
    });
  }, [setContentStyle]);

  const getVideoUrl = useCallback(() => {
    if (!video) {
      return null;
    }
    if (video.provider_name === 'Vimeo') {
      return video.provider_url + video.video_id;
    }

    return video.embed_url;
  }, [video]);

  useEffect(() => {
    calculatestyle();
    window.addEventListener('resize', calculatestyle);

    return () => {
      window.removeEventListener('resize', calculatestyle);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Modal
      isOpen={!!video}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
      contentLabel="Video"
      closeTimeoutMS={1000}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: 1150,
        },
        content: contentStyle,
      }}
    >
      {/* <StyledPlayer
          dangerouslySetInnerHTML={{
            __html: props?.video?.html?.replace(/(height|width)="[^"]*"/gi, '$1="100%"'),
          }}
		/> */}

      <ReactPlayer
        url={getVideoUrl()}
        className="react-player"
        width="100%"
        height="100%"
        playing
        onEnded={handleVideoEnd}
      />

      {/* <StyledPlayer
		


		 || ''

		
          url={cleanUrl(videoUrl)}
          width="100%"
          height="100%"
          preload="true"
          ref={playerRef}
          //   opts={{
          //     autoplay: 1,
          //     playerVars: {rel: 0, showinfo: 0, ecver: 2},
          //   }}
          onReady={playVideo}
          onEnded={handleVideoEnd}
        /> */}
    </Modal>
  );
};

export default VideoModal;

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
