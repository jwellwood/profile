const data = (icon, title, desc) => {
  return { icon, title, desc };
};

const skillsData = [
  data('conversation', 'Communication', [
    '10 years experience of working in teams',
  ]),
  data('student', 'Learning', 'Up-to-date, and always improving my skillset'),
  data('chess', 'Problem-solving', [
    'Proven ability to analyse, decide, and act ',
  ]),
  data('language', 'Languages', ['English native, proficient in Spanish']),
  data('code', 'Coding', [
    '3 years experience building javascript apps with ReactJS ',
  ]),
];

export default skillsData;
