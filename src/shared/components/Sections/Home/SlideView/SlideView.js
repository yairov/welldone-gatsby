import React, {Component} from 'react';
import {RichText} from 'prismic-reactjs';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import styled from "styled-components"

import {media} from '../../../../theme/media';
import Text from '../Text/Text';
import Bottle from '../Bottle.js';
const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  flex: 1;

  ${media.minSmallDesktop`
    margin-top: 6rem;
    text-align: start;
    flex-direction: row;
  `}
`;


const BottleSize = styled.div`
  height: 38rem;
  width: 38rem;
  padding-top: 6rem;
`;


const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  flex: 1;

  ${media.minSmallDesktop`
    text-align: start;
    flex-direction: row;
  `}
`;

class SlideView extends Component {
  render() {

    return (
   
        <Root>
          <Flex>
            <Text header={RichText.asText(this.props.items.header)} subText={RichText.asText(this.props.items.content)} button={RichText.asText(this.props.items.button)} spice_up_project={RichText.asText(this.props.items.spice_up_project)}/>
            
           <BottleSize><Bottle/></BottleSize> 
          </Flex>
        </Root>


    );
  }
  }
  export default SlideView;
