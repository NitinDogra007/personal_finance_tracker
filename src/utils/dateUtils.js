export function formatDate(date) {
	return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(
		new Date(date)
	);
}
