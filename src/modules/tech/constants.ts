import { TechIcons } from 'constants/icon-names';

const brandColors = {
  html: '#F16529',
  sass: '#c69',
  js: '#F0DB4F',
  ts: '#3178C6',
  react: '#61dbfb',
  angular: '#b52e31',
  graphql: '#e60094',
  mongodb: '#4DB33D',
  testinglib: '#d92121',
  cypress: '#010101',
  firebase: '#FFCA28',
};

export const tech = [
  { name: 'JavaScript', icon: TechIcons.JS, color: brandColors.js },
  { name: 'TypeScript', icon: TechIcons.TS, color: brandColors.ts },
  { name: 'React', icon: TechIcons.REACT, color: brandColors.react },
  { name: 'Angular', icon: TechIcons.ANGULAR, color: brandColors.angular },
  { name: 'GraphQL', icon: TechIcons.GRAPH_QL, color: brandColors.graphql },
  {
    name: 'Testing Library',
    icon: TechIcons.TESTING_LIB,
    color: brandColors.testinglib,
  },
  {
    name: 'Cypress',
    icon: TechIcons.CYPRESS,
    color: brandColors.cypress,
  },
  { name: 'Sass', icon: TechIcons.SASS, color: brandColors.sass },
  { name: 'Mongo DB', icon: TechIcons.MONGO_DB, color: brandColors.mongodb },
  { name: 'HTML', icon: TechIcons.HTML, color: brandColors.html },
  { name: 'Firebase', icon: TechIcons.FIREBASE, color: brandColors.firebase },
];
