import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';
// Internal
import { curvedWrapperStyles } from '../styles';

const CurvedWrapper = ({ title, children, color }) => {
  const styles = curvedWrapperStyles(color);

  return (
    <Segment style={styles.wrapper} vertical>
      <Container>
        <Header style={styles.title}>{title}</Header>
        {children}
      </Container>
    </Segment>
  );
};

export default CurvedWrapper;
