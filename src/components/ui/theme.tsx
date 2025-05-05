import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "sans-serif",
    ].join(","),
  },
});

export default theme;
