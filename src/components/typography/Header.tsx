import React, { ReactNode } from "react";
import { AppBar, Fade } from "@mui/material";
import Typography from "@mui/material/Typography";

import { theme } from "../../lib/theme/theme";

interface Props {
  children: ReactNode;
}

export default function Header({ children }: Props) {
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        top: 0,
        backdropFilter: "blur(10px)", // frosted-glass effect
        backgroundColor: "transparent", // semi-opaque background
        color: "text.primary",
      }}
    >
      <Typography
        component="span"
        sx={{
          color: theme.palette.secondary.light,
          margin: theme.spacing(3),
          fontSize: "18px",
          textTransform: "uppercase",
        }}
      >
        <Fade in timeout={700}>
          <div>{children}</div>
        </Fade>
      </Typography>
    </AppBar>
  );
}
