import React from 'react';
import { techItems } from './data';
import AboutWrapper from '../../../../layout/wrappers/AboutWrapper';

const Tech = () => {
  return <AboutWrapper items={techItems} code />;
};

export default Tech;
