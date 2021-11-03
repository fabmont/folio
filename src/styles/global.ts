import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', 'sans-serif';
  }

  html {
    height: 100%;
  }

  body {
    background-color: #FFF;
    color: #000;
    height: 100%;
  }

  #__next {
    height: 100%;
  }
`;
