import React, { useContext } from 'react';
import AboutSection from './AboutSection';
import SectionContainer from 'components/layout/SectionContainer';
import { LanguageContext } from 'context/LanguageContext';
import Header from 'components/typography/Header';
import { about } from 'text';

const About: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { title } = about;
  const header: string = language === 'en' ? title.en : title.es;
  return (
    <SectionContainer height='50vh'>
      <Header>{header}</Header>
      <AboutSection />
    </SectionContainer>
  );
};

export default About;
