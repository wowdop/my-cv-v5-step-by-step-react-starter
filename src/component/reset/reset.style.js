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
`;
