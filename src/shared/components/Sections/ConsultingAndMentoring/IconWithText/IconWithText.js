import React from 'react';
import styled from 'styled-components';
import {Header as BaseHeader} from '../../../UI/Typography';

const Root = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    margin-top: 15px;
  }
`;

const Icon = styled.img`
  width: 15rem;
`;

const Header = styled(BaseHeader)`
  color: #1fabf3;
`;

const IconWithText = ({src, header}) => (
  <Root>
    <Icon src={src} />
    <Header>{header}</Header>
  </Root>
);

export default IconWithText;
