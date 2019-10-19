import React from 'react';
import { Grid } from 'semantic-ui-react';
import ModalContent from './ModalContent/ModalContent';
import { otherProjectsData, mainProjectsData } from './data';

const ProjectList = ({ language, type }) => {
  const data = type === 'main' ? mainProjectsData : otherProjectsData;
  return (
    <Grid columns={3} textAlign='center'>
      <Grid.Row centered>
        {data.map(item => (
          <Grid.Column
            key={item.title.eng}
            tablet={5}
            computer={5}
            mobile={type === 'main' ? 10 : 6}
            verticalAlign='top'
          >
            <ModalContent
              language={language}
              item={item}
              type={type === 'main' ? 'main' : null}
            />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default ProjectList;
