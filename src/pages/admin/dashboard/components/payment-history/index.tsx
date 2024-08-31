import { Card, Stack, Typography } from "@mui/material";
import { LinkText } from "components/texts";
import { FunctionComponent } from "react";
import PaymentHistoryTable from "./components/data-table";

const PaymentHistory: FunctionComponent = () => {
  return (
    <Card>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        direction="row"
      >
        <Typography variant="subtitle1">rent payment</Typography>
        <LinkText to="#">see all</LinkText>
      </Stack>
      <PaymentHistoryTable />
    </Card>
  );
};

export default PaymentHistory;
