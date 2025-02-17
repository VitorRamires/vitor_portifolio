import { projectList } from "../content/projectList";
import { Project, ProjectContainer, ProjectWrapper } from "../styles/projects";
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
                  <div className="project-name">
                    <p>{project.name}</p>
                  </div>

                  <img src={project.sourceImg} alt="" />
                </div>

                <div className="project-info">
                  <p>{project.descrição}</p>
                  <a href={project.link}>Ver projeto</a>
                </div>
              </Project>
            );
          })}
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
}
