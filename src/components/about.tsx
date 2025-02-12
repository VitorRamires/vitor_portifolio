import {
  AboutContainer,
  AboutInfo,
  AboutLinks,
  AboutTextBox,
  AboutWrapper,
  DecorationAbout,
  ImagesAbout,
} from "../styles/about";
import { Btn, NormalText } from "../styles/style";

export function About() {
  return (
    <>
      <AboutContainer>
        <AboutWrapper>
          <ImagesAbout>
            <img
              className="open-tag-img"
              src="/icons/open-tag.svg"
              alt="open-tag html icon"
            />

            <h3 className="title">Sobre mim</h3>

            <img
              className="close-tag-img"
              src="/icons/close-tag.svg"
              alt="close-tag html icon"
            />
          </ImagesAbout>

          <AboutInfo>
            <AboutTextBox>
              <div className="name-role">
                <h2>Vitor Ramires</h2>
                <h4>Dev front-end</h4>
              </div>

              <NormalText>
                Meu nome é Vitor Ramires, e atuo como desenvolvedor front-end.
                Hoje estou focado em melhorar e adicionar funcionalidades em uma
                plataforma jurídica. Também já atuei com criação de peças de
                anúncio animadas e em manutenção de e-commerces
              </NormalText>

              <NormalText>
                Procuro sempre me aprimorar através de cursos e projetos
                pessoais. Além disso estou fazendo bacharelado no curso de
                ciências da computação.
              </NormalText>
            </AboutTextBox>

            <AboutLinks>
              <div className="about-links">
                <div className="link">
                  <img src="/icons/linkedin.svg" alt="" />
                </div>

                <div className="link">
                  <img src="/icons/github.svg" alt="" />
                </div>
              </div>

              <Btn>Baixar Currículo</Btn>
            </AboutLinks>
          </AboutInfo>
        </AboutWrapper>

        <DecorationAbout></DecorationAbout>
      </AboutContainer>
    </>
  );
}
