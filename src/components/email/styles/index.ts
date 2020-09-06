import { makeStyles, Theme } from '@material-ui/core';

export const email_styles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(2),
    fontWeight: 'bold',
  },
  copied: {
    marginLeft: '10px',
    color: '#00A878',
  },
  uncopied: {
    marginLeft: '10px',
    cursor: 'pointer',
    color: theme.palette.primary.dark,
  },
}));
