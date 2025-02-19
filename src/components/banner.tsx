import {
  BannerContainer,
  BannerDecoration,
  BannerText,
  CircleDecoration,
} from "../styles/banner";
import { Btn } from "../styles/style";

export function Banner() {
  return (
    <>
      <BannerContainer>
        <BannerText>
          <BannerDecoration position={"top"} />
          <div className="text-banner-wrapper">
            <h2>Desenvolvedor front-end</h2>
            <p>
              Atualmente focando em aperfeiçoar minhas habilidades no
              desenvolvimento front-end atuando nas tecnologias mais usadas do
              mercado
            </p>
            <Btn>Linkedin</Btn>
          </div>
          <BannerDecoration position={"bottom"} />
          <div className="box-decoration-mobile">
            <BannerDecoration />
            <BannerDecoration />
          </div>
        </BannerText>

        <CircleDecoration>
          <div className="circle"></div>
        </CircleDecoration>
      </BannerContainer>
    </>
  );
}
