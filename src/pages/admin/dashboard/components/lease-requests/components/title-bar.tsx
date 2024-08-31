import { Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";

const TitleBar: FunctionComponent = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="subtitle1">applicant</Typography>
      <Typography variant="subtitle1">property</Typography>
      <Typography variant="subtitle1">status</Typography>
    </Stack>
  );
};
export default TitleBar;
