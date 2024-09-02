import { createTheme } from "@mui/material";
import palette from "./palette";

const DEFAULT_SPACING = 1;

const theme = createTheme({
  palette: palette.light,
  typography: {
    h1: {
      textTransform: "capitalize",
      letterSpacing: DEFAULT_SPACING - 1,
    },
    h2: {
      textTransform: "capitalize",
      letterSpacing: DEFAULT_SPACING - 1,
    },
    subtitle1: {
      textTransform: "capitalize",
      letterSpacing: DEFAULT_SPACING - 1,
    },
    subtitle2: {
      textTransform: "capitalize",
      letterSpacing: DEFAULT_SPACING - 1,
    },

    caption: {
      textTransform: "capitalize",
      letterSpacing: DEFAULT_SPACING - 1,
      fontWeight: "lighter",
      color: palette.light.grey[500],
    },
    button: {
      textTransform: "capitalize",
      letterSpacing: DEFAULT_SPACING - 1,
    },
    body1: {
      textTransform: "capitalize",
      letterSpacing: DEFAULT_SPACING - 1,
    },
    body2: {
      textTransform: "capitalize",
      letterSpacing: DEFAULT_SPACING - 1,
    },
  },

  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
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
