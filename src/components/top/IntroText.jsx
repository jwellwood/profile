import React, { useContext } from 'react';
import Zoom from 'react-reveal';
import Flip from 'react-reveal';
import Typography from '@material-ui/core/Typography';
// Internal
import Header from '../utils/headers/Header';
import { top_data } from '../../assets/database';
import { intro_styles } from './styles';
import { LanguageContext } from '../../context/LanguageContext';

const IntroText = () => {
  const classes = intro_styles();
  const language = useContext(LanguageContext);
  const data = {
    title: '{ j.w }',
    text: language.language ? top_data.eng : top_data.esp
  };
  return (
    <React.Fragment>
      <Typography variant='h1' className={classes.name}>
        <Zoom duration={2000}>{data.title}</Zoom>
      </Typography>
      <Header>
        {data.text.role} <span className={classes.bar}>|</span>
      </Header>
      <Typography variant='h6' className={classes.location}>
        <Flip top delay={1200}>
          {data.text.city}
        </Flip>
      </Typography>
    </React.Fragment>
  );
};

export default IntroText;
