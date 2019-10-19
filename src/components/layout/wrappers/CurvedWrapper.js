import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';
import { colors } from '../../../assets/styles/colors';

const CurvedWrapper = ({ title, children, color }) => {
  const styles = {
    title: {
      color: colors.lightBlue,
      textTransform: 'uppercase',
      fontFamily: 'Work Sans ',
      textAlign: 'center'
    }
  };
  let backgroundCol = colors.mainTeal;
  if (color === 'lightBlue') {
    backgroundCol = colors.lightBlue;
  }

  return (
    <Segment
      style={{
        padding: '1rem',
        margin: '1rem 10px',
        borderRadius: '30% 10% / 40% 80%',
        border: `3px solid ${colors.secondaryBlue}`,
        background: backgroundCol
      }}
      vertical
    >
      <Container>
        <Header style={styles.title}>{title}</Header>
        {children}
      </Container>
    </Segment>
  );
};

export default CurvedWrapper;
