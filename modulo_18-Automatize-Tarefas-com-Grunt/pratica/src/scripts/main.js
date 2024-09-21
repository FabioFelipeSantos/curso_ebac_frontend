document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("name-age-form");
	let secondsIntervalID;
	let hourIntervalID;

	form.addEventListener("submit", function (event) {
		event.preventDefault();
		const name = event.target["nome"].value;
		const age = event.target["idade"].valueAsNumber;

		showHeaderWithDate();

		if (secondsIntervalID) clearInterval(secondsIntervalID);
		secondsIntervalID = showNameAndAge({ name, age }, secondsIntervalID);

		if (hourIntervalID) clearInterval(hourIntervalID);
		hourIntervalID = showHour(hourIntervalID);

		const messageContainer = document.getElementById("answer-container");

		if (!messageContainer.style.animationName) messageContainer.style.animationName = "messageAnim";

		event.target["nome"].value = "";
		event.target["idade"].value = "";
	});
});

function showHeaderWithDate() {
	const dateObj = getUTCDate();

	const timeElement = document.querySelector("#answer-container>h4>time");

	timeElement.setAttribute("datetime", [dateObj.year, dateObj.month, dateObj.dayNumber].join("-"));

	const umOrUma = dateObj.dayIndex === 0 || dateObj.dayIndex === 6 ? "um" : "uma";

	timeElement.children["date"].innerText = `Hoje é ${umOrUma} ${dateObj.dayOfTheWeek}${
		dateObj.dayIndex > 0 ? (dateObj.dayIndex < 6 ? "-feira" : "") : ""
	}, ${dateObj.dayNumber} de ${dateObj.monthOfTheYear} de ${dateObj.year}`;
}

function showHour(hourIntervalID) {
	hourIntervalID = setInterval(function () {
		const date = new Date();
		const time = {
			seconds: date.getSeconds() < 10 ? ["0", date.getSeconds()].join() : date.getSeconds(),
			minutes: date.getMinutes() < 10 ? ["0", date.getMinutes()].join("") : date.getMinutes(),
			hour: date.getHours(),
		};

		document.getElementById("hour").innerText = `, ${time.hour}:${time.minutes}:${time.seconds}.`;
	}, 1000);

	return hourIntervalID;
}

function getUTCDate() {
	const date = new Date();
	const year = date.getUTCFullYear();

	let month = date.getUTCMonth() + 1;
	const monthOfTheYear = getMonthBRLocale(month);
	month = month < 10 ? ["0", month].join("") : month;

	let dayNumber = date.getUTCDate();
	dayNumber = dayNumber < 10 ? ["0", dayNumber].join("") : dayNumber;

	const dayIndex = date.getDay();
	const dayOfTheWeek = getDayBRLocale(dayIndex);

	return {
		year,
		month,
		dayNumber,
		dayOfTheWeek,
		monthOfTheYear,
		dayIndex,
	};
}

function getMonthBRLocale(month) {
	switch (month) {
		case 1:
			return "Janeiro";
		case 2:
			return "Fevereiro";
		case 3:
			return "Março";
		case 4:
			return "Abril";
		case 5:
			return "Maio";
		case 6:
			return "Junho";
		case 7:
			return "Julho";
		case 8:
			return "Agosto";
		case 9:
			return "Setembro";
		case 10:
			return "Outubro";
		case 11:
			return "Novembro";
		case 12:
			return "Dezembro";
	}
}

function getDayBRLocale(day) {
	switch (day) {
		case 0:
			return "Domingo";
		case 1:
			return "Segunda";
		case 2:
			return "Terça";
		case 3:
			return "Quarta";
		case 4:
			return "Quinta";
		case 5:
			return "Sexta";
		case 6:
			return "Sábado";
	}
}

function showNameAndAge({ name, age }, secondsIntervalID) {
	document.getElementById("message-header").innerText = `Olá ${name}!`;
	const personInfo = document.getElementById("person-infos");
	personInfo.children["just-info"].innerText = age;

	let seconds = age * 365 * 24 * 60 * 60;
	personInfo.children["seconds-of-life"].innerText = formattingSecondsLived(seconds);

	secondsIntervalID = setInterval(function () {
		personInfo.children["seconds-of-life"].innerText = formattingSecondsLived(seconds++);
	}, 1000);

	return secondsIntervalID;
}

function formattingSecondsLived(seconds) {
	const secondsString = seconds.toString().split("").reverse();

	let i = 0;
	const arrayAuxToFinalString = [];
	const numberOfSubDivisionsOfSeconds = Math.floor(Math.log10(seconds) / 3);
	while (true) {
		if (i < numberOfSubDivisionsOfSeconds) {
			arrayAuxToFinalString.push(
				secondsString
					.slice(3 * i, 3 * (i + 1))
					.reverse()
					.join("")
			);
			arrayAuxToFinalString.push(".");
			i++;
		} else {
			if (3 * (i - 1) < secondsString.length) {
				arrayAuxToFinalString.push(secondsString.slice(3 * i).join(""));
			}
			break;
		}
	}

	return arrayAuxToFinalString.reverse().join("");
}
