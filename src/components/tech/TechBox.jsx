import React, { useContext } from 'react';
import Zoom from 'react-reveal';
import Fade from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// MUI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
// Internal
import Subheader from '../ui/Subheader';
import { tech_data } from 'database';
import { LanguageContext } from 'context/LanguageContext';
import { makeStyles } from '@material-ui/core/styles';
import background from 'assets/images/backgrounds/background-white.png';

export const tech_styles = makeStyles((theme) => ({
  root: {
    padding: '2rem',
  },
  container: {
    maxWidth: '100%',
    margin: '2rem auto',
    position: 'relative',
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    padding: '20px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
  },
  avatars: {
    margin: '10px',
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
  },
  icons: {
    margin: '-50px auto',
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    color: theme.palette.primary.dark,
    backgroundColor: '#fff',
  },
  title: {
    margin: '5px auto',
  },
  text: { margin: '5px auto' },
}));

const TechBox = () => {
  const classes = tech_styles();
  const language = useContext(LanguageContext);

  return tech_data.map((tech) => (
    <Zoom duration={2000} key={tech.title.eng}>
      <Paper className={classes.container}>
        <div className={classes.avatars}>
          {tech.icons.map((icon) => (
            <Avatar key={icon.name} className={classes.icons}>
              <Fade left cascade duration={4000}>
                <FontAwesomeIcon
                  icon={icon.name}
                  style={{ color: icon.color }}
                />
              </Fade>
            </Avatar>
          ))}
        </div>
        <Subheader>
          {language.language ? tech.title.eng : tech.title.esp}
        </Subheader>
        <Typography className={classes.text}>
          {language.language ? tech.text.eng : tech.text.esp}
        </Typography>
      </Paper>
    </Zoom>
  ));
};

export default TechBox;
