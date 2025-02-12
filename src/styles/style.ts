import styled, { createGlobalStyle } from "styled-components";

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

  @font-face {
    font-family: 'Montserrat';
    src: url("/fonts/Montserrat.ttf");
  }
  
  body {
    background-color: var(--primary-bg);
  }

  img{
    width: 100%;
    height: 100%;
  }
`;

export const Centralize = styled.div`
  width: 1350px;
  max-width: 100%;
  margin: 0 auto;
`;

export const Btn = styled.button`
  display: block;
  width: 250px;
  max-width: 100%;
  padding: 15px 25px;

  background-color: ${({ theme }) => theme.btnBg};
  border-radius: 3px;
  border: none;

  color: ${({ theme }) => theme.primaryColor};
  font-size: 1.4rem;
  text-decoration: none;
  text-align: center;

  cursor: pointer;
`;

export const NormalText = styled.p`
  color: ${({ theme }) => theme.secundaryColorColor};
  font-weight: lighter;
  font-size: 0.9rem;
`;
