import { FunctionComponent, ReactNode } from "react";

import { Card } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Topbar from "./components/top-bar";

type Props = { children: ReactNode };

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <Grid container>
      <Grid size={12}>
        <Topbar />
      </Grid>
      <Grid
        size={1.5}
        sx={{ height: "100vh", "& #side-panel": { height: "100%" } }}
      >
        <Card id="side-panel">Sidebar</Card>
      </Grid>
      <Grid size={10.5}>{children}</Grid>
    </Grid>
  );
};

export default Layout;
