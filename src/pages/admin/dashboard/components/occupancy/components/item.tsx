import { Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { PaletteColor, styled } from "@mui/material/styles";

type Variant = "light" | "main" | "dark";
type Props = { label: string; count: number; variant: Variant };

const Item: FunctionComponent<Props> = ({ label, count, variant }) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center">
        <Pill variant={variant} />
        <Typography variant="body2">{label}</Typography>
      </Stack>
      <Typography variant="body1" fontWeight="bold">
        {count}
      </Typography>
    </Stack>
  );
};

const Pill = styled("span")(({ theme, variant }) => {
	const color = theme.palette.primary[variant]
  return {
    padding: "1px",
    height: "5px",
    width: "5px",
    backgroundColor: color,
  };
});

export default Item;
