import React from 'react';
import { Segment } from 'semantic-ui-react';
import SectionWrapper from '../../layout/wrappers/SectionWrapper';
import { aboutEng, aboutEsp } from './data';
import styles from './styles/About.module.css';
const About = ({ language }) => {
  const languageSet = language === 'en' ? aboutEng : aboutEsp;
  return (
    <div className={styles.background}>
      <SectionWrapper title={languageSet.title} scroll="skills">
        <Segment style={{ textAlign: 'center' }} size="large">
          {languageSet.main}
          <br />
          {languageSet.sub}
        </Segment>
      </SectionWrapper>
    </div>
  );
};

export default About;
