import { Paper } from '@mui/material';
import React, { ReactElement } from 'react';

type Props = {
  children: ReactElement;
  maxWidth?: number;
  color?: string;
};

const CustomPaper: React.FC<Props> = ({
  children,
  color,
  maxWidth = '100%',
}) => {
  return (
    <Paper
      sx={{
        width: '100%',
        maxWidth,
        background: color || 'rgba(255,255,255,0.7)',
      }}
    >
      {children}
    </Paper>
  );
};

export default CustomPaper;
