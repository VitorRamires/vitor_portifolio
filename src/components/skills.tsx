import { Title } from "./title";
import { SkillsData } from "../data/skills";
import arrow from "../assets/icons/arrow.svg";

export function Skills() {
  return (
    <section className="skills">
      <div className="decoration"></div>
      <div className="center">
        <div className="skills-wrapper">
          <div className="decoration"></div>
          <Title synonim="Habilidades" title="Skills Técnicas" />
          <div className="skills-box">
            <ul>
              {SkillsData.map((skill) => {
                return <li>{skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="arrow">
        <img src={arrow} alt="arrow-down-icon" />
      </div>
    </section>
  );
}
