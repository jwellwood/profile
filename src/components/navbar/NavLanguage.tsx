import React, { useContext } from "react";
import { Button, ButtonGroup } from "@mui/material";

import { LanguageContext } from "../../context/LanguageContext";

export default function NavLanguage() {
  const { language, setLang } = useContext(LanguageContext);

  return (
    <ButtonGroup variant="text" aria-label="Basic button group">
      <Button
        onClick={() => setLang("en")}
        color={language === "en" ? "primary" : "info"}
      >
        EN
      </Button>
      <Button
        onClick={() => setLang("es")}
        color={language === "es" ? "primary" : "info"}
      >
        ES
      </Button>
    </ButtonGroup>
  );
}
