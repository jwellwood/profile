import React from 'react';
import { Grid, Icon, Portal, Segment } from 'semantic-ui-react';
import LinkModal from '../layout/Link/LinkModal';
import { contactDetails, title } from './data';
import { colors } from '../../assets/styles/colors';
import CurvedWrapper from '../layout/wrappers/CurvedWrapper';

const Contact = ({ language }) => {
  const styles = {
    container: {
      margin: 'auto'
    },
    icon: {
      color: colors.lightBlue,
      background: colors.secondaryBlue,
      margin: 'auto'
    },
    column: {
      margin: 'auto',
      alignItems: 'center'
    },
    message: {
      width: '100%',
      background: colors.lightBlue,
      color: colors.mainBlue,
      fontWeight: 'bold',
      left: '25%',
      position: 'fixed',
      bottom: 10,
      zIndex: 1000
    }
  };
  return (
    <CurvedWrapper title={language === 'en' ? title.eng : title.esp}>
      <Grid centered style={styles.container} columns={3}>
        <Grid.Row>
          {contactDetails.map(item => (
            <Portal
              key={item.icon}
              closeOnTriggerClick
              openOnTriggerClick
              trigger={
                <Icon
                  style={styles.icon}
                  bordered
                  circular
                  size='big'
                  name={item.icon}
                />
              }
            >
              {item.link ? (
                <LinkModal language={language} link={item.link}>
                  <Segment style={styles.message}>{item.content}</Segment>
                </LinkModal>
              ) : (
                <Segment style={styles.message}>{item.content}</Segment>
              )}
            </Portal>
          ))}
        </Grid.Row>
      </Grid>
    </CurvedWrapper>
  );
};

export default Contact;
