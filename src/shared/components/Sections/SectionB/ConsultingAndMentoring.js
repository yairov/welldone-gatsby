
import React from 'react';
//import classes from './ConsultingAndMentoring.module.css'
import styled from 'styled-components';
//import photo from '../../../assets/icons/SecB/computer.png';
import {media} from '../../../theme/media';
import InfoBox from './InfoBox/InfoBox';
import {Element} from 'react-scroll';
import {RichText} from 'prismic-reactjs';
import { Header2 as BaseHeader, SubHeader as BaseSubHeader} from '../../UI/Typography';
const Root = styled(Element)`
  margin-bottom:5rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background-color: #F4F9FE;
  padding: 3rem 4rem;
  overflow: auto;
  flex-direction: row;
  ${media.minSmallDesktop`
    padding:0 3rem;
    background-color:transparent;
    flex-wrap: wrap;
  `}
  & > * {
    box-sizing: border-box;
  }
`;

const SubText = styled(BaseSubHeader)`
  ${media.minSmallDesktop`
    max-width: 45rem;
  `}
`;



const InfoBoxSubText = styled(SubText)`
  text-align: start;
    font-weight: 400;
    color: #51718C;
`;


const Header = styled(BaseHeader)`
  color: #4b4b4b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 3rem;
`;

const HeaderContent = styled.div`
    margin: auto 1rem;
`;
const Thumbnail = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-bottom: 4rem;
`;




const ConsultingAndMentoring = (props) => {

//  console.log('props.tech');
 // console.log(props.technology);
 //console.log('props.ingredients.header[0].text');
 // console.log(props.ingredients.primary.header[0].text);
    return (
      
      <Root id="WhatWeDo">
         <TitleWrapper>
            <Thumbnail src={props.ingredients.primary.topimage.url} />
            <HeaderContent>
                <Header>{RichText.asText(props.ingredients.primary.header)}</Header>
            </HeaderContent>
        </TitleWrapper>
        <Wrapper>
        {props.ingredients.items.map((item, idx) => (
          <InfoBox
            key={idx}
            header={RichText.asText(item.header)}
            background={item.background.url}
            src={item.icon.url}
          >
            <InfoBoxSubText>{RichText.asText(item.content)}</InfoBoxSubText>
          </InfoBox>
        ))}
      </Wrapper>


      </Root>

    )
};
export default ConsultingAndMentoring;




