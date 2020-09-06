import React, { useContext } from 'react';
// Internal
import PortfolioGrid from 'components/portfolio/PortfolioGrid';
import Header from 'components/ui/Header';
import SectionContainer from 'layout/SectionContainer';
import { LanguageContext } from 'context/LanguageContext';
import { titles } from 'database';

const Projects: React.FC = () => {
  const language = useContext(LanguageContext);
  const header: string = language.language
    ? titles.projects.eng
    : titles.projects.esp;
  return (
    <SectionContainer>
      <Header>{header}</Header>
      <PortfolioGrid />
    </SectionContainer>
  );
};

export default Projects;
