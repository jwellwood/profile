import React from 'react';
import { Divider } from 'semantic-ui-react';

const SectionDivider = ({ title, inverted }) => {
  return (
    <div>
      <Divider
        as="h4"
        className="header"
        horizontal
        style={{ margin: '1em 0em', textTransform: 'uppercase' }}
        inverted={inverted}
      >
        <div>{title}</div>
      </Divider>
    </div>
  );
};

export default SectionDivider;
