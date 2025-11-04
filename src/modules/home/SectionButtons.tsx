import React, { useContext } from "react";
import { Button, ButtonGroup } from "@mui/material";

import { NAV_BUTTONS, SCROLL_NAMES } from "../../constants";
import { LanguageContext } from "../../context/LanguageContext";
import { SectionContext } from "../../context/SectionContext";
import { scrollToElement } from "../../utils/scroller";
import { useScreenSize } from "../../hooks/useScreenSize";

export default function SectionButtons() {
  const { language } = useContext(LanguageContext);
  const { section, setSectionType } = useContext(SectionContext);
  const { isSmallScreen } = useScreenSize();

  return (
    <ButtonGroup
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
                isSmallScreen ? SCROLL_NAMES.details : SCROLL_NAMES.content
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
