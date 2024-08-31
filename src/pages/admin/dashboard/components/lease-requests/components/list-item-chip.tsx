import { Chip } from "@mui/material";
import React, { FunctionComponent, useMemo } from "react";
import { ColorVariants } from "../../properties/components/status-chip";

type Status = "on_screening" | "approved" | "rejected";

type Props = {
  status: Status;
};

type LabelStatus = { label: string; color: ColorVariants };

const getLabelStatus = (status: Status): LabelStatus => {
  switch (status) {
    case "approved": {
      return { label: "approved", color: "success" };
    }
    case "on_screening": {
      return { label: "on screening", color: "primary" };
    }
    case "rejected": {
      return { label: "rejected", color: "error" };
    }
    default: {
      return { label: "", color: "default" };
    }
  }
};

const ListItemChip: FunctionComponent<Props> = ({ status }) => {

  const { label, color }: LabelStatus = useMemo(() => {
    return getLabelStatus(status);
  }, [status]);

  return <Chip variant="filled" label={label} color={color} size="small" />;
};

export default ListItemChip;
