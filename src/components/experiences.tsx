import { Title } from "./title";
import { Experience } from "./experience.tsx";

export function Experiences() {
  return (
    <section id="experiences">
      <div className="center">
        <Title synonim="Trajetória" title="Experiências" />
        <div className="experiences-wrapper">
          <div className="timeline"></div>
          <Experience />
        </div>
      </div>
    </section>
  );
}
