import { Box, Stack, Typography } from "@mui/material";

import { FunctionComponent } from "react";
import StatusChip from "./status-chip";

export type Status = "occupied" | "vacant";

type Props = {
  img: string;
  title: string;
  subtitle: string;
  status: Status;
};

const PropertyItem: FunctionComponent<Props> = ({
  img,
  title,
  subtitle,
  status,
}) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" spacing={3}>
        <img
          width="50px"
          style={{ borderRadius: "5px", objectFit: "cover" }}
          src={img}
          alt="property"
        />
        <Stack spacing={0}>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="caption">{subtitle}</Typography>
        </Stack>
      </Stack>
      <StatusChip status={status} />
    </Stack>
  );
};

export default PropertyItem;
