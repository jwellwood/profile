import React from 'react';
import Grid from '@mui/material/Grid';
import Image from 'components/images/Image';
import profile from 'assets/images/profile/profile.jpg';
import AboutList from './AboutList';

const AboutSection: React.FC = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-evenly'
      alignItems='center'
    >
      <Grid item xs={12} md={6}>
        <Image image={profile} alt='profile picture' circle />
      </Grid>
      <Grid item xs={12} md={6}>
        <AboutList />
      </Grid>
    </Grid>
  );
};

export default AboutSection;
