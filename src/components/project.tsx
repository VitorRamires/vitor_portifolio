import { useInView, motion } from "framer-motion";
import { useRef } from "react";

interface ProjectProps {
  project: {
    hyperlink: string;
    image: string;
    tags: string[];
    name: string;
    description: string;
  };
}

export function Project({ project }: ProjectProps) {
  const animRef = useRef(null);
  const inView = useInView(animRef, { amount:.4, once: true });

  const animationProject = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.div
      variants={animationProject}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.2 }}
      ref={animRef}
      className="projects-box"
    >
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
    </motion.div>
  );
}
