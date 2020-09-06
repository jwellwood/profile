import { makeStyles, Theme } from '@material-ui/core/styles';

export const intro_styles = makeStyles((theme: Theme) => ({
  '@keyframes blinker': {
    from: { color: 'inherit' },
    to: { color: 'transparent' },
  },
  bar: {
    color: theme.palette.secondary.light,
    animationName: '$blinker',
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    height: '100%',
  },
  name: {
    fontFamily: 'Dosis',
    color: '#fff',
    margin: '2rem',
    fontSize: '90px',
  },
  location: {
    color: theme.palette.secondary.light,
  },
}));
