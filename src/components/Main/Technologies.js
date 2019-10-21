import React from 'react';
import { Container, Grid, Icon, Segment } from 'semantic-ui-react';
import { techStyle as styles } from './styles';

const Technologies = () => {
  const logos = ['html5', 'css3', 'react', 'js square', 'node js'];

  return (
    <Container text>
      <Segment basic attached='bottom' style={styles.container}>
        <Grid columns={5} centered textAlign='center'>
          <Grid.Row centered>
            {logos.map(logo => (
              <Grid.Column key={Math.random()} verticalAlign='middle'>
                <Icon size='big' name={logo} style={styles.icons} />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default Technologies;
