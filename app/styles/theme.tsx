"use client"
import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: "#C296C7",
        contrastText: "#FFFBF3",
        light: "rgba(20, 158, 84, 0.8)", //idk what this is yet
      },
      secondary: {
        main: "#FFFBF3",
        dark: "#87349D",
        contrastText: "#6B5539",
      },
      action: {
        disabledBackground: "rgba(20, 158, 84, 0.35)",
        disabled: "#FFF",
      },
    },
  
    
  });
  
  export default theme;
