import project1 from "../assets/images/project1.avif";
import project2 from "../assets/images/project2.avif";
import project3 from "../assets/images/project3.avif";

export const ProjectsData = [
  {
    name: "Lucas Ramires - Site institucional",
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
    tags: ["React", "React-hook-form", "Localhost", "React-Router"],
    hyperlink: "https://bookguard.netlify.app/",
  },
  {
    name: "HypeCloth Ecommerce",
    description: `Interface desenvolvida com HTML, CSS e JavaScript. 
    O projeto conta com uma homepage responsiva e visualmente atrativa, destacando banners, seções promocionais e 
    produtos em destaque. Entretanto, o projeto ainda está sendo desenvolvido, então algumas coisas podem mudar. 
    O objetivo é futuramente expandir o projeto com novas telas, como páginas de produto, carrinho de 
    compras e checkout, além da implementação de funcionalidades como filtros, integração com APIs e armazenamento de dados e migrar a tecnolgia para React ou Vue.js.`,
    image: project3,
    tags: ["HTML", "CSS", "Javascript"],
    hyperlink: "https://hypecloth.netlify.app/",
  },
];
