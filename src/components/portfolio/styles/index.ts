import { makeStyles, Theme } from '@material-ui/core';

import background from 'assets/images/backgrounds/background-white.png';

export const link_styles = makeStyles(() => ({
  button: {
    margin: '0px 5px',
  },
}));

export const screenshot_styles = makeStyles((theme: Theme) => ({
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

export const dialog_styles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
  },
}));

export const portfolio_grid_styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  imageWrap: {
    position: 'relative',
    paddingTop: '56.25%',
    cursor: 'pointer',
  },
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: 'auto',
    maxHeight: '100%',
    cursor: 'pointer',
  },
}));
