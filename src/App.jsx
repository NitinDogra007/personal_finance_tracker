// chart integration: https://github.com/reactchartjs/react-chartjs-2
import { useState } from 'react';
import ButtonComponent from './components/ButtonComponent.jsx';
import Chart from './components/ChartContainer.jsx';
import ModalComponent from './components/ModalComponent.jsx';
import NavBar from './components/NavBar';
import TableComponent from './components/TableComponent.jsx';
import './styles/global.css';

const data = [
	{
		name: 'Salary',
		type: 'Income',
		category: 'Job',
		date: '2025-04-01',
	},
	{
		name: 'Groceries',
		type: 'Expense',
		category: 'Food',
		date: '2025-04-02',
	},
	// Add more entries here
];

function App() {
	const [showModal, setShowModal] = useState(false);

	const handleButtonClick = () => {
		setShowModal(true); // Show modal when button is clicked
	};

	const handleCloseModal = () => {
		setShowModal(false); // Close modal when close button or outside is clicked
	};

	return (
		<>
			<NavBar />;
			<Chart />
			<ButtonComponent title="Add Transaction" onClick={handleButtonClick} />
			<TableComponent data={data} />
			<ModalComponent showModal={showModal} handleClose={handleCloseModal} />
		</>
	);
}

export default App;
