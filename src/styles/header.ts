import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 55px;

  background-color: ${({ theme }) => theme.primaryBg};

  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  font-family: "LexendExa", "Montserrat";

  a {
    color: ${({ theme }) => theme.secundaryColor};
    text-decoration: none;
  }

`;

export const LogoName = styled.h3`
  font-size: 2.5rem;
  background: -webkit-linear-gradient(320deg, #3c69ff, #243f99);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


