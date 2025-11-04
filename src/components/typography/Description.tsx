import React from "react";
import { Typography } from "@mui/material";

type Props = { text: string };

export default function Description({ text }: Props) {
  return (
    <Typography color="secondary" variant="body2" sx={{ fontWeight: 300 }}>
      {text}
    </Typography>
  );
}
