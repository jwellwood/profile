import React, { ReactElement } from "react";
import { Typography } from "@mui/material";
import { theme } from "../../lib/theme/theme";

type Props = {
  children: string | ReactElement;
  color?: any;
  size?: any;
  bold?: boolean;
};

const CustomTypography: React.FC<Props> = ({
  children,
  color = theme.palette.primary.main,
  size = "14px",
  bold = false,
}) => {
  return (
    <Typography
      color={color}
      fontSize={size}
      sx={{ fontWeight: bold ? "bold" : "" }}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
