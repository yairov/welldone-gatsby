/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {withState, compose} from 'recompose';
import styled from 'styled-components';
import {media} from '../../../theme/index';
import ellipse from '../../../assets/icons/ellipse.svg';

const Circle = styled.img`
  width: ${({isActive}) => (isActive ? 1.7 : 1.15)}rem;
`;

const Wrapper = styled.div`
  justify-content: center;
  margin-top: 1.5rem;
  align-items: center;
  & > * {
    margin-right: 0.5rem;
  }
  display: ${({hideOnMobile}) => (hideOnMobile ? 'none' : 'flex')};
  ${media.minSmallDesktop`
    display:flex;
  `};
  ${({controlsCss}) => controlsCss};
`;

const Root = styled.div`
  overflow: hidden;
  max-width: 100%;
  &&& {
    ${media.minSmallDesktop`
      padding-right: ${({innerPadding = 0}) => innerPadding};
    `}
  }
  display: ${({hideOnMobile}) => (hideOnMobile ? 'none' : 'block')};
  ${media.minSmallDesktop`
    display:block; 
  `};
`;

const ChildrenWrapper = styled.div`
  max-height: 100%;
  display: flex;
  flex-wrap: nowrap;
  transition: transform ease-out 0.45s;
  transform: translateX(calc(${({currentSlide}) => currentSlide * -100}%));
  ${media.minSmallDesktop`
    transform: translateX(
      calc(
        ${({currentSlide}) => currentSlide * -100}% -
          ${({currentSlide, innerPadding = 0}) => (currentSlide ? innerPadding : 0)} * ${({
    currentSlide = 0,
  }) => currentSlide}
      )
    );
  `}
  & > * {
    min-width: 100%;
  }
`;

const Slider = ({
  hideOnMobile,
  className,
  currentSlide,
  controlsCss,
  children,
  setCurrentSlide,
}) => {
  const handleClick = e => {
    setCurrentSlide(e.currentTarget.getAttribute('tabIndex'));
  };

  return (
    <>
      <Root hideOnMobile={hideOnMobile} className={className}>
        <ChildrenWrapper currentSlide={currentSlide}>{children}</ChildrenWrapper>
      </Root>
      <Wrapper controlsCss={controlsCss} hideOnMobile={hideOnMobile}>
        {children.map((_, idx) => (
          <i
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            tabIndex={idx}
            onClick={handleClick}
            onKeyDown={handleClick}
            role="link"
          >
            <Circle isActive={idx === currentSlide} src={ellipse} />
          </i>
        ))}
      </Wrapper>
    </>
  );
};

export default compose(withState('currentSlide', 'setCurrentSlide', 0))(Slider);
