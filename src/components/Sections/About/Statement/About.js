import React from 'react';
import { Grid } from 'semantic-ui-react';
import SectionWrapper from '../../../layout/wrappers/SectionWrapper';
import More from './More/More';
const About = () => {
  return (
    <SectionWrapper title="About">
      <Grid columns={2} centered textAlign="center" stackable>
        <Grid.Row>
          <Grid.Column verticalAlign="middle">
            <p>
              Originally from the UK, I have lived and worked in Spain since
              2010. I have been developing websites for three years.
            </p>
            <More />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </SectionWrapper>
  );
};

export default About;
