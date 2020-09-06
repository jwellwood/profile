import React, { useContext } from 'react';
import Zoom from 'react-reveal';
import Typography from '@material-ui/core/Typography';
import { about_data } from 'database';
import { LanguageContext } from 'context/LanguageContext';
import { about_text_styles } from './styles';

const AboutText: React.FC = () => {
  const classes = about_text_styles();
  const lang = useContext(LanguageContext);
  const text = lang.language ? about_data.eng : about_data.esp;
  return (
    <div className={classes.container}>
      <Zoom cascade left duration={7000}>
        {Object.values(text).map((part: string, i: number) => (
          <Typography variant='body1' key={i}>
            {part}
          </Typography>
        ))}
      </Zoom>
    </div>
  );
};

export default AboutText;
