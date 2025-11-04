import { useMediaQuery } from "@mui/material";

import { theme } from "../lib/theme/theme";

export const useScreenSize = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  return { isSmallScreen, isLargeScreen };
};
