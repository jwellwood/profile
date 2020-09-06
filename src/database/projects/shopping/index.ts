import shoppingImg from 'assets/images/projects/external/shopping-cover.jpg';
import lists from 'assets/images/projects/shopping/ssl-current-lists.png';
import list from 'assets/images/projects/shopping/ssl-list.png';
import problem from 'assets/images/projects/shopping/ssl-problem.png';
import light from 'assets/images/projects/shopping/ssl-light.png';
import { IProjectData } from 'database/types';

const title_eng = 'Shared Shopping (contributor)';
const title_esp = 'Listas de Compra Compartidas (colaborador)';
const desc_eng =
  'An app that allows users to create and share their shopping lists with friends, family, flatmates etc. Items can be marked as bought or not, meaning everyone on the list knows what is needed';
const desc_esp =
  'Una app que permite que los usuarios pueden crear y compartir sus listas de compra con amigos, familiares, o compañeros de piso';
const technologies = [
  'React',
  'Redux',
  'MongoDB',
  'Express',
  'NodeJS',
  'Material UI',
  'Hosted on Heroku',
];

export const shopping: IProjectData = {
  title: { eng: title_eng, esp: title_esp },
  cover_image: shoppingImg,
  icon: '',
  description: { eng: desc_eng, esp: desc_esp },
  screenshots: [
    { image: list, caption: 'Shopping list' },
    { image: lists, caption: 'List of current shopping lists' },
    { image: problem, caption: 'Unavailable items form' },
    { image: light, caption: 'Light/dark themes' },
  ],
  tech_list: technologies,
  links: {
    web: 'https://sharedshoppinglists.herokuapp.com',
    github: 'https://github.com/njwdev/sharedshoppinglists',
  },
};
