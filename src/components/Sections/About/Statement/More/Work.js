import React from 'react';
import { Segment, List, Icon } from 'semantic-ui-react';
import { workItems } from './data';
const Work = () => {
  return (
    <Segment>
      <List>
        {workItems.map(item => (
          <List.Item key={item.title}>
            <Icon name={item.icon} color="blue" />
            <List.Content>
              <List.Header>{item.title}</List.Header>
              <List.Description>
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

export default Work;
