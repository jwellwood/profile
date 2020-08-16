import code from 'assets/images/projects/external/code.jpeg';
// Screenshots
import home from 'assets/images/projects/code/code-home.png';
import example from 'assets/images/projects/code/code-example.png';
import login from 'assets/images/projects/code/code-login.png';
import add from 'assets/images/projects/code/code-add.png';
// Text
const title_eng = 'Code Collection';
const title_esp = 'Códigos Útiles';
const desc_eng =
  'A collection of useful codeblocks. Created as a place to store chunks of code which developers might need regularly. With options to separate the code blocks into categories such as React, Sass, Javascript and Typescript, this website will only continue to grow.';
const desc_esp =
  'Una colección de códigos útiles. Creado como un sitio donde guardar bloques de código que desarrolladores usan habitualmente. Con opciones para separar el código en categorías como React, Sass, Javascript y Typescript, esta página continuará crecer.';
const technologies = [
  'Angular 8',
  'Angular Material',
  'Prism JS',
  'Firebase',
  'Angular Fire',
];

export const code_collection = {
  title: { eng: title_eng, esp: title_esp },
  cover_image: code,
  icon: '',
  description: { eng: desc_eng, esp: desc_esp },
  screenshots: [
    { image: home, caption: 'Homepage' },
    { image: example, caption: 'Example' },
    { image: login, caption: 'Login' },
    { image: add, caption: 'Add' },
  ],
  tech_list: technologies,
  links: {
    web: 'https://useful-js.firebaseapp.com/',
    github: 'https://github.com/jwellwood/useful-code',
  },
};
