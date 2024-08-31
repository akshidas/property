import { Box, Card, Stack, Typography } from "@mui/material";

import { FunctionComponent } from "react";
import Item from "./components/item";
import Chart from "./components/chart";

const OccupancyWidget: FunctionComponent = () => {
  return (
    <Card>
      <Stack direction="row" justifyContent="space-evenly">
        <Box sx={{ width: "50%" }}>
          <Typography sx={{ mb: 1 }} variant="subtitle1">
            occupancy
          </Typography>
          <Stack>
            <Item label="occupied" count={45} variant="light" />
            <Item label="vacant" count={40} variant="dark" />
            <Item label="under maintenance" count={29} variant="main" />
          </Stack>
        </Box>
        <Box>
          <Chart />
        </Box>
      </Stack>
    </Card>
  );
};

export default OccupancyWidget;
