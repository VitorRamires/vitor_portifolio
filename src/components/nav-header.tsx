import { useState } from "react";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

export function NavHeader() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleToogleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <div className="navheader">
        <div className="add-links">
          <img src={githubIcon} alt="github-icon" />
          <img src={linkedinIcon} alt="linkedin-icon" />
        </div>

        <div className={`menu ${openMenu ? "active" : ""}`}>
            <div className="btn-menu" onClick={handleToogleMenu}>
              <div className="retangle"></div>
              <div className="retangle"></div>
            </div>

            <nav>
              <ul>
                <li>
                  <a href="#">Resumo</a>
                </li>
                <li>
                  <a href="#">Tecnologias</a>
                </li>
                <li>
                  <a href="#">Projetos</a>
                </li>
                <li>
                  <a href="#">Experiências</a>
                </li>
              </ul>
            </nav>
 
        </div>
      </div>
    </>
  );
}
