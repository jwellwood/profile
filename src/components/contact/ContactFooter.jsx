import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export const contact_icons_styles = makeStyles((theme) => ({
  footnote: {
    fontSize: '0.75rem',
    color: '#fff',
  },
}));

const ContactFooter = () => {
  const classes = contact_icons_styles();
  return (
    <Typography variant='caption' className={classes.footnote}>
      jwellwood {new Date().getFullYear()}
    </Typography>
  );
};

export default ContactFooter;
