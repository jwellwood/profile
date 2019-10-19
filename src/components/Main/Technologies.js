import React from 'react';
import { Container, Grid, Icon, Segment } from 'semantic-ui-react';
import { colors } from '../../assets/styles/colors';

const Technologies = () => {
  const logos = ['html5', 'css3', 'react', 'js square', 'node js'];
  const style = {
    icons: {
      color: colors.lightBlue
    },
    container: {
      border: `1px solid ${colors.lightBlue}`,
      background: colors.secondaryBlue
    }
  };
  return (
    <Container text>
      <Segment basic attached='bottom' style={style.container}>
        <Grid columns={5} centered textAlign='center'>
          <Grid.Row centered>
            {logos.map(logo => (
              <Grid.Column key={Math.random()} verticalAlign='middle'>
                <Icon size='big' name={logo} style={style.icons} />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default Technologies;
