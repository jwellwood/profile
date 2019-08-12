import React from 'react';
import {
  Segment,
  Container,
  Grid,
  Icon,
  List,
  Header,
  Image,
} from 'semantic-ui-react';
import LinkModal from '../../layout/links/LinkModal';
import profile from '../../../assets/images/profile.jpg';
import styles from '../../../assets/styles/Image.module.css';
import contactDetails from './data';

const Contact = ({ language }) => {
  return (
    <Segment vertical inverted style={{ padding: '3em 0em' }}>
      <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column verticalAlign="middle" floated="left" mobile={12}>
              <Header
                inverted
                as="h4"
                style={{ fontFamily: 'Work Sans' }}
                content={language === 'en' ? 'Contact' : 'Contacto'}
              />
              <List link inverted>
                {contactDetails.map(item => (
                  <List.Item key={item.content}>
                    <Icon name={item.icon} color="blue" inverted />

                    <List.Content
                      style={item.link ? { cursor: 'pointer' } : null}
                    >
                      {item.link ? (
                        <LinkModal link={item.link}>{item.content} </LinkModal>
                      ) : (
                        item.content
                      )}
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </Grid.Column>
            <Grid.Column verticalAlign="middle" floated="right" mobile={4}>
              <Image
                src={profile}
                size="tiny"
                circular
                className={styles.image_contact}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Contact;
