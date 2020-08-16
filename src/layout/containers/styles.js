import { makeStyles } from '@material-ui/core/styles';
import blue_background from 'assets/images/backgrounds/background.png';

const globals = {
  textAlign: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: '2rem',
  alignContent: 'center',
};

export const top_container = makeStyles((theme) => ({
  container: {
    ...globals,
    backgroundImage: `url(${blue_background})`,
  },
}));

export const section_container = makeStyles({
  container: {
    ...globals,
    minHeight: (props) => props.height,
    backgroundImage: (props) =>
      props.background ? `url(${blue_background})` : null,
  },
});
