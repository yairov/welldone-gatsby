import React from 'react';
import styled  from "styled-components"
import {media} from '../../../theme/media';

import {RichText} from 'prismic-reactjs';
import {Header as BaseHeader} from '../../UI/Typography';

import {Element} from 'react-scroll';



const Wrapper = styled(Element)`
  background-image: linear-gradient(257deg, #d9f1f5, #347cac);
  position: relative;
  padding-left: 2rem;
  padding-right: 2rem;
  
  &&& {
    ${media.minSmallDesktop`
    padding-left: 20rem;
    padding-right: 20rem;
  `}
    padding-bottom: 2rem;
    padding-top: 2rem;
  }
`;

const Header = styled(BaseHeader)`
  color: white;

  
    ${media.minSmallDesktop`
    font-size:2rem;
  `}
`;

const Content = styled.div`
  font-size: 1.5rem;
  color: white;
  max-width: 29rem;
  text-align: center;
  
  flex: 1;
  div {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;


    ${media.minSmallDesktop`
    
      max-height: 34rem;
      align-items: flex-start;
      flex-wrap: wrap;
      text-align: start;
    `}
  }
  p {
    z-index: 2;
    margin-top: 2rem;
    ${media.minSmallDesktop`
      max-width: 26rem;
      text-align: left;
    `}
  }
`;


const Image = styled.img`
  position: absolute;
  right: 15rem;
  height: 113%;
  bottom: 0;
  display: none;
  top: -4rem;
  ${media.minSmallDesktop`
    display: flex;
  `}
`;



const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.minSmallDesktop`
    align-items: flex-start;
    flex-direction: row;
  `}
`;

const text = (props) => {
  console.log('props.joinUs.primary.content');
console.log(props.joinUs.primary.content);
 //   console.log('join')
  //  console.log(props.joinUs.primary)
    return (
        <Wrapper id='Join' >
            <Header>{RichText.render(props.joinUs.primary.title)}</Header>
            <ContentWrapper>
                <Content >{RichText.render(props.joinUs.primary.content)}</Content>
                <Content >{RichText.render(props.joinUs.primary.content2)}</Content>
            </ContentWrapper>
            <Image src={props.joinUs.primary.img.url} />
         </Wrapper>
         
    );
};
export default text;




