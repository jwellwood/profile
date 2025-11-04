import React, { useContext } from "react";
import { ButtonGroup, Button } from "@mui/material";

import { SectionContext } from "../../../context/SectionContext";
import { NAV_BUTTONS, SCROLL_NAMES } from "../../../constants";
import { scrollToElement } from "../../../utils/scroller";
import { LanguageContext } from "../../../context/LanguageContext";
import { useScreenSize } from "../../../hooks/useScreenSize";

export default function SectionSelector() {
  const { isSmallScreen } = useScreenSize();
  const { language } = useContext(LanguageContext);
  const { section, setSectionType } = React.useContext(SectionContext);

  return (
    <ButtonGroup
      orientation="vertical"
      variant="text"
      aria-label="Basic button group"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      {NAV_BUTTONS.map((btn) => {
        return (
          <Button
            key={btn.key}
            onClick={() => {
              setSectionType(btn.key);
              scrollToElement(
                isSmallScreen ? SCROLL_NAMES.content : SCROLL_NAMES.content
              );
            }}
            color={section === btn.key ? "primary" : "info"}
          >
            {btn.label[language]}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
