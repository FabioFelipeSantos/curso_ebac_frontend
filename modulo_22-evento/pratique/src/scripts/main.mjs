import { dates, monthsOfTheYear } from "./variables.mjs";
import DateTool from "./DateTool.mjs";

document.addEventListener("DOMContentLoaded", function () {
	AOS.init();

	day1.textContent = `${dates.day1[2]} de ${monthsOfTheYear[dates.day1[1]]} de ${dates.day1[0]}`;

	day1.setAttribute("datetime", `${dates.day1[0]}-${dates.day1[1] + 1}-${dates.day1[2]}`);

	day2.textContent = `${dates.day2[2]} de ${monthsOfTheYear[dates.day2[1]]} de ${dates.day2[0]}`;

	day2.setAttribute("datetime", `${dates.day2[0]}-${dates.day2[1] + 1}-${dates.day2[2]}`);

	titleDay1.textContent = `
    ${dates.day1[2]} / 
    ${dates.day1[1] + 1 < 10 ? ["0", dates.day1[1] + 1].join("") : ""} / 
    ${dates.day1[0]}`;

	titleDay2.textContent = `
    ${dates.day2[2]} / 
    ${dates.day2[1] + 1 < 10 ? ["0", dates.day2[1] + 1].join("") : ""} / 
    ${dates.day2[0]}`;

	const eventFirstDay = new Date(...dates.day1);

	const secondsCount = setInterval(function () {
		const today = new Date();
		const diffBetweenDates = eventFirstDay.getTime() - today.getTime();

		if (diffBetweenDates < 0) {
			eventHasBegun.innerHTML = `
            <span class="tickets__regressive-count__left tickets__regressive-count__left--isBegun">
                O evento já começou. Aproveite seu show!
            </span>
            `;
			clearInterval(secondsCount);
		} else {
			const dateData = new DateTool(diffBetweenDates);
			regressiveCount.textContent = `
            ${dateData.days}d ${dateData.hours}h ${dateData.minutes}m ${dateData.seconds}s
            `;
		}
	}, 1e3);
});

const day1 = document.getElementById("day-1");
const day2 = document.getElementById("day-2");
const titleDay1 = document.getElementById("title-day-1");
const titleDay2 = document.getElementById("title-day-2");
const regressiveCount = document.querySelector(".tickets__regressive-count__clock");
const eventHasBegun = document.querySelector(".tickets__regressive-count");
