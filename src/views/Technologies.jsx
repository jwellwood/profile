import React, { useContext } from 'react';
// Internal
import SectionContainer from 'layout/containers/SectionContainer';
import Tech from 'components/tech/Tech';
import Header from 'components/ui/Header';
import { LanguageContext } from 'context/LanguageContext';
import { titles } from 'database';

const Technologies = () => {
  const language = useContext(LanguageContext);
  const header = language.language ? titles.tech.eng : titles.tech.esp;
  return (
    <SectionContainer>
      <Header>{header}</Header>
      <Tech />
    </SectionContainer>
  );
};

export default Technologies;
