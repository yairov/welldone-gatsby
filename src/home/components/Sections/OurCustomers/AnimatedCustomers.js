import React, {useReducer, useEffect, useCallback, useState} from 'react';
import AnimateHeight from 'react-animate-height';
import styled from 'styled-components';
import {RichText} from 'prismic-reactjs';
import {media} from 'shared/theme';
import {Header as BaseHeader} from 'shared/components/UI/Typography';
import circuitSVG from 'shared/assets/graphics/circuit.svg';
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
  background: linear-gradient(
    195deg,
    rgba(31, 64, 157, 1) 0%,
    rgba(45, 36, 99, 1) 49.9%,
    rgba(78, 15, 130, 1) 100%
  );
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
  && {
    padding: 0;
  }
`;

const TestCustomers2 = ({customers, text}) => {
  const [state, dispatch] = useReducer(
    (_state, action) => {
      switch (action.type) {
        case 'SET_VISIBLE_CUSTOMERS':
          return {..._state, visibleCustomers: action.payload};
        case 'SET_SORTED_CUSTOMERS':
          return {..._state, sortedCustomers: action.payload};
        case 'SET_CUSTOMER_POSE':
          return {..._state, customerPose: action.payload};
        case 'SET_SHOW_MORE':
          return {..._state, showMore: action.payload};
        case 'SET_SHOW_FLASH':
          return {..._state, showFlash: action.payload};
        case 'SET_FLASH_TIMEOUTS':
          return {..._state, flashTimeOuts: action.payload};
        default:
          return _state;
      }
    },
    {
      visibleCustomers: [],
      sortedCustomers: [],
      customerPose: 'initHide',
      showMore: false,
      showFlash: false,
      flashTimeOuts: [],
      visibleLength: 4,
    }
  );

  const [stateActions] = useState({
    setVisibleCustomers: visibleCustomers =>
      dispatch({type: 'SET_VISIBLE_CUSTOMERS', payload: visibleCustomers}),
    setSortedCustomers: sortedCustomers =>
      dispatch({type: 'SET_SORTED_CUSTOMERS', payload: sortedCustomers}),
    setCustomerPose: customerPose => dispatch({type: 'SET_CUSTOMER_POSE', payload: customerPose}),
    setShowMore: showMore => dispatch({type: 'SET_SHOW_MORE', payload: showMore}),
    setShowFlash: showFlash => dispatch({type: 'SET_SHOW_FLASH', payload: showFlash}),
    setFlashTimeOuts: flashTimeOuts =>
      dispatch({type: 'SET_FLASH_TIMEOUTS', payload: flashTimeOuts}),
  });

  const loadCustomers = useCallback(
    (promoted, customerIndex) => {
      const promotedToLoad = [];
      let currentCustomerIndex = customerIndex;
      for (let index = 0; index < state.visibleLength; index += 1) {
        promotedToLoad[index * 2] = promoted[currentCustomerIndex];
        currentCustomerIndex = (currentCustomerIndex + 1) % promoted.length;
        if (index !== state.visibleLength - 1) {
          promotedToLoad[(index * 2) + 1] = {line: true}; // prettier-ignore
        }
      }
      // console.log(promotedToLoad);

      stateActions.setVisibleCustomers(promotedToLoad);
    },
    [state, stateActions]
  );

  const hideCustomers = useCallback(() => {
    stateActions.setCustomerPose('hide');
    setTimeout(() => {
      stateActions.setCustomerPose('initHide');
    }, 0.8 * promotedLogoSwitchDuration);
  }, [stateActions]);

  const showCustomers = useCallback(() => {
    stateActions.setCustomerPose('show');
  }, [stateActions]);

  const toggleShowMore = useCallback(() => {
    state.flashTimeOuts.forEach(timeOut => {
      clearTimeout(timeOut);
    });
    state.flashTimeOuts = [];

    state.flashTimeOuts.push(
      setTimeout(() => {
        stateActions.setShowFlash(true);
      }, 100)
    );
    state.flashTimeOuts.push(
      setTimeout(() => {
        stateActions.setShowFlash(false);
      }, 500)
    );

    stateActions.setShowMore(!state.showMore);
  }, [state.flashTimeOuts, state.showMore, stateActions]);

  const sortCustomers = useCallback(() => {
    const allCustomers = customers.map(({data}) => data);
    const promoted = allCustomers
      .filter(c => c.promoted === 'yes')
      .sort((l, r) => ((l.order || Number.MAX_VALUE) > (r.order || Number.MAX_VALUE) ? 1 : -1));
    const unPromoted = allCustomers
      .filter(c => c.promoted === 'no')
      .sort((l, r) => ((l.order || Number.MAX_VALUE) > (r.order || Number.MAX_VALUE) ? 1 : -1));
    const sortedCustomers = [...promoted, ...unPromoted];

    stateActions.setSortedCustomers(sortedCustomers);
  }, [customers, stateActions]);

  useEffect(() => {
    const promoted = customers
      .map(({data}) => data)
      .filter(c => c.promoted === 'yes')
      .sort((l, r) => ((l.order || Number.MAX_VALUE) > (r.order || Number.MAX_VALUE) ? 1 : -1));
    let customerIndex = 0;

    loadCustomers(promoted, customerIndex);
    showCustomers();
    sortCustomers();
    setInterval(() => {
      hideCustomers();
      setTimeout(() => {
        customerIndex = (customerIndex + state.visibleLength) % promoted.length;
        loadCustomers(promoted, customerIndex);
        showCustomers();
      }, promotedLogoSwitchDuration);
    }, switchPromotedLogosEvery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Root id="C" pose={state.showMore ? 'all' : 'promoted'}>
      <TopRightCircuit />
      <BottomLeftCircuit />
      <Title>{RichText.asText(text.primary.title)}</Title>
      <AnimateHeight
        duration={1000}
        height={state.showMore ? 0 : 'auto'}
        delay={state.showMore ? 1000 : 0}
      >
        <PromotedCustomers
          customers={state.visibleCustomers}
          pose={state.showMore ? 'hide' : 'show'}
          customerPose={state.customerPose}
          switchDuration={promotedLogoSwitchDuration}
          delay={promptedLogoStaggerDelay}
        />
      </AnimateHeight>
      <TVFlash pose={state.showFlash ? 'show' : 'hide'} />
      <AnimatedHeightNoPadding
        height={state.showMore ? 'auto' : 0}
        delay={state.showMore ? 1000 : 0}
        duration={state.sortedCustomers.length * (state.showMore ? 80 : 55)}
      >
        <AllCustomers customers={state.sortedCustomers} pose={state.showMore ? 'show' : 'hide'} />
      </AnimatedHeightNoPadding>
      <MoreButton showMore={state.showMore} onClick={toggleShowMore} />
    </Root>
  );
};

export default TestCustomers2;
