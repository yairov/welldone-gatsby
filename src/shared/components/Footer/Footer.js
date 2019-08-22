/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
// import {RichText} from 'prismic-reactjs';
import {SubText, FooterHeader} from '../UI/Typography';
import {media} from '../../theme/media';

const Root = styled.div`
  background: #ecf4f9;
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

// const Header = styled(FooterHeader)`
//   color: #1fabf3;
//   margin-bottom: 1rem;
//   font-size: 1.5rem;
//   display: none;
//   ${media.minSmallDesktop`
//     display:flex;
//   `}
// `;

// const SubHeader = styled(SubText)`
//   font-size: 1.2rem;
//   line-height: 1.9;
//   color: #7e8a98;
//   font-weight: 100;
// `;

const Icon = styled.img`
  width: 17rem;
  margin-bottom: 1rem;
  /* ${media.minSmallDesktop`
    width: 14rem;
  `} */
`;

const FooterFollowIcon = styled.a`
  display: block;
  cursor: pointer;
  margin-right: 1.5rem;
  img {
    width: auto;
    height: 2.5rem;
  }
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

const FollowsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* display: flex;
  ${media.maxSmallDesktop`
    a {
      margin-right: 2rem;
      &:last-child {
        margin-right:0;
      }
    }
  `} */
`;

const Footer = ({footer: {logo /* , footer_trademark */}, follow}) => {
  return (
    <Root>
      <LinksWrapper>
        <Section>
          <Icon src={logo.url} />
          {/* <SubHeader>{RichText.asText(footer_trademark)}</SubHeader> */}
        </Section>
      </LinksWrapper>

      <FollowsWrapper>
        {follow
          .sort((l, r) => l.order - r.order)
          .map(({follow_image, follow_link}) => (
            <FooterFollowIcon
              target="_blank"
              rel="noopener noreferrer"
              href={follow_link.url}
              key={follow_link.url}
            >
              <img alt={follow_image.url} src={follow_image.url} />
            </FooterFollowIcon>
          ))}
      </FollowsWrapper>
    </Root>
  );
};

export default Footer;
