import { Box, Card, Stack, Typography } from "@mui/material";

import { FunctionComponent } from "react";
import Item from "./components/item";

const OccupancyWidget: FunctionComponent = () => {
  return (
    <Card>
      <Box sx={{ width: "50%" }}>
        <Typography sx={{ mb: 1 }}>Occupancy</Typography>
        <Stack>
          <Item label="occupied" count={45} variant="light" />
          <Item label="vacant" count={40} variant="dark" />
          <Item label="under maintenance" count={29} variant="main" />
        </Stack>
      </Box>
      <Box></Box>
    </Card>
  );
};

export default OccupancyWidget;
