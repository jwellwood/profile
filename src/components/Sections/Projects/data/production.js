import reportimage from '../../../../assets/images/screenshots/reportimage.png';
import footballimage from '../../../../assets/images/screenshots/footballimage.png';
import weatherimage from '../../../../assets/images/screenshots/weatherimage.jpg';
import faceimage from '../../../../assets/images/screenshots/faceimage.png';

export const productionListEng = [
  {
    image: reportimage,
    title: 'Report Writer',
    date: '2019',
    desc: 'A report writing tool for ESL teachers',
    fullDesc:
      'Made to help teachers deal with the often repetitive task of writing end of year reports. Users enter their student details and can then choose from a selection of comments. They can then copy their generated report. Admins can add and edit comments, and add new admins.',
    tech: ['React', 'React Router', 'Material UI', 'Firebase (auth/firestore)'],
    link: 'https://teacher-toolkit.firebaseapp.com/',
    code: 'https://github.com/njwdev/report-writer',
  },
  {
    image: footballimage,
    title: 'Football Team',
    date: '2018',
    desc: 'A stats tracker for a sports team',
    fullDesc:
      'Designed to be used by only this team at first, with a view to expanding it for more teams in future. Admins can add, edit, and delete results and players from the team. Users can track the progress of the team and players against set targets.',
    tech: [
      'React',
      'Redux',
      'React Router',
      'Material UI',
      'Firebase (auth/firestore/storage)',
    ],
    link: 'https://team-stats-31c64.firebaseapp.com/',
    code: 'https://github.com/jwellwood/teamstats',
  },
  {
    image: weatherimage,
    title: 'The Weather',
    date: '2018',
    desc: 'A weather app with forecast and maps',
    fullDesc:
      'Designed as an app that would be both useful and good coding practice, it use the Open Weather Map API and Google Maps to get the data and displays it on top of a beautiful moving css background, with Google Maps included to enhance the UX.',
    tech: ['React', 'Material UI', 'Open Weather Map API', 'Google-maps-react'],
    link: 'https://sundayweather.herokuapp.com/',
    code: 'https://github.com/jwellwood/weather_forecast',
  },
  {
    image: faceimage,
    title: 'Face Detector',
    date: '2018',
    desc: 'A face recognition app that provides demographic information',
    fullDesc:
      'Designed as an adaptation to a course project, this is a fun website that uses the clarifai API to detect a face in a photo and return demographic information such as age based on it. ',
    tech: ['React', 'React Router', 'Reactstrap', 'Clarifai'],
    link: 'https://onethousandfaces.herokuapp.com/',
    code: 'https://github.com/jwellwood/face_predictions',
  },
];

export const productionListEsp = [
  {
    image: reportimage,
    title: 'Report Writer',
    date: '2019',
    desc: 'Una herramienta de redacción de informes para profesores de ESL',
    fullDesc:
      'Hecho para ayudar a los profesores con la tarea repetitiva de escribir informes cada fin de trimestre. Los usuarios ingresan los detalles de sus alumnos y luego pueden elegir entre una selección de comentarios. Luego pueden copiar su informe generado. Los administradores pueden agregar y editar comentarios, y agregar nuevos administradores.',
    tech: ['React', 'React Router', 'Material UI', 'Firebase (auth/firestore)'],
    link: 'https://teacher-toolkit.firebaseapp.com/',
    code: 'https://github.com/njwdev/report-writer',
  },
  {
    image: footballimage,
    title: 'Football Team',
    date: '2018',
    desc: 'Una applicación para consultar la evolución de un equipo de fútbol',
    fullDesc:
      "Diseñado para ser utilizado solo por 'Madrid Reds' (equipo de fútbol) al principio, con el objetivo de expandirlo para más equipos en el futuro. Los administradores pueden agregar, editar y eliminar resultados y jugadores del equipo. Los usuarios pueden seguir el progreso del equipo y los jugadores contra objetivos establecidos.",
    tech: [
      'React',
      'Redux',
      'React Router',
      'Material UI',
      'Firebase (auth/firestore/storage)',
    ],
    link: 'https://team-stats-31c64.firebaseapp.com/',
    code: 'https://github.com/jwellwood/teamstats',
  },
  {
    image: weatherimage,
    title: 'The Weather',
    date: '2018',
    desc: 'Una aplicación sobre el clima, con pronósticos y mapas.',
    fullDesc:
      'Diseñado como una aplicación útil y una buena práctica de programación, utiliza la api Open Weather Map para obtener los datos y mostrarlos sobre un fondo CSS, con Google Maps incluido para mejorar la experiencia del usuario.',
    tech: ['React', 'Material UI', 'Open Weather Map API', 'Google-maps-react'],
    link: 'https://sundayweather.herokuapp.com/',
    code: 'https://github.com/jwellwood/weather_forecast',
  },
  {
    image: faceimage,
    title: 'Face Detector',
    date: '2018',
    desc:
      'Una aplicación de reconocimiento facial que proporciona información demográfica.',
    fullDesc:
      'Diseñado como una adaptación a un proyecto en un curso, este es un sitio web divertido que utiliza la api de Clarifai para detectar una cara en una foto y devolver información demográfica como la edad, género y orígen.',
    tech: ['React', 'React Router', 'Reactstrap', 'Clarifai'],
    link: 'https://onethousandfaces.herokuapp.com/',
    code: 'https://github.com/jwellwood/face_predictions',
  },
];
