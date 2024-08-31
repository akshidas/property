import { styled } from "@mui/material/styles";

export const ErrorText = styled("span")(({ theme }) => {
  return {
    color: theme.palette.error.main,
  };
});

export const SuccessText = styled("span")(({ theme }) => {
  return {
    color: theme.palette.success.main,
  };
});
