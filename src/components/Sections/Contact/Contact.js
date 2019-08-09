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
import profile from '../../../assets/images/profile.jpg';

const contactDetails = [
  {
    icon: 'linkedin',
    content: 'www.linkedin.com/in/joe-wellwood',
  },
  {
    icon: 'github',
    content: 'jwellwood',
  },
  {
    icon: 'mail',
    content: 'joemadriddev@gmail.com',
  },
];

const Contact = () => {
  return (
    <Segment vertical inverted style={{ padding: '3em 0em' }}>
      <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column verticalAlign="middle" floated="left" mobile={12}>
              <Header inverted as="h4" content="Contact" />
              <List link inverted>
                {contactDetails.map(item => (
                  <List.Item as="a">
                    <Icon name={item.icon} />
                    <List.Content>{item.content}</List.Content>
                  </List.Item>
                ))}
              </List>
            </Grid.Column>
            <Grid.Column verticalAlign="middle" floated="right" mobile={4}>
              <Image
                src={profile}
                size="tiny"
                circular
                style={{ margin: 'auto' }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Contact;
