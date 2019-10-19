import React from 'react';
import { Portal, Menu, Icon, Segment } from 'semantic-ui-react';
import { colors } from '../../../assets/styles/colors';

const Email = () => {
  const styles = {
    icon: {
      cursor: 'pointer'
    },
    message: {
      background: colors.lightBlue,
      color: colors.mainBlue,
      fontWeight: 'bold',
      left: 10,
      position: 'fixed',
      top: 10,
      zIndex: 1000
    }
  };
  return (
    <Portal
      closeOnTriggerClick
      openOnTriggerClick
      trigger={
        <div style={styles.icon}>
          <Menu.Item>
            <Icon name='mail' />
          </Menu.Item>
        </div>
      }
    >
      <Segment style={styles.message}>joemadriddev@gmail.com</Segment>
    </Portal>
  );
};

export default Email;
