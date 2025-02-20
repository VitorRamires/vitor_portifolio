import styled from "styled-components";

export const SkillsContainer = styled.div`
  margin-top: 5rem;

  @media screen and (max-width: 1270px) {
    grid-template-columns: 1fr;

    .skills-description {
      margin-bottom: 55px;
      display: block;
      text-align: center;

      p {
        max-width: 100%;
      }
    }
  }

  @media screen and (max-width: 1026px) {
    .skills-description {
      display: none;
    }
  }
`;

export const SkillsIcons = styled.div`

  .skills-box {
    position: relative;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    place-items: center;
    gap: 70px 150px;

    &::before {
      position: absolute;
      content: "";
      width: 60%;
      height: 60%;
      background-image: linear-gradient(
        125deg,
        rgb(61, 99, 204),
        rgb(0, 68, 255)
      );
      box-shadow: 0 0 10px 20px rgba(0, 0, 0, 0.25);
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-size: 200% auto;
      border-radius: 15px;
    }

    .skill-icon {
      display: flex;
      margin: 25px auto 15px auto;
      width: 100px;
      height: 100px;
      padding: 15px;
      background-color: #414141;
      box-shadow: 7px 7px 0 0 rgba(0, 0, 0, 0.25);
      border: 2px solid #595959;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        transform: scale(1.1);
        box-shadow: 7px 7px 0 0 rgba(0, 0, 0, 0.25);
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const SkillContext = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.primaryColor};
  background-color: rgba(41, 41, 41, 0.56);
  font-family: "LexendExa";
  text-align: center;
  padding: 35px;
  border-radius: 10px;
  backdrop-filter: blur(50px);
  box-shadow: 15px 15px 3px 0 rgba(0, 0, 0, 0.25);

  .tech-description {
    color: rgb(173, 173, 173);
    line-height: 1.5;
    text-align: start;
    margin-top: 25px;
    font-size: 0.7rem;
  }

`;
