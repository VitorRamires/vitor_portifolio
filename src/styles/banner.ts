import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;


  @media screen and (max-width: 1024px) {
    border-bottom: none;
  }
`;

export const BannerText = styled.div`
  position: relative;
  font-family: "LexendExa";
  color: ${({ theme }) => theme.primaryColor};

  h2 {
    font-weight: 400;
  }

  .text-banner-wrapper {
    position: relative;
    height: 100vh;
    margin: 0 auto;

    .mask,
    .main {
      height: 100%;
      width: 100%;
      color: ${({ theme }) => theme.terciaryColor};
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: none;

      h2 {
        position: relative;
        font-size: 8rem;
        .name-color {
          background: linear-gradient(
            90deg,
            ${({ theme }) => theme.terciaryColor},
            rgb(0, 255, 221),
            rgb(0, 255, 221)
          );
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
        }
      }

      p {
        font-size: 1.3rem;
        margin-top: 25px;
        color: rgb(255, 255, 255);
      }

      @media screen and (max-width: 1300px) {
        h2 {
          font-size: 5rem;
        }
      }

      @media screen and (max-width: 1300px) {
        h2 {
          font-size: 7rem;
        }
      }

      @media screen and (max-width: 900px) {
        h2 {
          font-size: 3.5rem;
        }
      }

      @media screen and (max-width: 820px) {
        h2 {
          font-size: 5rem;
        }
        padding: 0 10px;
      }
    }

    .main {
      position: relative;
      top: 30px;

      @media screen and (max-width: 1024px) {
        .mobile-animation {
          background-image: linear-gradient(
            to right,
            rgb(10, 138, 223),
            rgb(0, 255, 221),
            rgb(10, 138, 223)
          );
          background-size: 200% auto;
          background-clip: text;
          animation: mobileAnimation 5s linear infinite;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
      }
    }

    .mask {
      position: absolute;
      top: 30px;
      left: 0;
      background: rgb(10, 138, 223);
    
      mask-image: url(../../public/icons/mask-circle.svg);
      -webkit-mask-image: url(url(../../public/icons/mask-circle.svg));
      mask-repeat: no-repeat;
      mask-size: 250px;

      h2{
        color: #ffffff !important;
      }

      .name-color-mask {
        background: linear-gradient(
          90deg,
          rgb(0, 255, 221),
          ${({ theme }) => theme.terciaryColor},
          rgb(0, 255, 221)
        );
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% auto;
      }

      img {
        position: relative;
        top: 10px;
        width: 35px;
        height: auto;
      }

      @media screen and (max-width: 1024px) {
        display: none;
      }
    }

    @media screen and (max-width: 820px) {
      height: 70vh;
    }
  }
`;
