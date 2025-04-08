import { v4 as uuidv4 } from 'uuid';

const data = [
	{
		// id: "1",
		name: 'Salary',
		type: 'Income',
		amount: 2000,
		category: 'Job',
		date: '2025-04-01',
	},
	{
		// id: "2",
		name: 'Groceries',
		type: 'Expense',
		amount: 1000,
		category: 'Food',
		date: '2025-04-02',
	},
	{
		// id: "3",
		name: 'Rent',
		type: 'Expense',
		amount: 1500,
		category: 'Home',
		date: '2025-04-03',
	},
	{
		// id: "4",
		name: 'Freelance',
		type: 'Income',
		amount: 1200,
		category: 'Job',
		date: '2025-04-04',
	},
];

export const entries = data.map((entry) => ({
	id: uuidv4(), // generates a unique ID
	...entry, // spreads the rest of the data (name, type, amount, category, date)
}));
