import { FunctionComponent, ReactNode } from "react";

import { Card, Typography } from "@mui/material";
import Currency from "components/currency";

type Props = {
  growthRate: ReactNode;
  title: string;
  amount: string;
  icon: string;
};

const SmallWidget: FunctionComponent<Props> = ({
  title,
  growthRate,
  amount,
  icon,
}) => {
  return (
    <Card>
      <img src={icon} width={40} />
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="h5">
        <Currency amount={amount} />
      </Typography>
      <Typography variant="caption">{growthRate} This week</Typography>
    </Card>
  );
};

export default SmallWidget;
