import React from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Subheader from '../ui/Subheader';

export const screenshot_styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.secondary.dark,
  },
  titleBar: {
    background: theme.palette.secondary.light,
  },
}));
const PortfolioImages = ({ images, language, ...props }) => {
  const header = language ? 'Screenshots' : 'Pantallazos';
  const classes = screenshot_styles();
  const getGridListCols = () => {
    if (isWidthUp('sm', props.width)) {
      return 2.5;
    }
    return 1.5;
  };
  return (
    <React.Fragment>
      <Subheader>{header}</Subheader>
      <div className={classes.root}>
        <GridList
          className={classes.gridList}
          cols={getGridListCols()}
          cellHeight={300}
        >
          {images.map((image) => (
            <GridListTile key={image.image} className={classes.tile}>
              <img src={image.image} alt={image.image} />
              <GridListTileBar
                title={
                  <Typography variant='caption'>{image.caption}</Typography>
                }
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </React.Fragment>
  );
};

export default withWidth()(PortfolioImages);
