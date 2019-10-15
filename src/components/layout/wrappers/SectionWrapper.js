import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import SectionDivider from '../ui/SectionDivider';
import ArrowDown from '../ui/ArrowDown';

const SectionWrapper = ({ inverted, title, children, scroll }) => {
  return (
    <Segment
      style={{
        padding: '2rem',
        margin: '1rem',
        borderRadius: '50% 10% / 40% 80%',
        border: '3px solid #128172',
        background: '#128172',
      }}
      vertical
      inverted
    >
      <Container>
        <SectionDivider title={title} inverted />
        {children}
      </Container>
      <ArrowDown scroll={scroll} />
    </Segment>
  );
};

export default SectionWrapper;
