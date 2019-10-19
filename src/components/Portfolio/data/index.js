import {
  MRHome,
  MRPlayer,
  MRResults,
  MRStats,
  MRLogo,
  RWAbout,
  RWAdd,
  RWReport,
  RWSignup,
  RWLogo
} from '../../../assets/images/InProduction';

import {
  BBLogo,
  CLMain,
  TWHome,
  TWMain,
  FDLogo,
  FDMain
} from '../../../assets/images/OtherProjects';

export const mainProjectsData = [
  {
    title: { eng: 'Report Writer', esp: 'Redactor de Informes' },
    mainImage: RWLogo,
    image: [RWSignup, RWReport, RWAdd, RWAbout],
    desc: {
      eng:
        'Currently used by about 60% of the teaching staff in the center, it has revolutionised the way end of term reports are written.',
      esp:
        'Usado aproximadamente por el 60% de los profesores del centro de enseñanza, ha revolucionado la forma de hacer los informes del fin del trimestre'
    },
    tech: ['React', 'React Router', 'Material UI', 'Firebase (auth/firestore)'],
    link: 'https://teacher-toolkit.firebaseapp.com/',
    code: 'https://github.com/njwdev/report-writer'
  },
  {
    title: { eng: 'Football Team', esp: 'Equipo de fútbol' },
    mainImage: MRLogo,
    image: [MRHome, MRPlayer, MRResults, MRStats],
    desc: {
      eng:
        'Used by all members of the team and beyond, this stat tracking app has prompted requests from other teams to make it more widely available.',
      esp:
        'Usado por todos los miembros del equipo y más, esta app de estadísticas ha generado el interés de otros equipos de la liga que quieren userla para los suyos'
    },
    tech: [
      'React',
      'Redux',
      'React Router',
      'Material UI',
      'Firebase (auth/firestore/storage)'
    ],
    link: 'https://team-stats-31c64.firebaseapp.com/',
    code: 'https://github.com/jwellwood/teamstats'
  }
];

export const otherProjectsData = [
  {
    title: { eng: 'Face Detector', esp: 'Reconocimiento de Cara' },
    icon: 'eye',
    image: [FDLogo, FDMain],
    desc: {
      eng:
        'Uses the api from Clarifai to detect and return demographic data about a face in an image',
      esp:
        'Usa la API de Clarifai para detectar y devolver datos demográficos sobre una cara de una imágen'
    },
    tech: ['React', 'Bootstrap (reactstrap)', 'Clarifai'],
    link: 'https://onethousandfaces.herokuapp.com/',
    code: 'https://github.com/jwellwood/face_predictions'
  },
  {
    title: { eng: 'The Weather', esp: 'El Tiempo' },
    icon: 'sun',
    image: [TWHome, TWMain],
    desc: {
      eng:
        "Uses the apis from Open Weather Map and Google Maps to return current and forecast weather for the user's search area",
      esp:
        'Usa las APIs de Open Weather Map y Google Maps para devolver el tiempo actual, y predicciones metereológicas para la zona donde el usuario realizó la busqueda'
    },
    tech: ['React', 'Material UI', 'Open Weather Map API', 'Google-maps-react'],
    link: 'https://sundayweather.herokuapp.com/',
    code: 'https://github.com/jwellwood/weather_forecast'
  },
  {
    title: { eng: 'Client List', esp: 'Lista de Clientes' },
    icon: 'list ul',
    image: [CLMain],
    desc: {
      eng: 'A client manager to keep track of contact details and money owed',
      esp: 'Una app para gestionar clientes, sus datos y el dinero que deben'
    },
    tech: ['React', 'Redux', 'Bootstrap 4', 'Firestore'],
    code: 'https://github.com/jwellwood/client-list'
  },
  {
    title: { eng: 'Burger Builder', esp: 'Construye tu Burguer' },
    icon: 'food',
    image: [BBLogo],
    desc: {
      eng:
        'An app to build and order food. Based on a course project to learn React',
      esp:
        'Una app para crear y pedir comida. Basado en un proyecto para aprender React'
    },
    tech: ['React', 'Redux', 'css modules', 'Firestore'],
    code: 'https://github.com/jwellwood/client-list'
  },
  {
    title: { eng: 'Team Stats', esp: 'Estadísticas de Equipo' },
    icon: 'pie chart',
    image: [],
    desc: {
      eng:
        'Currently in development, this is an expansion of the successful Madrid Reds football team website to make it available to more teams',
      esp:
        'En desarrollo actualmente, esta app es una expansión de la página web del equipo de fútbol, para hacerla disponible para el resto de los equipos de la liga'
    },
    tech: ['React', 'Redux', 'NodeJS', 'Express', 'MongoDB', 'Material UI'],
    code: 'https://github.com/jwellwood/football-stats'
  },
  {
    title: { eng: 'Profile Page', esp: 'Perfíl' },
    icon: 'user outline',
    image: [],
    desc: {
      eng:
        'This site that you are currently viewing! A place to keep a record of my projects and allow prospective collaborators to see my work',
      esp:
        'Esta página que estás viendo ahora mismo! Un sitio donde guardar un resumen de mis proyectos, y facilitar a posibles colaboradores futuros ver mi trabajo'
    },
    tech: ['React', 'Semantic UI', 'Github'],
    link: 'https://github.io/profile/',
    code: 'https://github.com/jwellwood/profile'
  }
];

export const buttons = {
  site: {
    eng: 'Visit Site',
    esp: 'Ir a la Página'
  },
  code: {
    eng: 'View code',
    esp: 'Ver Código'
  }
};
