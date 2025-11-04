import React from "react";
import { Stack, Typography } from "@mui/material";

import ContentContainer from "../../../components/layout/ContentContainer";
import TechChips from "../../../components/typography/TechChips";
import ListHeader from "../../../components/typography/ListHeader";
import Description from "../../../components/typography/Description";
import exp from "./experience.json";

type Props = {
  text: {
    id: number;
    name: string;
    role: string;
    description: string;
  }[];
};

export default function ExperienceList({ text }: Props) {
  return (
    <Stack spacing={1}>
      {text.map((experience, i) => {
        const { id, name, role, description } = experience;
        const proj = exp.find((pr) => pr.id === id);
        return (
          <ContentContainer key={proj?.id} link={proj?.link} zoomIndex={i}>
            <Stack spacing={1}>
              <ListHeader title={name} link />

              <Typography color="primary" variant="body2">
                {role}
              </Typography>
              <Description text={description} />
              <TechChips techList={proj?.tech as string[]} />
            </Stack>
          </ContentContainer>
        );
      })}
    </Stack>
  );
}
