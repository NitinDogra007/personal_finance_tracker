import React, { useState } from 'react';
import '../styles/form.css';

function FormComponent({ closeModal, addData }) {
	const [formData, setFormData] = useState({
		name: '',
		type: '',
		amount: '',
		category: '',
		date: '',
	});

	const [error, setError] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { name, type, amount, category, date } = formData;

		// Basic validation
		if (!name || !type || !amount || !category || !date) {
			setError('Please fill in all the fields and select valid options.');
			return;
		}

		if (isNaN(amount) || Number(amount) <= 0) {
			setError('Amount must be a positive number.');
			return;
		}

		addData({ ...formData, amount: parseFloat(amount) });

		// Reset form after submission
		setFormData({ name: '', type: '', amount: '', category: '', date: '' });
		closeModal();
	};

	return (
		<form onSubmit={handleSubmit}>
			<button
				type="button"
				className="close-btn"
				onClick={closeModal}
				aria-label="Close modal"
			>
				&times;
			</button>
			<label htmlFor="name">Transaction Name:</label>
			<input
				type="text"
				name="name"
				id="name"
				placeholder="Name of Transaction"
				aria-label="Transaction Name"
				value={formData.name}
				onChange={handleChange}
				required
			/>
			<label htmlFor="type">Transaction Type:</label>
			<select
				name="type"
				id="type"
				aria-label="Transaction Type"
				value={formData.type}
				onChange={handleChange}
				required
			>
				<option disabled selected value="">
					-- select an option --
				</option>
				<option value="Income">Income</option>
				<option value="Expense">Expense</option>
			</select>
			<label htmlFor="amount">Amount:</label>
			<input
				type="text"
				name="amount"
				id="amount"
				placeholder="e.g. 250.00"
				value={formData.amount}
				onChange={handleChange}
				required
			/>
			<label htmlFor="category">Select Category:</label>
			<select
				name="category"
				id="category"
				aria-label="Category"
				value={formData.category}
				onChange={handleChange}
				required
			>
				<option disabled selected value="">
					-- select an option --
				</option>
				<option value="Food">Food</option>
				<option value="Transport">Transport</option>
				<option value="Home">Home</option>
				<option value="Job">Job</option>
			</select>
			<label htmlFor="date">Select Date:</label>
			<input
				name="date"
				id="date"
				type="date"
				value={formData.date}
				onChange={handleChange}
				required
			/>
			<button type="submit" className="submit-btn">
				Submit
			</button>
			{error && <p className="error-message">{error}</p>}{' '}
			{/* Show error message if any */}
		</form>
	);
}

export default FormComponent;
