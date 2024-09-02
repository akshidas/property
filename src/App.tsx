import { Card, ThemeProvider } from "@mui/material";
import Routes from "./routes";
import theme from "./theme";
import "./app.css";
import Layout from "layout";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
