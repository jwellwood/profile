import React from 'react';
import { Segment, Header, Container } from 'semantic-ui-react';
// Internal
import { squareWrapperStyles } from '../styles';

const SquareWrapper = ({ children, title, color }) => {
  const styles = squareWrapperStyles(color);

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
