const data = (icon, title, desc) => {
  return { icon, title, desc };
};

const skillsData = [
  data(
    'conversation',
    'Communication',
    '10 years experience of working in teams. I am adaptable, reliable, and efficient. As my work as a teacher demonstrates, I am comfortable working individually to help meet the goals of a larger team.',
  ),
  data(
    'student',
    'Learning',
    'Up-to-date, and always improving my skillset. I take an active interest in making sure I am aware of the latest developments in the field, through reading articles, documentation, and taking courses.',
  ),
  data('chess', 'Problem-solving', [
    'Proven ability to analyse, decide, and act. The most relevant examples of this are through the code and apps I have written, but also through my work experience where I have been responsible for dealing with IT issues in the teaching centre for the last two years.',
  ]),
  data(
    'language',
    'Languages',
    'I am a native English speaker, and have a high level of written and spoken Spanish.',
  ),
  data(
    'code',
    'Coding',
    '3 years experience building javascript apps, especially using ReactJS. I love writing clean, maintainable, component-based code, and I use resources such as codewars, advent of code, stack overflow, and tutorials to ensure I am continuously improving my level.',
  ),
];

export default skillsData;
