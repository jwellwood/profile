import React from "react";
import { Stack, Typography } from "@mui/material";

import CustomIcon from "../../components/icons/CustomIcon";
import { theme } from "../../lib/theme/theme";

type Props = {
  title: string;
  link: boolean;
};

export default function ListHeader({ title, link }: Props) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="body1" sx={{ fontWeight: 300 }}>
        {title}
      </Typography>
      {link && (
        <CustomIcon
          name="link"
          size="sm"
          animate
          color={theme.palette.highlight.main}
        />
      )}
    </Stack>
  );
}
