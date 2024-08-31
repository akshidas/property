import { Card, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import RentPaymentChart from "./components/rent-payment-chart";

const years = ["2024", "2023", "2022", "2021", "2020", "2019"];
const RentPayment: FunctionComponent = () => {
  return (
    <Card>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        direction="row"
      >
        <Typography variant="subtitle1">
          rent payment
        </Typography>
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
      </Stack>
      <RentPaymentChart />
    </Card>
  );
};

export default RentPayment;
