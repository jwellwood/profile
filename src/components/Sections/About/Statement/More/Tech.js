import React from 'react';
import { Segment, List, Icon } from 'semantic-ui-react';
import { techItems } from './data';

const Tech = () => {
  return (
    <Segment>
      <List>
        {techItems.map(item => (
          <List.Item key={item.title}>
            <Icon name={item.icon} color="blue" />
            <List.Content>
              <List.Header>{item.title}</List.Header>
              <List.Description style={{ fontFamily: 'Roboto mono' }}>
                <Segment inverted color="blue" style={{ fontSize: '12px' }}>
                  {item.desc}
                </Segment>
              </List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Segment>
  );
};

export default Tech;
