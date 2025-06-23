import { Title } from "./title";

export function About() {
  return (
    <div className="center">
      <section className="about">
        <div className="about-info">
          <Title synonim="Resumo" title="Sobre mim" />
          <div className="about-text">
            <p>
              Sou Vitor tenho e sou desenvolvedor Front-end apaixonado por
              tecnologia, natural de Porto Alegre, Rio Grande do Sul. Sempre
              busco unir criatividade e técnica para entregar soluções digitais
              eficazes. Atualmente minhas principais tencologia são HTML5, CSS3,
              JavaScript e React.js. Mas procuro estar sempre estudando outras
              ferramentas e linguagens.
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
            <li>Gestão do tempo</li>
            <li>Adaptabilidade</li>
            <li>Trabalho em equipe</li>
            <li>Evolução Técnica</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
