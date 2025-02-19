import {
  SkillContext,
  SkillsContainer,
  SkillsIcons,
  SkillsInfo,
} from "../styles/skills";
import { NormalText, Title } from "../styles/style";
import { skillsList } from "../content/skillsList";

export function Skills() {
  const allSkills = skillsList;

  return (
    <>
      <SkillsContainer>
        <SkillsInfo>
          <Title square-axis="hor">Habilidades</Title>
          <div className="skills-description">
            <h3>Nome da habilidade</h3>
            <NormalText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              dictum eget lacus convallis egestas. Morbi nisl massa, sodales
              vitae tortor et, commodo accumsan metus. Proin pretium laoreet
              erat, eget dapibus elit malesuada non. Aliquam
            </NormalText>
          </div>
        </SkillsInfo>

        <SkillsIcons>
          <div className="skills-wrapper">
            <p className="observation">
              Dentre as tecologias listadas, existem ferramentas que ou ja
              utilizo no dia dia ou estou estudando atualmente
            </p>
            <div className="skills-box">
              {allSkills.map((skill) => {
                return (
                  <SkillContext key={skill.tech}>
                    <div className="skill-icon">
                      <img src={skill.img} alt="skill-icon" />
                    </div>
                    <p>{skill.tech}</p>
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
