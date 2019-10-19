import React from 'react';
import { Modal, Icon, Header, Image } from 'semantic-ui-react';
import { colors } from '../../../assets/styles/colors';
import TechList from './TechList';
import Images from './Images';
import Buttons from './Buttons';

const ModalContent = ({ language, item, type }) => {
  const styles = {
    header: {
      margin: '10px auto',
      color: colors.lightBlue
    },
    headerMain: {
      margin: '10px auto',
      color: colors.mainBlue
    },
    mainImage: { border: `2px solid ${colors.mainBlue}`, margin: 'auto' },
    icon: {
      border: `2px solid ${colors.mainTeal}`,
      background: colors.lightBlue,
      color: colors.mainTeal
    },
    iconMain: {
      border: `2px solid ${colors.mainBlue}`,
      background: colors.secondaryBlue,
      color: colors.lightBlue
    },
    modalHeader: {
      fontFamily: 'Work Sans',
      background: colors.mainBlue,
      color: colors.lightBlue
    },
    mainContent: {
      color: colors.mainBlue
    }
  };
  return (
    <Modal
      closeIcon
      dimmer='blurring'
      trigger={
        <div>
          {type === 'main' ? (
            <Image
              src={item.mainImage}
              size='small'
              circular
              style={styles.mainImage}
            />
          ) : (
            <Icon
              name={item.icon}
              size='big'
              circular
              bordered
              style={styles.icon}
            />
          )}

          <Header
            style={type === 'main' ? styles.headerMain : styles.header}
            as='h4'
          >
            {language === 'en' ? item.title.eng : item.title.esp}
          </Header>
        </div>
      }
    >
      <Modal.Header style={styles.modalHeader}>
        {language === 'en' ? item.title.eng : item.title.esp}
      </Modal.Header>
      <Modal.Content>
        <Icon size='small' src={item.image} style={{ margin: 'auto' }} />

        <Modal.Description style={styles.mainContent}>
          {language === 'en' ? item.desc.eng : item.desc.esp}
        </Modal.Description>
        {item.image.length > 0 ? (
          <Modal.Description>
            <Images language={language} images={item.image} />
          </Modal.Description>
        ) : null}

        <TechList item={item} />
        <Modal.Actions>
          <Buttons language={language} item={item} />
        </Modal.Actions>
      </Modal.Content>
    </Modal>
  );
};

export default ModalContent;
