const iconsPath = "/icons/";

const skills = [
  {
    tech: "Javascript",
    img: "javascript.svg",
    description:
      "Linguagem de programação usada para criar interatividade em páginas web. Suporta programação orientada a objetos, funcional e assíncrona.",
  },
  {
    tech: "CSS3",
    img: "css.svg",
    description:
      "folha de estilo responsável pelo design e estilo das páginas web, incluindo animações, flexbox e grid layout.",
  },
  {
    tech: "HTML5",
    img: "html.svg",
    description:
      "Linguagem de marcação para estruturação de páginas web, trazendo novos elementos semânticos, suporte a multimídia e APIs avançadas.",
  },
  {
    tech: "React",
    img: "react.svg",
    description:
      "Biblioteca JavaScript para construção de interfaces de usuário reativas e componentes reutilizáveis, utilizando um conceito chamado Virtual DOM.",
  },
  {
    tech: "Git",
    img: "git.svg",
    description:
      "Sistema de controle de versão distribuído que permite rastrear mudanças no código, trabalhar em equipe e gerenciar repositórios.",
  },
  {
    tech: "Figma",
    img: "figma.svg",
    description:
      "Ferramenta online para design de interfaces e prototipagem, permitindo colaboração em tempo real e integração com equipes de desenvolvimento.",
  },
];

export const skillsList = skills.map((skill) => ({
  tech: skill.tech,
  img: `${iconsPath}${skill.img}`,
  description: skill.description,
}));
