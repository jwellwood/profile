import React from 'react';
import { Grid } from 'semantic-ui-react';
import SectionWrapper from '../../layout/wrappers/SectionWrapper';
import Skill from './Skill';
import { skillsEng, skillsEsp } from './data';

const Skills = ({ language }) => {
  const skillsData = language === 'en' ? skillsEng : skillsEsp;
  return (
    <SectionWrapper
      title={language === 'en' ? 'Skills' : 'Habilidades'}
      scroll="experience"
      inverted
    >
      <Grid columns={5} textAlign="center">
        <Grid.Row centered>
          {skillsData.map(item => (
            <Grid.Column key={item.icon} mobile={5} verticalAlign="top">
              <Skill item={item} language={language} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </SectionWrapper>
  );
};

export default Skills;
