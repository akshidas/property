import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

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

export const LinkText = styled(Link)(({ theme }) => {
  return { color: theme.palette.text.secondary, textDecoration: "none" };
});
