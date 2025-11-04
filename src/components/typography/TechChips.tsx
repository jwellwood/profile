import * as React from "react";
import { Box, Chip } from "@mui/material";
import { theme } from "../../lib/theme/theme";

type Props = {
  techList: string[];
};

export default function TechChips({ techList }: Props) {
  return (
    <Box>
      {techList.map((item) => (
        <Chip
          key={item}
          sx={{ margin: "2px", color: theme.palette.primary.main }}
          label={item}
          color="info"
          variant="outlined"
          size="small"
        />
      ))}
    </Box>
  );
}
