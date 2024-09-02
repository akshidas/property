import { Box, Stack } from "@mui/material";
import React from "react";
import RecentRequestItem from "./components/recent-request-item";

const RecentRequestList = () => {
  return (
    <Stack spacing={2}>
      <RecentRequestItem
        img="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        time="Today, 12:36pm"
        username="richard felix"
        status="maintainance"
        tag="#DTMO9283748"
        description="Water leakage from sink"
      />

      <RecentRequestItem
        img="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        time="Today, 12:36pm"
        username="richard felix"
        status="maintainance"
        tag="#DTMO9283748"
        description="Water leakage from sink"
      />

      <RecentRequestItem
        img="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        time="Today, 12:36pm"
        username="richard felix"
        status="maintainance"
        tag="#DTMO9283748"
        description="Water leakage from sink"
      />

      <RecentRequestItem
        img="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        time="Today, 12:36pm"
        username="richard felix"
        status="maintainance"
        tag="#DTMO9283748"
        description="Water leakage from sink"
      />
    </Stack>
  );
};

export default RecentRequestList;
