import { makeStyles } from '@material-ui/core/styles';

export const header_styles = makeStyles(theme => ({
  title: {
    color: theme.palette.primary.dark,
    fontFamily: 'Hammersmith One',
    margin: theme.spacing(2),
    fontSize: '30px'
  },
  underscore: {
    width: '60px',
    margin: '2rem auto',
    borderBottom: `3px solid ${theme.palette.primary.main}`
  }
}));

export const subheader_styles = makeStyles(theme => ({
  title: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
    margin: theme.spacing(2)
  }
}));
