import React, { useState } from 'react';
import Fade from '@mui/material/Fade';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import * as links from 'constants/links';
import CustomIcon from 'components/icons/CustomIcon';
import { theme } from 'lib/theme/theme';
import { AppIcons } from 'constants/icon-names';

const PopperContent: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    setCopied(true);
  };
  return (
    <div>
      <Paper sx={{ padding: theme.spacing(2), fontWeight: 'bold' }}>
        <Fade in>
          <Typography variant='body1' color='primary'>
            {links.email}
            <span
              style={{
                marginLeft: '10px',
                cursor: copied ? 'normal' : 'pointer',
              }}
            >
              <CopyToClipboard text={links.email} onCopy={onCopy}>
                <span>
                  <CustomIcon
                    name={copied ? AppIcons.CHECK : AppIcons.COPY}
                    color={
                      copied
                        ? theme.palette.success.light
                        : theme.palette.primary.main
                    }
                  />
                </span>
              </CopyToClipboard>
            </span>
          </Typography>
        </Fade>
      </Paper>
    </div>
  );
};

export default PopperContent;
