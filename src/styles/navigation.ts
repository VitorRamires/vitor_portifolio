import styled from "styled-components";

export const Navigation = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 5rem;
    font-size: 1.7rem;
    font-weight: 200;

    @media screen and (max-width: 1155px) {
      font-size: 1.2rem;
      gap: 3rem;
    }

    @media screen and (max-width: 875PX) {
      font-size: 1rem;
      gap: 2rem;
    }
  }
`;
