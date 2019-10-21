import React from 'react';
import { List } from 'semantic-ui-react';
// Internal
import { techData } from './data';
import { techStyles as styles } from './styles';

const TechList = ({ language }) => {
  if (language === 'en') {
    techData.push('and many more...');
  } else {
    techData.push('y mucho más...');
  }
  return (
    <div style={styles.container}>
      <List bulleted horizontal>
        {techData.map(item => (
          <List.Item key={item} style={styles.item}>
            {item}
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default TechList;
