import React from 'react';
import Typography from '@material-ui/core/Typography';
// Internal
import { contact_icons_styles } from './styles';

const ContactFooter = () => {
  const classes = contact_icons_styles();
  return (
    <Typography variant='caption' className={classes.footnote}>
      jwellwood 2020
    </Typography>
  );
};

export default ContactFooter;
