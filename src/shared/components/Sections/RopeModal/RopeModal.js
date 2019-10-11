import React from 'react';
import styled from 'styled-components';
import {RichText} from 'prismic-reactjs';
import posed from 'react-pose';
import {media} from 'shared/theme/media';
import playIcon from 'shared/assets/icons/play.svg';
import ropeSVG from './Rope.svg';

const ModalAnim = posed.div({
  open: {
    y: 0,
    transition: {duration: 2000, ease: 'backOut'},
  },
  close: {
    // y: (window && -window.innerHeight) || 0,
    transition: {duration: 500, ease: 'anticipate'},
  },
});

const Modal = styled(ModalAnim)`
  position: fixed;
  bottom: 20rem;
  right: 5rem;
  left: 5rem;
  max-width: 400px;
  z-index: 1100;
  filter: drop-shadow(20px 30px 10px rgba(0, 0, 0, 0.3));

  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.minMobile`
		bottom: 7rem;
	`}
`;

const ModalWindow = styled.div`
  position: relative;
  top: -3rem;
  background-color: white;
  border: 1px solid gray;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Rope = styled.img`
  width: 90%;
  max-width: 400px;

  ${media.minSmallDesktop`
		width: 400px;
	`}
`;

const Title = styled.div`
  color: #1fabf3;
  font-size: 3.3rem;
  font-weight: 500;
  padding-bottom: 1rem;
`;

const Text = styled.div`
  color: black;
  font-family: 'Heebo', sans-serif;
  font-size: 200%;
  font-weight: 400;
  padding-bottom: 1rem;
`;

const VideoWrapperClick = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
`;

const VideoThumb = styled.img`
  width: 100%;
  display: block;
`;

const PlayThumbIcon = styled.img`
  position: absolute;
  display: block;
  top: 32%;
  left: 36%;
  height: 39%;
`;

const Line = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  background-color: gray;
  display: block;
  width: 4px;
  height: 100%;
`;

const CloseStyle = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.7rem;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
  display: block;
`;
const Close = ({onClick}) => (
  <CloseStyle onClick={onClick}>
    <Line style={{transform: 'rotate(45deg)'}} />
    <Line style={{transform: 'rotate(-45deg)'}} />
  </CloseStyle>
);

const RopeModal = ({open, ropeData, onClose, onPlay}) => {
  return (
    <Modal key="key" pose={open ? 'open' : 'close'}>
      <Rope src={ropeSVG} />
      <ModalWindow>
        <Close onClick={onClose} />
        <Title>{RichText.render(ropeData.title)}</Title>
        <Text>{RichText.render(ropeData.text)}</Text>
        <VideoWrapperClick onClick={() => onPlay(ropeData.video)}>
          <VideoThumb src={ropeData.video.thumbnail_url} />
          <PlayThumbIcon src={playIcon} />
        </VideoWrapperClick>
      </ModalWindow>
    </Modal>
  );
};

export default RopeModal;
