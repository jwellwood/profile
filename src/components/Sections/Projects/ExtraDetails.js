import React from 'react';
import {
  Card,
  Image,
  Container,
  Modal,
  Segment,
  Button,
  List,
} from 'semantic-ui-react';

const ExtraDetails = ({ item }) => {
  const contentCard = (
    <Card fluid>
      <Image src={item.image} size="small" style={{ margin: 'auto' }} />
      <Card.Content>
        <Card.Header>{item.title}</Card.Header>
        <Card.Meta>
          <span className="date">{item.date}</span>
        </Card.Meta>
        <Card.Description>{item.fullDesc}</Card.Description>
        <Segment inverted>
          <List horizontal style={{ fontFamily: 'Roboto Mono' }}>
            {item.tech.map(item => (
              <List.Item key={item} as="p">
                {item}
              </List.Item>
            ))}
          </List>
        </Segment>
      </Card.Content>
      <Card.Content extra style={{ textAlign: 'right' }}>
        <a href={item.link}>
          <Button icon="home" size="tiny" circular />
        </a>
        <a href={item.code}>
          <Button icon="github" size="tiny" circular />
        </a>
      </Card.Content>
    </Card>
  );

  return (
    <Container>
      <Modal.Content content={contentCard} />
    </Container>
  );
};

export default ExtraDetails;
