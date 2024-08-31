import { Chip } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { Status } from "./property-item";

export type ColorVariants =
  | "success"
  | "default"
  | "primary"
  | "error"
  | "warning"
  | undefined;

const getStatusColor = (status: Status): ColorVariants => {
  switch (status) {
    case "vacant": {
      return "primary";
    }
    case "occupied": {
      return "success";
    }
    default: {
      return "default";
    }
  }
};

const StatusChip: FunctionComponent<{ status: Status }> = ({ status }) => {
  const [color, setColor] = useState<ColorVariants>("default");

  useEffect(() => {
    setColor(getStatusColor(status));
  }, [status]);

  return <Chip color={color} label={status} size="small" />;
};
export default StatusChip;
