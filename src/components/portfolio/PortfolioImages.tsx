import React from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import Subheader from '../ui/Subheader';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { screenshot_styles } from './styles';

interface Props {
  images: IImage[];
  language: boolean;
  width: Breakpoint;
}

interface IImage {
  image: string;
  caption: string;
}

const PortfolioImages: React.FC<Props> = ({ images, language, ...props }) => {
  const header: string = language ? 'Screenshots' : 'Pantallazos';
  const classes = screenshot_styles();

  const getGridListCols = (): number => {
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
          {images.map((image: IImage) => (
            <GridListTile key={image.image}>
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
