import { makeStyles } from '@material-ui/core/styles';
import background from '../../../assets/images/backgrounds/background-white.png';

export const dialog_styles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover'
  }
}));
