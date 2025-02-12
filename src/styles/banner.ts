import styled from "styled-components";

// Interfaces
interface BannerDecorationProps {
  position?: string;
}



export const BannerContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  width: 1550px;
  max-width: 100%;
  margin: 8rem auto 0 auto;
`;

export const BannerText = styled.div`
  place-self: end center;

  font-size: 2rem;
  font-family: "LexendExa";
  color: ${({ theme }) => theme.primaryColor};

  h2 {
    font-weight: 400;
  }

  p {
    font-size: 1.5rem;
    font-family: "Montserrat";
    color: ${({ theme }) => theme.secundaryColor};
    margin-top: 35px;
    font-weight: 300;
  }

  .btn-linkedin {
    display: block;
    width: 250px;
    max-width: 100%;
    padding: 15px 25px;
    margin-top: 65px;

    background-color: ${({ theme }) => theme.btnBg};
    border-radius: 3px;

    color: ${({ theme }) => theme.primaryColor};
    font-size: 1.7rem;
    text-decoration: none;
    text-align: center;
  }

  .text-banner-wrapper{
    position: relative;
    margin:125px 0;
    max-width: 40ch;
    left:10%;
  }
`;

export const CircleDecoration = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  place-self: start end;

  border-radius: 50%;
  background: -webkit-gradient(120deg, #3c69ff, #243f99);
  background: -moz-linear-gradient(120deg, #3c69ff, #243f99);
  background: linear-gradient(120deg, #3c69ff, #243f99);

  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 97%;
    height: 97%;
    background: ${({ theme }) => theme.primaryBg};
    border-radius: 50%;
    box-shadow: inset 0px 4px 30px #3c69ff;
  }
`;

export const BannerDecoration = styled.div<BannerDecorationProps>`
  position: relative;
  width: 250px;
  max-width: 100%;
  padding: 15px 0;
  background-color: #272727;
  left: ${props => props.position == 'top' ? '0' : '100%'};
`;
