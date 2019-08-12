import React from 'react';
import styles from './styles/Closing.module.css';

const Closing = ({ language }) => {
  return (
    <div className={styles.background}>
      <div className={styles.center}>
        <p className={styles.text}>
          {language === 'en'
            ? 'Committed to developing fast, modern, responsive web applications'
            : 'Desarollo sitios webs rapidos, modernos y profesionales'}
        </p>
      </div>
    </div>
  );
};

export default Closing;
