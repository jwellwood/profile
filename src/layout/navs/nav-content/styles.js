import { makeStyles } from '@material-ui/core/styles';

export const nav_content_styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    color: theme.palette.secondary.light
  }
}));
