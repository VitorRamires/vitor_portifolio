import project1 from "../assets/images/project1.avif";
import project2 from "../assets/images/project2.avif";
import project3 from "../assets/images/project3.avif";
import project4 from "../assets/images/leatnetwork.avif"

export const ProjectsData = [
  {
    name: "LM Consultoria",
    description: `Portifólio para um gerente de projetos, com objetivo de ajudar a alavancar a relevância do mesmo a nivel nacional e internacional, 
    mostrando de forma direta e resumida sua experiência e trajetória profissional. Projeto foi realizado através das tecnologias Typescript, React, CSS3 e bibliotecas
    de animação e internacionalização `,
    image: project1,
    tags: ["React", "Typescript", "i18n", "Motion-frame", "React-Router"],
    hyperlink: "https://lmramiresconsultoria.com/",
  },
  {
    name: "Bookguard",
    description: `Aplicação desenvolvida em React com o objetivo de realizar o cadastro, visualização, edição e exclusão de livros. 
    A interface foi construída com Radix UI e styled-components, garantindo um design moderno, acessível e responsivo. Os dados dos 
    livros são armazenados localmente no navegador utilizando o Local Storage.`,
    image: project2,
    tags: ["React", "React-hook-form", "LocarStorage", "React-Router"],
    hyperlink: "https://bookguard.netlify.app/",
  },
  {
    name: "Hypecloth",
    description: `Aplicação desenvolvida com Javascript. O objetivo é simular uma homepage de um ecommerce focados em roupas. A interface atualmente
    tem algumas interações, mas elá será evoluida para uma aplicação e-commerce completa, que será migrada para React como a principal tecnologia utilizada. 
    `,
    image: project3,
    tags: ["Javascript", "CSS3", "HTML5"],
    hyperlink: "https://hypecloth.netlify.app/",
  },
  {
    name: "Leap network",
    description: `Neste projeto, desenvolvi uma rede social dinâmica utilizando React.js, focada em oferecer uma experiência de usuário fluida e reativa. 
    O desafio central foi integrar uma API REST externa com operações de CRUD completo (Criação, Leitura, Atualização e Deleção), 
    garantindo que a interface refletisse as mudanças de estado instantaneamente. 
    `,
    image: project4,
    tags: ["React", "Date-fns", "Localstorage", "REST API"],
    hyperlink: "https://leapnetwork.netlify.app/",
  },
];
