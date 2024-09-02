import { FunctionComponent } from "react";
import { Stack, Typography } from "@mui/material";
import Dot from "components/dot";
import { DotVariant } from "../../occupancy/components/item";

type Props = {
	variant: DotVariant;
	label: string;
	count: string;
};

const MaintaninaceReportItem: FunctionComponent<Props> = ({
	variant,
	label,
	count,
}) => {
	return (
		<Stack alignItems="center">
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

export default MaintaninaceReportItem;
