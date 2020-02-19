import React from 'react';
// MUI
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
// Internal
import Subheader from '../../utils/headers/Subheader';
import { screenshot_styles } from './styles';

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
          {images.map(image => (
            <GridListTile key={image.image} className={classes.tile}>
              <img src={image.image} alt={image.image} />
              <GridListTileBar
                title={
                  <Typography variant='caption'>{image.caption}</Typography>
                }
                classes={{
                  root: classes.titleBar,
                  title: classes.title
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
