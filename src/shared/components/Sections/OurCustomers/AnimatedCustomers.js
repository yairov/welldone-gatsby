import React, {Component} from 'react';
import AnimateHeight from 'react-animate-height';
import styled from 'styled-components';
import {RichText} from 'prismic-reactjs';
import { media } from '../../../theme';
import {Header as BaseHeader} from '../../UI/Typography';
import circuitSVG from '../../../assets/graphics/circuit.svg';
import PromotedCustomers from './PromotedCustomers';
import AllCustomers from './AllCustomers';
import TVFlash from './TVFlash';
import MoreButton from './MoreButton';

// Promoted Animation Consts
const switchPromotedLogosEvery = 7000;
const promotedLogoSwitchDuration = 1000;
const promptedLogoStaggerDelay = 100;

const Root = styled.div`
  &&& {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  align-items: start;
  text-align: left;
  color: white;
  background: linear-gradient(195deg, rgba(31, 64, 157, 1) 0%, rgba(45, 36, 99, 1) 49.9%, rgba(78, 15, 130, 1) 100%);
  overflow: hidden;

  & > div {
    z-index: 10;
    ${media.minSmallDesktop`
      padding: 0 10rem;
    `}
  }

  ${media.maxSmallDesktop`
    align-items: center;
    padding: 4rem 2rem 6rem 2rem;
    background: #3F1B73;
  `}
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

const Circuit = styled.div`
  position: absolute;
  background-image: url(${circuitSVG});
  background-repeat: no-repeat;
  background-position: center;
  height: 29rem;
  width: 32rem;


  ${media.minSmallDesktop`
    height: 27rem;
    width: 17rem;
  `}
`;

const TopRightCircuit = styled(Circuit)`
  right: -11rem;
  top: -7rem;
`;

const BottomLeftCircuit = styled(Circuit)`
  left: -10rem;
  bottom: -5rem;
`;

const AnimatedHeightNoPadding = styled(AnimateHeight)`
  &&{
    padding: 0;
  }
`;

export default class TestCustomers2 extends Component {
  state = {
    visibleCustomers: [],
    customerPose: 'initHide',
    showMore: false,
    showFlash: false
  };

  customerIndex = 0;

  visibleLength = 4;

  loadCustomers = promoted => {
    const promotedToLoad = [];
    for (let index = 0; index < this.visibleLength; index++) {
      promotedToLoad[index * 2] = promoted[this.customerIndex];
      this.customerIndex = (this.customerIndex + 1) % promoted.length;
      if (index !== this.visibleLength - 1) {
        promotedToLoad[index * 2 + 1] = {line: true};
      }
    }

    this.setState({visibleCustomers: promotedToLoad});
  };

  hideCustomers = () => {
    this.setState({customerPose: 'hide'});
    setTimeout(() => {
      this.setState({customerPose: 'initHide'});
    }, 0.8 * promotedLogoSwitchDuration);
  };

  showCustomers = () => {
    this.setState({customerPose: 'show'});
  };
  
  flashTimeOuts = [];

  toggleShowMore = () => {

    this.flashTimeOuts.forEach(timeOut => {
      clearTimeout(timeOut);
    });
    this.flashTimeOuts = [];

    this.flashTimeOuts.push(setTimeout(() => {
      this.setState({showFlash: true});
    }, 100));
    this.flashTimeOuts.push(setTimeout(() => {
      this.setState({showFlash: false});
    }, 500));

    this.setState({showMore: !this.state.showMore});
  }

  componentDidMount() {
    const promoted = this.props.customers
      .map(({data}) => data)
      .filter(c => c.promoted === 'yes')
      .sort((l, r) => (l.order || Number.MAX_VALUE) > (r.order || Number.MAX_VALUE) ? 1 : -1);
    this.loadCustomers(promoted);
    this.showCustomers();
    setInterval(() => {
      this.hideCustomers();
      setTimeout(() => {
        this.loadCustomers(promoted);
        this.showCustomers();
      }, promotedLogoSwitchDuration);
    }, switchPromotedLogosEvery);
  }

  render() {
    const allCustomers = this.props.customers.map(({ data }) => data);
    const promoted = allCustomers.filter(c => c.promoted === 'yes')
      .sort((l, r) => (l.order || Number.MAX_VALUE) > (r.order || Number.MAX_VALUE) ? 1 : -1);
    const unPromoted = allCustomers.filter(c => c.promoted === 'no')
    .sort((l, r) => (l.order || Number.MAX_VALUE) > (r.order || Number.MAX_VALUE) ? 1 : -1);
    const sortedCustomers = [ ...promoted, ...unPromoted];

    return (
      <Root id="C" pose={this.state.showMore ? 'all' : 'promoted'}>
        <TopRightCircuit />
        <BottomLeftCircuit />
        <Title>{RichText.asText(this.props.text.primary.title)}</Title>
        <AnimateHeight
          duration={1000}
          height={this.state.showMore ? '0' : 'auto'}
          delay={this.state.showMore? 1000 : 0}
        >
          <PromotedCustomers
            customers={this.state.visibleCustomers}
            pose={this.state.showMore ? 'hide' : 'show'}
            customerPose={this.state.customerPose}
            switchDuration={promotedLogoSwitchDuration}
            delay={promptedLogoStaggerDelay}
          />
        </AnimateHeight>
        <TVFlash pose={this.state.showFlash ? 'show' : 'hide'} />
        <AnimatedHeightNoPadding
          height={this.state.showMore ? 'auto' : '0'}
          delay={this.state.showMore? 1000 : 0}
          duration={sortedCustomers.length * (this.state.showMore ? 80 : 55)}
        >
          <AllCustomers
            customers={sortedCustomers}
            pose={this.state.showMore ? 'show' : 'hide'}
          />
        </AnimatedHeightNoPadding>
        <MoreButton
          showMore={this.state.showMore}
          onClick={this.toggleShowMore}
        />
      </Root>
    );
  }
}
