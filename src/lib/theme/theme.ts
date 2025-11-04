import { cyan, grey, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    highlight: Palette["primary"];
  }

  interface PaletteOptions {
    highlight?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    highlight: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: cyan["A200"],
    },
    secondary: {
      main: grey[300],
    },
    highlight: {
      main: pink["A400"],
    },
  },
  typography: {
    fontFamily: "Lexend, sans-serif",
  },
});
