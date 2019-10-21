import React from 'react';
import { Container } from 'semantic-ui-react';
// Internal
import { portfolioStyles as styles } from './styles';
import SquareWrapper from '../layout/wrappers/SquareWrapper';
import ProjectList from './ProjectList';

const Portfolio = ({ language }) => {
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
