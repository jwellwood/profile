import React, { useContext } from 'react';
import Zoom from '@mui/material/Zoom';
import Typography from '@mui/material/Typography';
import Header from 'components/typography/Header';
import { top } from 'text';
import { LanguageContext } from 'context/LanguageContext';
import { theme } from 'lib/theme/theme';
import { getLanguage } from 'utils/getLanguage';

const IntroText: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { role, city } = getLanguage(language || '', top);
  const data = {
    title: '{ j.w }',
    role,
    city,
  };
  return (
    <React.Fragment>
      <Typography
        variant='h1'
        sx={{
          fontFamily: 'Dosis',
          color: '#fff',
          margin: '2rem',
          fontSize: '90px',
        }}
      >
        <Zoom in timeout={2000}>
          <div>{data.title}</div>
        </Zoom>
      </Typography>
      <Header>{data.role}</Header>
      <Typography variant='h6' sx={{ color: theme.palette.secondary.light }}>
        <Zoom in timeout={1200}>
          <div>{data.city}</div>
        </Zoom>
      </Typography>
    </React.Fragment>
  );
};

export default IntroText;
