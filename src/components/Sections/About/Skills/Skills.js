import React from 'react';
import { Grid } from 'semantic-ui-react';
import SectionWrapper from '../../../layout/wrappers/SectionWrapper';
import Skill from './Skill';

const data = (icon, title, desc) => {
  return { icon, title, desc };
};

const skills = [
  data('conversation', 'Communication', [
    '10 years experience of working in teams',
  ]),
  data('student', 'Learning', 'Up-to-date, and always improving my skillset'),
  data('chess', 'Problem-solving', [
    'Proven ability to analyse, decide, and act ',
  ]),
  data('language', 'Languages', ['English native, proficient in Spanish']),
  data('code', 'Coding', [
    '3 years experience building javascript apps with ReactJS ',
  ]),
];

const Skills = () => {
  return (
    <SectionWrapper title="Skills" inverted>
      <Grid columns={5} textAlign="center">
        <Grid.Row centered>
          {skills.map(item => (
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
