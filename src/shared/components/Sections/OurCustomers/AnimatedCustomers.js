import React, {Component, useMemo, useState, useEffect} from 'react';
import posed, { PoseGroup } from 'react-pose';

import styled from 'styled-components';
import {media} from '../../../theme';
import Background from '../../../assets/icons/purp-bg.png';
import {RichText} from 'prismic-reactjs';
import {Header as BaseHeader} from '../../UI/Typography.js';
// import CustomerIcons from './CustomerIcons';

const A = styled.a`
  padding: 1rem;
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
  height: 3.5rem;
  width: auto;

${media.maxMobile`
  max-width: 20rem;
  height: 5rem;

`};
  z-index: 1;
  `;


const CustomerAnim = posed.div({
  initHide: {
    x: -50,
    opacity: 0.01,
    transition: { duration: 0 },
  },
  show: {
    x: 0,
    opacity: 1,
    delay: ({ i }) => 200 + (i * 100),
    transition: { duration: 500, ease: 'easeOut' }
  },
  hide: {
    x: 50,
    opacity: 0.01,
    delay: 300,
    transition: { duration: 500, ease: 'easeIn' }
  }
});

const AnimatedCustomer = styled(CustomerAnim)`
  display: flex;
  flex-direction: row;
  align-items: 'center';
  justify-content: 'center';
`;

const CustomerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 8rem;
  margin: auto;

  ${media.maxSmallDesktop`
    height: 5rem;
  `}

  ${media.maxMobile`
    flex-direction: column;
    height: 30rem;
    margin-top: 5rem;
  `}
`;

const LineAnim = posed.div({
  hide: {
    scale: 0.01,
    delay: ({ i }) => i * 30,
    transition: { duration: 250 }
  },
  show: {
    scale: 1,
    delay: ({ i }) => i * 100,
    transition: { duration: 250 }
  }
});

const Line = styled(LineAnim)`
  width: 1px;
  height: 4rem;
  align-items: center;
  background: #979797;
  margin: 2rem;

  ${media.maxMobile`
    display: none;
  `};
`;

export default class TestCustomers2 extends Component {

  state = {
    visibleCustomers: [],
    customerPose: 'initHide',
    linePose: 'hide'
  };

  customerIndex = 0;
  visibleLength = 4;

  loadCustomers = (promoted) => {
    const promotedToLoad = [];
    for (let index = 0; index < this.visibleLength; index++) {
      promotedToLoad[index * 2] = promoted[this.customerIndex];
      this.customerIndex = (this.customerIndex + 1) % promoted.length;
      if (index !== this.visibleLength - 1) {
        promotedToLoad[(index * 2) + 1] = {line: true};
      }
    }

    this.setState({visibleCustomers: promotedToLoad });
  };

  hideCustomers = () => {
    // this.setState({visibleCustomers: []});
    this.setState({customerPose: 'hide', linePose: 'hide'});
    const initHideTimeOut = setTimeout(() => {
      this.setState({customerPose: 'initHide'});
    }, 800);
  };

  showCustomers = () => {
    this.setState({customerPose: 'show', linePose: 'show'});
  }

  componentDidMount() {
    const promoted =
      this.props.customers
        .map(({data}) => data)
        .sort((l, r) => l.order || Number.MAX_VALUE - r.order || Number.MAX_VALUE)
        .filter(c => c.promoted === 'yes')
    ;

    this.loadCustomers(promoted);
    this.showCustomers();
    const customersAnimInterval = setInterval(() => {
      this.hideCustomers();
      const loadInterval = setTimeout(() => {
        this.loadCustomers(promoted);
        this.showCustomers();
      }, 1000);
    }, 4000);

  }

  render() {
    
    return (
    <Root id="C">
      <BG src={Background} />
      <Title>{RichText.asText(this.props.text.primary.title)}</Title>
        <CustomerWrapper>
            {this.state.visibleCustomers.map((itemProps, i, all) =>
              (itemProps.line) ?
                <Line i={i} pose={this.state.customerPose}/>
              :
                <AnimatedCustomer
                  i={i}
                  pose={this.state.customerPose}
                >
                  <A
                    title={itemProps.title}
                    href={itemProps.website?.url}
                    target="_blank"
                  >
                    <Icon src={itemProps.white_logo?.url} />
                  </A>
                </AnimatedCustomer>
            )}
        </CustomerWrapper>
    </Root>
    );
  }
}

// export default XOurCustomers;
