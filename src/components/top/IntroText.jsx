import React, { useContext } from 'react';
import Zoom from 'react-reveal';
import Flip from 'react-reveal';
import Typography from '@material-ui/core/Typography';
// Internal
import Header from '../ui/Header';
import { top_data } from 'database';

import { LanguageContext } from 'context/LanguageContext';

import { makeStyles } from '@material-ui/core/styles';

export const intro_styles = makeStyles((theme) => ({
  '@keyframes blinker': {
    from: { color: 'inherit' },
    to: { color: 'transparent' },
  },
  bar: {
    color: theme.palette.secondary.light,
    animationName: '$blinker',
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    height: '100%',
  },
  name: {
    fontFamily: 'Dosis',
    color: '#fff',
    margin: '2rem',
    fontSize: '90px',
  },
  location: {
    color: theme.palette.secondary.light,
  },
}));

const IntroText = () => {
  const classes = intro_styles();
  const language = useContext(LanguageContext);
  const data = {
    title: '{ j.w }',
    text: language.language ? top_data.eng : top_data.esp,
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
