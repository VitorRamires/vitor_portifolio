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
  margin: 100px 0;
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
    }
    @media screen and (max-width: 1175px) {
      flex-direction: column;
      align-items: center;
      margin-left: 0;
    }
  }

  img {
    border-radius: 5px;
    box-shadow: 0 -10px 30px 5px rgba(0, 0, 0, 0.23);
    object-fit: cover;
    width: 590px;
    max-width: 100%;
    height: auto;
  }
  .project-info {
    font-size: 0.8rem;
    padding-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 25px;
    p {
      max-width: 70ch;
      font-weight: 200;
      line-height: 1.5;
      color: rgb(204, 204, 204);
    }
    a {
      width: max-content;
      color: ${({ theme }) => theme.primaryColor};
      font-size: 1rem;
      font-weight: 300;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1175px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    .project-name {
      margin: 0 auto;
    }
    a {
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 510px) {
    margin-top: 45px;
  }
`;

export const Tags = styled.div`
  color: rgb(100, 175, 255);
`;

export const TagBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 15px;
  border-top: 1px solid rgb(83, 83, 83);
  padding-top: 20px;
  margin-top: 10px;

  @media screen and (max-width: 1175px) {
    justify-content: center;
  }
`;
