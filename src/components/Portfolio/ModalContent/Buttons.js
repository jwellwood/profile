import React from 'react';
import { buttons } from '../data';
import { Button } from 'semantic-ui-react';
import LinkModal from '../../layout/Link/LinkModal';
import { colors } from '../../../assets/styles/colors';

const Buttons = ({ language, item }) => {
  const styles = {
    linkButton: {
      background: colors.mainTeal,
      color: colors.lightBlue
    },
    codeButton: {
      background: colors.lightBlue,
      color: colors.secondaryBlue
    }
  };
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
