import { FunctionComponent } from "react";
import SmallWidget from "./components/small-widget";
import Grid from "@mui/material/Grid2";
import { ErrorText, SuccessText } from "components/texts";
import expenseIcon from "./assets/expense.png";
import incomeIcon from "./assets/income.png";
import overdueIcon from "./assets/ovderdue.png";

const AdminDashboard: FunctionComponent = () => {
  return (
    <Grid container>
      <Grid size={{ md: 2.66 }}>
        <SmallWidget
          icon={incomeIcon}
          title="Income"
          amount="62,000.00"
          growthRate={<SuccessText>+12%</SuccessText>}
        />
      </Grid>
      <Grid size={{ md: 2.66 }}>
        <SmallWidget
          icon={expenseIcon}
          title="Expense"
          amount="37,000.00"
          growthRate={<SuccessText>+26%</SuccessText>}
        />
      </Grid>
      <Grid size={{ md: 2.66 }}>
        <SmallWidget
          icon={overdueIcon}
          title="Overrdue"
          amount="18,500.00"
          growthRate={<ErrorText>-14%</ErrorText>}
        />
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
