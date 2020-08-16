import runningImg from 'assets/images/projects/external/running-cover.jpg';

const title_eng = 'Run Tracker (in progress)';
const title_esp = 'Run Tracker (in progress)';
const desc_eng = 'An app that allows users to track their running progress';
const desc_esp =
  'Los usuarios pueden visualizar los datos de sus recorridos o carreras ';
const technologies = [
  'React (Typescript)',
  'Redux',
  'MongoDB',
  'Express',
  'NodeJS',
  'Material UI',
];

export const running = {
  title: { eng: title_eng, esp: title_esp },
  cover_image: runningImg,
  icon: '',
  description: { eng: desc_eng, esp: desc_esp },
  screenshots: [],
  tech_list: technologies,
  links: {
    // web: 'https://lockdown-poker.firebaseapp.com/',
    github: 'https://github.com/jwellwood/run-tracker',
  },
};
