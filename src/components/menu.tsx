import { useEffect, useState } from "react";

export function Menu() {
  const links = [
    { id: "info-banner", name: "ínicio" },
    { id: "about", name: "Sobre" },
    { id: "skills", name: "Skills" },
    { id: "projects", name: "Projetos" },
    { id: "experiences", name: "Experiências" },
  ];
  const [active, setActive] = useState("home");

  useEffect(() => {
    const scrollWatcher = () => {
      let currentSection = "info-banne";
      links.forEach((link) => {
        const menuElement = document.getElementById(link.id);
        if (menuElement) {
          const rectTopElement = menuElement.getBoundingClientRect().top;
          if (rectTopElement <= window.innerHeight / 1.8) {
            currentSection = link.id;
          }
        }
        setActive(currentSection);
      });
    };
    window.addEventListener("scroll", scrollWatcher);
    scrollWatcher();
  }, []);

  return (
    <div className="menu">
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index} className={active === link.id ? "active" : ""}>
              <a href={`#${link.id}`}>{link.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
