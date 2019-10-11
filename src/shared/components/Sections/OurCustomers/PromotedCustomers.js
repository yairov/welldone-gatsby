import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import {media} from 'shared/theme';
import A from './A';
import {PromotedIcon} from './Icon';

const LineAnim = posed.div({
  hide: {
    scale: 0.01,
    delay: ({i}) => i * 30,
    transition: ({animDuration}) => ({duration: animDuration}),
  },
  show: {
    scale: 1,
    delay: ({i, delay}) => i * delay,
    transition: ({animDuration}) => ({duration: animDuration}),
  },
});

const Line = styled(LineAnim)`
  width: 1px;
  height: 4rem;
  align-items: center;
  background: #979797;
  margin: 2rem;

  ${media.maxSmallDesktop`
    display: none;
  `};
`;

const PromotedCustomerAnim = posed.div({
  initHide: {
    x: -50,
    opacity: 0.01,
    transition: {duration: 0},
  },
  show: {
    x: 0,
    opacity: 1,
    delay: ({i, delay, switchDuration}) => (0.2 * switchDuration) + (i * delay), // prettier-ignore
    transition: ({switchDuration}) => ({
      duration: switchDuration * 0.5,
      ease: 'easeOut',
    }),
  },
  hide: {
    x: 50,
    opacity: 0.01,
    delay: ({switchDuration}) => switchDuration * 0.3,
    transition: ({switchDuration}) => ({
      duration: switchDuration * 0.5,
      ease: 'easeIn',
    }),
  },
});

const PromotedCustomer = styled(PromotedCustomerAnim)`
  display: flex;
  align-items: 'center';
  justify-content: 'center';
  width: 19rem;
  height: 6rem;
`;

const PromotedWrapperAnim = posed.div({
  show: {
    scaleX: 1,
    scaleY: 1,
    transition: {duration: 1000},
  },
  hide: {
    scaleX: 0,
    scaleY: 0,
    transition: {duration: 1000},
  },
});

const PromotedWrapper = styled(PromotedWrapperAnim)`
  display: flex;
  height: 37rem;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  
  ${media.maxMobile`
    margin-top: 2rem;
  `}

  ${media.minMobile`
    height: 28rem;
  `}

  ${media.minSmallDesktop`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 8rem;
  `}
`;

const PromotedCustomers = ({customers, customerPose, switchDuration, delay}) => (
  <PromotedWrapper
    customers={customers}
    customerPose={customerPose}
    switchDuration={switchDuration}
    delay={delay}
  >
    {customers.map((itemProps, i) =>
      itemProps.line ? (
        <Line
          // eslint-disable-next-line react/no-array-index-key
          key={`line${i}`}
          i={i}
          pose={customerPose}
          animDuration={switchDuration * 0.25}
          delay={delay}
        />
      ) : (
        <PromotedCustomer
          // eslint-disable-next-line react/no-array-index-key
          key={`cust${i}`}
          i={i}
          pose={customerPose}
          switchDuration={switchDuration}
          delay={delay}
          style={{justifyContent: 'center', alignItems: 'center'}}
        >
          <A title={itemProps.title}>
            <PromotedIcon src={itemProps.white_logo.url} />
          </A>
        </PromotedCustomer>
      )
    )}
  </PromotedWrapper>
);
export default PromotedCustomers;
