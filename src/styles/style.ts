import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style-type: none;
  }

  :root {
    --primary-bg: #1b1b1b;
    --secundary-bg: #2f2f2f;
    --btn-bg: #2d5eff;

    --primary-color: #ffffff;
    --secundary-color: #dcdcdc;
    --terciary-color: #3496ff;
  }

  @font-face {
    font-family: 'LexendExa';
    src: url("/fonts/LexendExa.ttf");
  }

  
  body {
    background-color: var(--primary-bg);
  }

  .centralize {
    width: 1250px;
    max-width: 100%;
    margin: 0 auto;
  }
`;
