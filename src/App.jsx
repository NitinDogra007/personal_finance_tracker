// chart integration: https://github.com/reactchartjs/react-chartjs-2
import Chart from "./components/ChartContainer.jsx";
import NavBar from "./components/NavBar";
import TableComponent from "./components/TableComponent.jsx";
import "./styles/global.css";

const data = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

function App() {
  return (
    <>
      <NavBar />;
      <Chart />
      <TableComponent data={data} />
    </>
  );
}

export default App;
