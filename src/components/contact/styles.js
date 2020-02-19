import { makeStyles } from '@material-ui/core/styles';

export const contact_icons_styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 'auto'
  },
  avatar: {
    width: '50px',
    height: '50px',
    fontSize: '25px',
    margin: '25px 15px',
    backgroundColor: '#fff',
    color: theme.palette.primary.dark,
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(5px)',
      boxShadow: `0px 0px 10px 10px ${theme.palette.secondary.light}`
    }
  },
  footnote: {
    fontSize: '0.75rem',
    color: '#fff'
  }
}));
