import React from 'react';
import { Segment } from 'semantic-ui-react';
import SectionWrapper from '../../../layout/wrappers/SectionWrapper';
import More from './More/More';
const About = () => {
  return (
    <SectionWrapper title="About">
      <Segment style={{ textAlign: 'center' }} color="blue" raised size="large">
        Originally from the UK, I have lived and worked in Spain since 2010.
        <br />I have been developing websites for three years.
      </Segment>
      <More />
    </SectionWrapper>
  );
};

export default About;
