import React from 'react';
import { Header } from 'semantic-ui-react';

const SectionDivider = ({ title, inverted }) => {
  return (
    <Header
      as="h3"
      dividing
      className="header"
      inverted={inverted}
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
