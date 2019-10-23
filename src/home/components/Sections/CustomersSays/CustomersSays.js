import React from 'react';
import styled from 'styled-components';
import {Element} from 'react-scroll';
import {RichText} from 'prismic-reactjs';
import LinesEllipsisLoose from 'react-lines-ellipsis/lib/loose';
import {media} from 'shared/theme';
import Slider from 'shared/components/UI/Slider/Slider';
import whiteTriangle from 'shared/assets/icons/whiteTriangle.svg';
import {
  Header as BaseHeader,
  SubHeader as BaseSubHeader,
  QuoteText,
} from 'shared/components/UI/Typography';

const WhiteTriangle = styled.img.attrs({src: whiteTriangle})`
  display: none;
  ${media.minSmallDesktop`
    display:flex;
    right: 0;
    position: absolute;
    z-index: 0;
    top: -11rem;
    height: 46rem;
    transform: rotate(0deg);
  `}
`;

const Wrapper = styled(Element)`
  background-color: #F4F9FE;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
    & > div {
    ${media.minSmallDesktop`
      padding: 0 2rem;
      
    `}
  }
  &&& {
    ${media.maxSmallDesktop`
      padding: 4rem 2rem;
    `}
    ${media.minSmallDesktop`
      padding-top: 4rem;
      padding-bottom: 8rem;
    `}
    ${media.minSmallDesktop`
    align-items: flex-start;
    text-align: start;
  `}
  }

`;

const Title = styled(BaseHeader)`
  color: #1fabf3;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const SubTitle = styled(BaseSubHeader)`
  color: #51718c;
  margin-bottom: 2.5rem;
  font-size: 2rem;
  ${media.minSmallDesktop`
    font-size: 1.5rem;
    max-width: 27rem;
    font-weight: 400;
  `}
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;

  ${media.minSmallDesktop`
    padding: 5rem 3rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
    border: 3px solid #deeefc;
    &:first-child {
      margin-left: 3rem;
    }
  `}
  &:last-child {
    margin-right: 0;
  }
  ${media.minSmallDesktop`
    width:auto;
    padding: 0;
    box-shadow: none;
    flex-direction: row;
    border: none;
    &:first-child {
      margin-left: 0;
    }
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  ${media.minSmallDesktop`
    flex-direction: row;
  `}
`;

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  ${media.minSmallDesktop`
    padding-right: 6rem;
  `}
  div:nth-child(2) {
    ${media.minSmallDesktop`
      justify-content: flex-start;
      padding-right: 6rem;
    `}
  }
`;

const Content = styled(QuoteText)`
  z-index: 2;
  font-size: 2.4rem;
  ${media.minSmallDesktop`
    font-size: 1.5rem;
  `}
`;

const CustomerWrapper = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  flex: 1;
  color: #51718c;
  font-weight: 400;
  ${media.minSmallDesktop`
    flex-direction: row;
    align-items: flex-start;
    margin-top: 3.2rem;
    margin-left: 10rem;
    margin-right: 10rem;
    margin-bottom: 0;
  `}
`;

const CustomerIcon = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  ${media.minSmallDesktop`
    width: 4.2rem;
    height: 4.2rem;
  `}
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const Name = styled(BaseSubHeader)`
  white-space: nowrap;
`;

const NameTitle = styled(Name)`
  font-size: 1.4rem;
  ${media.minSmallDesktop`
    font-size: 1.2rem;
  `}
`;

const CustomersSays = ({title, customerSays}) => {
  return (
    <Wrapper id="CustomersSays">
      <WhiteTriangle />
      <Title>{RichText.asText(title.primary.title)}</Title>
      <SubTitle>{RichText.asText(title.primary.sub_title)}</SubTitle>

      <Slider>
        {customerSays.map(item => {
          return (
            <Slide key={item.id}>
              {' '}
              {/* key changed from the index provided by map function... key shuold be unique */}
              <ContentWrapper>
                <SliderWrapper>
                  <Content>
                    <LinesEllipsisLoose
                      text={item.data.feedback[0].text}
                      maxLine={10}
                      trimRight
                      basedOn="letters"
                    />
                  </Content>
                </SliderWrapper>

                <CustomerWrapper>
                  <CustomerIcon src={item.data.image.url} />
                  <NameWrapper>
                    <Name>{item.data.name[0].text}</Name>
                    <NameTitle>{item.data.work_title[0].text}</NameTitle>
                  </NameWrapper>
                </CustomerWrapper>
              </ContentWrapper>
            </Slide>
          );
        })}
      </Slider>
    </Wrapper>
  );
};
export default CustomersSays;
