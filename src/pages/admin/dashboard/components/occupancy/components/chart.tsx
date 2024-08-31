import { useTheme } from "@mui/material";
import { FunctionComponent } from "react";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
	{ name: "Group A", value: 400, variant: "dark" },
	{ name: "Group B", value: 300, variant: "main" },
	{ name: "Group C", value: 300, variant: "light" },
];

const Chart: FunctionComponent = () => {
	const { palette } = useTheme();
	return (
		<PieChart width={120} height={120}>
			<Pie
				data={data}
				cx={60}
				cy={60}
				innerRadius={40}
				outerRadius={55}
				fill="#8884d8"
				dataKey="value"
			>
				{data.map(({ variant }: { variant: string }, index) => {
					const fillColor: string = palette.primary[variant];
					return <Cell key={`cell-${index}`} fill={fillColor} />;
				})}
			</Pie>
		</PieChart>
	);
};
export default Chart;
