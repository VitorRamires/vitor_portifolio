import {
  AboutContainer,
  AboutInfo,
  AboutLinks,
  AboutTextBox,
  AboutWrapper,
  DecorationAbout,
} from "../styles/about";
import { NormalText } from "../styles/style";

export function About() {
  return (
    <>
      <AboutContainer>
        <AboutWrapper>
          <img
            className="close-tag-img"
            src="/icons/close-tag.svg"
            alt="close-tag html icon"
          />

          <AboutInfo>
            <AboutTextBox>
              <h3 className="title">Sobre mim</h3>

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
            </AboutLinks>
          </AboutInfo>
        </AboutWrapper>

        <DecorationAbout></DecorationAbout>
      </AboutContainer>
    </>
  );
}
