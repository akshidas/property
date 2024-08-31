import { Box, Card, Chip, Stack } from "@mui/material";
import { FunctionComponent } from "react";
import CardTitle from "../card-title";
import { LinkText } from "components/texts";
import ListItemRow from "./components/list-item-row";
import ListItemRowItem from "./components/list-item";
import TitleBar from "./components/title-bar";
import ListItemChip from "./components/list-item-chip";

const LeaseRequest: FunctionComponent = () => {
  return (
    <Card>
      <CardTitle
        label="lease requests"
        component={<LinkText to="#">see all</LinkText>}
      />
      <Box sx={{ height: "300px", overflowY: "scroll" }}>
        <Stack>
          <TitleBar />
          <ListItemRow>
            <ListItemRowItem label="Johny Depp" subLabel="+64225" />
            <ListItemRowItem
              label="3BHK, Single Home"
              subLabel="30 Pitt Street, Sydney"
            />
            <ListItemChip status="on_screening" />
          </ListItemRow>
          <ListItemRow>
            <ListItemRowItem label="Johny Depp" subLabel="+64225" />
            <ListItemRowItem
              label="3BHK, Single Home"
              subLabel="30 Pitt Street, Sydney"
            />
            <ListItemChip status="approved" />
          </ListItemRow>

          <ListItemRow>
            <ListItemRowItem label="Johny Depp" subLabel="+64225" />
            <ListItemRowItem
              label="3BHK, Single Home"
              subLabel="30 Pitt Street, Sydney"
            />
            <ListItemChip status="rejected" />
          </ListItemRow>
        </Stack>
      </Box>
    </Card>
  );
};

export default LeaseRequest;
