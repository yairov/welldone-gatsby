import React from 'react';
import styled from 'styled-components';
import {RichText} from 'prismic-reactjs';
import {SubText, FooterHeader} from '../UI/Typography';
import {media} from '../../theme/media';

const Root = styled.div`
  background: #ECF4F9;
  display: flex;
  padding: 4rem 0rem;
  justify-content: center;
  align-items: center;
  ${media.minSmallDesktop`
    padding: 7rem 25rem;
    justify-content: space-between;
    align-items: flex-start;
  `}
`;

const Header = styled(FooterHeader)`
  color: #1FABF3;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  display: none;
  ${media.minSmallDesktop`
    display:flex;
  `}
`;

const SubHeader = styled(SubText)`
  font-size: 1.2rem;
  line-height: 1.9;
  color: #7e8a98;
  font-weight: 100;
`;

const Icon = styled.img`
  width: 17rem;
  margin-bottom: 1rem;
  ${media.minSmallDesktop`
    width: 14rem;
  `}
`;

const FooterFollowIcon = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  ${media.minSmallDesktop`
    margin-right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
  `}
`;

const LinksWrapper = styled.div`
  display: none;
  ${media.minSmallDesktop`
    display:flex;
    & > * {
      margin-right: 7rem;
    }
  `}
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const Follow = styled.div`
  display: flex;
  flex-direction: column;
`;

const FollowsWrapper = styled.div`
  display: flex;
  ${media.maxSmallDesktop`
    a {
      margin-right: 2rem;
      &:last-child {
        margin-right:0;
      }
    }
  `}
`;




const Footer = (props) => {
    const follow = props.follow;
  //  console.log('follow')
  //  console.log(follow)

  return (
    <Root>
      <LinksWrapper>
        <Section>
            <Icon src={props.footer.logo.url} />
            <SubHeader>{RichText.asText(props.footer.footer_trademark)}</SubHeader>
        </Section>

      </LinksWrapper>

      <Follow>
        <FollowsWrapper>
          {follow.map(({follow_image, follow_link}, idx) => (
            <a href={follow_link.url} key={idx} >
              <FooterFollowIcon src={follow_image.url} />
            </a>
          ))}
        </FollowsWrapper>
      </Follow>



    </Root>
    
  );
};

export default Footer;
