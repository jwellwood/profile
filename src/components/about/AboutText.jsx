import React, { useContext } from 'react';
import Zoom from 'react-reveal';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { about_data } from 'database';
import { LanguageContext } from 'context/LanguageContext';

export const about_text_styles = makeStyles((theme) => ({
  container: {
    width: '75%',
    margin: 'auto',
  },
}));

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
