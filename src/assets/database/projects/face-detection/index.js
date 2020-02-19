import face from '../../../images/projects/external/face.jpg';
import home from '../../../images/projects/face/face-home.png';
import main from '../../../images/projects/face/face-main.png';
import detect from '../../../images/projects/face/face-detect.png';
import about from '../../../images/projects/face/face-about.png';

const title_eng = 'Face Detection';
const title_esp = 'Detector de caras';
const desc_eng =
  "This app takes in a url of an image and returns demographic data, such as age, gender and background, related to any face that is detected in the image. Created for fun, the results shouldn't be taken too seriously.";
const desc_esp =
  'Cuando el usuario entra el url de un imagen, esta app demuestra datos demográficos, como edad, género y etnia, relacionado con la cara detectada en el imagen. Creado por diversión, los resultados no están para tomar en serio.';
const technologies = ['React', 'Reactstrap', 'Clarifai', 'React Particles JS'];

export const face_detection = {
  title: { eng: title_eng, esp: title_esp },
  cover_image: face,
  icon: '',
  description: { eng: desc_eng, esp: desc_esp },
  screenshots: [
    { image: home, caption: 'Homepage' },
    { image: main, caption: 'Main page' },
    { image: detect, caption: 'Results' },
    { image: about, caption: 'About page' }
  ],
  tech_list: technologies,
  links: {
    web: 'https://onethousandfaces.herokuapp.com/',
    github: 'https://github.com/jwellwood/face_predictions'
  }
};
