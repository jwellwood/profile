import React from "react";
import { Stack } from "@mui/material";

import CustomPaper from "../../../components/layout/CustomPaper";
import Image from "./Image";
import SectionSelector from "./SectionSelector";
import LinksList from "./LinksList";

export default function Menu() {
  return (
    <CustomPaper type="menu">
      <Stack spacing={8}>
        <Image />
        <SectionSelector />
        <LinksList />
      </Stack>
    </CustomPaper>
  );
}
