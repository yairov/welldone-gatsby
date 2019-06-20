import React from 'react';
import styled from 'styled-components';
import {Header as BaseHeader} from '../../../UI/Typography';
//import {media} from '../../../../theme';

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
  color: #1FABF3;
`;

const IconWithText = (props) => (
  <Root >
    <Icon src={props.src} />
     <Header>{props.header}</Header>
  </Root>
);

export default IconWithText;



