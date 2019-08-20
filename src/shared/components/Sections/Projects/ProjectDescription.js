import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import AnimateHeight from 'react-animate-height';
import { media } from '../../../theme';
import { RichText } from 'prismic-reactjs';
import posed from 'react-pose';

const unextendedLength = 77;
const unextendedSuffix = '...';
const extendDuration = 1000;

const getShortDescription = longDescription => {
	longDescription = longDescription.toString().slice(0, unextendedLength);
	if (!longDescription.includes(' ', 0))
		return longDescription + unextendedSuffix;
	
	const endIndex = longDescription.search(/\s\S*\s?$/);
	return longDescription.slice(0, endIndex) + unextendedSuffix;
};


const DecriptionWrapper = styled(AnimateHeight)`
	position: relative;
	margin: 0;
	text-align: center;
	font-size: 1.6rem;
  font-weight: 100;
	overflow: hidden;
	min-height: 4.2rem;

  ${media.minSmallDesktop`
		text-align: start;
    font-size: 1.4rem;
  `}

  p {
    margin-bottom: 1rem;
  }
`;

const animConfig = {
	show: {
		opacity: 1,
		transition: { duration: 200 }
	},
	hide: {
		opacity: 0.01,
		transition: { duration: 200 }
	}
};

const LongDescription = posed.div(animConfig);

const ShortDescription = styled(LongDescription)`
	& {
		position: absolute;
		top: 0;
		left: 0;
	}
`;

const Decription = ({ text, expend: extend }) => {
	const shortText = getShortDescription(RichText.asText(text));
	const longText = RichText.asText(text);

	const [switchToLongText, setSwitchToLongText] = useState(extend);

	return (
		<DecriptionWrapper
			height={ extend ? 'auto' : 20 }
			duration={extendDuration}
			onAnimationStart={newHeight =>{
				if (extend)
					setSwitchToLongText(true);
			}}
			onAnimationEnd={newHeight => {
				if (!extend)
					setSwitchToLongText(false)
			}}
		>
			<LongDescription pose={switchToLongText ? 'show' : 'hide'}>
				{longText}
			</LongDescription>
			<ShortDescription pose={switchToLongText ? 'hide' : 'show'}>
				{shortText}
			</ShortDescription>
		</DecriptionWrapper>
	);
};

export default Decription;