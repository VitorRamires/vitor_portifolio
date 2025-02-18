import { experienceList } from "../content/experiencesList";
import { Experience, ExperiencesContainer } from "../styles/experiences";
import { Title } from "../styles/style";

export function Experiences() {
  return (
    <>
      <ExperiencesContainer>
        <Title>Experiências</Title>

        <div className="experiencies-list">
          {experienceList.map((experience) => {
            return (
              <Experience>
                <div className="experience-info">
                  <h3>{experience.empresa}</h3>
                  <p>{experience.periodo}</p>
                </div>
                <div className="experience-activitie">
                  <h3>{experience.cargo}</h3>
                  <p>{experience.activities}</p>
                </div>
              </Experience>
            );
          })}
        </div>
      </ExperiencesContainer>
    </>
  );
}
