import React from 'react';
import { section_container } from './styles';

const SectionContainer = ({ children, ...props }) => {
  const classes = section_container(props);
  return (
    <div className={classes.container}>
      <div></div>
      {children}
      <div></div>
    </div>
  );
};

export default SectionContainer;
