import React from 'react';
import { Button } from 'semantic-ui-react';
// Internal
import { buttons } from '../data';
import { buttonStyles as styles } from '../styles';
import LinkModal from '../../layout/Link/LinkModal';

const Buttons = ({ language, item }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {item.link ? (
        <LinkModal language={language} link={item.link}>
          <Button
            style={styles.linkButton}
            icon='home'
            size='tiny'
            content={language === 'en' ? buttons.site.eng : buttons.site.esp}
          />
        </LinkModal>
      ) : null}

      <LinkModal language={language} link={item.code}>
        <Button
          style={styles.codeButton}
          icon='github'
          size='tiny'
          content={language === 'en' ? buttons.code.eng : buttons.code.esp}
        />
      </LinkModal>
    </div>
  );
};

export default Buttons;
