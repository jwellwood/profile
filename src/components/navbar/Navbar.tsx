import React, { ReactElement } from "react";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

import NavContent from "./NavContent";
import { useScreenSize } from "../../hooks/useScreenSize";

interface Props {
  children: ReactElement | any;
}

const HideOnScroll: React.FC<Props> = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default function Navbar() {
  const { isSmallScreen } = useScreenSize();
  const content = () => (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        top: 0,
        left: 0,
        width: "100vw",
      }}
    >
      <NavContent />
    </AppBar>
  );

  return (
    <React.Fragment>
      {isSmallScreen ? <HideOnScroll>{content()}</HideOnScroll> : content()}
    </React.Fragment>
  );
}
