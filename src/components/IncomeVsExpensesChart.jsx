import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Colors,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
	Colors
);

function IncomeVsExpensesChart({ data }) {
	const processData = (data) => {
		let income = 0;
		let expenses = 0;

		data.forEach((entry) => {
			if (entry.type === 'Income') {
				income += entry.amount;
			} else if (entry.type === 'Expense') {
				expenses += entry.amount;
			}
		});
		return { income, expenses };
	};

	const { income, expenses } = processData(data); // destructure

	const chartData = {
		labels: ['Income', 'Expenses'],
		datasets: [
			{
				label: 'Income',
				data: [income, 0],
			},
			{
				label: 'Expenses',
				data: [0, expenses],
			},
		],
	};

	return (
		<div>
			<Bar
				data={chartData}
				options={{
					responsive: true, // Makes the chart responsive
					plugins: {
						legend: {
							position: 'right', // Moves the legend to the right of the chart
							labels: {
								boxWidth: 10, // Controls the width of the legend box
								padding: 20, // Adds space between the items
								color: '#fff',
							},
						},
					},
					colors: {
						enabled: true,
					},
					scales: {
						x: {
							beginAtZero: true,
							stacked: true,
							ticks: {
								color: '#fff', // <-- X-axis tick color
							},
							title: {
								display: true,
								color: '#fff',
							},
						},
						y: {
							beginAtZero: true,
							ticks: {
								color: '#fff', // <-- Y-axis tick color
							},
							title: {
								display: true,
								color: '#fff',
							},
						},
					},
				}}
			/>
		</div>
	);
}

export default IncomeVsExpensesChart;
