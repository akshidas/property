import { FunctionComponent } from "react";
import SmallWidget from "./components/small-widget";
import Grid from "@mui/material/Grid2";
import { ErrorText, SuccessText } from "components/texts";
import expenseIcon from "./assets/expense.png";
import incomeIcon from "./assets/income.png";
import overdueIcon from "./assets/ovderdue.png";
import OccupancyWidget from "./components/occupancy";
import { Card } from "@mui/material";
import RentPayment from "./components/rent-payment";
import Properties from "./components/properties";
import PaymentHistory from "./components/payment-history";
import LeaseRequest from "./components/lease-requests";

const AdminDashboard: FunctionComponent = () => {
  return (
    <Grid container>
      <Grid container size={{ md: 8 }}>
        <Grid size={{ md: 2.66 }}>
          <SmallWidget
            icon={incomeIcon}
            title="income"
            amount="62,000.00"
            growthRate={<SuccessText>+12%</SuccessText>}
          />
        </Grid>
        <Grid size={{ md: 2.66 }}>
          <SmallWidget
            icon={expenseIcon}
            title="expense"
            amount="37,000.00"
            growthRate={<SuccessText>+26%</SuccessText>}
          />
        </Grid>
        <Grid size={{ md: 2.66 }}>
          <SmallWidget
            icon={overdueIcon}
            title="overrdue"
            amount="18,500.00"
            growthRate={<ErrorText>-14%</ErrorText>}
          />
        </Grid>
        <Grid size={{ md: 4 }}>
          <OccupancyWidget />
        </Grid>
        <Grid size={{ md: 8 }}>
          <RentPayment />
        </Grid>
        <Grid size={{ md: 4 }}>
          <Properties />
        </Grid>
        <Grid size={{ md: 8 }}>
          <PaymentHistory />
        </Grid>
        <Grid size={{ md: 4 }}>
          <LeaseRequest />
        </Grid>
      </Grid>
      <Grid container size={{ md: 4 }}>
        <Grid size={12}>
          <Card>test</Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
