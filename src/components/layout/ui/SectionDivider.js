import React from 'react';
import { Header } from 'semantic-ui-react';

const SectionDivider = ({ title, inverted }) => {
  return (
    <Header
      as="h3"
      className="header"
      inverted
      style={{
        textTransform: 'uppercase',
        fontFamily: 'Work Sans ',
        textAlign: 'center',
      }}
    >
      {title}
    </Header>
  );
};

export default SectionDivider;
