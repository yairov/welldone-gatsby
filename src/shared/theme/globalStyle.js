import {createGlobalStyle, css} from 'styled-components';
import {media} from './media';

const fontCss = css`
  font-size: 8px;

  ${media.minMobile`
    font-size:10px;
  `}

  ${media.minTablet`
    font-size: 13px;
  `}

  ${media.minSmallDesktop`
    font-size:0.75vw;
  `}
`;
const globalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Heebo:100,300,400,500,700');
  @import url('https://fonts.googleapis.com/css?family=Nunito:300,600,800');


  html {
   ${fontCss};
  }

  body {
    box-sizing: border-box;    
    font-family:'Heebo' , sans-serif;
    font-weight: 300;
    position: relative;
    overflow: auto;
    margin: 0;
  }

  h1 ,h2, h3, h4, h5, h6, p{
    margin: 0; 
  }
`;

export default globalStyle;
