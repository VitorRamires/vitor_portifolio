import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0%;
  width: 100%;
  z-index: 99;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 50px;
  font-family: "LexendExa";
  backdrop-filter: blur(30px);
  a {
    color: ${({ theme }) => theme.secundaryColor};
    text-decoration: none;
    font-size: 1rem;
    @media screen and (max-width: 820px) {
      display: none;
    }
  }
`;

export const LogoName = styled.h3`
  font-size: 2.5rem;
  background: -webkit-linear-gradient(320deg, #3c69ff, #243f99);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
