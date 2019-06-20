import React, {Component} from 'react';
import classes from './OurCustomers.module.css'

import styled from 'styled-components';
import {media} from '../../../theme';
import Background from '../../../assets/icons/OurCustomers/purp-bg.png';
import {RichText} from 'prismic-reactjs';
import {
    Header as BaseHeader,
  } from '../../UI/Typography.js';



  const A = styled.a`
  height:15rem;
  padding 1rem 3rem;
  width:100%;
  ${media.minSmallDesktop`
      padding 1rem;
      width:15%;
      height:5rem;
  `}

`;
const Text = styled.div`
  ${media.minSmallDesktop`
     margin-top: 2.5rem;
  `}
`;

const SeeMore = styled.div`
  ${media.minSmallDesktop`
     margin-top: 2rem;
     font-size: 1.7rem;
     color: #6bdfff;
     cursor: pointer;
  `}
`;

const Root = styled.div`
  &&& {
    padding-top: 4rem;
    padding-bottom: 4rem;

  }

  position: relative;
  display: block;
  font-size: 2rem;
  align-items: center;
  text-align: left;
  color: white;

  margin-bottom: 4rem;

  & > div {
    ${media.minSmallDesktop`
      padding: 0 10rem;
    `}
  }
  ${media.minSmallDesktop`

  `}
  ${media.maxSmallDesktop`
  padding: 4rem 2rem;
`}
`;

const BG = styled.img`
  position: absolute;
  width: 100%;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  height: 100%;

`;


const Title = styled(BaseHeader)`
  color: white;
  margin-bottom: 2rem;
  text-align: center;
  ${media.minSmallDesktop`
    font-size: 2rem;
    text-align: start;
  `}
`;

const Icon = styled.img`
    height: 100%;
    width: 100%;

  z-index: 1;
  
  ${media.minSmallDesktop`


  `}
`;

const Computer = styled.div`
  display:none;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height:100%;
  
  ${media.minSmallDesktop`
  display: flex;
  `}
`;
const Phone = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    height:100%;

  ${media.minSmallDesktop`
  display: none;
  `}
`;

class OurCustomers extends Component {

 constructor(props) {
    super(props)


     // const numOfPromoted = parseInt(this.props.customers.length/4) ;
     const promotedArray = [];
     let numOfPromoted = 0;
      for (let index = 0; index < this.props.customers.length; index++) {
        if (this.props.customers[index].data.promoted === 'yes') {
          numOfPromoted++;
          promotedArray.push(this.props.customers[index]);
          console.log(promotedArray[index]);
        }
      }

      numOfPromoted = parseInt(numOfPromoted/4) ;
      console.log(numOfPromoted);
    //  console.log(numOfPromoted );
      this.customers0 = [];
      this.customers1 = [];
      this.customers2 = [];
      this.customers3 = [];



      for (let index = 0; index < promotedArray.length; index++) {
        if (index < numOfPromoted) {
            this.customers0.push(promotedArray[index])
        } else if (index >= numOfPromoted && index < numOfPromoted*2) {
            this.customers1.push(promotedArray[index])
        } else if (index >= numOfPromoted*2 && index < numOfPromoted*3) {
            this.customers2.push(promotedArray[index])
        } else {
            this.customers3.push(promotedArray[index])
        } 
      }


      this.state = { backgroundIndex: 0 }
      
      this.changeImg = this.changeImg.bind(this)
    }

    componentDidMount () {
        this.timeout = setTimeout(
          this.changeImg,
          3000
        )
      }

      componentWillUnmount() {
        if (this.timeout) clearTimeout(this.timeout)
    }
  
    changeImg () {
      this.setState(function ({ backgroundIndex }) {
        const nextBackgroundIndex = ++backgroundIndex % this.customers0.length
      //  console.log(nextBackgroundIndex);
        return { backgroundIndex: nextBackgroundIndex }
      }, function () {
        this.timeout = setTimeout(
          this.changeImg,
          3000
        )
      })
    }

  render () {
    return (
      
        <Root className= {classes.coreValues} id="C">
            <BG src={Background} />
           <Title>{RichText.asText(this.props.text.primary.title)}</Title> 
            <Computer>

                <A  title={this.customers0[this.state.backgroundIndex].data.title} href={this.customers0[this.state.backgroundIndex].data.website.url}>
                   <Icon src={ this.customers0[this.state.backgroundIndex].data.white_logo.url } />
                </A>
                <div className={classes.Line}/>
                <A  title={this.customers1[this.state.backgroundIndex].data.title} href={this.customers1[this.state.backgroundIndex].data.website.url}>
                   <Icon src={ this.customers1[this.state.backgroundIndex].data.white_logo.url } />
                </A>
                <div className={classes.Line}/>
                <A  title={this.customers2[this.state.backgroundIndex].data.title} href={this.customers2[this.state.backgroundIndex].data.website.url}>
                   <Icon src={ this.customers2[this.state.backgroundIndex].data.white_logo.url } />
                </A>
                <div className={classes.Line}/>
                <A  title={this.customers3[this.state.backgroundIndex].data.title} href={this.customers3[this.state.backgroundIndex].data.website.url}>
                   <Icon src={ this.customers3[this.state.backgroundIndex].data.white_logo.url } />
                </A>

            </Computer>
            <Phone>
              <A  title={this.customers0[this.state.backgroundIndex].data.title} href={this.customers0[this.state.backgroundIndex].data.website.url}>
                   <Icon src={ this.customers0[this.state.backgroundIndex].data.white_logo.url } />
                </A>
 
            </Phone>
            <Text>
            {RichText.asText(this.props.text.primary.subtitle)}

            </Text>
            <SeeMore>
               {RichText.asText(this.props.text.primary.see_more)}     
            </SeeMore>

        </Root>
    );
  }
}
export default OurCustomers;