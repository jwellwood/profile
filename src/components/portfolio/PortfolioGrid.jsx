import React from 'react';
import Zoom from 'react-reveal';
// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// Internal
import PortfolioDialog from './portfolio-dialog/PortfolioDialog';
import { projects_data } from '../../assets/database';
import { portfolio_grid_styles } from './styles';

const PortfolioGrid = () => {
  const classes = portfolio_grid_styles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction='row'
        justify='space-evenly'
        alignItems='center'
      >
        {projects_data.map(project => (
          <Grid item xs={12} sm={6} md={4} key={project.title.eng}>
            <Zoom duration={2000}>
              <PortfolioDialog project={project}>
                <div className={classes.imageWrap}>
                  <img
                    src={project.cover_image}
                    alt={`cover for project ${project.title.eng}`}
                    className={classes.image}
                  />
                  <Typography className={classes.title}>
                    {project.title.eng}
                  </Typography>
                </div>
              </PortfolioDialog>
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PortfolioGrid;
