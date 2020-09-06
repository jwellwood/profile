import React from 'react';
import Zoom from 'react-reveal';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PortfolioDialog from './PortfolioDialog';
import { projects_data } from 'database';
import { portfolio_grid_styles } from './styles';
import { theme } from 'lib/theme/theme';

const styles: any = {
  position: 'absolute',
  background: 'rgba(0,0,0,0.7)',
  color: theme.palette.secondary.light,
  margin: 'auto',
  width: '100%',
  bottom: 0,
  left: 0,
  zIndex: 1000,
  height: '15%',
  transitionProperty: 'height',
  transitionDuration: '0.5s',
  transitionTimingFunction: 'linear',
  '&:hover': {
    height: '20%',
    borderBottom: `3px solid ${theme.palette.primary.light}`,
  },
};

const PortfolioGrid: React.FC = () => {
  const classes = portfolio_grid_styles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction='row'
        justify='space-evenly'
        alignItems='center'
      >
        {projects_data.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.title.eng}>
            <Zoom duration={2000}>
              <PortfolioDialog project={project}>
                <div className={classes.imageWrap}>
                  <img
                    src={project.cover_image}
                    alt={`cover for project ${project.title.eng}`}
                    className={classes.image}
                  />
                  <Typography style={styles}>{project.title.eng}</Typography>
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
