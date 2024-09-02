import { FunctionComponent } from "react";
import MaintainnaceProgress from "./componets/progress";
import { Stack } from "@mui/material";
import CardTitle from "../card-title";
import MaintaninaceReportItem from "./componets/item";

const MaintainanceReport: FunctionComponent = () => {
	return (
		<>
			<CardTitle label="maintainance report" />
			<MaintainnaceProgress variant="determinate" value={50} />
			<Stack direction="row" spacing={5} mt={3}>
				<MaintaninaceReportItem variant="dark" label="solved" count="30" />
				<MaintaninaceReportItem variant="main" label="pending" count="20" />
			</Stack>
		</>
	);
};

export default MaintainanceReport;
