import {
	flexRender,
	getCoreRowModel,
	getPaginationRowModel, // Add pagination model hook
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import '../styles/table.css';

function TableComponent({ data }) {
	// Set default sorting by 'date' column in descending order
	const [sorting, setSorting] = useState([
		{
			id: 'date', // column accessor key
			desc: true, // true means descending order
		},
	]);

	// Pagination state: track current page and page size
	const [pageIndex, setPageIndex] = useState(0);
	const [pageSize, setPageSize] = useState(4); // Set max entries per page to 4

	// Add later
	// const [columnFilters, setColumnFilters] = useState([]);

	// Function to sort data manually considering the 'timestamp' when 'date' is the same
	const sortData = (data) => {
		return data.sort((a, b) => {
			// First, sort by 'date' in descending order
			const dateComparison = new Date(b.date) - new Date(a.date);
			if (dateComparison !== 0) {
				return dateComparison;
			}

			// If 'date' is the same, compare by 'timestamp' in descending order (newest first)
			return b.timestamp - a.timestamp;
		});
	};

	// Modify your table configuration to use the sorted data
	const sortedData = sortData(data);

	const columns = [
		{
			accessorKey: 'name',
			header: 'Name',
			enableSorting: false,
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
		},
		{
			accessorKey: 'date',
			header: 'Date',
			enableSorting: true,
		},
	];

	const table = useReactTable({
		data: sortedData,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		// getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting,
			pagination: {
				pageIndex,
				pageSize,
			},
		},
		onSortingChange: setSorting,
		onPaginationChange: (updater) => {
			if (typeof updater === 'function') {
				const newState = updater({ pageIndex, pageSize });
				setPageIndex(newState.pageIndex);
				setPageSize(newState.pageSize);
			} else {
				setPageIndex(updater.pageIndex);
				setPageSize(updater.pageSize);
			}
		},
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
				<div className="table-wrapper">
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
														? ' 🔼'
														: header.column.getIsSorted() === 'desc'
														? ' 🔽'
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
					{/* Pagination controls at the top */}
					<div className="pagination">
						<button
							onClick={() => setPageIndex((old) => Math.max(old - 1, 0))}
							disabled={pageIndex === 0}
						>
							Previous
						</button>
						<span>
							Page {pageIndex + 1} of {table.getPageCount()}
						</span>
						<button
							onClick={() =>
								setPageIndex((old) =>
									Math.min(old + 1, table.getPageCount() - 1)
								)
							}
							disabled={pageIndex === table.getPageCount() - 1}
						>
							Next
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default TableComponent;
