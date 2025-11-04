import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Menu from "../content/menu/Menu";
import Content from "../content/Content";

export default function GridLayout() {
  const sections = [
    { key: "menu", comp: <Menu />, size: { xs: 12, sm: 6, md: 6, lg: 5 } },
    {
      key: "content",
      comp: <Content />,
      size: { xs: 12, sm: 6, md: 6, lg: 7 },
    },
  ];

  const margins = {
    xs: 2,
    sm: 8,
    md: 8,
    lg: "auto",
  };

  return (
    <Box maxWidth={"lg"} sx={{ mx: margins, margin: "auto" }}>
      <Grid container margin={"auto"} spacing={{ xs: 1, sm: 2, md: 4, lg: 8 }}>
        {sections.map((section) => (
          <Grid key={section.key} size={section.size}>
            <>{section.comp}</>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
