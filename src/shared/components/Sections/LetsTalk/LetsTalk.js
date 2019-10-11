import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {RichText} from 'prismic-reactjs';
import shortid from 'shortid';
import {Header} from '../../UI/Typography';
import BaseButton from '../../UI/Button/Button2';
import triangle from '../../../assets/icons/triangle1.svg';
import {media} from '../../../theme/media';

const BackgroundTriangle = styled.img.attrs({src: triangle})`
  position: absolute;
  top: -12rem;
  left: -17rem;
  transform: rotate(90deg);
  width: 78rem;
  z-index: -1;
`;

const Root = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  position: relative;
  padding: 3rem 2rem;
  flex-direction: column;
  ${media.minSmallDesktop`
    flex-direction: row;
    padding: 0;
    &&& {
      padding-top: 4rem;
      padding-bottom: 18rem;
      padding-left: 22rem;
      padding-right: 22rem;
    }
  `}
`;

const ContactRoot = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  ${media.minSmallDesktop`
    align-items: start;
  `}
`;

const ContactImg = styled.img`
  width: 11rem;
  height: 14rem;
  ${media.minSmallDesktop`
    width: 8rem;
    height: 12rem;
  `}
`;

const Title = styled(Header)`
  color: #1fabf3;
  font-size: 2.5rem;
`;

const SubTitle = styled.div`
  margin-bottom: 4rem;
  font-size: 1.5rem;
  ${media.minSmallDesktop`
    font-size: 1.4rem;
    color: #51718C;
    font-weight: 400;
  `}
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ContactIcon = styled.img`
  height: 3rem;
  width: 3rem;
  margin-right: 0.8rem;
`;

const ContactInfo = styled(SubTitle)`
  margin-bottom: 0;
`;

const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const inputCss = css`
  padding: 0.5rem 1rem;
  height: 2rem;
  border: 2px solid rgba(31, 171, 243, 0.4);
  margin-bottom: 0.5rem;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: 'Heebo', sans-serif;
    font-size: 1.2rem;
  }
`;

const Input = styled.input`
  ${inputCss}
`;

const TextArea = styled.textarea`
  ${inputCss}
  height:9.5rem;
`;

const Button = styled(BaseButton)`
  border: 2px solid #1fabf3;
  color: #1fabf3;
  background-color: transparent;
  padding: 0.5rem 4.5rem;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  width: 5rem;
  &:focus {
    outline: none;
  }
`;

const DesktopContact = styled.div`
  display: none;
  flex-direction: column;
  ${media.minSmallDesktop`
    display: flex;
  `}
`;

const MobileContact = styled(DesktopContact)`
  display: flex;
  ${media.minSmallDesktop`
    display: none;
  `}
`;

const LetsTalk = ({contactItems, letsTalk}) => {
  const [state, setState] = useState({
    subject: '',
    message: '',
  });

  const handleChange = (stateProp, e) => {
    setState({[stateProp]: e.target.value});
    // console.log('props', props);
  };

  const handelSubmit = () => {
    window.location.href = `mailto:${RichText.asText(contactItems[1].content)}?subject=${
      state.subject
    }&body=${state.message}`;
  };

  return (
    <Root id="LetsTalk">
      <BackgroundTriangle />
      <ContactRoot>
        <ContactImg src={letsTalk.primary.image_header.url} />
        <Title>{RichText.asText(letsTalk.primary.title)}</Title>
        <SubTitle>{RichText.asText(letsTalk.primary.sub_title)}</SubTitle>
        <DesktopContact>
          {contactItems.map(({icon, content}, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <Contact key={idx}>
              <ContactIcon src={icon.url} />
              <ContactInfo>{RichText.asText(content)}</ContactInfo>
            </Contact>
          ))}
        </DesktopContact>
      </ContactRoot>
      <FormWrapper>
        <Input
          placeholder={RichText.asText(letsTalk.primary.email_placeholder)}
          onChange={e => {
            handleChange('subject', e);
          }}
        />
        <TextArea
          placeholder={RichText.asText(letsTalk.primary.text_placeholder)}
          onChange={e => {
            handleChange('message', e);
          }}
        />
        <Button onClick={handelSubmit}>Send</Button>
      </FormWrapper>
      <MobileContact>
        {contactItems.map(({icon, content}) => {
          return (
            <Contact key={shortid.generate()}>
              <ContactIcon src={icon.url} />
              <ContactInfo>{RichText.asText(content)}</ContactInfo>
            </Contact>
          );
        })}
      </MobileContact>
    </Root>
  );
};

export default LetsTalk;
