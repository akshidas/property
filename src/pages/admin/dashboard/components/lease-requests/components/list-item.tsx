import { Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";

type Props = { label: string; subLabel: string };

const ListItemRowItem: FunctionComponent<Props> = ({ label, subLabel }) => {
  return (
    <Stack spacing={0}>
      <Typography variant="subtitle2">{label}</Typography>
      <Typography variant="caption">{subLabel}</Typography>
    </Stack>
  );
};

export default ListItemRowItem;
