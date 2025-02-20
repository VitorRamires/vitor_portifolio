import styled from "styled-components";

export const ExperiencesContainer = styled.div`
  margin-top: 15rem;

  h2 {
    margin: 0 auto 125px auto !important;
  }

  h3 {
    font-family: "LexendExa";
    color: ${({ theme }) => theme.primaryColor};
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  p {
    font-family: "Montserrat";
    margin: 15px 0;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.secundaryColor};
    line-height: 1.5;
  }
`;

export const Experience = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 70px 50px;
  border-radius: 7px;
  margin: 4em 0;

  &:nth-child(even) {
    background-color:rgba(0, 0, 0, 0.07);
    box-shadow: 8px 8px 3px 0 rgba(0, 0, 0, 0.24);
    backdrop-filter: blur(5px);
  }

  .experience-info {
    h3 {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }

    h3::after {
      content: "";
      position: relative;
      display: block;
      width: 85%;
      margin-right: 40px;
      height: 2px;
      background-color: ${({ theme }) => theme.btnBg};
      box-shadow: 0 0 15px 3px rgba(60, 105, 255, 0.26);

      @media screen and (max-width: 900px) {
        display: none;
      }
    }

    @media screen and (max-width: 900px) {
      &::after {
        content: "";
        position: relative;
        display: block;
        width: 50%;
        height: 2px;
        background-color: ${({ theme }) => theme.btnBg};
        box-shadow: 0 0 15px 3px rgba(60, 105, 255, 0.26);
      }
    }
  }


  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }


`;

