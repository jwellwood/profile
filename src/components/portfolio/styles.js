import { makeStyles } from '@material-ui/core/styles';

export const portfolio_grid_styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  imageWrap: {
    position: 'relative',
    paddingTop: '56.25%',
    cursor: 'pointer'
  },
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: 'auto',
    cursor: 'pointer'
  },
  title: {
    position: 'absolute',
    background: 'rgba(0,0,0,0.7)',
    color: theme.palette.secondary.light,
    margin: 'auto',
    width: '100%',
    bottom: 0,
    left: 0,
    zIndex: '1000',
    height: '15%',
    transitionProperty: 'height',
    transitionDuration: '0.5s',
    transitionTimingFunction: 'linear',
    '&:hover': {
      height: '20%',
      borderBottom: `3px solid ${theme.palette.primary.light}`
    }
  }
}));
