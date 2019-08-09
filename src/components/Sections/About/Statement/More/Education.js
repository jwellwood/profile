import React from 'react';
import { Segment, List, Icon } from 'semantic-ui-react';
import { educationItems } from './data';

const Education = () => {
  return (
    <Segment>
      <List>
        {educationItems.map(item => (
          <List.Item as="a" key={item.desc}>
            <Icon name={item.icon} color="blue" />
            <List.Content>
              <List.Header>{item.title}</List.Header>
              <List.Description>{item.desc}</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Segment>
  );
};

export default Education;
