import { Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";

type LProps = {
  children: JSX.Element[];
};

const ListItemRow: FunctionComponent<LProps> = ({ children }) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      {children.map((child: JSX.Element) => child)}
    </Stack>
  );
};

export default ListItemRow;
