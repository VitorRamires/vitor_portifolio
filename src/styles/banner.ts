import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin: 5rem auto 5rem auto;

  @media screen and (max-width: 1026px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;

    button {
      margin: 0 auto;
    }
  }
`;

export const BannerText = styled.div`
  position: relative;
  place-self: end center;
  margin-top: 50px;

  font-size: 1.7rem;
  font-family: "LexendExa";
  color: ${({ theme }) => theme.primaryColor};

  h2 {
    font-weight: 400;
    @media screen and (max-width: 350px) {
      font-size: 1.4rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.4;
    font-family: "Montserrat";
    color: ${({ theme }) => theme.secundaryColor};
    margin: 35px 0 85px 0;
    font-weight: 300;
    width: 50ch;
  }

  .text-banner-wrapper {
    position: relative;
    margin: 125px 0;
    left: 10%;

    h2 {
      max-width: 15ch;
      font-size: 4rem;

      & span {
        background-image: linear-gradient(to right, #3496ff, #2d5eff);
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    @media screen and (max-width: 1026px) {
      left: 0;
      text-align: center;
      margin: 35px auto;
    }

    @media screen and (max-width: 350px) {
      p {
        font-size: 0.8rem;
      }
    }
  }

  @media screen and (max-width: 1026px) {
    width: 100%;
  }

  @media screen and (max-width: 1266px) {
    font-size: 1.3rem;

    p {
      font-size: 1rem;
    }
  }
`;

export const CircleDecoration = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  place-self: start center;
  border-radius: 50%;
  background: -webkit-gradient(120deg, #3c69ff, #243f99);
  background: -moz-linear-gradient(120deg, #3c69ff, #243f99);
  background: linear-gradient(120deg, #3c69ff, #243f99);
  box-shadow: -10px 4px 30px #3c69ff;

  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 97%;
    height: 97%;
    background: ${({ theme }) => theme.primaryBg};
    border-radius: 50%;
    box-shadow: inset -5px 4px 30px #3c69ff;
  }

  @media screen and (max-width: 1026px) {
    place-self: center;
    order: -1;
  }

  @media screen and (max-width: 450px) {
    width: 260px;
    height: 270px;
  }
`;
