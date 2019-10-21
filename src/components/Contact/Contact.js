import React, { useState } from 'react';
import { Grid, Icon, Portal, Segment } from 'semantic-ui-react';
// Internal
import { contactDetails, title } from './data';
import { styles } from './styles';
import CurvedWrapper from '../layout/wrappers/CurvedWrapper';
import LinkModal from '../layout/Link/LinkModal';
import Email from './Email';

const Contact = ({ language }) => {
  const [copied, setcopied] = useState(false);
  return (
    <CurvedWrapper title={language === 'en' ? title.eng : title.esp}>
      <Grid centered style={styles.container} columns={3}>
        <Grid.Row>
          {contactDetails.map(item => (
            <Portal
              key={item.icon}
              closeOnTriggerClick
              openOnTriggerClick
              onClose={() => setcopied(false)}
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
                  <Segment style={styles.message}>
                    {item.content} <Icon name='arrow circle right'></Icon>
                  </Segment>
                </LinkModal>
              ) : (
                <Email item={item} copied={copied} setcopied={setcopied} />
              )}
            </Portal>
          ))}
        </Grid.Row>
      </Grid>
    </CurvedWrapper>
  );
};

export default Contact;
