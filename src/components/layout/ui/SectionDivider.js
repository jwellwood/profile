import React from 'react';
import { Divider } from 'semantic-ui-react';

const SectionDivider = ({ title, inverted }) => {
  return (
    <div>
      <Divider
        as="h4"
        className="header"
        horizontal
        style={{
          margin: '1em 0em',
          textTransform: 'uppercase',
          color: '#2E86C1',
          fontFamily: 'Muli',
        }}
        inverted={inverted}
      >
        <div>{title}</div>
      </Divider>
    </div>
  );
};

export default SectionDivider;
