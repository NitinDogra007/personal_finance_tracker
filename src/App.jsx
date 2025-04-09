// chart integration: https://github.com/reactchartjs/react-chartjs-2
// import { useState } from "react";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ButtonComponent from './components/ButtonComponent.jsx';
import ChartContainer from './components/ChartContainer.jsx';
import ModalComponent from './components/ModalComponent.jsx';
import NavBar from './components/NavBar';
import TableComponent from './components/TableComponent.jsx';
import { entries as initialEntries } from './data/data.js';
import './styles/global.css';

function App() {
	// Initialize data with entries or local storage data
	const [data, setData] = useState(initialEntries);

	// Function to add data to the table and persist it
	function addData(formData) {
		const newEntry = {
			id: uuidv4(),
			timestamp: Date.now(), // Adding a timestamp field
			...formData,
		};
		setData((prevData) => {
			const updatedData = [...prevData, newEntry];
			localStorage.setItem('entries', JSON.stringify(updatedData)); // Save data to local storage
			return updatedData;
		});
	}

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
			<ChartContainer data={data} />
			<ButtonComponent title="Add Transaction" onClick={openModal} />
			<TableComponent data={data} />
			{isModalOpen && (
				<ModalComponent closeModal={closeModal} addData={addData} />
			)}
		</>
	);
}

export default App;
