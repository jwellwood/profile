import React, { ReactElement } from "react";
import { styled } from "@mui/material/styles";
import { Fade, Link, Paper } from "@mui/material";
import "./styles.css";

type Props = {
  children: ReactElement;
  link?: string;
  zoomIndex?: number;
};

const Item = styled(Paper)(({ theme }) => ({
  textDecoration: "none",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  zIndex: 1,
  position: "relative",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#fff",
  cursor: "pointer",
  opacity: 0.85,
  ":hover": {
    opacity: 1,
  },
}));

export default function ContentContainer({
  children,
  link,
  zoomIndex = 0,
}: Props) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        textDecoration: "none",
        "&:hover": { textDecoration: "none" },
        "&:visited": { color: "inherit" },
      }}
      className="link"
    >
      <Fade in timeout={(zoomIndex + 1) * 500 || 500}>
        <Item>{children}</Item>
      </Fade>
    </Link>
  );
}
