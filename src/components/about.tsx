import { Title } from "./title";

export function About() {
  return (
    <div className="center">
      <section className="about">
        <div className="about-info">
          <Title synonim="Resumo" title="Sobre mim" />
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed elit malesuada, fringilla dui vitae, efficitur
              ante. In non est placerat, venenatis augue a, tincidunt nulla.
              Maecenas maximus dolor ut urna efficitur dapibus. Curabitur et
              felis vel odio placerat varius. Etiam egestas vehicula elit, non
              sodales felis vestibulum non. In a posuere est. Nullam vel
              condimentum sem. Donec tincidunt nunc ex, a consequat velit
              viverra vitae. Quisque tempor sem{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed elit malesuada, fringilla dui vitae, efficitur
              ante. In non est placerat, venenatis augue a, tincidunt nulla
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
