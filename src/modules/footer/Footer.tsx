import React from "react";
import { Typography } from "@mui/material";

import SectionContainer from "../../components/layout/SectionContainer";
import { theme } from "../../lib/theme/theme";

export default function Footer() {
  return (
    <SectionContainer height="30px">
      <Typography variant="caption" color={theme.palette.common.white}>
        ©jwellwood {new Date().getFullYear()}
      </Typography>
    </SectionContainer>
  );
}
