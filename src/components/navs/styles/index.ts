import { makeStyles } from '@material-ui/core/styles';

export const nav_content_styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    color: theme.palette.secondary.light,
  },
}));

export const nav_drawer_list_styles = makeStyles((theme) => ({
  list: {
    minWidth: '25vw',
    // width: 'auto'
  },
  '@media (max-width: 600px)': {
    list: {
      width: '66vw',
    },
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  listItem: {
    cursor: 'pointer',
  },
}));

export const navbar_styles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    // maxWidth: '100vw',
    top: 0,
    left: 0,
  },
}));
