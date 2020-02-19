import { makeStyles } from '@material-ui/core/styles';

export const image_styles = makeStyles(theme => ({
  container: {
    zIndex: '1000',
    margin: '20px auto'
  },
  image: {
    width: '210px',
    height: '210px',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: `0px 0px 40px ${theme.palette.primary.dark}`
  }
}));
