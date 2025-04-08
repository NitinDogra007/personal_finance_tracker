import {
	ArcElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	ArcElement,
	CategoryScale,
	LinearScale
);

function ExpenseByCategoryChart({ data }) {
	// function to process data and aggregate by category
	const processData = (data, filterFn) => {
		const filteredData = data.filter(filterFn);
		const categories = {};

		filteredData.forEach((entry) => {
			if (!categories[entry.category]) {
				categories[entry.category] = 0;
			}
			categories[entry.category] += entry.amount;
		});

		return categories;
	};

	// Example filter function
	const expenseFilter = (entry) =>
		entry.type === 'Expense' && entry.category !== 'Job';

	// Process the data
	const aggregatedData = processData(data, expenseFilter);

	const chartData = {
		labels: Object.keys(aggregatedData), //Get category names
		datasets: [
			{
				data: Object.values(aggregatedData),
				backgroundColor: ['#FF5733', '#33FF57', '#3357FF'],
			},
		],
	};
	return (
		<div>
			<Pie
				data={chartData}
				options={{
					responsive: true,
					plugins: {
						legend: {
							position: 'right', // Set the legend position to the right
							labels: {
								boxWidth: 10, // Optional: control the size of the legend box
								padding: 20, // Optional: control the padding between items
							},
						},
					},
				}}
			/>
		</div>
	);
}

export default ExpenseByCategoryChart;
