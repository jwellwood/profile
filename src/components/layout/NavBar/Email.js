import React, { useState } from 'react';
import { Portal, Menu, Icon, Segment } from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// Internal
import { emailStyles as styles } from '../styles';

const Email = () => {
  const [copied, setcopied] = useState(false);
  const email = 'joemadriddev@gmail.com';
  return (
    <Portal
      closeOnTriggerClick
      openOnTriggerClick
      onClose={() => setcopied(false)}
      trigger={
        <div style={styles.icon}>
          <Menu.Item>
            <Icon name='mail' />
          </Menu.Item>
        </div>
      }
    >
      <Segment style={styles.message}>
        {email}{' '}
        <CopyToClipboard text={email} onCopy={() => setcopied(true)}>
          <Icon
            style={styles.copyIcon}
            bordered
            circular
            name='copy outline'
          ></Icon>
        </CopyToClipboard>
        {copied ? <span style={styles.copied}>Copied!</span> : null}
      </Segment>
    </Portal>
  );
};

export default Email;
