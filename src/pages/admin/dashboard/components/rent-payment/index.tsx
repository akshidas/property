import { Card, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import RentPaymentChart from "./components/rent-payment-chart";
import CardTitle from "../card-title";

const years = ["2024", "2023", "2022", "2021", "2020", "2019"];

const RentPayment: FunctionComponent = () => {
  return (
    <Card>
      <CardTitle
        label="rent payment"
        component={
          <TextField
            sx={{
              "& #rent-payment-year-list": {
                paddingBottom: 0,
                paddingTop: "5px",
              },
            }}
            size="small"
            id="rent-payment-year-list"
            variant="filled"
            select
            defaultValue="2024"
          >
            {years.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        }
      />
      <RentPaymentChart />
    </Card>
  );
};

export default RentPayment;
