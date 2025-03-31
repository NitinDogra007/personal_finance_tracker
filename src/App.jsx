// chart integration: https://github.com/reactchartjs/react-chartjs-2
import Chart from './components/ChartContainer.jsx';
import NavBar from './components/NavBar';
import './styles/global.css';

function App() {
	return (
		<>
			<NavBar />;
			<Chart />
		</>
	);
}

export default App;
