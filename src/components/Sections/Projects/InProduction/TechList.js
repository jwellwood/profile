import React from 'react';
import { List, Segment } from 'semantic-ui-react';
import styles from '../styles/Projects.module.css';

const TechList = ({ item }) => (
  <Segment tertiary>
    <List horizontal style={{ fontFamily: 'Roboto Mono' }}>
      {item.tech.map(item => (
        <List.Item key={item} as="p" style={{ fontSize: '10px' }}>
          <span className={styles.separator}>| </span>
          {item}
        </List.Item>
      ))}
    </List>
  </Segment>
);

export default TechList;
