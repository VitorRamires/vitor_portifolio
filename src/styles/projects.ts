import styled from "styled-components";

//Interface
interface ProjectProps {
  projectName?: string;
}

export const ProjectContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 15rem;
`;

export const ProjectWrapper = styled.div`
  display: block;
  gap: 50px;

  @media screen and (max-width: 510px) {
    display: block;
  }
`;

export const Project = styled.div<ProjectProps>`
  display: flex;
  justify-content: center;
  align-items: start;
  position: relative;
  color: ${({ theme }) => theme.primaryColor};
  cursor: pointer;
  margin: 70px 0;
  font-family: "LexendExa";
  gap: 40px;
  .project-image {
    position: relative;
    width: 650px;
    max-width: 100%;
    height: auto;
  }

  .img-box {
    width: 100%;
    border-radius: 10px;
    background-image: linear-gradient(
      90deg,
      transparent,
      transparent,
      #2d5eff,
      #3496ff
    );
    padding: 15px 20px 15px 30px;
    box-shadow: 10px 0 10px -5px rgba(60, 105, 255, 0.26);
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    .img-box {
      background-image: linear-gradient(
        90deg,
        #2d5eff,
        #3496ff,
        transparent,
        transparent
      );
      box-shadow: -10px 0 10px -5px rgba(60, 105, 255, 0.26);
    }
    margin-left: 15%;
  }

  img {
    border-radius: 5px;
    box-shadow: 0 -10px 30px 5px rgba(0, 0, 0, 0.23);
  }

  .project-info {
    font-size: 0.8rem;
    padding-top:35px;
    p {
      max-width: 70ch;
      font-weight: 200;
      line-height: 1.5;
      color: rgb(204, 204, 204);
    }
    a {
      width: max-content;
      color: ${({ theme }) => theme.terciaryColor};
      font-size: 1.5rem;
      font-weight: 300;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 510px) {
    margin-top: 45px;
  }
`;
