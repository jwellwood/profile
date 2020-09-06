import React, { useState } from 'react';
import Fade from 'react-reveal';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import * as links from 'constants/links';
import * as icon from 'constants/icon-names';
import { email_styles } from './styles';

const PopperContent: React.FC = () => {
  const classes = email_styles();
  const [copied, setCopied] = useState(false);
  return (
    <Paper className={classes.container}>
      <Fade>
        <Typography variant='body1' color='primary'>
          {links.email}
          <span>
            <CopyToClipboard text={links.email} onCopy={() => setCopied(true)}>
              <FontAwesomeIcon
                icon={!copied ? icon.copy : icon.check}
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
