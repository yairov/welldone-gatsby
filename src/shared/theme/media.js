// @flow
import {transform, camelCase} from 'lodash';
import {css} from 'styled-components';

const breakPoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1199,
  desktopLarge: 1440,
};

export const otherBreakPoints = {
  minimum: 320,
  smallMobile: 380,
  smallTablet: 580,
  mediumTablet: 860,
  bigTablet: 1000,
  smallDesktop: 1024,
};

const createMediaQuery = (minMax, breakPoint) => (...args) => css`
    @media (${minMax}-width: ${breakPoint}px) {
      ${css(...args)}
    }
  `;

export const media = transform(
  {...breakPoints, ...otherBreakPoints},
  (result, breakPoint, breakPointName) => {
    ['min', 'max'].forEach(minMax => {
      // eslint-disable-next-line no-param-reassign
      result[camelCase(`${minMax} ${breakPointName}`)] = createMediaQuery(minMax, breakPoint); // minMobile, minTablet...
    });
  }
);

media.initial = (...args) => css`
  @media (max-width: ${breakPoints.mobile}px) {
    ${css(...args)}
  }
`;

media.custom = (px, minOrMax = 'min') => (...args) => css`
  @media (${minOrMax}-width: ${px}px) {
    ${css(...args)}
  }
`;
