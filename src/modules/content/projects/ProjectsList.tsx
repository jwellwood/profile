import React from "react";
import { Stack, Typography } from "@mui/material";

import ContentContainer from "../../../components/layout/ContentContainer";
import TechChips from "../../../components/typography/TechChips";
import ListHeader from "../../../components/typography/ListHeader";
import Description from "../../../components/typography/Description";
import projects from "./projects.json";

type Props = {
  text: {
    id: number;
    name: string;
    description: string;
  }[];
};

export default function ProjectsList({ text }: Props) {
  return (
    <Stack spacing={1}>
      {text.map((project, i) => {
        const { id, name, description } = project;
        const proj = projects.find((pr) => pr.id === id);
        return (
          <ContentContainer key={proj?.id} link={proj?.link} zoomIndex={i}>
            <Stack spacing={1}>
              <ListHeader title={name} link />
              <Description text={description} />
              <TechChips techList={proj?.tech as string[]} />
            </Stack>
          </ContentContainer>
        );
      })}
    </Stack>
  );
}
