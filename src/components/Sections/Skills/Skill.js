import React from 'react';
import { Header, Icon, Popup } from 'semantic-ui-react';

const style = {
  main: {
    borderRadius: 0,
    padding: '1.5em',
    background: 'rgba(243, 156, 18, 0.95)',
  },
  font: { fontFamily: 'Work Sans' },
  title: { fontFamily: 'Work Sans', fontSize: '12px' },
};

const Skill = ({ item }) => {
  return (
    <div>
      <Header as="h5" icon textAlign="center" inverted>
        <Popup
          trigger={<Icon name={item.icon} color="blue" inverted />}
          position="bottom center"
          style={style.main}
        >
          <Header style={style.font}>{item.title}</Header>
          {item.description.map(item => (
            <ul key={Math.random()}>
              <li>{item}</li>
            </ul>
          ))}
        </Popup>
        <Header.Content style={style.title}>{item.title}</Header.Content>
      </Header>
    </div>
  );
};

export default Skill;
