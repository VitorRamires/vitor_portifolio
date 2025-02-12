import {
  BannerContainer,
  BannerDecoration,
  BannerText,
  CircleDecoration,
} from "../styles/banner";

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
              desenvolvimento front-end focando nas tecnologias mais usadas no
              mercado
            </p>
            <a href="#" className="btn-linkedin">
              Linkedin
            </a>
          </div>
          <BannerDecoration position={"bottom"} />
        </BannerText>

        <CircleDecoration>
          <div className="circle"></div>
        </CircleDecoration>
      </BannerContainer>
    </>
  );
}
