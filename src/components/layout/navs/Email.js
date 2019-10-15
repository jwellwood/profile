import React from 'react';
import { Portal, Menu, Icon, Segment } from 'semantic-ui-react';
const Email = () => {
  return (
    <Portal
      closeOnTriggerClick
      openOnTriggerClick
      trigger={
        <div style={{ cursor: 'pointer' }}>
          <Menu.Item>
            <Icon name="mail" />
          </Menu.Item>
        </div>
      }
    >
      <Segment
        inverted
        color="teal"
        style={{
          left: 10,
          position: 'fixed',
          top: 25,
          zIndex: 1000,
        }}
      >
        joemadriddev@gmail.com
      </Segment>
    </Portal>
  );
};

export default Email;
