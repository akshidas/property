import { Box, useTheme } from "@mui/material";
import  { FunctionComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jun",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    month: "Jul",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    month: "Aug",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    month: "Sep",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    month: "Oct",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    month: "Nov",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    month: "Dec",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const RentPaymentChart: FunctionComponent = () => {
  const { palette } = useTheme();
  return (
    <Box sx={{ width: 800, height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="month" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            interval={0}
            height={1}
            scale="band"
            xAxisId="quarter"
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill={palette.primary.light} />
          <Bar dataKey="uv" fill={palette.primary.dark} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default RentPaymentChart;
