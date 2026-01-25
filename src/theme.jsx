import { createTheme } from "@mui/material/styles";
import Legajo from "./assets/fonts/Legajo.ttf";
import Quick from "./assets/fonts/Quick.ttf";

export const fontFaces = `@font-face {
  font-family: 'Legajo';
  src: local('Legajo'), 
        local('Legajo.ttf'), 
        url(${Legajo}) format('truetype');
}
@font-face {
  font-family: 'Quick';
  src: local('Quick'), 
        local('Quick.ttf'), 
        url(${Quick}) format('truetype');
}`;

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
    h7: { fontFamily: "Quick" },
    h8: { fontFamily: "Legajo" },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
      :root {
        --main-bg: #FEEFF1;
        --secondary-bg: #FEEFF1;
      }

      ${fontFaces}
    `,
    },
  },
});

export default theme;
