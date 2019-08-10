import React from 'react';
import { Header, Icon, Popup } from 'semantic-ui-react';

const style = {
  borderRadius: 0,

  padding: '2em',
};

const Skill = ({ item }) => {
  return (
    <div>
      <Header as="h5" icon textAlign="center" inverted>
        <Popup
          trigger={
            <Icon name={item.icon} circular color="blue" bordered inverted />
          }
          header={item.title}
          content={item.desc}
          position="bottom center"
          style={style}
        />
        <Header.Content style={{ fontFamily: 'Muli' }}>
          {item.title}
        </Header.Content>
      </Header>
    </div>
  );
};

export default Skill;
