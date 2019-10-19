import React from 'react';
import TechList from './TechList';
import { statement } from './data';

const Statement = ({ language }) => {
  const styles = {
    container: {
      margin: '1.5rem auto',
      textAlign: 'center'
    },
    text: {
      margin: '3rem auto',
      fontSize: '2rem',
      width: '50%'
    }
  };
  return (
    <div style={styles.container}>
      <p style={styles.text}>
        {language === 'en' ? statement.eng : statement.esp}
      </p>
      <TechList language={language} />
    </div>
  );
};

export default Statement;
