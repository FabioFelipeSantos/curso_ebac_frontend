const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$("#table-metal-themes").DataTable({
	searching: false,
	layout: {
		bottomStart: null,
		bottomEnd: null
	}
});
