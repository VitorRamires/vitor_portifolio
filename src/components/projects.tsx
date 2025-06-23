import { ProjectsData } from "../data/projects";
import { Title } from "./title";

export function Projects() {
  return (
    <section id="projects">
      <div className="center">
        <Title synonim="Portifólio" title="Projetos" />
        <div className="projects-wrapper">
          {ProjectsData.map((project, index) => {
            return (
              <div className="projects-box" key={index}>
                <div className="project-img">
                  <a href={project.hyperlink} target="#">
                    <img src={project.image} alt="project-image" />
                  </a>
                  <div className="tags">
                    {project.tags.map((tag, index) => {
                      return <p key={index}>{tag}</p>;
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
