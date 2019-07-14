import React from 'react';
import styled from 'styled-components';
import { media } from '../../../theme/media';
import posed, { PoseGroup } from 'react-pose';
import ropeSVG from './Rope.svg';
import playIcon from '../../../assets/icons/play.png';

const ModalAnim = posed.div({
	open: {
		y: 0,
		transition: { duration: 2000, ease: 'backOut' }
	},
	close: {
		y: -window.innerHeight,
		transition: { duration: 500, ease: 'anticipate' }
	}
});

const Modal = styled(ModalAnim)`
	position: fixed;
	bottom: 20rem;
	right: 5rem;
	left: 5rem;
	max-width: 400px;
	z-index: 1100;

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

const Text = styled.p`
	color: black;
	font-family: 'Heebo' ,sans-serif;
	font-size: 200%;
	font-weight: 400;
	padding-bottom: 1rem;
`;

const VideoThumb = styled.img`
	width: 100%;
	cursor: pointer;
`;

const PlayThumbIcon = styled.img`
	position: absolute;
	top: 25%;
	bottom: 25%;
	left: 37%;
	height: 50%;
`;

const Close = styled.div`
	position: absolute;
	top: 0.2rem;
	right: 0.8rem;
	
	:before {
		content: 'X';
		font-size: 2.4rem;
	}
`;

const data = {
	title: 'TL;DR',
	text:
		`Don’t have time to read?
    Watch this to get it fast!`,
	video: 'Video Object',
	videoThumb: 'https://i.ytimg.com/vi/l7-dbZM8B_s/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAz7N-p94fVAbCQHJpIXZRpzO4Qkw'
};

const TLDRModal = props => {
	console.log("tldrinside:", props.open);
	return (
		<Modal key="key" pose={props.open ? 'open' : 'close'}>
			<Rope src={ropeSVG} />
			<ModalWindow>
				<Close onClick={props.onClose} />
				<Title>{data.title}</Title>
				<Text>{data.text}</Text>
				<div style={{position: 'relative', width: '100%'}}>
					<VideoThumb
						src={data.videoThumb}
						onClick={() => props.onPlay(data.video)}
					/>
					<PlayThumbIcon src={playIcon}/>
				</div>
			</ModalWindow>
		</Modal>
	);
};

export default TLDRModal;
