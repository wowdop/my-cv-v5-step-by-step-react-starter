import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box ;
  }

  html, 
  body {
    height: 100% ;
  }  

  body {
    margin: 0;
  }

  @font-face {
    font-family: 'my-cv';
    src:
      url('/font/my-cv.ttf?fx5yk1') format('truetype'),
      url('/font/my-cv.woff?fx5yk1') format('woff'),
      url('/font/my-cv.svg?fx5yk1#my-cv') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
`;
