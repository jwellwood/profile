import React from 'react';
import { Grid } from 'semantic-ui-react';
// Internal
import { statement } from './data';
import { statementStyles as styles } from './styles';
import TechList from './TechList';

const Statement = ({ language }) => {
  return (
    <div style={styles.container}>
      <Grid.Column mobile={12} computer={6} style={styles.text}>
        <p>{language === 'en' ? statement.eng : statement.esp}</p>
      </Grid.Column>

      <TechList language={language} />
    </div>
  );
};

export default Statement;
