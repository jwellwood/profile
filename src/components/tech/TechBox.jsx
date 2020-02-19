import React, { useContext } from 'react';
import Zoom from 'react-reveal';
import Fade from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// MUI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
// Internal
import Subheader from '../utils/headers/Subheader';
import { tech_data } from '../../assets/database/';
import { tech_styles } from './styles';
import { LanguageContext } from '../../context/LanguageContext';

const TechBox = () => {
  const classes = tech_styles();
  const language = useContext(LanguageContext);

  return tech_data.map(tech => (
    <Zoom duration={2000} key={tech.title.eng}>
      <Paper className={classes.container}>
        <div className={classes.avatars}>
          {tech.icons.map(icon => (
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
