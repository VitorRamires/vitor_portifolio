import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top:0%;
  width: 100%;
  z-index: 99;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 25px 50px;

  background-color: ${({ theme }) => theme.primaryBg};

  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  font-family: "LexendExa", "Montserrat";

  a {
    color: ${({ theme }) => theme.secundaryColor};
    text-decoration: none;
    font-size: 1.3rem;
  }
`;

export const LogoName = styled.h3`
  font-size: 2.5rem;
  background: -webkit-linear-gradient(320deg, #3c69ff, #243f99);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
