import backgroundGenImage from '../../../../assets/images/screenshots/courseProjects/backgroundgenimage.png';
import squadImage from '../../../../assets/images/screenshots/courseProjects/footballpageimage.png';
import burgerImage from '../../../../assets/images/screenshots/courseProjects/burgerimage.png';
import clientImage from '../../../../assets/images/screenshots/courseProjects/clientlistimage.png';
import artistImage from '../../../../assets/images/screenshots/courseProjects/artistpageimage.png';

const courseList = [
  {
    index: 1,
    image: clientImage,
    title: 'Client List',
    course: 'React Front to Back',
    courseLink: 'https://www.udemy.com/modern-react-front-to-back/',
    desc: 'Manage your client information',
    tech: 'JS, React, Redux, Bootstrap 4, Firestore',
    code: 'https://github.com/jwellwood/client-list',
  },
  {
    index: 2,
    image: burgerImage,
    title: 'Burger Builder',
    course: 'React: The Complete Guide',
    courseLink: 'https://www.udemy.com/react-the-complete-guide-incl-redux/',
    desc: 'Create and order your perfect burger',
    tech: 'JS, React, Redux, React Router, Firebase',
    code: 'https://github.com/jwellwood/burger-builder',
  },
  {
    index: 3,
    image: squadImage,
    title: 'Sports Team',
    course: 'The React Practice Course',
    courseLink:
      'https://www.udemy.com/the-react-practice-course-learn-by-building-projects/',
    desc: 'Manchester City FC demo website',
    tech: 'JS, React, React Router, Firebase',
    code: 'https://github.com/jwellwood/squad-page',
  },
  {
    index: 4,
    image: backgroundGenImage,
    title: 'Background Generator',
    course: 'The Complete Web Developer',
    courseLink:
      'https://www.udemy.com/the-complete-web-developer-zero-to-mastery/',

    desc: 'Generate css gradient backgrounds',
    tech: 'Javascript, html 5, css3',
    code: 'https://github.com/jwellwood/background-generator',
  },
  {
    index: 5,
    image: artistImage,
    title: 'Artist Homepage',
    course: 'The React Practice Course',
    courseLink:
      'https://www.udemy.com/the-react-practice-course-learn-by-building-projects/',
    desc: 'Homepage for a band / singer',
    tech: 'Javascript, ReactJS, css3 ',
    code: 'https://github.com/jwellwood/The-Venue',
  },
];

export default courseList;
