const iconsPath = "/icons/";

const skills = [
  { tech: "Javascript", img: "javascript.svg" },
  { tech: "CSS3", img: "css.svg" },
  { tech: "HTML5", img: "html.svg" },
  { tech: "React", img: "react.svg" },
  { tech: "Vue", img: "vue.svg" },
  { tech: "Typescript", img: "typescript.svg" },
  { tech: "Git", img: "git.svg" },
  { tech: "NPM", img: "npm.svg" },
  { tech: "Styled-components", img: "sc.svg" },
  { tech: "Radix UI", img: "radix.svg" },
  { tech: "Figma", img: "figma.svg" },
  { tech: "Wordpress", img: "wordpress.svg" },
];

const description =
  "é uma linguagem de programação de alto nível, dinâmica e interpretada, amplamente utilizada para desenvolvimento web. Originalmente criada para adicionar interatividade às páginas da web, hoje é uma das principais linguagens do desenvolvimento frontend e backend.";

export const skillsList = skills.map((skill) => ({
  tech: skill.tech,
  img: `${iconsPath}${skill.img}`,
  description,
}));
