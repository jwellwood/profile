import React, { useState } from 'react';
import Fade from 'react-reveal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// Internal
import { links } from '../../../assets/database/links';
import { email_styles } from './styles';

const PopperContent = () => {
  const [copied, setcopied] = useState(false);
  const classes = email_styles();
  return (
    <Paper className={classes.container}>
      <Fade>
        <Typography variant='body1' color='primary'>
          {links.email}
          <span>
            <CopyToClipboard text={links.email} onCopy={() => setcopied(true)}>
              <FontAwesomeIcon
                icon={!copied ? 'copy' : 'check'}
                className={copied ? classes.copied : classes.uncopied}
              />
            </CopyToClipboard>
          </span>
        </Typography>
      </Fade>
    </Paper>
  );
};

export default PopperContent;
