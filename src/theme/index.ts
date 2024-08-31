import { createTheme } from "@mui/material";

const DEFAULT_SPACING = 1;

const theme = createTheme({
  typography: {
    button: {
      textTransform: "capitalize",
      letterSpacing: DEFAULT_SPACING - 1,
    },
  },

  components: {
    MuiListItemText: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiGrid2: {
      defaultProps: {
        spacing: DEFAULT_SPACING,
      },
    },
    MuiStack: {
      defaultProps: {
        spacing: DEFAULT_SPACING,
      },
    },
    MuiPaper: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiCard: {
      defaultProps: {
        variant: "outlined",
        sx: {
          borderRadius: 4,
          paddingTop: 3,
          paddingBottom: 3,
          paddingLeft: 2,
          paddingRight: 2,
          borderColor: "transparent",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        onClick: (e) => {
          e.stopPropagation();
        },
        variant: "contained",
        disableElevation: true,
      },
    },
  },
});

export default theme;
