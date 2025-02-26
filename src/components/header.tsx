import { HeaderContainer, LogoName } from "../styles/header";
import { Navigation } from "../styles/navigation";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <LogoName>V</LogoName>
        <Navigation>
          <ul>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Projetos</a>
            </li>
            <li>
              <a href="">Experiências</a>
            </li>
          </ul>
        </Navigation>
      </HeaderContainer>
    </>
  );
}
