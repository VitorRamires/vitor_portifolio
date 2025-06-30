import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

export const ProjectsData = [
  {
    name: "Lucas Ramires - Site institucional",
    description: `Portifólio para um gerente de projetos, com objetivo de ajudar a alavancar a relevância do mesmo a nivel nacional e internacional, 
    mostrando de forma direta e resumida sua experiência e trajetória profissional. Projeto foi realizado através das tecnologias Typescript, React, CSS3 e bibliotecas
    de animação e internacionalização `,
    image: project1,
    tags: ["React", "Typescript", "i18n", "Motion-frame", "React-Router"],
    hyperlink: "https://lucasramires.netlify.app/",
  },
  {
    name: "Bookguard",
    description: `Aplicação desenvolvida em React com o objetivo de realizar o cadastro, visualização, edição e exclusão de livros. 
    A interface foi construída com Radix UI e styled-components, garantindo um design moderno, acessível e responsivo. Os dados dos 
    livros são armazenados localmente no navegador utilizando o Local Storage.`,
    image: project2,
    tags: ["React", "React-hook-form", "Localhost", "React-Router"],
    hyperlink: "https://bookguard.netlify.app/",
  },
  {
    name: "Avanti Ecommerce",
    description: `Interface desenvolvida com HTML, CSS e JavaScript, inspirada na identidade visual da marca Avanti. 
    O projeto conta com uma homepage responsiva e visualmente atrativa, destacando banners, seções promocionais e 
    produtos em destaque. O objetivo é expandir o projeto com novas telas, como páginas de produto, carrinho de 
    compras e checkout, além da implementação de funcionalidades como filtros, integração com APIs e armazenamento de dados.`,
    image: project3,
    tags: ["HTML", "CSS", "Javascript"],
    hyperlink: "https://avannti-ecommerce.netlify.app/",
  },
];
