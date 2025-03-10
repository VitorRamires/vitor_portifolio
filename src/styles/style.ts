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
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url("/fonts/Montserrat.ttf");
    font-display: swap;
  }


  body {
    min-height: 100vh;
    background-color: var(--primary-bg);
    background-image: repeating-linear-gradient(to right, transparent 0 49px,rgb(34, 34, 34) 49px 50px ), repeating-linear-gradient(to bottom, transparent 0 49px,rgb(34, 34, 34) 49px 50px);
    background-size: 100px 100px, 100px 100px, 200% 200%;
    background-attachment: fixed;
    animation: moveBG 10s linear infinite;
    &::before{
      background: linear-gradient(to right, #3496ff, #2d5eff);
      z-index: -1;
      position: fixed;
      top:-100px;
      left:calc(50% - 200px);
      border-radius: 50% 50% 0 0;
      pointer-events: none;
      filter: blur(250px);
      content: '';
      width: 200px;
      height: 200px;
    }
  }
  img{
    width: 100%;
    height: 100%;
  }

  @keyframes moveBG {
    0% {
      background-position: 0 0, 0 0;
    }
    100% {
      background-position: 0 -500px, 0 -500px;
    }
  }
  

`;

export const Centralize = styled.div`
  width: 1650px;
  max-width: 95%;
  margin: 0 auto;
`;


export const NormalText = styled.p`
  color: ${({ theme }) => theme.secundaryColorColor};
  font-weight: 200;
  font-size: 0.9rem;
  @media screen and (max-width: 350px) {
    font-size: 0.75rem;
  }
`;

export const Title = styled.h2`
  position: relative;
  width: 100%;
  text-align: center;
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
