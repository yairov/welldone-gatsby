import React from 'react';
import { media } from '../../../theme';
import posed from 'react-pose';
import styled from "styled-components";
import A from './A';
import { RegularIcon } from './Icon'

const AllWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  
  &&{
    padding: 0 2rem;
  }

  ${media.maxMobile`
    margin-top: 1rem;
  `}
`;

const RegularCustomerAnim = posed.div({
  show: {
    scale: 1,
    opacity: 1,
    delay: ({i}) => 1200 + i * 50,
    transition: {duration: 100, ease: 'easeOut'},
  },
  hide: {
    scale: 0.75,
    opacity: 0.01,
    delay: ({ i, total }) => (total - i) * 30,
    transition: {duration: 100, ease: 'easeIn'},
  },
});

const RegularCustomer = styled(RegularCustomerAnim)`
  display: flex;
  align-items: 'center';
  justify-content: 'center';
  width: 23vw;
  height: 7rem;
  padding: 1rem 4rem;

  ${media.minSmallDesktop`
    width: 13vw;
    height: 6rem;
  `}
`;

const AllCustomers = props => 
	<AllWrapper>
		{props.customers.map((itemProps, i, all) => (
      <RegularCustomer
        key={'reg-cust-' + i}
        i={i}
        total={all.length}
        pose={props.pose}
        style={{justifyContent: 'center', alignItems: 'center'}}
      >
        <A
          title={itemProps.title}
        >
          <RegularIcon src={itemProps.white_logo?.url} />
        </A>
      </RegularCustomer>
    ))}
	</AllWrapper>
;

export default AllCustomers;