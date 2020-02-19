import { makeStyles } from '@material-ui/core/styles';

export const nav_drawer_list_styles = makeStyles(theme => ({
  list: {
    minWidth: '25vw'
    // width: 'auto'
  },
  '@media (max-width: 600px)': {
    list: {
      width: '66vw'
    }
  },
  avatar: {
    backgroundColor: theme.palette.primary.main
  },
  listItem: {
    cursor: 'pointer'
  }
}));
