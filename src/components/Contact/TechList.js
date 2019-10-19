import React from 'react';
import { List } from 'semantic-ui-react';
import { colors } from '../../assets/styles/colors';

const TechList = ({ language }) => {
  const styles = {
    container: {
      background: colors.secondaryBlue,
      color: colors.lightBlue,
      border: `1px solid ${colors.mainBlue}`,
      margin: 'auto',
      textAlign: 'center',
      width: '100%',
      padding: '5px'
    },
    item: {
      fontSize: '12px',
      fontWeight: 'bold',
      color: colors.lightBlue,
      fontFamily: 'Roboto Mono'
    }
  };

  const data = [
    'ES6+',
    'React',
    'Angular',
    'HTML5',
    'CSS3',
    'NodeJS',
    'Firebase',
    'MongoDB'
  ];

  if (language === 'en') {
    data.push('and many more...');
  } else {
    data.push('y mucho más...');
  }
  return (
    <div style={styles.container}>
      <List bulleted horizontal>
        {data.map(item => (
          <List.Item key={item} style={styles.item}>
            {item}
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default TechList;
