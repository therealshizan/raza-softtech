import { createTheme } from "@mui/material/styles";
import "@fontsource/raleway";
import "@fontsource/raleway/600.css";
import "@fontsource/lato/400.css";

const customPalette = {
  primary: {
    main: "#EB2F5B", // Change this to your primary color
  },
  secondary: {
    main: "#FED841", // Change this to your secondary color
  },
  accent: {
    main: "#222222",
  },
};

// Define your custom theme
const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 767,
      tablet: 991,
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  palette: customPalette,
  typography: {
    fontFamily: "Raleway, Arial, sans-serif", // Default font family

    h1: {
      fontFamily: "Raleway", // Font family for h1
      fontSize: "2rem",
      fontWeight: 600, // Font weight for h1 (e.g., bold)
      // color: customPalette.accent.main,
    },
    h2: {
      fontFamily: "Raleway", // Font family for h2
      fontSize: "1.5rem",
      fontWeight: 600, // Font weight for h2 (e.g., bold)
      // color: customPalette.accent.main,
    },
    h3: {
      fontFamily: "Raleway", // Font family for h3
      fontSize: "1.17rem",
      fontWeight: 600, // Font weight for h3 (e.g., bold)
      // color: customPalette.accent.main,
    },
    h4: {
      fontFamily: "Raleway", // Font family for h4
      fontSize: "1rem",
      fontWeight: 600, // Font weight for h4 (e.g., bold)
      // color: customPalette.accent.main,
    },
    h5: {
      fontFamily: "Raleway", // Font family for h5
      fontSize: "0.83rem",
      fontWeight: 600, // Font weight for h5 (e.g., bold)
      // color: customPalette.accent.main,
    },
    h6: {
      fontFamily: "Raleway", // Font family for h6
      fontSize: "0.67rem",
      fontWeight: 600, // Font weight for h6 (e.g., bold)
      // color: customPalette.accent.main,
    },
    body1: {
      fontFamily: "Lato", // Font family for body1
      fontSize: "1rem",
      fontWeight: 400, // Font weight for body1 (e.g., regular)
      // color: customPalette.accent.main,
    },
    body2: {
      fontFamily: "Lato", // Font family for body2
      fontSize: "0.875rem",
      fontWeight: 400, // Font weight for body2 (e.g., regular)
      // color: customPalette.accent.main,
    },
  },
});

export default theme;
