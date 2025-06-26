import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface SkillProps {
  skill: {
    source: string;
    tech: string;
  };
  animationSkills: Variants;
}

export function Skill({ skill, animationSkills }: SkillProps) {
  const animRef = useRef(null);
  const inView = useInView(animRef, { amount: 0.25, once: true });

  return (
    <motion.li
      variants={animationSkills}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={animRef}
    >
      <img src={skill.source} alt={`${skill.tech} icon`}/>
      <p>{skill.tech}</p>
    </motion.li>
  );
}
