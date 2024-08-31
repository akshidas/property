import { FunctionComponent } from "react";
import { Box, Card, Stack } from "@mui/material";
import { LinkText } from "components/texts";
import CardTitle from "../card-title";
import PropertyItem from "./components/property-item";

const Properties: FunctionComponent = () => {
  return (
    <Card>
      <CardTitle
        label="properties"
        component={<LinkText to="#">see all</LinkText>}
      />
      <Box sx={{ height: "300px", overflowY: "scroll" }}>
        <Stack spacing={2.5}>
          <PropertyItem
            img="https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="3BHK, Single Home"
            subtitle="30 Pitt Street, Sydney"
            status="vacant"
          />
          <PropertyItem
            img="https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="3BHK, Single Home"
            subtitle="30 Pitt Street, Sydney"
            status="vacant"
          />
          <PropertyItem
            img="https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="3BHK, Single Home"
            subtitle="30 Pitt Street, Sydney"
            status="vacant"
          />

          <PropertyItem
            img="https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="3BHK, Single Home"
            subtitle="30 Pitt Street, Sydney"
            status="occupied"
          />

          <PropertyItem
            img="https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="3BHK, Single Home"
            subtitle="30 Pitt Street, Sydney"
            status="vacant"
          />

          <PropertyItem
            img="https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="3BHK, Single Home"
            subtitle="30 Pitt Street, Sydney"
            status="vacant"
          />
        </Stack>
      </Box>
    </Card>
  );
};

export default Properties;
