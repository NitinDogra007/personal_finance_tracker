import React from 'react';
import '../styles/chart.css';
import ChartPlaceholder from './ChartPlaceholder';

function ChartContainer() {
	return (
		<div className="chart_container">
			<ChartPlaceholder title="Donut Graph"/>
			<ChartPlaceholder title="Line Graph"/>
		</div>
	);
}

export default ChartContainer;
