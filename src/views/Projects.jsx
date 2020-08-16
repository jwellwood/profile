import React, { useContext } from 'react';
// Internal
import PortfolioGrid from 'components/portfolio/PortfolioGrid.jsx';
import Header from 'components/ui/Header.jsx';
import SectionContainer from 'layout/containers/SectionContainer.jsx';
import { LanguageContext } from 'context/LanguageContext.js';
import { titles } from 'database';

const Projects = () => {
  const language = useContext(LanguageContext);
  const header = language.language ? titles.projects.eng : titles.projects.esp;
  return (
    <SectionContainer>
      <Header>{header}</Header>
      <PortfolioGrid />
    </SectionContainer>
  );
};

export default Projects;
