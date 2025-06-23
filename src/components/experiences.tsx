import { Title } from "./title";
import { Experience } from "./experience.tsx";

export function Experiences() {
  return (
    <section className="experiences">
      <div className="center">
        <Title synonim="Trajetória" title="Experiências" />
        <div className="experiences-wrapper">
          <Experience />
        </div>
      </div>
    </section>
  );
}
