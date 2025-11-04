import React, { ReactElement } from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";
import { theme } from "../../lib/theme/theme";
import { useScreenSize } from "../../hooks/useScreenSize";

type Props = {
  children: ReactElement;
  type: "menu" | "content";
};

export default function CustomPaper({ children, type }: Props) {
  const { isSmallScreen } = useScreenSize();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    zIndex: 1,
    position: "relative",
    ...theme.typography.body2,
    textAlign: "center",
    color: "#fff",
    height: isSmallScreen && type === "content" ? "100vh" : "640px",
    overflow: "scroll",
  }));
  return (
    <Item>
      <Box m={theme.spacing(4)}>{children}</Box>
    </Item>
  );
}
