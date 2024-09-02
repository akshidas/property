import { FunctionComponent, ReactNode } from "react";
import { Stack, Typography } from "@mui/material";

type Props = {
  label: string;
  component?: ReactNode;
};

const CardTitle: FunctionComponent<Props> = ({ label, component }) => {
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      mb={2}
      direction="row"
    >
      <Typography variant="subtitle1">{label}</Typography>
      {component}
    </Stack>
  );
};

export default CardTitle;
