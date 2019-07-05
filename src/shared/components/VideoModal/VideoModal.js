import React, { Component } from 'react';
import './videoModal.css';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const StyledYoutube = styled(YouTube)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

export default class VideoModal extends Component {
	state = {
		contentStyle: {
			top: 0, left: 0, bottom: 0, right: 0
		}
	};

	playVideo = event => {
		event.target.playVideo();
	};

	handleVideoEnd = () => {
		setTimeout(this.props.onClose, 1000);
	};

	youtubeUrlToID = url => {
		if (!url) return false
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
	}

	calculatestyle = () => {
		const winWidth = window.innerWidth;
		const winHeight = window.innerHeight;
		const wMargin = winWidth * 0.05;
		const hMargin = winHeight * 0.05;
		let ratio = 9/16;
		let height = 0, width = 0;
		let top = 0, left = 0, bottom = 0, right = 0;
		if (winHeight / winWidth >= ratio) {
			width = winWidth - (2 * wMargin);
			height = width * ratio;
			top = (winHeight - height) / 2;
			left = wMargin;
			bottom = top;
			right = wMargin;
		}
		else {
			ratio = 16/9;
			height = winHeight - (2 * hMargin);
			width = height * ratio;
			top = hMargin;
			left = (winWidth - width) / 2;
			bottom = top;
			right = left;
		}

		this.setState({contentStyle: {
			top, left, bottom, right
		}});
	};

componentDidMount = () => {
		this.calculatestyle();
  	window.addEventListener('resize', this.calculatestyle);
	};

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.calculatestyle);
	};

	render() {
		console.log('modalurl:', this.props.videoUrl)
		return (
			<Modal
				isOpen={this.props.open}
				onRequestClose={this.props.onClose}
				shouldCloseOnOverlayClick={true}
				contentLabel="Video"
				closeTimeoutMS={1000}
				style={{content: this.state.contentStyle}}
			>
				<StyledYoutube
					videoId={this.youtubeUrlToID(this.props.videoUrl)}
					opts={{
						autoplay: 1,
						playerVars: {rel: 0, showinfo: 0, ecver: 2}
					}}
					onReady={this.playVideo}
					onEnd={this.handleVideoEnd}
	
				/>
			</Modal>
		);
	}
}