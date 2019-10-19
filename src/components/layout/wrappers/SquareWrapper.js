import React from 'react';
import { Segment, Header, Container } from 'semantic-ui-react';
import { colors } from '../../../assets/styles/colors';

const SquareWrapper = ({ children, title, color }) => {
  let backgroundCol = colors.lightBlue;
  let textCol = colors.mainBlue;
  if (color === 'secondaryBlue') {
    backgroundCol = colors.secondaryBlue;
    textCol = colors.lightBlue;
  }

  const styles = {
    container: {
      borderRadius: '15px',
      border: `2px solid ${colors.secondaryBlue}`,
      background: backgroundCol,
      textAlign: 'center',
      color: textCol
    },
    title: {
      color: textCol,
      textTransform: 'uppercase',
      fontFamily: 'Work Sans ',
      textAlign: 'center',
      marginBottom: '1rem'
    }
  };
  return (
    <Segment style={styles.container}>
      <Container>
        {title ? <Header style={styles.title}>{title}</Header> : null}
      </Container>
      {children}
    </Segment>
  );
};

export default SquareWrapper;
