import React, { useContext } from 'react';
// Internal
import SectionContainer from 'layout/SectionContainer';
import Tech from 'components/tech/Tech';
import Header from 'components/ui/Header';
import { LanguageContext } from 'context/LanguageContext';
import { titles } from 'database';

const Technologies: React.FC = () => {
  const language = useContext(LanguageContext);
  const header: string = language.language ? titles.tech.eng : titles.tech.esp;
  return (
    <SectionContainer>
      <Header>{header}</Header>
      <Tech />
    </SectionContainer>
  );
};

export default Technologies;
