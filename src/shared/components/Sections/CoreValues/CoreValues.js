import React from 'react';
import styled from 'styled-components';
import {SubText as BaseSubText, MediumTitle, Header2 as BaseHeader} from '../../UI/Typography';
import {RichText} from 'prismic-reactjs';
import CompanyValue from './CompanyValue';
import {media} from '../../../theme';
import {Element} from 'react-scroll';


const MainDiv = styled(Element)`

    margin-top: 6rem;
    margin-bottom:5rem;
    background-color: #F4F9FE; 
    height: 100%;
    font-weight: 400;
`;


const Root = styled(Element)`
  display: flex;
  flex-direction: column;
  background-color: white;
  ${media.minSmallDesktop`
    background-color: #F4F9FE;
    margin-top: 1rem;
    flex-direction: row;
  `}
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  ${media.minSmallDesktop`
    padding:0;
  `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
  & > h1 {
    margin-bottom: 1rem;
  }
  & > div {
    margin-bottom: 1.8rem;
  }
  ${MediumTitle} {
    color: #1FABF3;
    font-size: 3rem;
    align-items: center;
    text-align: center;

    ${media.minSmallDesktop`
      font-size: 2.5rem;
      align-items: flex-start;
      text-align: start;
    `}
  }
`;

const SubText = styled(BaseSubText)`
  font-size: 2rem;
  align-items: center;
  text-align: center;
  ${media.minSmallDesktop`
    font-size: 1.4rem;
    align-items: flex-start;
    text-align: start;
  `}
`;

const CompanyValues = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 2;
`;

const HeaderRoot = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  align-items: center;
  text-align: center;
  ${media.minSmallDesktop`
    align-items: flex-start;
    text-align: start;
  `}
  & > * {
    margin-top: 15px;
  }
`;

const HeaderIcon = styled.img`
  width: 15rem;
  height: 15rem;
  ${media.minSmallDesktop`
    width: 10rem;
    height: 10rem;
  `}
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;



const Header = styled(BaseHeader)`
  color: #1FABF3;
  font-weight: 400;
`;
const MainHeader = styled(BaseHeader)`
color: #4b4b4b;
margin-bottom: 1rem;
display: flex;
align-items: center;
justify-content: center;
`;

const TitleWrapper = styled.div`
  display: block;
  align-items: center;
  justify-content: left;
  margin-left: 3rem;
  ${media.minSmallDesktop`
  display: flex;
`}
`;

const HeaderContent = styled.div`
    margin: auto 1rem;
`;

const Thumbnail = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-bottom: 4rem;
`;



const inversed = [false, true, true, false, false, true];

const CoreValues = (props) => (
    <MainDiv id="CoreValues">
        <TitleWrapper>
          <Thumbnail src={props.projects.primary.img.url} />
          <HeaderContent>
              <MainHeader>WE'RE DIFFERENT!</MainHeader>
          </HeaderContent>

        </TitleWrapper>
   
          <Root >
              <LeftContainer>
              <HeaderRoot>
                  <HeaderIcon src={props.coreValues.primary.topimage.url} />
                  <Header>{RichText.asText(props.coreValues.primary.firstheader)}</Header>
                  <HeaderWrapper>
                      <SubText>{RichText.render(props.coreValues.primary.firstheadercontent)}</SubText>
                  </HeaderWrapper>
              </HeaderRoot>
              <Wrapper>
                  <MediumTitle>{RichText.asText(props.coreValues.primary.secondheader)}</MediumTitle>
                  <SubText>{RichText.asText(props.coreValues.primary.secondheadercontent)}</SubText>
                  <MediumTitle>{RichText.asText(props.coreValues.primary.thirdheader)}</MediumTitle>
                  <SubText>{RichText.asText(props.coreValues.primary.thirdheadercontent)}</SubText>
                  </Wrapper>
              </LeftContainer>

              <CompanyValues>
                  {props.coreValues.items.map(({corevalueicon, corevaluecontent}, idx) => (
                  <CompanyValue
                      key={idx}
                      inverse={inversed[idx]}
                      turquoise={idx === 3}
                      src={corevalueicon.url}
                  >
                      {RichText.render(corevaluecontent)}
                  </CompanyValue>
                  ))}
              </CompanyValues>
          </Root>


    </MainDiv>

);

export default CoreValues;
