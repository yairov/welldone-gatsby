import React, {Component, useMemo, useState, useEffect} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import posed, { PoseGroup } from 'react-pose';

import styled from 'styled-components';
import {media} from '../../../theme';
import Background from '../../../assets/icons/purp-bg.png';
import {RichText} from 'prismic-reactjs';
import {Header as BaseHeader} from '../../UI/Typography.js';
import CustomerIcons from './CustomerIcons';

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
  max-width: 20rem;
  max-height: 3.5rem;
  height: ${props => (
    (props.src.endsWith(".svg")) ? "100%" : "auto"
  )};
  width: ${props => (
    (props.src.endsWith(".svg")) ? "100%" : "auto"
  )};

${media.maxMobile`
max-width: 20rem;
max-height: 5rem;

`};
  z-index: 1;
  `;

const CustomerAnimWrapper = posed.div({
  enter: { x: 0, staggerChildren: 300, beforeChildren: true },
  exit: { x: 0, staggerChildren: 300, afterChildren: true }
})

const CustomerAnim = posed.div({
  preEnter: {x: 50, opacity: 0.01, transition: {duration: 500}},
  enter: { x: 0, opacity: 1, transition: {/* ease: 'easeOut', */ duration: 500} },
  exit: { x: -50, opacity: 0.01, transition: {/* ease: 'easeIn', */ duration: 500} }
});

const AnimatedCustomer = styled(CustomerAnim)`
  display: flex;
  flex-direction: row;
`;

const CustomerWrapper = styled(CustomerAnimWrapper)`
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
  preEnter: {}
});

const Line = styled.div`
  width: 1px;
  height: 3.5rem;
  align-items: center;
  background: #979797;
  margin: 2rem;

  ${media.maxMobile`
    display: none;
  `};
`;

// eslint-disable-next-line camelcase
function Customer({title, website, white_logo, isLast}) {
  return (
    <AnimatedCustomer key={'anim=' + white_logo?.url}>
      <A key={'link=' + white_logo?.url} title={title} href={website?.url} target="_blank">
        <Icon src={white_logo?.url} />
      </A>
      {!isLast && <Line />}
    </AnimatedCustomer>
  );
}

export default class TestCustomers2 extends Component {

  state = {
    visibleCustomers: []
  };

  customerIndex = 0;
  visibleLength = 4;

  loadCustomers = (promoted) => {
    const promotedToLoad = [];
    for (let index = 0; index < this.visibleLength; index++) {
      promotedToLoad[index] = promoted[this.customerIndex];
      this.customerIndex = (this.customerIndex + 1) % promoted.length;
    }

    const customersToLoad =
      promotedToLoad.map((itemProps, i, all) =>
        <AnimatedCustomer
          key={'anim-' + itemProps.white_logo?.url}
        >
          <A
            title={itemProps.title}
            href={itemProps.website?.url}
            target="_blank"
          >
            <Icon src={itemProps.white_logo?.url} />
          </A>
          {(i !== all.length - 1) && <Line />}
        </AnimatedCustomer>
      );
    ;

    this.setState({visibleCustomers: customersToLoad});
  };

  clearCustomers = () => {
    this.setState({visibleCustomers: []});
  }

  componentDidMount() {
    const promoted =
      this.props.customers
        .map(({data}) => data)
        .sort((l, r) => l.order || Number.MAX_VALUE - r.order || Number.MAX_VALUE)
        .filter(c => c.promoted === 'yes')
    ;

    this.loadCustomers(promoted);
    const clearCustomersInterval = setInterval(() => {
      this.clearCustomers();
      const loadInterval = setInterval(() => {
        this.loadCustomers(promoted);
        clearInterval(loadInterval);
      }, 1000);
    }, 4000);

  }

  render() {
    
    return (
    <Root id="C">
      <BG src={Background} />
      <Title>{RichText.asText(this.props.text.primary.title)}</Title>
      <PoseGroup animateOnMount preEnterPose="preEnter">
        <CustomerWrapper key={'CustomerWrapper-' + this.state.visibleCustomers.length}>
            {/* style={{display: 'flex', flexDirection: 'row', height: '8rem', justifyContent: 'center'}}> */}
            {this.state.visibleCustomers}
        </CustomerWrapper>
      </PoseGroup>
    </Root>
    );
  }
}

// export default XOurCustomers;
