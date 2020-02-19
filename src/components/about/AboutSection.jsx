import React from 'react';
import Grid from '@material-ui/core/Grid';
// Internal
import AboutImage from './AboutImage';
import AboutText from './AboutText';

const AboutSection = () => {
  return (
    <Grid container direction='row' justify='space-evenly' alignItems='center'>
      <Grid item xs={12} md={6}>
        <AboutImage />
      </Grid>
      <Grid item xs={12} md={6}>
        <AboutText />
      </Grid>
    </Grid>
  );
};

export default AboutSection;
