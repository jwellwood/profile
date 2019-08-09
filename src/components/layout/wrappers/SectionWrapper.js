import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import ArrowDown from '../ui/ArrowDown';
import SectionDivider from '../ui/SectionDivider';

const SectionWrapper = ({ inverted, title, children }) => {
  return (
    <Segment style={{ padding: '2em 0em' }} vertical inverted={inverted}>
      <Container>
        <SectionDivider title={title} inverted={inverted} />
        {children}
      </Container>
      <ArrowDown />
    </Segment>
  );
};

export default SectionWrapper;
