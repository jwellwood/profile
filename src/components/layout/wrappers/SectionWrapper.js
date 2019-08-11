import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import SectionDivider from '../ui/SectionDivider';
import ArrowDown from '../ui/ArrowDown';

const SectionWrapper = ({ inverted, title, children, scroll }) => {
  return (
    <Segment style={{ padding: '2em 0em' }} vertical inverted={inverted}>
      <Container>
        <SectionDivider title={title} inverted={inverted} />
        {children}
      </Container>
      <ArrowDown scroll={scroll} />
    </Segment>
  );
};

export default SectionWrapper;
