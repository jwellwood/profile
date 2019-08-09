import React from 'react';
import { Container, Grid, Icon, Segment } from 'semantic-ui-react';

const Technologies = () => {
  const data = logo => {
    return { logo };
  };
  const logos = [
    data('html5'),
    data('css3'),
    data('react'),
    data('js square'),
    data('node js'),
  ];

  return (
    <Container text>
      <Segment inverted basic attached="bottom">
        <Grid columns={5} centered textAlign="center">
          <Grid.Row centered>
            {logos.map(logo => (
              <Grid.Column key={Math.random()} verticalAlign="middle">
                <Icon inverted size="big" name={logo.logo} color="blue" />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default Technologies;
