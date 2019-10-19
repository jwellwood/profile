import React from 'react';
import ResponsiveContainer from '../layout/wrappers/ResponsiveContainer';
import { Segment, Header } from 'semantic-ui-react';
import { colors } from '../../assets/styles/colors';
import Technologies from './Technologies';
import ProfileImage from './ProfileImage';
import { scrollToElement } from '../layout/Scroller/Scroller';

const Main = ({ language }) => {
  const styles = {
    container: {
      height: '92vh',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      background: colors.mainBlue
    },
    mainHeader: {
      color: colors.lightBlue,
      fontWeight: 'bold',
      fontSize: '4em',
      marginTop: 'auto',
      fontFamily: 'Work Sans'
    },
    subHeader: {
      marginTop: '1.5em',
      fontFamily: 'Roboto Mono',
      color: colors.lightBlue
    },
    tech: { marginTop: 'auto', bottom: 0 }
  };
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
