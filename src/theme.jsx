import { createTheme } from "@mui/material/styles";
import Legajo from "./assets/fonts/Legajo.ttf";
import Quick from "./assets/fonts/Quick.ttf";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FEEFF1",
      paper: "#FEEFF1",
    },
  },

  typography: {
    fontFamily: `"Legajo", "Quick", sans-serif`,
    h1: { fontFamily: "Quick" },
    h2: { fontFamily: "Quick" },
    h3: { fontFamily: "Quick" },
    h4: { fontFamily: "Legajo" },
    h5: { fontFamily: "Quick" },
    h6: { fontFamily: "Legajo", lineHeight: "2.1rem" },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Legajo';
          src: url(${Legajo}) format('truetype');
          font-display: swap;
        }

        @font-face {
          font-family: 'Quick';
          src: url(${Quick}) format('truetype');
          font-display: swap;
        }

        :root {
          --main-bg: #FEEFF1;
          --secondary-bg: #FEEFF1;
        }

        body {
          background-image: url('/home.png');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          min-height: 100vh;
        }
      `,
    },
  },
});

export default theme;
