import { Card, ThemeProvider } from "@mui/material";
import Routes from "./routes";
import theme from "./theme";
import Grid from "@mui/material/Grid2";
import "./app.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid size={12}>
          <Card>NavBar</Card>
        </Grid>
        <Grid
          size={1.5}
          sx={{ height: "100vh", "& #side-panel": { height: "100%" } }}
        >
          <Card id="side-panel">Sidebar</Card>
        </Grid>
        <Grid size={10.5}>
          <Routes />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
