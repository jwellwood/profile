import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
// Internal
import { mainStyles as styles } from './styles';
import { scrollToElement } from '../layout/Scroller/Scroller';
import ResponsiveContainer from '../layout/wrappers/ResponsiveContainer';
import Technologies from './Technologies';
import ProfileImage from './ProfileImage';

const Main = ({ language }) => {
  return (
    <ResponsiveContainer>
      <Segment style={styles.container}>
        <Header as='h1' content='.j.w' style={styles.mainHeader} />
        <ProfileImage />
        <Header
          as='h3'
          content={
            language === 'en' ? '{ web developer }' : '{ programador web }'
          }
          style={styles.subHeader}
        />
        <div style={styles.tech} onClick={() => scrollToElement('menu')}>
          <Technologies />
        </div>
      </Segment>
    </ResponsiveContainer>
  );
};

export default Main;
