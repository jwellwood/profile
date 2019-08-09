import reportimage from '../../../../assets/images/screenshots/reportimage.png';
import footballimage from '../../../../assets/images/screenshots/footballimage.png';
import weatherimage from '../../../../assets/images/screenshots/weatherimage.jpg';
import faceimage from '../../../../assets/images/screenshots/faceimage.png';

const data = (image, title, date, desc, fullDesc, tech, link, code) => {
  return { image, title, date, desc, fullDesc, tech, link, code };
};

const productionList = [
  data(
    reportimage,
    'Report Writer',
    '2019',
    'A report writing tool for ESL teachers',
    'Made to help teachers deal with the often repetitive task of writing end of year reports. Users enter their student details and can then choose from a selection of comments. They can then copy their generated report. Admins can add and edit comments, and add new admins.',
    ['React', 'React Router', 'Material UI', 'Firebase (auth/firestore)'],
    'https://teacher-toolkit.firebaseapp.com/',
    'https://github.com/njwdev/report-writer',
  ),
  data(
    footballimage,
    'Madrid Reds',
    '2018',
    'A stats tracker for a sports team',
    'Designed to be used by only this team at first, with a view to expanding it for more teams in future. Admins can add, edit, and delete results and players from the team. Users can track the progress of the team and players against set targets.',
    [
      'React',
      'Redux',
      'React Router',
      'Material UI',
      'Firebase (auth/firestore/storage)',
    ],
    'https://team-stats-31c64.firebaseapp.com/',
    'https://github.com/jwellwood/teamstats',
  ),
  data(
    weatherimage,
    'The Weather',
    '2018',
    'A weather app with forecast and maps',
    'Designed as an app that would be both useful and good coding practice, it use the Open Weather Map API and Google Maps to get the data and displays it on top of a beautiful moving css background, with Google Maps included to enhance the UX.',
    ['React', 'Material UI', 'Open Weather Map API', 'Google-maps-react'],
    'https://sundayweather.herokuapp.com/',
    'https://github.com/jwellwood/weather_forecast',
  ),
  data(
    faceimage,
    'Face Detector',
    '2018',
    'A face recognition app that provides demographic information',
    'Designed as an adaptation to a course project, this is a fun website that uses the clarifai API to detect a face in a photo and return demographic information such as age based on it. ',
    ['React', 'React Router', 'Reactstrap', 'Clarifai'],
    'https://onethousandfaces.herokuapp.com/',
    'https://github.com/jwellwood/face_predictions',
  ),
];

export default productionList;
