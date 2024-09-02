import { Box, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Issue from "./issue";

type Props = {
  img: string;
  username: string;
  time: string;
  tag: string;
  description: string;
};

const UserInfo: FunctionComponent<Props> = ({
  img,
  username,
  time,
  tag,
  description,
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="row" spacing={2}>
        <img
          alt="user-profile"
          src={img}
          width={50}
          height={50}
          style={{ objectFit: "cover", borderRadius: "5px" }}
        />
        <Stack spacing={0} sx={{ width: "100%" }}>
          <Typography variant="subtitle1">{username}</Typography>
          <Typography variant="caption">{time}</Typography>
          <Issue tag={tag} description={description} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default UserInfo;
