import React, { useContext } from 'react';
// Internal
import AboutSection from 'components/about/AboutSection';
import Header from 'components/ui/Header';
import SectionContainer from 'layout/containers/SectionContainer';
import { LanguageContext } from 'context/LanguageContext';
import { titles } from 'database';

const About = () => {
  const language = useContext(LanguageContext);
  const header = language.language ? titles.about.eng : titles.about.esp;
  return (
    <SectionContainer height='50vh'>
      <Header>{header}</Header>
      <AboutSection />
    </SectionContainer>
  );
};

export default About;
