const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const date = new Date();

$("#footer-date-time").attr(
	"datetime",
	[date.getUTCFullYear(), date.getUTCMonth()+1 < 10 ? `0${date.getUTCMonth()+1}` : date.getUTCMonth() + 1, date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate()].join("-")
);

$("#footer-date-time").html(date.getUTCFullYear());
