import React from 'react';
import { Grid } from 'semantic-ui-react';
import SectionWrapper from '../../layout/wrappers/SectionWrapper';
import Skill from './Skill';
import skillsData from './data';

const Skills = () => {
  return (
    <SectionWrapper title="Skills" scroll="experience" inverted>
      <Grid columns={5} textAlign="center">
        <Grid.Row centered>
          {skillsData.map(item => (
            <Grid.Column key={item.icon} mobile={5} verticalAlign="top">
              <Skill item={item} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </SectionWrapper>
  );
};

export default Skills;
