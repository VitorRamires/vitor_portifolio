import {
  BannerContainer,
  BannerText,
  CircleDecoration,
} from "../styles/banner";
import { Btn } from "../styles/style";

export function Banner() {
  return (
    <>
      <BannerContainer>
        <BannerText>
          <div className="text-banner-wrapper">
            <h2>
              Meu nome é <span>Vitor Ramires</span>
            </h2>
            <p>
              Atualmente focando em aperfeiçoar minhas habilidades no
              desenvolvimento front-end atuando nas tecnologias mais usadas do
              mercado
            </p>
            <Btn>Baixar Currículo</Btn>
          </div>
        </BannerText>

        <CircleDecoration>
          <div className="circle"></div>
        </CircleDecoration>
      </BannerContainer>
    </>
  );
}
