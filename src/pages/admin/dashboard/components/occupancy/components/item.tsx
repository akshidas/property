import { Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Dot from "components/dot";

export type DotVariant = "light" | "main" | "dark";
type Props = { label: string; count: number; variant: DotVariant };

const Item: FunctionComponent<Props> = ({ label, count, variant }) => {
	return (
		<Stack direction="row" alignItems="center" justifyContent="space-between">
			<Stack direction="row" alignItems="center">
				<Dot variant={variant} />
				<Typography variant="body2">{label}</Typography>
			</Stack>
			<Typography variant="body1" fontWeight="bold">
				{count}
			</Typography>
		</Stack>
	);
};

export default Item;
