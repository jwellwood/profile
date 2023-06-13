import React, { useContext } from 'react';
import Header from 'components/typography/Header';
import PortfolioGrid from './PortfolioGrid';
import SectionContainer from 'components/layout/SectionContainer';
import { LanguageContext } from 'context/LanguageContext';
import { getLanguage } from 'utils/getLanguage';
import { projects as projectsText } from 'text';
import mrImg from 'assets/images/projects/football.jpeg';
import pbpImg from 'assets/images/projects/vegan.jpeg';
import rrImg from 'assets/images/projects/running-cover.jpg';
import rwImg from 'assets/images/projects/report.jpeg';
import lpImg from 'assets/images/projects/poker-cover.jpg';
import ssImg from 'assets/images/projects/shopping-cover.jpg';
import CustomTypography from 'components/typography/CustomTypography';

const Projects: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { title, tagline } = getLanguage(language || '', projectsText);
  const images = [
    { id: 1, src: mrImg },
    { id: 2, src: pbpImg },
    { id: 3, src: rrImg },
    { id: 4, src: rwImg },
    { id: 5, src: lpImg },
    { id: 6, src: ssImg },
  ];
  const projectsArray = projectsText.projects;
  const projects = projectsArray.map((project) => {
    const image = images.find((image) => image.id === project.id) || {
      src: '',
    };

    return {
      ...getLanguage(language || '', project),
      image: image.src,
    };
  });

  return (
    <SectionContainer>
      <Header>{title}</Header>
      <CustomTypography>{tagline}</CustomTypography>
      <PortfolioGrid data={projects} />
    </SectionContainer>
  );
};

export default Projects;
