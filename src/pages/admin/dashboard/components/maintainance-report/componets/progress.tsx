import { styled } from "@mui/material/styles";
import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";

const MaintainnaceProgress = styled(LinearProgress)(({ theme }) => ({
	height: 20,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: theme.palette.primary.main,
		...theme.applyStyles("dark", {
			backgroundColor: theme.palette.primary.main,
		}),
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: theme.palette.primary.dark,
		...theme.applyStyles("dark", {
			backgroundColor: theme.palette.primary.dark,
		}),
	},
}));

export default MaintainnaceProgress;
