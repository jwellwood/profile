import React, { useContext } from 'react';
import Zoom from 'react-reveal';
import Typography from '@material-ui/core/Typography';
// Internal
import { about_data } from '../../assets/database';
import { about_text_styles } from './styles';
import { LanguageContext } from '../../context/LanguageContext';

const AboutText = () => {
  const classes = about_text_styles();
  const lang = useContext(LanguageContext);
  const text = lang.language ? about_data.eng : about_data.esp;
  return (
    <div className={classes.container}>
      <Zoom cascade left duration={7000}>
        {Object.values(text).map((part, i) => (
          <Typography variant='body1' key={i}>
            {part}
          </Typography>
        ))}
      </Zoom>
    </div>
  );
};

export default AboutText;
