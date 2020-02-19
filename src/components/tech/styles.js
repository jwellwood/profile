import { makeStyles } from '@material-ui/core/styles';
import background from '../../assets/images/backgrounds/background-white.png';

export const tech_styles = makeStyles(theme => ({
  root: {
    padding: '2rem'
  },
  container: {
    maxWidth: '100%',
    margin: '2rem auto',
    position: 'relative',
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    padding: '20px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover'
  },
  avatars: {
    margin: '10px',
    display: 'flex',
    direction: 'row',
    justifyContent: 'center'
  },
  icons: {
    margin: '-50px auto',
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    color: theme.palette.primary.dark,
    backgroundColor: '#fff'
  },
  title: {
    margin: '5px auto'
  },
  text: { margin: '5px auto' }
}));
