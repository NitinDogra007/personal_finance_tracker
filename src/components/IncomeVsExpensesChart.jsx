import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
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
	LinearScale
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
				label: 'Amount ($)',
				data: [income, expenses],
				backgroundColor: ['#33FF57', '#FF5733'], // Green for income, Red for expenses
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
							},
						},
					},
					scales: {
						x: {
							beginAtZero: true,
						},
						y: {
							beginAtZero: true,
						},
					},
				}}
			/>
		</div>
	);
}

export default IncomeVsExpensesChart;
