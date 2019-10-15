import React from 'react';
import { Segment, List, Icon } from 'semantic-ui-react';
const AboutWrapper = ({ items, code }) => {
  return (
    <Segment inverted>
      <List inverted>
        {items.map(item => (
          <List.Item key={Math.random()}>
            <Icon name={item.icon} color="teal" />
            <List.Content>
              <List.Header
                style={{
                  fontFamily: 'Work Sans',
                  marginBottom: '5px',
                }}
              >
                {item.title}
              </List.Header>
              <List.Description>
                <Segment
                  inverted
                  color="teal"
                  style={{
                    fontSize: code ? '12px' : 'inherit',
                    fontFamily: code ? 'Roboto Mono' : 'inherit',
                  }}
                >
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

export default AboutWrapper;
