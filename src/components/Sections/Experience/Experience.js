import React from 'react';
import { Accordion } from 'semantic-ui-react';
import Tech from './Tech';
import Work from './Work';
import Education from './Education';
import SectionWrapper from '../../layout/wrappers/SectionWrapper';

const panels = [
  {
    key: '1',
    title: {
      content: 'Technologies',
    },
    content: {
      content: <Tech />,
    },
  },
  {
    key: '2',
    title: {
      content: 'Work',
    },
    content: {
      content: <Work />,
    },
  },
  {
    key: '3',
    title: {
      content: 'Education',
    },
    content: {
      content: <Education />,
    },
  },
];

const Experience = () => (
  <SectionWrapper title="Experience">
    <Accordion panels={panels} styled fluid />
  </SectionWrapper>
);

export default Experience;
