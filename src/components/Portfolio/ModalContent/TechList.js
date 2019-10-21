import React from 'react';
import { List, Segment } from 'semantic-ui-react';
// Internal
import { techStyles as styles } from '../styles';

const TechList = ({ item }) => {
  return (
    <Segment style={styles.container}>
      <List horizontal bulleted style={styles.list}>
        {item.tech.map(item => (
          <List.Item key={item} style={styles.item}>
            {item}
          </List.Item>
        ))}
      </List>
    </Segment>
  );
};

export default TechList;
