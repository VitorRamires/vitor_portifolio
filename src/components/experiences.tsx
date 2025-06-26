import { Title } from "./title";
import { Experience } from "./experience.tsx";
import { motion } from "framer-motion";
import { experiencesData } from "../data/exp.ts";

export function Experiences() {
  return (
    <section id="experiences">
      <div className="center">
        <Title synonim="Trajetória" title="Experiências" />
        <div className="experiences-wrapper">
          {experiencesData.map((exp, index) => {
            return <Experience exp={exp} key={index} />;
          })}
          <motion.div className="timeline"></motion.div>
        </div>
      </div>
    </section>
  );
}
