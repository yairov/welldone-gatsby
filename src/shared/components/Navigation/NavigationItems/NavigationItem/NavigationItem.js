import React, {useState} from 'react';
import {Link} from 'react-scroll';
import styled from 'styled-components';
import {media} from '../../../../theme/media';

const NavigationItemWrapper = styled.div`
  margin: 2rem;
  display: block;
  height: 100%;
  align-items: center;
  width: auto;
  font-size: 150%;
  cursor: pointer;
  color: ${({name, active}) => (name && active ? '#40A4C8;' : '#51718C')};

  & a {
    text-decoration: none;
    color: inherit;
  }

  ${media.minSmallDesktop`
    margin: 0;
    display: block;
    height: 100%;
    align-items: center;
    width: auto;
    margin-right: 3rem;
    font-size: 100%;

    & a {
        &:hover {
            border-bottom: 2px solid #40A4C8;
            width: 110%;
            color: #40A4C8;
        }
    }
    
`}
`;

const Line = styled.div`
  border-bottom: 2px solid #40a4c8;
  width: 100%;
  color: #40a4c8;
  display: ${({name, active}) => (name && active ? 'block' : 'none')};
`;

const NavigationItem = ({simple, children, link, closed}) => {
  const [active, setActive] = useState(null);

  const handleSetActive = to => {
    setActive(to);
  };

  const handleSetInactive = () => {
    setActive(null);
  };

  if (simple) {
    return <NavigationItemWrapper>{children}</NavigationItemWrapper>;
  }

  return (
    <NavigationItemWrapper name={link} active={active} onClick={closed}>
      <Link
        onClick={closed}
        activeClass="NavigationItem-module--active"
        to={link}
        spy
        smooth
        offset={-70}
        duration={500}
        onSetActive={handleSetActive}
        onSetInactive={handleSetInactive}
      >
        {children}
      </Link>

      <Line name={link} active={active} />
    </NavigationItemWrapper>
  );
};

export default NavigationItem;
