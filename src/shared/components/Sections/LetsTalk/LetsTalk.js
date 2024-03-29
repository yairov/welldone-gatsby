import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Header} from '../../UI/Typography';
import {RichText} from 'prismic-reactjs';
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
      padding-top: 3rem;
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
  color: #1FABF3;
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
  border: 2px solid #1FABF3;
  color: #1FABF3;
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






class letsTalk extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      messege: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handelSubmit = this.handelSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({[e.target.name] : e.target.value })
  }


   handelSubmit(e) {

  }

  render () {
    return (
        <Root id="LetsTalk">
        <BackgroundTriangle />
        <ContactRoot>
            <ContactImg src={this.props.letsTalk.primary.image_header.url} />
            <Title>{RichText.asText(this.props.letsTalk.primary.title)}</Title>
            <SubTitle>{RichText.asText(this.props.letsTalk.primary.sub_title)}</SubTitle>
            <DesktopContact>
              {this.props.contactItems.map(({icon, content}, idx) => (
                <Contact key={idx}>
                  <ContactIcon src={icon.url} />
                  <ContactInfo>{RichText.asText(content)}</ContactInfo>
                </Contact>
              ))}
            </DesktopContact>
        </ContactRoot>
        <FormWrapper>
          <Input placeholder={RichText.asText(this.props.letsTalk.primary.email_placeholder)}
          onChange={this.handleChange} />
          <TextArea placeholder={RichText.asText(this.props.letsTalk.primary.text_placeholder)} 
          onChange={this.handleChange} />
          <Button onClick={(e) => this.handelSubmit(e)}>Send</Button>
        </FormWrapper>
        `    <MobileContact>
      {this.props.contactItems.map(({icon, content}, idx) => (
        <Contact key={idx}>
          <ContactIcon src={icon.url} />
          <ContactInfo>{RichText.asText(content)}</ContactInfo>
        </Contact>
      ))}
    </MobileContact>
    </Root>
    );
  }
}
export default letsTalk;


