import { useRef, useState } from "react";
import { Title } from "./title";
import { motion, useInView } from "framer-motion";
import curriculum from "../assets/pdf/Curriculo Desenvolvedor - Vitor Ramires 2025.pdf";

export function About() {
  const [axisX, setAxisX] = useState(0);
  const [axisY, setAxisY] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const animRef = useRef(null);
  const inView = useInView(animRef, { amount: 0.35, once: true });

  function affectDegree(event: React.MouseEvent<HTMLDivElement>) {
    if (!divRef.current) return;

    const rectSize = divRef.current?.getBoundingClientRect();
    const centerX = rectSize?.left + (rectSize?.width ?? 0) / 2;
    const centerY = rectSize?.top + (rectSize?.height ?? 0) / 2;

    const offsetX = event.clientX - centerX;
    const offsetY = event.clientY - centerY;

    setAxisX(offsetX / 30);
    setAxisY(offsetY / 10);
  }

  const bannerAbout = {
    hiddenLeft: {
      opacity: 0,
      x: -25,
    },
    hiddenRight: {
      opacity: 0,
      x: 25,
    },
    visible: {
      opacity: 1,
      x: 0,
    },

    visibleOpacity: {
      opacity: 1,
      scale: 1,
    },
    hiddenOpacity: {
      opacity: 0,
      scale: 0.5,
    },
  };

  return (
    <div className="center" onMouseMove={affectDegree} ref={divRef}>
      <section
        id="about"
        onMouseLeave={() => {
          setAxisY(0);
          setAxisX(0);
        }}
      >
        <motion.div className="about-info" ref={animRef}>
          <Title synonim="Resumo" title="Sobre mim" />
          <motion.div
            variants={bannerAbout}
            initial="hiddenLeft"
            animate={inView ? "visible" : "hiddenLeft"}
            className="about-text"
            transition={{ duration: 0.5 }}
          >
            <p>
              Sou desenvolvedor Front-end apaixonado por tecnologia, natural de
              Porto Alegre, Rio Grande do Sul. Sempre busco unir criatividade e
              técnica para entregar soluções digitais eficazes. Atualmente
              minhas principais tencologia são HTML5, CSS3, JavaScript e
              React.js. Mas procuro estar sempre estudando outras ferramentas e
              linguagens.
            </p>
            <p>
              Já tive algumas experiencias profisionais como desenvolvimento de
              banners publicitários e materiais digitais para marcas de alto
              impacto, suporte técnico em banco de dados ajudando na
              identificação e resolução de bugs junto aos clientes e atualmente,
              estou trabalhando no desenvolvimento front-end de uma plataforma
              de gestão jurídica, e sigo me aperfeiçoando por meio de projetos
              pessoais e cursos focados em frameworks modernos.
            </p>
            <a
              href={curriculum}
              download="Curriculo Desenvolvedor - Vitor Ramires"
              target="#"
            >
              <button>Baixar Currículo</button>
            </a>
          </motion.div>
        </motion.div>
        <div className="about-soft_skills">
          <motion.div
            className="decoration"
            variants={bannerAbout}
            initial="hiddenRight"
            animate={inView ? "visibleOpacity" : "hiddenOpacity"}
            transition={{ delay: 0.5, duration: 2 }}
          ></motion.div>
          <motion.ul
            variants={bannerAbout}
            initial="hiddenRight"
            animate={inView ? "visible" : "hiddenRight"}
            transition={{ duration: 0.5 }}
          >
            <li
              style={{
                transform: `perspective(1200px) rotateY(${axisX}deg) rotateX(${axisY}deg)`,
              }}
            >
              Gestão do tempo
            </li>
            <li
              style={{
                transform: `perspective(1200px) rotateY(${axisX}deg) rotateX(${axisY}deg)`,
              }}
            >
              Adaptabilidade
            </li>
            <li
              style={{
                transform: `perspective(1200px) rotateY(${axisX}deg) rotateX(${axisY}deg)`,
              }}
            >
              Trabalho em equipe
            </li>
            <li
              style={{
                transform: `perspective(1200px) rotateY(${axisX}deg) rotateX(${axisY}deg)`,
              }}
            >
              Evolução Técnica
            </li>
          </motion.ul>
        </div>
      </section>
    </div>
  );
}
