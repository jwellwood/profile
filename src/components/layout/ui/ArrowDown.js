import React from 'react';
import { Icon } from 'semantic-ui-react';
const ArrowDown = ({ color }) => {
  return (
    <div style={{ marginTop: '15px', textAlign: 'center' }}>
      <Icon name="angle down" size="large" color={color || 'grey'} />
    </div>
  );
};

export default ArrowDown;
