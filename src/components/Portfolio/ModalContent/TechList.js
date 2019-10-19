import React from 'react';
import { List, Segment } from 'semantic-ui-react';
import { colors } from '../../../assets/styles/colors';

const TechList = ({ item }) => {
  const styles = {
    container: {
      background: colors.lightBlue,
      color: colors.mainBlue,
      border: `1px solid ${colors.mainBlue}`,
      margin: '10px auto'
    },
    list: {
      fontFamily: 'Roboto Mono'
    },
    item: {
      fontSize: '10px',
      fontWeight: 'bold',
      color: colors.secondaryBlue
    },
    divider: {
      color: colors.mainBlue
    }
  };
  return (
    <Segment style={styles.container}>
      <List horizontal style={styles.list}>
        {item.tech.map(item => (
          <List.Item key={item} style={styles.item}>
            <span style={styles.divider}>| </span>
            {item}
          </List.Item>
        ))}
      </List>
    </Segment>
  );
};

export default TechList;
