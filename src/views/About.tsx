import React, { useContext } from 'react';
// Internal
import AboutSection from 'components/about/AboutSection';
import Header from 'components/ui/Header';
import SectionContainer from 'layout/SectionContainer';
import { LanguageContext } from 'context/LanguageContext';
import { titles } from 'database';

const About: React.FC = () => {
  const language = useContext(LanguageContext);
  const header: string = language.language
    ? titles.about.eng
    : titles.about.esp;
  return (
    <SectionContainer height='50vh'>
      <Header>{header}</Header>
      <AboutSection />
    </SectionContainer>
  );
};

export default About;
