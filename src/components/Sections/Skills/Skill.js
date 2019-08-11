import React from 'react';
import { Header, Icon, Popup } from 'semantic-ui-react';

const style = {
  main: {
    borderRadius: 0,
    padding: '1.5em',
    border: '2px solid #21618C',
  },
  font: { fontFamily: 'Work Sans' },
  title: { fontFamily: 'Work Sans', fontSize: '12px' },
};

const Skill = ({ item }) => {
  return (
    <div>
      <Header as="h5" icon textAlign="center" inverted>
        <Popup
          trigger={
            <Icon name={item.icon} circular color="blue" bordered inverted />
          }
          header={<Header style={style.font}>{item.title}</Header>}
          content={item.desc}
          position="bottom center"
          style={style.main}
        />
        <Header.Content style={style.title}>{item.title}</Header.Content>
      </Header>
    </div>
  );
};

export default Skill;
