import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

import ContentContainer from "../../../components/layout/ContentContainer";
import Description from "../../../components/typography/Description";

type Props = {
  text: {
    subtitle: string;
    description: string[];
    list?: { id: number; name: string }[];
  }[];
};

export default function AboutList({ text }: Props) {
  return (
    <Stack spacing={1}>
      {text.map((txt, i) => {
        const { subtitle, description, list } = txt;
        return (
          <ContentContainer zoomIndex={i} key={subtitle}>
            <Stack spacing={1}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle2" color="primary">
                  {subtitle}
                </Typography>
              </Stack>
              <Stack spacing={2}>
                {description.map((desc) => (
                  <Description key={desc} text={desc} />
                ))}
              </Stack>
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  {list &&
                    list.map((item, i) => {
                      return (
                        <Grid key={item.id} size={4}>
                          <Typography
                            variant="body2"
                            color={
                              item.id === list.at(-1)?.id ? "info" : "primary"
                            }
                          >
                            {item.name}
                          </Typography>
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            </Stack>
          </ContentContainer>
        );
      })}
    </Stack>
  );
}
