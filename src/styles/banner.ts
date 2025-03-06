import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
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
      cursor: pointer;

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
    }

    .main {
      position: relative;
      top: 60px;
    }

    .mask {
      position: absolute;
      top: 30px;
      left: 0;
      background: rgb(10, 138, 223);
      background-image: repeating-linear-gradient(
          to right,
          transparent 0 49px,
          rgb(13, 126, 202) 49px 50px
        ),
        repeating-linear-gradient(
          to bottom,
          transparent 0 49px,
          rgb(13, 126, 202) 49px 50px
        );
      background-size: 100px 100px, 100px 100px, 200% 200%;
      background-attachment: fixed;
      animation: moveBG 10s linear infinite;
      mask-image: url(../../public/icons/mask-circle.svg);
      -webkit-mask-image: url(url(../../public/icons/mask-circle.svg));
      mask-repeat: no-repeat;
      mask-size: 90vw;

      p {
        font-size: 1.5rem;
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
    }
  }
`;
