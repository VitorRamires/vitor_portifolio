import { SkillContext, SkillsContainer, SkillsIcons } from "../styles/skills";
import { Title } from "../styles/style";
import { skillsList } from "../content/skillsList";
import { useScroll, useTransform } from "framer-motion";

export function Skills() {
  const allSkills = skillsList;

  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 300], [0, 1]);

  return (
    <>
      <SkillsContainer style={{ opacity: scrollOpacity }}>
        <Title>Minhas habilidades</Title>

        <SkillsIcons>
          <div className="skills-wrapper">
            <div className="skills-box">
              {allSkills.map((skill) => {
                return (
                  <SkillContext key={skill.tech}>
                    <div className="skill-icon">
                      <img src={skill.img} alt="skill-icon" />
                    </div>
                    <h3>{skill.tech}</h3>
                    <p className="tech-description">{skill.description}</p>
                  </SkillContext>
                );
              })}
            </div>
          </div>
        </SkillsIcons>
      </SkillsContainer>
    </>
  );
}
