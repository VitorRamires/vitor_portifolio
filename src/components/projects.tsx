import { ProjectsData } from "../data/projects";
import { Title } from "./title";

export function Projects() {
  return (
    <section className="projects">
      <div className="center">
        <Title synonim="Portifólio" title="Projetos" />
        <div className="projects-wrapper">
          {ProjectsData.map((project) => {
            return (
              <div className="projects-box">
                <div className="project-img">
                  <a href={project.hyperlink} target="#"><img src={project.image} alt="project-image" /></a>
                  <div className="tags">
                    {project.tags.map((tag) => {
                      return <p>{tag}</p>;
                    })}
                  </div>
                </div>
                <p className="project-name">{project.name}</p>
                <p className="project-description">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
