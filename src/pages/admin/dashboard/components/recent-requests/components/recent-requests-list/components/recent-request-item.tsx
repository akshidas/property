import { Box, Stack } from "@mui/material";
import { FunctionComponent } from "react";
import UserInfo from "./user-info";
import RecentRequestStatus, { Status } from "./recent-request-status";
import Issue from "./issue";

type Props = {
  img: string;
  time: string;
  username: string;
  status: Status;
  tag: string;
  description: string;
};
const RecentRequestItem: FunctionComponent<Props> = ({
  img,
  time,
  username,
  status,
  tag,
  description,
}) => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between">
        <UserInfo
          img={img}
          time={time}
          username={username}
          tag={tag}
          description={description}
        />
        <RecentRequestStatus status={status} />
      </Stack>
    </Stack>
  );
};

export default RecentRequestItem;
