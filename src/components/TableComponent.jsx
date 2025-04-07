import {
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import '../styles/table.css';

function TableComponent({ data = [] }) {
	const columns = [
		{ accessorKey: 'name', header: 'Name' },
		{ accessorKey: 'type', header: 'Type' },
		{
			accessorKey: 'amount',
			header: 'Amount',
			cell: (info) =>
				`$${Number(info.getValue()).toLocaleString(undefined, {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				})}`,
		},
		{ accessorKey: 'category', header: 'Category' },
		{ accessorKey: 'date', header: 'Date' },
	];

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
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
		<div className="table-container">
			<table className="table">
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id}>
									{flexRender(
										header.column.columnDef.header,
										header.getContext()
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
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>

				{/*<tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>*/}
			</table>
		</div>
	);
}

export default TableComponent;
