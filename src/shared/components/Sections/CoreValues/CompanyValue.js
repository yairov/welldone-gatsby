import React from 'react';
import styled, {css} from 'styled-components';

const turquoiseCss = css`
  background: rgba(183, 240, 197, 0.1);
`;

const inverseCss = css`
  background-color: white;
  color: #1FABF3;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  display: flex;
  background-image: url(${({backgroundSrc}) => backgroundSrc});
  background-repeat: no-repeat;
  height: 27.5rem;
  width: 50%;
  box-sizing: border-box;
  padding: 1.7rem 1rem;
  background: rgba(31, 171, 243, 0.1);
  color: #41566E;
  ${({inverse}) => inverse && inverseCss}
  ${({turquoise}) => turquoise && turquoiseCss};
`;

const Icon = styled.img`
  position: absolute;
  bottom: 30px;
  right: 30px;
  height: 10rem;
  width: 10rem;
`;

const Wrapper = styled.div`

    font-size: 2.3rem;
  
`;

const CompanyValue = ({src, children, inverse, turquoise}) => (
  <Root  inverse={inverse} turquoise={turquoise}>
    <Wrapper>{children}</Wrapper>
    <Icon src={src} />
  </Root>
);

export default CompanyValue;
