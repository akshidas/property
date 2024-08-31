import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

const columns = [
  { field: "tenant", headerName: "Tenant", width: 90 },
  { field: "property", headerName: "Property", width: 90 },
  { field: "date", headerName: "Date", width: 90 },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 90,
  },
];

const rows = [
  { id: 1, property: "Snow", tenant: "Jon", amount: 35, date: "25 Aug 2022" },
  {
    id: 2,
    property: "Lannister",
    tenant: "Cersei",
    amount: 42,
    date: "25 Aug 2022",
  },
  {
    id: 3,
    property: "Lannister",
    tenant: "Jaime",
    amount: 45,
    date: "25 Aug 2022",
  },
  { id: 4, property: "Stark", tenant: "Arya", amount: 16, date: "25 Aug 2022" },
  {
    id: 5,
    property: "Targaryen",
    tenant: "Daenerys",
    amount: null,
    date: "25 Aug 2022",
  },
  {
    id: 6,
    property: "Melisandre",
    tenant: null,
    amount: 150,
    date: "25 Aug 2022",
  },
  {
    id: 7,
    property: "Clifford",
    tenant: "Ferrara",
    amount: 44,
    date: "25 Aug 2022",
  },
  {
    id: 8,
    property: "Frances",
    tenant: "Rossini",
    amount: 36,
    date: "25 Aug 2022",
  },
  {
    id: 9,
    property: "Roxie",
    tenant: "Harvey",
    amount: 65,
    date: "25 Aug 2022",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

const PaymentHistoryTable = () => {
  return (
    <Box sx={{ maxHeight: "300px", overflowY: "scroll" }}>
      <DataGrid rows={rows} columns={columns} sx={{ border: 0 }} hideFooter />
    </Box>
  );
};

export default PaymentHistoryTable;
