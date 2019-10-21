import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// Internal
import { emailStyles as styles } from './styles';

const Email = ({ item, copied, setcopied }) => {
  return (
    <Segment style={styles.message}>
      <div>
        {item.content}{' '}
        <CopyToClipboard text={item.content} onCopy={() => setcopied(true)}>
          <Icon
            style={styles.copyIcon}
            bordered
            circular
            name='copy outline'
          ></Icon>
        </CopyToClipboard>
        {copied ? <span style={styles.copied}>Copied!</span> : null}
      </div>
    </Segment>
  );
};

export default Email;
