import {
  Box,
  Card,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import logo from "./assets/logo.png";

const Topbar = () => {
  return (
    <Card>
      <Stack direction="row" justifyContent="space-between">
			
        <img src={logo} alt="logo" width={300} />
        <Stack direction="row" spacing={2} alignItems="center">
          <SearchBar />
          <Box>
            <IconButton>
              <Icon icon="akar-icons:gear" />
            </IconButton>
          </Box>
          <Box>
            <IconButton>
              <Icon icon="iconamoon:notification-fill" />
            </IconButton>
          </Box>
          <UserInfo />
        </Stack>
      </Stack>
    </Card>
  );
};

const SearchBar = () => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        borderRadius: "10px",
        backgroundColor: palette.grey[100],
        "& fieldset": { display: "none" },
        width: "400px",
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        label="Properties, Maintainance..."
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <Icon
                    icon="ic:baseline-search"
                    style={{ fontSize: "24px" }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};

const UserInfo = () => {
  return (
    <Stack direction="row" alignItems="center">
      <Stack spacing={0} sx={{ textAlign: "right" }}>
        <Typography variant="subtitle1">james rodriguez</Typography>
        <Typography variant="caption">property manager</Typography>
      </Stack>
      <img
        width="40px"
        height="40px"
        style={{ objectFit: "cover", borderRadius: "10px" }}
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="user-profile"
      />
    </Stack>
  );
};
export default Topbar;
