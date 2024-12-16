import { specifyingADate, monthsOfTheYear } from "./variables.mjs";
import DateTool from "./DateTool.mjs";

document.addEventListener("DOMContentLoaded", function () {
	AOS.init();

	const dates = constructDatesObject(eventDay1, oneDayAfter(eventDay1));
	handleSetDates(dates);

	intervalControl = handleTimeCounter(dates);

	currentYearForFooter.textContent = `${today.getUTCFullYear()} `;

	dayForm.addEventListener("submit", function (e) {
		clearInterval(intervalControl);
		handleFormSubmit(e);
	});
});

function handleFormSubmit(e) {
	e.preventDefault();
	let datesAfterForm;

	const secondsToAdd = e.target["day"].valueAsNumber;
	if (secondsToAdd === 0) {
		datesAfterForm = constructDatesObject(today, oneDayAfter(today));
	} else {
		datesAfterForm = new Date(Date.now() + secondsToAdd * 1e3);
		datesAfterForm = constructDatesObject(datesAfterForm, oneDayAfter(datesAfterForm));
	}

	intervalControl = handleTimeCounter(datesAfterForm);
	e.target["day"].value = 0;
}

function handleTimeCounter(dates) {
	const eventFirstDay = new Date(...dates.day1);

	const secondsCount = setInterval(function () {
		const todayUpdated = new Date();
		const diffBetweenDates = eventFirstDay.getTime() - todayUpdated.getTime();

		if (diffBetweenDates < 0) {
			eventHasBegun.innerHTML = `
            <span class="tickets__regressive-count__left tickets__regressive-count__left--isBegun">
                O evento já começou. Aproveite seu show!
            </span>
            `;
			clearInterval(secondsCount);
		} else {
			const dateData = new DateTool(diffBetweenDates);
			eventHasBegun.innerHTML = `
            <span class="tickets__regressive-count__left">Faltam:</span>
			<span class="tickets__regressive-count__clock">
                ${dateData.days}d ${dateData.hours}h ${dateData.minutes}m ${dateData.seconds}s
            </span>
            `;
		}
	}, 1e3);

	return secondsCount;
}

function handleSetDates(dates) {
	day1.textContent = `${dates.day1[2]} de ${monthsOfTheYear[dates.day1[1]]} de ${dates.day1[0]}`;
	day1;
	day1.setAttribute("datetime", `${dates.day1[0]}-${dates.day1[1] + 1}-${dates.day1[2]}`);

	day2.textContent = `${dates.day2[2]} de ${monthsOfTheYear[dates.day2[1]]} de ${dates.day2[0]}`;

	day2.setAttribute("datetime", `${dates.day2[0]}-${dates.day2[1] + 1}-${dates.day2[2]}`);

	titleDay1.textContent = `
    ${dates.day1[2]} / 
    ${dates.day1[1] + 1 < 10 ? ["0", dates.day1[1] + 1].join("") : dates.day1[1] + 1} / 
    ${dates.day1[0]}`;

	titleDay2.textContent = `
    ${dates.day2[2]} / 
    ${dates.day2[1] + 1 < 10 ? ["0", dates.day2[1] + 1].join("") : dates.day1[1] + 1} / 
    ${dates.day2[0]}`;
}

function oneDayAfter(day) {
	return new Date(day.getTime() + 24 * 60 * 60 * 1e3);
}

function constructDatesObject(day1, day2) {
	return {
		day1: specifyingADate(day1),
		day2: specifyingADate(day2),
	};
}

const today = new Date();
const eventDay1 = new Date(today.getTime() + 6 * 60 * 1e3);
const day1 = document.getElementById("day-1");
const day2 = document.getElementById("day-2");
const titleDay1 = document.getElementById("title-day-1");
const titleDay2 = document.getElementById("title-day-2");
const regressiveCount = document.querySelector(".tickets__regressive-count__clock");
const eventHasBegun = document.querySelector(".tickets__regressive-count");
const currentYearForFooter = document.querySelector(".footer__current-year");
const dayForm = document.getElementById("date-form");
let intervalControl;
