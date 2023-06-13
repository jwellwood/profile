import React, { useContext } from 'react';
import Header from 'components/typography/Header';
import SectionContainer from 'components/layout/SectionContainer';
import { LanguageContext } from 'context/LanguageContext';
import TechList from './TechList';
import { Grid } from '@mui/material';
import worktech from 'assets/images/backgrounds/work-tech.jpeg';
import Image from 'components/images/Image';
import { getLanguage } from 'utils/getLanguage';
import { tech } from 'text';
import TechIcons from './TechIcons';

const Technologies: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { title } = getLanguage(language || '', tech);

  return (
    <SectionContainer background='blue' height='50vh'>
      <Header>{title}</Header>
      <TechIcons />
      <Grid container columnSpacing={1} alignItems='center'>
        <Grid item xs={12} sm={6}>
          <TechList />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image image={worktech} alt='work' size='280px' circle />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default Technologies;
