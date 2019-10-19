import React from 'react';
import { Container } from 'semantic-ui-react';
import ProjectList from './ProjectList';
import SquareWrapper from '../layout/wrappers/SquareWrapper';

const Portfolio = ({ language }) => {
  const styles = {
    section: {
      textAlign: 'center'
    }
  };
  // const languageSet = language === 'en' ? aboutEng : aboutEsp;
  return (
    <Container style={{ margin: '20px' }}>
      <SquareWrapper
        title={language === 'en' ? 'In Production' : 'En Uso Actualmente'}
        style={styles.section}
        size='large'
      >
        <ProjectList type='main' language={language} />
      </SquareWrapper>
      <SquareWrapper
        title={language === 'en' ? 'Other Projects' : 'Otros Proyectos'}
        style={styles.section}
        size='large'
        color='secondaryBlue'
      >
        <ProjectList type='other' language={language} />
      </SquareWrapper>
    </Container>
  );
};

export default Portfolio;
