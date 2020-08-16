import React from 'react';
import Grid from '@material-ui/core/Grid';
// Internal
import CircleImage from '../ui/CircleImage';
import TechBox from './TechBox';
import worktech from 'assets/images/backgrounds/work-tech.jpeg';
import { makeStyles } from '@material-ui/core/styles';

export const tech_styles = makeStyles((theme) => ({
  root: {
    padding: '2rem',
  },
}));

const Tech = () => {
  const classes = tech_styles();
  return (
    <Grid container direction='row' justify='space-evenly' alignItems='center'>
      <Grid item xs={12} md={6}>
        <div className={classes.root}>
          <TechBox />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <CircleImage image={worktech} alt='computer' />
      </Grid>
    </Grid>
  );
};

export default Tech;
