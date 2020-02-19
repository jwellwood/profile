import report from '../../../images/projects/external/report.jpeg';
import home from '../../../images/projects/report/report-home.png';
import main from '../../../images/projects/report/report-main.png';
import add from '../../../images/projects/report/report-add.png';
import comment from '../../../images/projects/report/report-comment.png';
import login from '../../../images/projects/report/report-login.png';
import about from '../../../images/projects/report/report-about.png';
// text
const title_eng = 'Report Writer';
const title_esp = 'Informes';
const desc_eng =
  'A tool that makes writing termly reports for teachers much easier. A lot of report writing is repetitive, and this app allows users to simply add a students name and gender to automatically generate a report. This can be done through selecting various parts of a report such as intros, positives etc, or can simply be fully generated at the click of a button. Admins can add new comments to keep the writing style fresh and limit the possibility of repeat reports for different students.';
const desc_esp =
  'Una herramienta que hace mucho más fácil escribir informes de fin del trimestre para profesores. Mucho de escribir informes es repetitivo, y esta app hace que con tan poco como añadir el nombre y género del alumno, se genera automáticamente el informe. Esto se puede hacer a traves de elegir entre partes de un informe (como intros, comentarios positivos etc.) o igual generar el informe completo. Los usuarios admin pueden añadir o modificar los comentarios para mantener un estilo de escritura distinta, y evitar la posibilidad de repetir informes para distintos alumnos.';
const technologies = [
  'React',
  'Material UI',
  'React copy-to-clipboard',
  'Firebase'
];
export const report_writer = {
  title: { eng: title_eng, esp: title_esp },
  cover_image: report,
  icon: '',
  description: { eng: desc_eng, esp: desc_esp },
  screenshots: [
    { image: home, caption: 'Homepage' },
    { image: main, caption: 'Main page' },
    { image: add, caption: 'Add new comment' },
    { image: comment, caption: 'Comments to choose' },
    { image: login, caption: 'Login' },
    { image: about, caption: 'About page' }
  ],
  tech_list: technologies,
  links: {
    web: 'https://teacher-toolkit.firebaseapp.com/',
    github: 'https://github.com/njwdev/report-writer'
  }
};
