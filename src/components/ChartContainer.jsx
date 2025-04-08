// import {
// 	ArcElement,
// 	CategoryScale,
// 	Chart as ChartJS,
// 	Legend,
// 	LinearScale,
// 	Title,
// 	Tooltip,
// } from 'chart.js';
// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import '../styles/chart.css';

// ChartJS.register(
// 	Title,
// 	Tooltip,
// 	Legend,
// 	ArcElement,
// 	CategoryScale,
// 	LinearScale
// );

// function ChartContainer({ data }) {
// 	// function to process data and aggregate by category
// 	const processData = (data) => {
// 		const categories = {};

// 		data.forEach((entry) => {
// 			if (!categories[entry.category]) {
// 				categories[entry.category] = 0;
// 			}
// 			categories[entry.category] += entry.amount;
// 		});

// 		return categories;
// 	};
// 	// Process the data
// 	const aggregatedData = processData(data);

// 	const chartData = {
// 		labels: Object.keys(aggregatedData), //Get category names
// 		datasets: [
// 			{
// 				data: Object.values(aggregatedData),
// 				backgroundColor: ['#FF5733', '#33FF57', '#3357FF'],
// 			},
// 		],
// 	};
// 	return (
// 		<div className="chart-container">
// 			<h2>Category Breakdown</h2>
// 			<Pie data={chartData}></Pie>
// 		</div>
// 	);
// }

// export default ChartContainer;

import React from 'react';
import '../styles/chart.css';
import ExpenseByCategoryChart from './ExpenseByCategoryChart';
import IncomeVsExpensesChart from './IncomeVsExpensesChart';

function ChartContainer({ data }) {
	return (
		<div className="chart-container">
			<div className="chart-wrapper">
				<h2>Expenses By Category</h2>
				<ExpenseByCategoryChart data={data} />
			</div>
			<div className="chart-wrapper">
				<h2>Income Vs Expenses</h2>
				<IncomeVsExpensesChart data={data} />
			</div>
		</div>
	);
}

export default ChartContainer;
