import React, { Component, forwardRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../../../theme/media';
import { RichText } from 'prismic-reactjs';
import posed, { PoseGroup } from 'react-pose';
import ropeSVG from './Rope.svg';
import ropeTipSVG from './rope-tip.svg';
import playIcon from '../../../assets/icons/play.svg';

const ModalAnim = posed.div({
  open: {
    y: 0,
    transition: {duration: 2000, ease: 'backOut'},
  },
  close: {
    y: '-100vh',//(window && -window.innerHeight) || 0,
    transition: {duration: 500, ease: 'anticipate'},
  },
});

const Modal = styled(ModalAnim)`
  position: fixed;
  bottom: 20rem;
  right: 5rem;
  left: 5rem;
  max-width: 30rem;
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

const ModalRope = styled.img`
  width: 90%;
  max-width: 30rem;

  ${media.minSmallDesktop`
		width: 30rem;
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

const VideoThumb = styled.div`
  cursor: pointer;
  background-image: url(${({ thumb }) => thumb});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 15rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  :after{
    content:'';
    background-image: url(${({ playIcon }) => playIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    opacity: 0.4;
    height: 100%;
    width: 23%;
  }
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

const Close = ({ onClick }) => (
  <CloseStyle onClick={onClick}>
    <Line style={{transform: 'rotate(45deg)'}} />
    <Line style={{transform: 'rotate(-45deg)'}} />
  </CloseStyle>
);

const upDownAnim = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-1rem); }
  100% { transform: translateY(0); }
`;

const RopeTip = styled.img`
  height: 7rem;
  position: relative;
  top: -0.6rem;
  left: 1rem;
  filter: drop-shadow(10px 5px 3px rgba(0, 0, 0, 0.25));
  animation: ${upDownAnim} 5s infinite ease;
`;

const RopTipTitle = styled.text`
  color: #1fabf3;
  font-weight: bold;
  font-size: 1rem;
  padding: 2rem;
`;

const RopeTabWrapper = styled.div`
  cursor: pointer;
  position: fixed;
  top: -3rem;
  left: 35rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: white;
  border-style: solid;
  border-color:black;
  border-width: 0 1px 1px 1px;
  border-radius: 0 0 1rem 1rem;

  && {
    padding: 3rem 0 0 0;
  }

  ${media.maxSmallDesktop`
    left: 25rem;
  `}

  ${media.maxMinimum`
    left: 40vw;
  `}
`;

const RopeTabStruture = forwardRef((props, ref) =>  {
  return (
    <RopeTabWrapper {...props} ref={ref}>
      <RopeTip src={ropeTipSVG} alt=""/>
      <RopTipTitle>
        {props.title}
      </RopTipTitle>
    </RopeTabWrapper>
  );
});

const RopeTab = posed(RopeTabStruture)({
  enter: {
    y: 0,
    transition: {
      duration: 500,
      ease: 'backOut'
    }
  },
  exit: {
    y : '-100%',
    transition: {
      duration: 500,
      ease: 'anticipate'
    }
  }
});

const idleTime = 15000;

export default class RopeModal extends Component {
  state = {
    open: false,
  }

  handleClose = () => {
    this.setState({open: false});
  };

  handleOpen = () => {
    this.setState({open: true});
  }
  
  openTimeout = -1;
  
  startOpenTimer = () => {
    this.openTimeout = setTimeout(this.handleOpen, idleTime);
  };

  stopOpenTimer = () => {
    if (this.openTimeout !== -1) {
      clearTimeout(this.openTimeout);
      this.openTimeout = -1;
    }
  };

  handleScroll = () => {
    console.log('scrolling');
    this.stopOpenTimer();
    this.startOpenTimer();
  }

  handleIgnore = () => {
    this.stopOpenTimer();
    window.removeEventListener('scroll', this.handleScroll);
  };

  toggleRopeTab = () => {
    this.setState({openTab: !this.state.openTab});
    console.log('change opentab to:', this.state.openTab);
  }

  componentDidMount = () => {
    this.startOpenTimer();
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  render() {
    const { ropeData, onPlay } = this.props;
    const thumbnailURL =
      ropeData.custom_thumbnail_image.url ||
      ropeData.custom_thumbnail_url.url ||
      ropeData.video.thumbnail_url;
  
    return (
      <div>
        <PoseGroup>
          {!this.state.open &&
            <RopeTab key="RopeTab"
              title={RichText.asText(ropeData.title)}
              onClick={this.handleOpen}
            />
          }
          <Modal key="RopeModal" pose={this.state.open ? 'open' : 'close'}>
            <ModalRope src={ropeSVG} />
            <ModalWindow>
              <Close onClick={() => {
                this.handleClose();
                this.handleIgnore();
              }} />
              <Title>{RichText.asText(ropeData.title)}</Title>
              <Text>{RichText.asText(ropeData.text)}</Text>
              <VideoThumb
                thumb={thumbnailURL}
                playIcon={playIcon}
                onClick={() => {onPlay(ropeData.video)}}
              />
            </ModalWindow>
          </Modal>
        </PoseGroup>
      </div>
    );
  }
}