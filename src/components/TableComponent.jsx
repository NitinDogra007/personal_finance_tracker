import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import '../styles/table.css';

function TableComponent({ data = [] }) {
	const [sorting, setSorting] = useState([]);

	const columns = [
		{
			accessorKey: 'name',
			header: 'Name',
			enableSorting: false,
			enableGlobalFilter: false, // disable global filtering for this column
		},
		{
			accessorKey: 'type',
			header: 'Type',
			enableSorting: false,
			enableColumnFilter: true,
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			enableSorting: true,
			enableGlobalFilter: false, // disable global filtering for this column
			cell: (info) =>
				`$${Number(info.getValue()).toLocaleString(undefined, {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				})}`,
		},
		{
			accessorKey: 'category',
			header: 'Category',
			enableSorting: false,
			enableColumnFilter: true,
		},
		{
			accessorKey: 'date',
			header: 'Date',
			enableSorting: true,
			enableGlobalFilter: false, // disable global filtering for this column
		},
	];

	const table = useReactTable({
		data: data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		// getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting,
			// globalFilter,
			// columnFilters: [
			// 	{ id: 'type', value: typeFilter },
			// 	{ id: 'category', value: categoryFilter },
			// ],
		},
		onSortingChange: setSorting,
		// onGlobalFilterChange: setGlobalFilter,
		// onColumnFiltersChange: (filters) => {
		// 	const type = filters.find((item) => item.id === 'type')?.value || '';
		// 	const category =
		// 		filters.find((item) => item.id === 'category')?.value || '';
		// 	setTypeFilter(type);
		// 	setCategoryFilter(category);
		// },
	});

	// Check if data is empty or undefined
	if (data.length === 0) {
		return <p>No data available</p>;
	}

	const getRowClass = (columnId, type) => {
		if (columnId === 'type') {
			return type?.toLowerCase() === 'income' ? 'type-income' : 'type-expense';
		}
		if (columnId === 'amount') {
			return type?.toLowerCase() === 'income'
				? 'amount-income'
				: 'amount-expense';
		}
		return '';
	};

	return (
		<>
			<div className="table-container">
				<table className="table">
					<thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th
										key={header.id}
										onClick={
											header.column.getCanSort()
												? header.column.getToggleSortingHandler()
												: undefined
										}
										style={{
											cursor: header.column.getCanSort()
												? 'pointer'
												: 'default',
										}}
									>
										{flexRender(
											header.column.columnDef.header,
											header.getContext()
										)}
										{header.column.getCanSort() && (
											<span>
												{header.column.getIsSorted() === 'asc'
													? '🔼'
													: header.column.getIsSorted() === 'desc'
													? '🔽'
													: ' 🔄'}
											</span>
										)}
									</th>
								))}
							</tr>
						))}
					</thead>

					<tbody>
						{table.getRowModel().rows.map((row) => (
							<tr key={row.id}>
								{row.getVisibleCells().map((cell) => {
									// Apply the class for "type" and "amount" columns only
									const className = getRowClass(
										cell.column.id,
										row.original.type
									);
									return (
										<td key={cell.id} className={className}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</td>
									);
								})}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default TableComponent;
