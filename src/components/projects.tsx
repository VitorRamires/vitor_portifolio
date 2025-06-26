import { ProjectsData } from "../data/projects";
import { motion} from "framer-motion";
import { Title } from "./title";
import { Project } from "./project";

export function Projects() {
  return (
    <motion.section id="projects">
      <div className="center">
        <Title synonim="Portifólio" title="Projetos" />
        <div className="projects-wrapper">
          {ProjectsData.map((project, index) => {
            return <Project project={project} key={index} />;
          })}
        </div>
      </div>
    </motion.section>
  );
}
