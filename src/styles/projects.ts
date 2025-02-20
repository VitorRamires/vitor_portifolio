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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 50px;

  @media screen and (max-width: 510px) {
    display: block;
  }
`;

export const Project = styled.div<ProjectProps>`
  display: block;
  position: relative;
  color: ${({ theme }) => theme.primaryColor};
  cursor: pointer;
  margin-top: 15px;

  .project-image {
    position: relative;
    width: 100%;
    height: 290px;
  }

  img {
    border-radius: 25px;
    background-image: linear-gradient(90deg, #2d5eff, #3496ff);
    padding: 15px 15px 15px;
    box-shadow: 0 0 30px 10px rgba(60, 105, 255, 0.26);
  }

  .project-info {
    font-size: 0.8rem;
    font-family: "Montserrat";

    p {
      margin: 25px 0;
      font-weight: 200;
      line-height: 1.5;
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
