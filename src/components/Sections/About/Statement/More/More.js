import React from 'react';
import { Accordion } from 'semantic-ui-react';
import Tech from './Tech';
import Work from './Work';
import Education from './Education';

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
      content: 'Experience',
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

const More = () => <Accordion panels={panels} styled fluid />;

export default More;
