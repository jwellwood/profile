import React from 'react';
import Typography from '@material-ui/core/Typography';
import { contact_footer_styles } from './styles';

const ContactFooter: React.FC = () => {
  const classes = contact_footer_styles();
  return (
    <Typography variant='caption' className={classes.footnote}>
      jwellwood {new Date().getFullYear()}
    </Typography>
  );
};

export default ContactFooter;
