import { Card } from "@mui/material";
import { LinkText } from "components/texts";
import { FunctionComponent } from "react";
import PaymentHistoryTable from "./components/data-table";
import CardTitle from "../card-title";

const PaymentHistory: FunctionComponent = () => {
  return (
    <Card>
      <CardTitle
        label="payment history"
        component={<LinkText to="#">see all</LinkText>}
      />

      <PaymentHistoryTable />
    </Card>
  );
};

export default PaymentHistory;
