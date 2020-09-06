import React, { ReactNode } from 'react';
import { section_container } from 'styles/js-styles';

interface Props {
  children: ReactNode;
  background?: string;
  height?: string;
}

const SectionContainer: React.FC<Props> = ({ children, ...props }) => {
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
