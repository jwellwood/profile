import React, { useContext } from "react";
import Zoom from "@mui/material/Zoom";
import Typography from "@mui/material/Typography";

import { LanguageContext } from "../../context/LanguageContext";
import { theme } from "../../lib/theme/theme";
import en from "./en.json";
import es from "./es.json";
import { Box, Stack } from "@mui/material";

const IntroText: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const text = language === "en" ? en : es;

  return (
    <React.Fragment>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Momo Trust Display",
          color: "#fff",
          margin: "2rem",
          fontSize: "90px",
        }}
      >
        <Zoom in timeout={2000}>
          <div>{text.title}</div>
        </Zoom>
      </Typography>
      <Box display="flex" justifyContent="center">
        <Stack spacing={4} maxWidth={350} justifyContent="center">
          <Typography variant="h2" sx={{ fontSize: "20px" }} color="primary">
            {text.subtitle}
          </Typography>
          <Typography color="secondary">{text.description}</Typography>
          <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
            <Zoom in timeout={1200}>
              <div>{text.location}</div>
            </Zoom>
          </Typography>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default IntroText;
