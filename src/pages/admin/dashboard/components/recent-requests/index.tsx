import { Box, Card } from "@mui/material";
import CardTitle from "../card-title";
import { LinkText } from "components/texts";
import RecentRequestList from "./components/recent-requests-list";

const RecentRequests = () => {
  return (
    <Box marginTop={3}>
      <Card variant="elevation">
        <CardTitle
          label="recent requests"
          component={<LinkText to="#">see all</LinkText>}
        />
        <RecentRequestList />
      </Card>
    </Box>
  );
};

export default RecentRequests;
