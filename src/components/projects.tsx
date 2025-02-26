import { projectList } from "../content/projectList";
import {
  Project,
  ProjectContainer,
  ProjectWrapper,
  TagBox,
  Tags,
} from "../styles/projects";
import { Title } from "../styles/style";

export function Projects() {
  const allProjects = projectList;

  return (
    <>
      <ProjectContainer>
        <Title square-axis="ver">Projetos</Title>

        <ProjectWrapper>
          {allProjects.map((project) => {
            return (
              <Project key={project.name}>
                <div className="project-image">
                  <div className="img-box">
                    <img src={project.sourceImg} alt="" />
                  </div>
                </div>

                <div className="project-info">
                  <div className="project-name">
                    <h2>{project.name}</h2>
                  </div>
                  <p>{project.descrição}</p>
                  <a href={project.link}>Ver projeto</a>
                  <TagBox>
                    {project.tags.map((tag) => {
                      return <Tags>{tag}</Tags>;
                    })}
                  </TagBox>
                </div>
              </Project>
            );
          })}
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
}
