import runningImg from 'assets/images/projects/external/running-cover.jpg';
import { IProjectData } from 'database/types';

const title_eng = 'Run Records';
const title_esp = 'Run Records';
const desc_eng = 'An app that allows users to track their running progress';
const desc_esp =
  'Los usuarios pueden visualizar los datos de sus recorridos o carreras ';
const technologies = [
  'React (Typescript)',
  'React Redux Firebase',
  'Firebase',
  'Firestore',
  'Firebase Storage',
  'Material UI',
];

export const running: IProjectData = {
  title: { eng: title_eng, esp: title_esp },
  cover_image: runningImg,
  icon: '',
  description: { eng: desc_eng, esp: desc_esp },
  screenshots: [],
  tech_list: technologies,
  links: {
    // web: 'https://lockdown-poker.firebaseapp.com/',
    // github: 'https://github.com/jwellwood/activity-tracker',
  },
};
