import React from 'react';
import {Link, Events as ScrollEvents} from 'react-scroll';
import {noop} from 'lodash';
import styled from 'styled-components';
import {media} from 'shared/theme/media';
import useBooleanState from 'shared/hooks/useBooleanState';

const NavigationItemWrapper = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  cursor: pointer;
  color: ${({isActive}) => (isActive ? '#40A4C8' : '#51718C')};

  &a {
    text-decoration: none;
    color: inherit;
  }

  ${media.minSmallDesktop`
    margin-right: 3rem;
    font-size: 100%;

    &a {
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
  display: ${({isActive}) => (isActive ? 'block' : 'none')};
`;

const NavigationItem = ({simple, children, link, onClick = noop}) => {
  const [isActive, , setActive, setInactive] = useBooleanState(false);

  const linkOnClick = React.useCallback(() => {
    // workaround to fix react-scroll missing the right active section
    ScrollEvents.scrollEvent.register('end', () => {
      window.scrollBy(0, 5);
    });
    onClick();
  }, [onClick]);

  if (simple) {
    return <NavigationItemWrapper>{children}</NavigationItemWrapper>;
  }

  return (
    <NavigationItemWrapper name={link} isActive={isActive} onClick={onClick}>
      <Link
        onClick={linkOnClick}
        to={link}
        spy
        isDynamic
        smooth
        delay={1}
        offset={-50}
        duration={500}
        onSetActive={setActive}
        onSetInactive={setInactive}
      >
        <span>
          {children}
          <Line name={link} isActive={isActive} />
        </span>
      </Link>
    </NavigationItemWrapper>
  );
};

export default NavigationItem;
