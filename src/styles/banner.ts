import styled from "styled-components";

// Interfaces
interface BannerDecorationProps {
  position?: string;
}

export const BannerDecoration = styled.div<BannerDecorationProps>`
  position: relative;
  width: 200px;
  max-width: 100%;
  padding: 10px 0;
  background-color: #272727;
  left: ${(props) => (props.position == "top" ? "0" : "100%")};
  display: block;

  @media screen and (max-width: 1026px) {
    display: none;
  }
`;

export const BannerContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin: 8rem auto 20rem auto;

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
  }

  p {
    font-size: 1.3rem;
    line-height: 1.4;
    font-family: "Montserrat";
    color: ${({ theme }) => theme.secundaryColor};
    margin: 35px 0 85px 0;
    font-weight: 300;
  }

  .text-banner-wrapper {
    position: relative;
    margin: 125px 0;
    max-width: 40ch;
    left: 10%;

    @media screen and (max-width: 1026px) {
      left: 0;
      text-align: center;
      margin: 35px auto;
    }
  }

  .box-decoration-mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 7rem;
    display: none;
    padding: 0 25px;

    @media screen and (max-width: 1026px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      place-items: center;
      gap: 300px;

      div {
        width: 100%;
        display: block !important;
        left: unset;
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
  place-self: start end;

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
`;
