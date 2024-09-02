import { Chip } from "@mui/material";
import { ColorVariants } from "pages/admin/dashboard/components/properties/components/status-chip";
import { FunctionComponent, useMemo } from "react";

export type Status = "maintainance" | "solved";
type Props = { status: Status };

const getStatusColor = (status: Status): ColorVariants => {
  switch (status) {
    case "maintainance": {
      return "warning";
    }
    case "solved": {
      return "success";
    }
    default: {
      return "default";
    }
  }
};

const RecentRequestStatus: FunctionComponent<Props> = ({ status }) => {
  const color: ColorVariants = useMemo(() => {
    return getStatusColor(status);
  }, [status]);

  return <Chip size="small" variant="filled" color={color} label="status" />;
};

export default RecentRequestStatus;
