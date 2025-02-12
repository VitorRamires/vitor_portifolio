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
  margin: 8rem auto 20rem auto;
`;

export const BannerText = styled.div`
  place-self: end center;
  margin-top:50px;

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
    margin:35px 0 85px 0;
    font-weight: 300;
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
  width: 400px;
  height: 400px;
  place-self: start end;

  border-radius: 50%;
  background: -webkit-gradient(120deg, #3c69ff, #243f99);
  background: -moz-linear-gradient(120deg, #3c69ff, #243f99);
  background: linear-gradient(120deg, #3c69ff, #243f99);
  box-shadow: -10px 4px 30px  #3c69ff;

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
`;

export const BannerDecoration = styled.div<BannerDecorationProps>`
  position: relative;
  width: 200px;
  max-width: 100%;
  padding: 10px 0;
  background-color: #272727;
  left: ${props => props.position == 'top' ? '0' : '100%'};
`;
