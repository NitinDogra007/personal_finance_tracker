// chart integration: https://github.com/reactchartjs/react-chartjs-2
// import { useState } from "react";
import { useState } from 'react';
import ButtonComponent from './components/ButtonComponent.jsx';
import ChartContainer from './components/ChartContainer.jsx';
import ModalComponent from './components/ModalComponent.jsx';
import NavBar from './components/NavBar';
import TableComponent from './components/TableComponent.jsx';
import { entries } from './data/data.js';
import './styles/global.css';

function App() {
	// const [data, setData] = useState([
	// 	{
	// 		name: 'Salary',
	// 		type: 'Income',
	// 		amount: 2000,
	// 		category: 'Job',
	// 		date: '2025-04-01',
	// 	},
	// 	{
	// 		name: 'Groceries',
	// 		type: 'Expense',
	// 		amount: 1000,
	// 		category: 'Food',
	// 		date: '2025-04-02',
	// 	},
	// 	// Add more entries here
	// ]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	function openModal() {
		setIsModalOpen(true);
	}

	function closeModal() {
		setIsModalOpen(false);
	}

	// // Function to add data to the table
	// function addData(formData) {
	// 	setData((prevData) => [...prevData, formData]);
	// }

	return (
		<>
			<NavBar />
			<ChartContainer data={entries} />
			<ButtonComponent title="Add Transaction" onClick={openModal} />
			<TableComponent data={entries} />
			{isModalOpen && (
				<ModalComponent closeModal={closeModal} addData={addData} />
			)}
		</>
	);
}

export default App;
