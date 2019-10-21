import React, { useState, Fragment } from 'react';
import { Button, Modal } from 'semantic-ui-react';
// Internal
import { linkModalStyles as styles } from '../styles';

const LinkModal = props => {
  const [open, setOpen] = useState(false);

  const show = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  const { children, link, language } = props;
  return (
    <Fragment>
      <div onClick={() => show()}>{children}</div>
      <Modal
        centered
        size='mini'
        open={open}
        onClose={() => close()}
        dimmer='inverted'
      >
        <Modal.Header style={styles.title}>
          {language === 'en' ? 'Leave Page?' : 'Salir de esta página'}
        </Modal.Header>
        <Modal.Content style={styles.content}>
          {language === 'en'
            ? 'You will be redirected to:'
            : 'Vas a abandonar esta página para ir a:'}
          <p style={styles.link}>{link}</p>
          <p>
            {language === 'en'
              ? 'Do you want to continue?'
              : '¿Deseas continuar?'}
          </p>
        </Modal.Content>
        <Modal.Actions style={styles.title}>
          <Button size='mini' onClick={() => close()}>
            {language === 'en' ? 'No, I want to stay here!' : 'No, ¡me quedo!'}
          </Button>

          <Button size='mini' style={styles.button}>
            <a href={link} style={styles.button}>
              {language === 'en' ? 'Yes' : 'Sí'}
            </a>
          </Button>
        </Modal.Actions>
      </Modal>
    </Fragment>
  );
};

export default LinkModal;
