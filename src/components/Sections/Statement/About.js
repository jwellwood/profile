import React from 'react';
import { Segment } from 'semantic-ui-react';
import SectionWrapper from '../../layout/wrappers/SectionWrapper';
import styles from './styles/About.module.css';
const About = () => {
  return (
    <div className={styles.background}>
      <SectionWrapper title="About" scroll="skills">
        <Segment style={{ textAlign: 'center' }} size="large">
          Originally from the UK, I have lived and worked in Spain since 2010.
          <br />I have been developing websites for three years.
        </Segment>
      </SectionWrapper>
    </div>
  );
};

export default About;
