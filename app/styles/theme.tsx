"use client"
import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: "#C296C7",
        contrastText: "#FFFBF3",
        light: "#C296C7", //idk what this is yet
      },
      secondary: {
        main: "#C296C7",
        dark: "#C296C7",
        contrastText: "#FFFBF3",
      },
      action: {
        disabledBackground: "rgba(20, 158, 84, 0.35)",
        disabled: "#FFF",
      },
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            
          },
        },
      },
      
    },
  
    typography: {
      button: {
        textTransform: "none",
        fontWeight: 500,
      },
    },
  
    
  });
  
  export default theme;
