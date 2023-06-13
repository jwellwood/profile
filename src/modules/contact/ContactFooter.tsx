import React from 'react';
import Typography from '@mui/material/Typography';

const ContactFooter: React.FC = () => {
  return (
    <Typography variant='caption' sx={{ fontSize: '0.75rem', color: '#fff' }}>
      jwellwood {new Date().getFullYear()}
    </Typography>
  );
};

export default ContactFooter;
