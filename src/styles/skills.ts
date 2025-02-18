import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  gap: 5px;

  margin-top: 20rem;
`;

export const SkillsInfo = styled.div`
  font-family: "Montserrat";

  h2 {
    margin: 0 0 75px 0 !important;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.terciaryColor};
  }

  p {
    max-width: 60ch;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secundaryColor};
    line-height: 1.5;
  }
`;

export const SkillsIcons = styled.div`
  .observation {
    color: rgb(49, 49, 49);
    font-family: "LexendExa";
    font-size: 0.7rem;
  }

  .skills-box {
    position: relative;
    padding: 55px;
    margin-top: 20px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    place-items: center;
    gap: 40px;

    background-color: ${({ theme }) => theme.secundaryBg};

    border-image: linear-gradient(to right, #3c69ff 0%, #243f99 100%) 1;
    border-width: 5px;
    border-style: solid;

    .skill-icon {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100px;
      height: 100px;
      padding: 15px;

      background-color: #414141;
      box-shadow: 7px 7px 0 0 rgba(0, 0, 0, 0.25);

      border: 2px solid #595959;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background-color: #ffffff;
      }
    }

    img {
      width: 90%;
      height: auto;
    }
  }
`;
