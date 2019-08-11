import React from 'react';
import { Container, Grid, Icon, Segment } from 'semantic-ui-react';

const Technologies = () => {
  const logos = ['html5', 'css3', 'react', 'js square', 'node js'];

  return (
    <Container text>
      <Segment inverted basic attached="bottom">
        <Grid columns={5} centered textAlign="center">
          <Grid.Row centered>
            {logos.map(logo => (
              <Grid.Column key={Math.random()} verticalAlign="middle">
                <Icon inverted size="big" name={logo} color="blue" />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default Technologies;
