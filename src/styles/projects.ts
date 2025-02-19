import styled from "styled-components";

//Interface
interface ProjectProps {
  projectName?: string;
}

export const ProjectContainer = styled.div`
  position: relative;
  width: 100%;

  margin-top: 20rem;
`;

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 50px;
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

    &:hover .project-name {
      opacity: 1;
    }
  }

  .project-name {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    margin: 5px;
    background-color: rgba(0, 0, 0, 0.6);

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "LexendExa";
    font-size: 1.3rem;
    font-weight: 700;

    opacity: 0;
    transition: 0.2s;
  }

  img {
    border-image: linear-gradient(to right, #3c69ff 0%, #243f99 100%) 1;
    box-shadow: 0 0 30px 10px rgba(60, 105, 255, 0.26);
    border-width: 5px;
    border-style: solid;

    object-fit: cover;
  }

  .project-info {
    font-size: 0.8rem;
    font-family: "Montserrat";

    p {
      margin: 25px 0;
      font-family: 100;
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
`;
