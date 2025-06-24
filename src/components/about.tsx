import { useRef, useState } from "react";
import { Title } from "./title";

export function About() {
  const [axisX, setAxisX] = useState(0);
  const [axisY, setAxisY] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="center" onMouseMove={affectDegree} ref={divRef}>
      <section
        id="about"
        onMouseLeave={() => {
          setAxisY(0);
          setAxisX(0);
        }}
      >
        <div className="about-info">
          <Title synonim="Resumo" title="Sobre mim" />
          <div className="about-text">
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
            <button> Baixar Currículo </button>
          </div>
        </div>
        <div className="about-soft_skills">
          <div className="decoration"></div>
          <ul>
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
          </ul>
        </div>
      </section>
    </div>
  );
}
