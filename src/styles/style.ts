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
  width: 1450px;
  max-width: 95%;
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
  font-weight: 300;
  font-size: 0.9rem;

  @media screen and (max-width:350px){
    font-size: 0.75rem;
  }
`;

export const Title = styled.h2`
  position: relative;
  width: max-content;
  margin: 0 auto 55px auto;

  font-size: 2.5rem;
  color: ${({ theme }) => theme.primaryColor};
  font-family: "LexendExa";
  font-weight: 400;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &::after {
    content: "";
    position: relative;
    width: 14px;
    height: 25px;
    border: 3px solid ${({ theme }) => theme.terciaryColor};
  }

  @media screen and (max-width: 380px) {
    font-size: 2rem;
  }
`;
