import CountingIntervalDates from "./FormattingDate";

AOS.init();
const eventDate = new Date(2024, 11, 21, 14, 0, 0);

const countingHours = setInterval(function () {
	const now = new Date();
	const diffBetweenDates = new Date(eventDate.getTime() - now.getTime());
	const dateFormatted = new CountingIntervalDates(diffBetweenDates);

	if (diffBetweenDates > 0) {
		contador.textContent = `${dateFormatted.days}d ${dateFormatted.hours}h ${dateFormatted.minutes}m ${dateFormatted.seconds}s`;
	} else {
		clearInterval(countingHours);
		contador.parentNode.innerHTML = `O evento já começou.`;
	}
}, 1000);

let contador = document.getElementById("contador");
