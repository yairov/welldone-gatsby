import React from 'react';
//import classes from './Text.css';
import styled  from "styled-components"
import {media} from '../../../../theme/media';


const Pic = styled.img`

  max-width: 35rem;
  max-height: 30rem;
  ${media.minSmallDesktop`
    max-height: 35rem;
  `}

  
`;

const text = (props) => {
    return (
        <Pic src={props.photo} />
    );
};
export default text;
