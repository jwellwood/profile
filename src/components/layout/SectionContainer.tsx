import React, { ReactNode } from "react";

import "./styles.css";
import { Box } from "@mui/material";

interface Props {
  children: ReactNode;
  height?: string;
}

const SectionContainer: React.FC<Props> = ({ children, height }) => {
  return (
    <Box sx={{ minHeight: height || "100vh" }} className="section-container">
      <div />
      {children}
      <div />
    </Box>
  );
};

export default SectionContainer;
