import { titles, texts } from './texts';

const brandColors = {
  html: '#F16529',
  sass: '#c69',
  js: '#F0DB4F',
  react: '#61dbfb',
  angular: '#b52e31'
};

export const tech_data = [
  {
    icons: [
      { name: 'desktop', color: '' },
      { name: 'tablet-alt', color: '' },
      { name: 'mobile-alt', color: '' }
    ],
    title: titles[0],
    text: texts[0]
  },
  {
    icons: [
      {
        name: ['fab', 'html5'],
        color: brandColors.html
      },
      {
        name: ['fab', 'sass'],
        color: brandColors.sass
      },
      {
        name: ['fab', 'js-square'],
        color: brandColors.js
      },
      {
        name: ['fab', 'react'],
        color: brandColors.react
      },
      {
        name: ['fab', 'angular'],
        color: brandColors.angular
      }
    ],
    title: titles[1],
    text: texts[1]
  },
  {
    icons: [
      { name: 'user-friends', color: '' },
      { name: 'globe-europe', color: '' },
      { name: 'network-wired', color: '' }
    ],
    title: titles[2],
    text: texts[2]
  }
];
