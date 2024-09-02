import { styled } from "@mui/material/styles";

const Dot = styled("span")(({ theme, variant }) => {
	const color = theme.palette.primary[variant];
	return {
		padding: "1px",
		height: "5px",
		width: "5px",
		backgroundColor: color,
		borderRadius: "2px",
	};
});

export default Dot;
