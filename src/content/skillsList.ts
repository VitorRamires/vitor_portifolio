const iconsPath = "/icons/";

const skills = [
  { tech: "Javascript", img: "javascript.svg" },
  { tech: "CSS3", img: "css.svg" },
  { tech: "HTML5", img: "html.svg" },
  { tech: "React", img: "react.svg" },
  { tech: "Git", img: "git.svg" },
  { tech: "Figma", img: "figma.svg" },
];

const description =
  " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident adipisci atque perferendis quisquam deleniti, autem officia voluptas blanditiis consequatur voluptatem in placeat assumenda voluptatum sequi culpa. Minima accusamus facilis id?";

export const skillsList = skills.map((skill) => ({
  tech: skill.tech,
  img: `${iconsPath}${skill.img}`,
  description
}));
